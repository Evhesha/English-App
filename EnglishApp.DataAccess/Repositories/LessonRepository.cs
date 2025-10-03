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

        public async Task<List<Lesson>> GetLessonsAsync(CancellationToken cancellationToken)
        {
             return await _context.Articles
                .AsNoTracking()
                .ToListAsync(cancellationToken);
        }

        public async Task<List<Lesson>> GetUserLessonsAsync(
            Guid userId,
            CancellationToken cancellationToken)
        {
            return await _context.Articles
                .AsNoTracking()
                .Where(x => x.UserId == userId)
                .ToListAsync(cancellationToken);
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
                Images = lesson.Images
            };

            await _context.Articles.AddAsync(atricleEntity, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);

            return atricleEntity.Id;
        }

        public async Task<Guid> UpdateLessonAsync(
            Lesson lesson,
            CancellationToken cancellationToken)
        {
            var articleEntity = await _context.Articles.FindAsync(lesson.Id);
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
            var article = await _context.Articles
                .FirstOrDefaultAsync(a => a.Id == id, cancellationToken);

            if (article != null)
            {
                _context.Articles.Remove(article);
                await _context.SaveChangesAsync(cancellationToken);
            }

            return id;
        }
    }
}