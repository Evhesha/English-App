using EnglishApp.Core.Abstractions.Lesson;
using EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace EnglishApp.DataAccess.Repositories
{
    public class LessonRepository : ILessonRepository
    {
        private readonly ApplicationDbContext _context;

        public LessonRepository(ApplicationDbContext applicationDbContext)
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
            var lesson = await _context.Lessons
                .AsNoTracking()
                .FirstOrDefaultAsync(l => l.Id == lessonId, cancellationToken);

            if (lesson != null)
            {
                await _context.Lessons
                    .Where(l => l.Id == lessonId)
                    .ExecuteUpdateAsync(setters => 
                            setters.SetProperty(l => l.WatchCount, l => l.WatchCount + 1),
                        cancellationToken);
                
                lesson.WatchCount++;
            }

            return lesson;
        }

        public async Task<Guid> CreateLessonAsync(
            Lesson lesson,
            CancellationToken cancellationToken)
        {
            var atricleEntity = new Lesson
            {
                Id = lesson.Id,
                UserId = lesson.UserId,
                Title = lesson.Title,
                Text = lesson.Text,
                Images = lesson.Images,
                CreatedDate = lesson.CreatedDate
            };

            await _context.Lessons.AddAsync(atricleEntity, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);

            return atricleEntity.Id;
        }

        public async Task<Guid> UpdateLessonAsync(
            Lesson lesson,
            CancellationToken cancellationToken)
        {
            var articleEntity = await _context.Lessons.FindAsync(lesson.Id);
            if (articleEntity != null)
            {
                articleEntity.Title = lesson.Title;
                articleEntity.Text = lesson.Text;
                await _context.SaveChangesAsync(cancellationToken);
            }

            return articleEntity.Id;
        }

        public async Task<Guid> DeleteLessonAsync(
            Guid id,
            CancellationToken cancellationToken)
        {
            var article = await _context.Lessons
                .FirstOrDefaultAsync(a => a.Id == id, cancellationToken);

            if (article != null)
            {
                _context.Lessons.Remove(article);
                await _context.SaveChangesAsync(cancellationToken);
            }

            return id;
        }
    }
}