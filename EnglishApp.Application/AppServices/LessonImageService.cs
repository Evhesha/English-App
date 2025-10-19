using EnglishApp.Core.Abstractions.LessonImage;
using EnglishApp.Core.Models;

namespace EnglishApp.Application.AppServices;

public class LessonImageService : ILessonImageService
{
    private readonly ILessonsImagesRepository _lessonsImagesRepository;

    public LessonImageService(ILessonsImagesRepository lessonsImagesRepository)
    {
        _lessonsImagesRepository = lessonsImagesRepository;
    }

    public async Task<List<LessonImage>> GetImages(CancellationToken cancellationToken)
    {
        return await _lessonsImagesRepository.GetImagesAsync(cancellationToken);
    }

    public async Task<List<LessonImage>> GetLessonImages(
        Guid lessonId,
        CancellationToken cancellationToken)
    {
        return await _lessonsImagesRepository.GetLessonImagesAsync(lessonId, cancellationToken);
    }

    public async Task<LessonImage> CreateLessonImage(
        LessonImage lessonImage,
        CancellationToken cancellationToken)
    {
        return await _lessonsImagesRepository.CreateLessonImageAsync(lessonImage, cancellationToken);
    }

    public async Task<Guid> DeleteLessonImage(Guid id, CancellationToken cancellationToken)
    {
        return await _lessonsImagesRepository.DeleteLessonImageAsync(id, cancellationToken);
    }
}