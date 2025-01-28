using EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishApp.Application.AppServices
{
    public class ArticleService : IArticleService
    {
        private readonly IArticleRepository _articleRepository;

        public ArticleService(IArticleRepository articleRepository)
        {
            _articleRepository = articleRepository;
        }

        public async Task<List<Article>> GetAllArticles()
        {
            return await _articleRepository.Get();
        }

        public async Task<List<Article>> GetUserArticles(Guid userId)
        {
            return await _articleRepository.GetArticles(userId);
        }

        public async Task<Guid> Create(Article article)
        {
            return await _articleRepository.Create(article);
        }

        public async Task<Guid> Update(Guid id, string title, string text)
        {
            return await _articleRepository.Update(id, title, text);
        }

        public async Task<Guid> Delete(Guid id)
        {
            return await _articleRepository.Delete(id);
        }
    }
}