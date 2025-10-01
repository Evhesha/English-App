namespace EnglishApp.Core.Abstractions.Like;

public interface ILikeService
{
    Task<int> CountArticleLikes(Guid articleId, CancellationToken cancellationToken);
    Task<Models.Like> AddLike(Guid articleId, Guid userId, CancellationToken cancellationToken);
    Task<bool> HasUserLiked(Guid userId, Guid articleId, CancellationToken cancellationToken);
    Task<bool> DeleteLike(Guid userId, Guid articleId, CancellationToken cancellationToken);
}