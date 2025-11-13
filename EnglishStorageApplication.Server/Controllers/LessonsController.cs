using EnglishApp.Application.DTOs.LessonDTOs;
using EnglishApp.Core.Abstractions.Lesson;
using EnglishApp.Core.Exceptions.LessonExceptions;
using EnglishApp.Core.Models;
using EnglishApp.Core.Params;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Hybrid;

namespace EnglishStorageApplication.Server.Controllers
{
    public class PagedLessonsResponse
    {
        public List<ListLessonsDto> Lessons { get; set; } = new();
        public int TotalCount { get; set; }
    }
    
    [Route("api/[controller]")]
    [ApiController]
    public class LessonsController : ControllerBase
    {
        private readonly ILessonService _lessonService;
        private readonly HybridCache _cache;

        public LessonsController(
            ILessonService lessonService,
            HybridCache cache)
        {
            _lessonService = lessonService;
            _cache = cache;
        }

        [HttpGet]
        public async Task<ActionResult<List<LessonDto>>> GetLessons(CancellationToken cancellationToken)
        {
            var lessons = await _lessonService.GetLessons(cancellationToken);

            var listLessonsDto = lessons.Select(lesson => new LessonDto
            {
                Id = lesson.Id,
                UserId = lesson.UserId,
                Title = lesson.Title,
                Text = lesson.Text,
                IsPublic = lesson.IsPublic,
                WatchCount = lesson.WatchCount,
                CreatedDate = lesson.CreatedDate
            });
            
            return Ok(listLessonsDto);
        }

        [HttpGet("lessons/{userId:guid}")]
        public async Task<ActionResult<List<LessonDto>>> GetUserLessons(
            Guid userId,
            CancellationToken cancellationToken)
        {
            var lessons = await _lessonService.GetUserLessons(userId, cancellationToken);
            return Ok(lessons);
        }
        
        [HttpGet("lessons/params/cache")]
        public async Task<ActionResult<PagedLessonsResponse>> GetLessonsWithParamsFromCache(
            [FromQuery] PageParams pageParams,
            CancellationToken cancellationToken)
        {
            var fixedPageParams = new PageParams { Page = 1, PageSize = 10 };
    
            return await _cache.GetOrCreateAsync(
                "lessons:page_1:size_10",
                async cancel => 
                {
                    var (lessons, totalCount) = await _lessonService.GetLessonsWithPageParameters(
                        fixedPageParams,
                        cancellationToken);
                    
                    var listLessonsDto = lessons.Select(lesson => new ListLessonsDto()
                    {
                        Id = lesson.Id,
                        UserId = lesson.UserId,
                        Title = lesson.Title,
                        WatchCount = lesson.WatchCount,
                        CreatedDate = lesson.CreatedDate
                    }).ToList();
                
                    return new PagedLessonsResponse
                    {
                        Lessons = listLessonsDto,
                        TotalCount = totalCount
                    };
                },
                new HybridCacheEntryOptions { Expiration = TimeSpan.FromMinutes(10) }
            );
        }

        [HttpGet("lessons/params")]
        public async Task<ActionResult<PagedLessonsResponse>> GetLessonsWithParams(
            [FromQuery] LessonFilter lessonFilter,
            [FromQuery] SortParams sortParams,
            [FromQuery] PageParams pageParams,
            CancellationToken cancellationToken)
        {
            var (lessons, totalCount) = await _lessonService.GetLessonsWithParameters(
                lessonFilter,
                sortParams,
                pageParams,
                cancellationToken);
    
            var listLessonsDto = lessons.Select(lesson => new ListLessonsDto()
            {
                Id = lesson.Id,
                UserId = lesson.UserId,
                Title = lesson.Title,
                WatchCount = lesson.WatchCount,
                CreatedDate = lesson.CreatedDate
            }).ToList();
            
            var result = new PagedLessonsResponse
            {
                Lessons = listLessonsDto,
                TotalCount = totalCount
            };
    
            return Ok(result);
        }
        
        [HttpGet("lesson/{lessonId:guid}")]
        public async Task<ActionResult<List<LessonDto>>> GetUserLessonByLessonId(
            Guid lessonId,
            CancellationToken cancellationToken)
        {
            var lessons = await _lessonService.GetUserLessonByLessonId(lessonId, cancellationToken);
            return Ok(lessons);
        }

        [HttpPost]
        public async Task<ActionResult<Guid>> CreateLesson(
            [FromBody]CreateLessonDto createLessonDto,
            CancellationToken cancellationToken)
        {
            var lesson = new Lesson
            {
                Id =  Guid.NewGuid(),
                CreatedDate = DateTime.UtcNow,
                UserId = createLessonDto.UserId,
                Title = createLessonDto.Title,
                Text = createLessonDto.Text,
                IsPublic = createLessonDto.IsPublic
            };

            await _lessonService.CreateLesson(lesson, cancellationToken);

            return Ok(lesson.Id);
        }

        [HttpPut("{id:guid}")]
        public async Task<ActionResult<Guid>> UpdateLesson(
            Guid id,
            [FromBody]UpdateLessonDto updateLessonDto,
             CancellationToken cancellationToken)
        {
            var lesson = new Lesson
            {
                Id =  id,
                Title = updateLessonDto.Title,
                Text = updateLessonDto.Text,
                IsPublic = updateLessonDto.IsPublic
            };
            
            var articleId = await _lessonService.UpdateLesson(lesson, cancellationToken); 
            return Ok(articleId);
        }

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<Guid>> DeleteLesson(Guid id, CancellationToken cancellationToken)
        {
            try
            {
                return Ok(await _lessonService.DeleteLesson(id, cancellationToken));
            }
            catch (NotFoundLessonException ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}