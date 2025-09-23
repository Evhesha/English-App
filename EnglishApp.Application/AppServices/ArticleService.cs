using EnglishApp.Core.Abstractions.Article;
using EnglishApp.Core.Models;

namespace EnglishApp.Application.AppServices
{
    public class ArticleService : IArticleService
    {
        private readonly IArticleRepository _articleRepository;

        public ArticleService(IArticleRepository articleRepository)
        {
            _articleRepository = articleRepository;
        }

        public async Task<List<Article>> GetArticles(CancellationToken cancellationToken)
        {
            return await _articleRepository.GetArticlesAsync(cancellationToken);
        }

        public async Task<List<Article>> GetUserArticles(Guid userId, CancellationToken cancellationToken)
        {
            return await _articleRepository.GetUserArticlesAsync(userId, cancellationToken);
        }

        public async Task<Guid> CreateArticle(Article article, CancellationToken cancellationToken)
        {
            return await _articleRepository.CreateArticleAsync(article, cancellationToken);
        }

        public async Task<Guid> UpdateArticle(Article article, CancellationToken cancellationToken)
        {
            return await _articleRepository.UpdateArticleAsync(article, cancellationToken);
        }

        public async Task<Guid> DeleteArticle(Guid id, CancellationToken cancellationToken)
        {
            return await _articleRepository.DeleteArticleAsync(id, cancellationToken);
        }
    }
}