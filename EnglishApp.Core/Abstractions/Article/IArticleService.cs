namespace EnglishApp.Core.Abstractions.Article;

public interface IArticleService
{
    Task<List<Models.Article>> GetArticles(CancellationToken cancellationToken);
    Task<List<Models.Article>> GetUserArticles(Guid userId, CancellationToken cancellationToken);
    Task<Guid> CreateArticle(Models.Article article, CancellationToken cancellationToken);
    Task<Guid> UpdateArticle(Models.Article article, CancellationToken cancellationToken);
    Task<Guid> DeleteArticle(Guid id, CancellationToken cancellationToken);
}