using System.Diagnostics;
using EnglishApp.Core.Abstractions.Lesson;
using EnglishApp.Core.Models;
using EnglishApp.Core.Params;
using EnglishApp.DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;

namespace EnglishStorageApplication.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BenchmarkController : Controller
{
    private readonly ILessonService _lessonService;
    private readonly IMemoryCache _cache;
    private readonly ApplicationDbContext _context;
    
    public BenchmarkController(
        ILessonService lessonService,
        IMemoryCache cache,
        ApplicationDbContext context)
    {
        _lessonService = lessonService;
        _cache = cache;
        _context = context;
    }
    
    [HttpGet("benchmark/cache")]
    public async Task<IActionResult> BenchmarkCacheTest(CancellationToken cancellationToken)
    {
        var pageParams = new PageParams { Page = 1, PageSize = 10 };

        // Warm-up: один прогон, чтобы EF подгрузил контекст и план
        await _lessonService.GetLessonsWithPageParameters(pageParams, cancellationToken);

        var stopwatch = new Stopwatch();

        // 🔹 1. Без кэша
        var timesNoCache = new List<long>();
        for (int i = 0; i < 10; i++)
        {
            stopwatch.Restart();
            await _lessonService.GetLessonsWithPageParameters(pageParams, cancellationToken);
            stopwatch.Stop();
            timesNoCache.Add(stopwatch.ElapsedMilliseconds);
        }

        // 🔹 2. С кэшем
        var timesCache = new List<long>();
        for (int i = 0; i < 10; i++)
        {
            stopwatch.Restart();
            await _cache.GetOrCreateAsync(
                "lessons:page_1:size_10",
                async _ => await _lessonService.GetLessonsWithPageParameters(pageParams, cancellationToken),
                new MemoryCacheEntryOptions { AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(10) }
            );
            stopwatch.Stop();
            timesCache.Add(stopwatch.ElapsedMilliseconds);
        }

        var result = new
        {
            AvgWithoutCache = timesNoCache.Average(),
            AvgWithCache = timesCache.Average(),
            RawWithoutCache = timesNoCache,
            RawWithCache = timesCache
        };

        return Ok(result);
    }
    
    [HttpGet("nocache")]
    public async Task<IActionResult> GetLessonsWithoutCache(CancellationToken cancellationToken)
    {
        var pageParams = new PageParams { Page = 1, PageSize = 10 };

        var stopwatch = new Stopwatch();
        stopwatch.Start();

        var (lessons, totalCount) = await _lessonService.GetLessonsWithPageParameters(pageParams, cancellationToken);

        stopwatch.Stop();

        return Ok(new
        {
            Source = "Database",
            ElapsedMs = stopwatch.ElapsedMilliseconds,
            Count = lessons.Count,
            TotalCount = totalCount
        });
    }
    
    [HttpGet("cache")]
    public async Task<IActionResult> GetLessonsWithCache(CancellationToken cancellationToken)
    {
        var pageParams = new PageParams { Page = 1, PageSize = 10 };
        var cacheKey = "lessons:page_1:size_10";

        var stopwatch = new Stopwatch();
        stopwatch.Start();

        var (lessons, totalCount) = await _cache.GetOrCreateAsync(
            cacheKey,
            async _ =>
            {
                var (data, count) = await _lessonService.GetLessonsWithPageParameters(pageParams, cancellationToken);
                return (data, count);
            },
            new MemoryCacheEntryOptions
            {
                AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(10)
            });

        stopwatch.Stop();

        return Ok(new
        {
            Source = "Cache",
            ElapsedMs = stopwatch.ElapsedMilliseconds,
            Count = lessons.Count,
            TotalCount = totalCount
        });
    }
    
    [HttpPost("seed-lessons")]
    public async Task<IActionResult> SeedLessons(CancellationToken cancellationToken)
    {
        var random = new Random();
        var lessons = new List<Lesson>();

        for (int i = 0; i < 10000; i++)
        {
            lessons.Add(new Lesson
            {
                Id = Guid.NewGuid(),
                UserId = Guid.NewGuid(),
                Title = $"Lesson {i + 1}",
                WatchCount = random.Next(0, 5000),
                CreatedDate = DateTime.UtcNow.AddDays(-random.Next(0, 365))
            });
        }

        await _context.Lessons.AddRangeAsync(lessons, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);

        return Ok($"Inserted {lessons.Count} lessons");
    }

    [HttpDelete("seed-lessons")]
    public async Task<IActionResult> DeleteSeededLessons(CancellationToken cancellationToken)
    {
        var seededLessons = await _context.Lessons
            .Where(l => l.Title.StartsWith("Lesson "))
            .ToListAsync(cancellationToken);

        _context.Lessons.RemoveRange(seededLessons);
        await _context.SaveChangesAsync(cancellationToken);

        return Ok($"Deleted {seededLessons.Count} seeded lessons");
    }
}