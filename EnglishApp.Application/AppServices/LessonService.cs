using EnglishApp.Core.Abstractions.Lesson;
using EnglishApp.Core.Models;

namespace EnglishApp.Application.AppServices
{
    public class LessonService : ILessonService
    {
        private readonly ILessonRepository _lessonRepository;

        public LessonService(ILessonRepository lessonRepository)
        {
            _lessonRepository = lessonRepository;
        }

        public async Task<List<Lesson>> GetLessons(CancellationToken cancellationToken)
        {
            return await _lessonRepository.GetLessonsAsync(cancellationToken);
        }

        public async Task<List<Lesson>> GetUserLessons(Guid userId, CancellationToken cancellationToken)
        {
            return await _lessonRepository.GetUserLessonsAsync(userId, cancellationToken);
        }

        public async Task<Guid> CreateLesson(Lesson lesson, CancellationToken cancellationToken)
        {
            return await _lessonRepository.CreateLessonAsync(lesson, cancellationToken);
        }

        public async Task<Guid> UpdateLesson(Lesson lesson, CancellationToken cancellationToken)
        {
            return await _lessonRepository.UpdateLessonAsync(lesson, cancellationToken);
        }

        public async Task<Guid> DeleteLesson(Guid id, CancellationToken cancellationToken)
        {
            return await _lessonRepository.DeleteLessonAsync(id, cancellationToken);
        }
    }
}