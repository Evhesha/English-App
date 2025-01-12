using EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface IArticleRepository
    {
        Task<Guid> Create(Article article);
        Task<Guid> Delete(Guid id);
        Task<List<Article>> Get();
        Task<List<Article>> GetArticles(Guid userId);
        Task<Guid> Update(Guid id, string title, string text);
    }
}