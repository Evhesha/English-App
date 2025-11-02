using EnglishApp.Core.Abstractions.Lesson;
using EnglishApp.Core.Exceptions.LessonExceptions;
using EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace EnglishApp.DataAccess.Repositories
{
    public class LessonsRepository : ILessonRepository
    {
        private readonly ApplicationDbContext _context;

        public LessonsRepository(ApplicationDbContext applicationDbContext)
        {
            _context = applicationDbContext;
        }

        public IQueryable<Lesson> GetLessonsQueryable()
        {
            return _context.Lessons.AsQueryable();
        }

        public async Task<List<Lesson>> GetLessonsAsync(CancellationToken cancellationToken)
        {
             return await _context.Lessons
                .AsNoTracking()
                .ToListAsync(cancellationToken);
        }

        public async Task<List<Lesson>> GetUserLessonsAsync(
            Guid userId,
            CancellationToken cancellationToken)
        {
            return await _context.Lessons
                .AsNoTracking()
                .Where(x => x.UserId == userId)
                .ToListAsync(cancellationToken);
        }
        
        public async Task<Lesson?> GetUserLessonByLessonIdAsync(
            Guid lessonId,
            CancellationToken cancellationToken)
        {
            var lessonEntity = await _context.Lessons
                .AsNoTracking()
                .FirstOrDefaultAsync(l => l.Id == lessonId, cancellationToken);

            if (lessonEntity == null)
            {
                throw new NotFoundLessonException("There is no lesson with such id");
            }
            
            await _context.Lessons
                .Where(l => l.Id == lessonId)
                .ExecuteUpdateAsync(setters => 
                    setters.SetProperty(l => l.WatchCount, l => l.WatchCount + 1),
                cancellationToken);
            
            lessonEntity.WatchCount++;

            return lessonEntity;
        }

        public async Task<Guid> CreateLessonAsync(
            Lesson lesson,
            CancellationToken cancellationToken)
        {
            var lessonEntity = new Lesson
            {
                Id = lesson.Id,
                UserId = lesson.UserId,
                Title = lesson.Title,
                Text = lesson.Text,
                IsPublic = lesson.IsPublic,
                Images = lesson.Images,
                CreatedDate = lesson.CreatedDate
            };

            await _context.Lessons.AddAsync(lessonEntity, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);

            return lessonEntity.Id;
        }

        public async Task<Guid> UpdateLessonAsync(
            Lesson lesson,
            CancellationToken cancellationToken)
        {
            var lessonEntity = await _context.Lessons.FindAsync(lesson.Id);
            
            if (lessonEntity == null)
            {
                throw new NotFoundLessonException("There is no lesson with such id");
            }
            
            lessonEntity.Title = lesson.Title;
            lessonEntity.Text = lesson.Text;
            lessonEntity.IsPublic = lesson.IsPublic;
            await _context.SaveChangesAsync(cancellationToken);

            return lessonEntity.Id;
        }

        public async Task<Guid> DeleteLessonAsync(
            Guid id,
            CancellationToken cancellationToken)
        {
            var lessonEntity = await _context.Lessons
                .FirstOrDefaultAsync(a => a.Id == id, cancellationToken);

            if (lessonEntity == null)
            {
                throw new NotFoundLessonException("There is no lesson with a such id");
            }
            
            _context.Lessons.Remove(lessonEntity);
            await _context.SaveChangesAsync(cancellationToken);

            return id;
        }
    }
}