namespace EnglishApp.Core.Abstractions.Lesson;
public interface ILessonRepository
{
    IQueryable<Models.Lesson> GetLessonsQueryable();
    Task<List<Models.Lesson>> GetLessonsAsync(CancellationToken cancellationToken);

    Task<List<Models.Lesson>> GetUserLessonsAsync(
        Guid userId,
        CancellationToken cancellationToken);

    Task<Models.Lesson?> GetUserLessonByLessonIdAsync(
        Guid lessonId,
        CancellationToken cancellationToken);

    Task<Guid> CreateLessonAsync(
        Models.Lesson lesson,
        CancellationToken cancellationToken);

    Task<Guid> UpdateLessonAsync(
        Models.Lesson lesson,
        CancellationToken cancellationToken);

    Task<Guid> DeleteLessonAsync(
        Guid id,
        CancellationToken cancellationToken);
}