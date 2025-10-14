namespace EnglishApp.Core.Abstractions.LessonImage;

public interface ILessonsImagesRepository
{
    Task<List<Models.LessonImage>> GetImagesAsync(CancellationToken cancellationToken);

    Task<List<Models.LessonImage>> GetLessonImagesAsync(
        Guid lessonId,
        CancellationToken cancellationToken);

    Task<Models.LessonImage> CreateLessonImageAsync(
        Models.LessonImage lessonImage,
        CancellationToken cancellationToken);

    Task<Guid> DeleteLessonImageAsync(
        Guid id,
        CancellationToken cancellationToken);
}