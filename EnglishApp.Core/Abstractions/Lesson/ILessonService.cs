using EnglishApp.Core.Params;

namespace EnglishApp.Core.Abstractions.Lesson;

public interface ILessonService
{
    Task<List<Models.Lesson>> GetLessons(CancellationToken cancellationToken);
    Task<List<Models.Lesson>> GetUserLessons(Guid userId, CancellationToken cancellationToken);
    Task<List<Models.Lesson>> GetLessonsWithParameters(
        LessonFilter lessonFilter,
        SortParams sortParams,
        PageParams pageParams,
        CancellationToken cancellationToken);
    Task<Models.Lesson?> GetUserLessonByLessonId(Guid lessonId, CancellationToken cancellationToken);
    Task<Guid> CreateLesson(Models.Lesson lesson, CancellationToken cancellationToken);
    Task<Guid> UpdateLesson(Models.Lesson lesson, CancellationToken cancellationToken);
    Task<Guid> DeleteLesson(Guid id, CancellationToken cancellationToken);
}