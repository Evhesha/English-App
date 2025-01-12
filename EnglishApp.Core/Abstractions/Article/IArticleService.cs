using EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface IArticleService
    {
        Task<Guid> Create(Article article);
        Task<Guid> Delete(Guid id);
        Task<List<Article>> GetAllArticles();
        Task<List<Article>> GetUserArticles(Guid userId);
        Task<Guid> Update(Guid id, string title, string text);
    }
}