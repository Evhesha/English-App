namespace EnglishApp.Core.Abstractions.LessonImage;

public interface ILessonImageService
{
    Task<List<Models.LessonImage>> GetImages(CancellationToken cancellationToken);

    Task<List<Models.LessonImage>> GetLessonImages(
        Guid lessonId,
        CancellationToken cancellationToken);

    Task<Models.LessonImage> CreateLessonImage(
        Models.LessonImage lessonImage,
        CancellationToken cancellationToken);

    Task<Guid> DeleteLessonImage(Guid id, CancellationToken cancellationToken);
}