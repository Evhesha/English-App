using EnglishApp.Core.Abstractions.Article;
using EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace EnglishApp.DataAccess.Repositories
{
    public class ArticleRepository : IArticleRepository
    {
        private readonly ApplicationDbContext _context;

        public ArticleRepository(ApplicationDbContext applicationDbContext)
        {
            _context = applicationDbContext;
        }

        public async Task<List<Article>> GetArticlesAsync(CancellationToken cancellationToken)
        {
             return await _context.Articles
                .AsNoTracking()
                .ToListAsync(cancellationToken);
        }

        public async Task<List<Article>> GetUserArticlesAsync(
            Guid userId,
            CancellationToken cancellationToken)
        {
            return await _context.Articles
                .AsNoTracking()
                .Where(x => x.UserId == userId)
                .ToListAsync(cancellationToken);
        }

        public async Task<Guid> CreateArticleAsync(
            Article article,
            CancellationToken cancellationToken)
        {
            var atricleEntity = new Article
            {
                Id = article.Id,
                UserId = article.UserId,
                Title = article.Title,
                Text = article.Text,
                Images = article.Images
            };

            await _context.Articles.AddAsync(atricleEntity, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);

            return atricleEntity.Id;
        }

        public async Task<Guid> UpdateArticleAsync(
            Article article,
            CancellationToken cancellationToken)
        {
            var articleEntity = await _context.Articles.FindAsync(article.Id);
            if (articleEntity != null)
            {
                articleEntity.Title = article.Title;
                articleEntity.Text = article.Text;
                await _context.SaveChangesAsync(cancellationToken);
            }

            return articleEntity.Id;
        }

        public async Task<Guid> DeleteArticleAsync(
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