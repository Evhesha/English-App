namespace EnglishApp.Core.Abstractions.Lesson;

public interface ILessonService
{
    Task<List<Models.Lesson>> GetLessons(CancellationToken cancellationToken);
    Task<List<Models.Lesson>> GetUserLessons(Guid userId, CancellationToken cancellationToken);
    Task<Guid> CreateLesson(Models.Lesson lesson, CancellationToken cancellationToken);
    Task<Guid> UpdateLesson(Models.Lesson lesson, CancellationToken cancellationToken);
    Task<Guid> DeleteLesson(Guid id, CancellationToken cancellationToken);
}