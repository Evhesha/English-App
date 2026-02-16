using EnglishApp.Core.Abstractions.LessonImage;
using EnglishApp.Core.Exceptions.LessonImageExceptions;
using EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace EnglishApp.DataAccess.Repositories;

public class LessonsImagesRepository : ILessonsImagesRepository
{
    private readonly ApplicationDbContext _context;

    public LessonsImagesRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<LessonImage>> GetImagesAsync(CancellationToken cancellationToken)
    {
        return await _context.LessonImages
            .AsNoTracking()
            .ToListAsync(cancellationToken);
    }

    public async Task<List<LessonImage>> GetLessonImagesAsync(
        Guid lessonId,
        CancellationToken cancellationToken)
    {
        return await _context.LessonImages
            .AsNoTracking()
            .Where(l => l.LessonId == lessonId)
            .ToListAsync(cancellationToken);
    }

    public async Task<LessonImage> CreateLessonImageAsync(
        LessonImage lessonImage,
        CancellationToken cancellationToken)
    {
        _context.LessonImages.Add(lessonImage);
        await _context.SaveChangesAsync(cancellationToken);
        
        return lessonImage;
    }

    public async Task<Guid> DeleteLessonImageAsync(
        Guid id,
        CancellationToken cancellationToken)
    {
        var lessonImageEntity = await _context.LessonImages
            .AsNoTracking()
            .FirstOrDefaultAsync(l => l.Id == id, cancellationToken);

        if (lessonImageEntity == null)
        {
            throw new LessonImageWasntFoundException("The image wasn't found");
        }

        _context.LessonImages.Remove(lessonImageEntity);
        await _context.SaveChangesAsync(cancellationToken);

        return id;
    }
}