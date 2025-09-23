namespace EnglishApp.Core.Abstractions.Article;

public interface IArticleRepository
{
    Task<List<Models.Article>> GetArticlesAsync(CancellationToken cancellationToken);

    Task<List<Models.Article>> GetUserArticlesAsync(
        Guid userId,
        CancellationToken cancellationToken);

    Task<Guid> CreateArticleAsync(
        Models.Article article,
        CancellationToken cancellationToken);

    Task<Guid> UpdateArticleAsync(
        Models.Article article,
        CancellationToken cancellationToken);

    Task<Guid> DeleteArticleAsync(
        Guid id,
        CancellationToken cancellationToken);
}