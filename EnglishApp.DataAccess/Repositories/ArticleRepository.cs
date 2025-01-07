using EnglishApp.Core.Models;
using EnglishApp.DataAccess.Entities;
using EnglishStorageApplication.EnglishApp.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace EnglishApp.DataAccess.Repositories
{
    public class ArticleRepository
    {
        private readonly ApplicationDbContext _context;

        public ArticleRepository(ApplicationDbContext applicationDbContext)
        {
            _context = applicationDbContext;
        }

        public async Task<List<ArticleEntity>> Get()
        {
            return await _context.Articles
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<List<ArticleEntity>> GetArticles(Guid id)
        {
            return await _context.Articles
                .AsNoTracking()
                .Where(x => x.Id == id)
                .ToListAsync();
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

        

        public async Task<Guid> Delete(Guid id)
        {
            var article = await _context.Articles
                .FirstOrDefaultAsync(a =>  a.Id == id);

            if (article != null)
            {
                _context.Articles.Remove(article);
                await _context.SaveChangesAsync();
            }

            return id;
        }
    }
}
