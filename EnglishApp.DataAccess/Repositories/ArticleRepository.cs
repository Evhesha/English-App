using EnglishApp.Core.Models;
using EnglishApp.DataAccess.Entities;
using EnglishStorageApplication.EnglishApp.DataAccess;
using Microsoft.EntityFrameworkCore;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishApp.DataAccess.Repositories
{
    public class ArticleRepository : IArticleRepository
    {
        private readonly ApplicationDbContext _context;

        public ArticleRepository(ApplicationDbContext applicationDbContext)
        {
            _context = applicationDbContext;
        }

        public async Task<List<Article>> Get()
        {
            var articleEntity = await _context.Articles
                .AsNoTracking()
                .ToListAsync();

            var articles = articleEntity
                .Select(a => Article.Create(a.Id, a.UserId, a.Title, a.Text, a.Images).Article)
                .ToList();

            return articles;
        }

        public async Task<List<Article>> GetArticles(Guid userId)
        {
            var articleEntity = await _context.Articles
                .AsNoTracking()
                .Where(x => x.UserId == userId)
                .ToListAsync();

            var articles = articleEntity
                .Select(a => Article.Create(a.Id, a.UserId, a.Title, a.Text, a.Images).Article)
                .ToList();

            return articles;
        }

        public async Task<Guid> Create(Article article)
        {
            var atricleEntity = new ArticleEntity
            {
                Id = article.Id,
                UserId = article.UserId,
                Title = article.Title,
                Text = article.Text,
                Images = article.Images
            };

            await _context.Articles.AddAsync(atricleEntity);
            await _context.SaveChangesAsync();

            return atricleEntity.Id;
        }

        public async Task<Guid> Update(Guid id, string title, string text)
        {
            var articleEntity = await _context.Articles.FindAsync(id);
            if (articleEntity != null)
            {
                articleEntity.Title = title;
                articleEntity.Text = text;
                await _context.SaveChangesAsync();
            }

            return id;
        }

        public async Task<Guid> Delete(Guid id)
        {
            var article = await _context.Articles
                .FirstOrDefaultAsync(a => a.Id == id);

            if (article != null)
            {
                _context.Articles.Remove(article);
                await _context.SaveChangesAsync();
            }

            return id;
        }
    }
}
