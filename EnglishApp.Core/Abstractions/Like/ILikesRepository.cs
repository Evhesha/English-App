namespace EnglishApp.Core.Abstractions.Like;

public interface ILikesRepository
{
    Task<int> CountArticleLikesAsync(Guid articleId, CancellationToken cancellationToken);
    Task<Models.Like> AddLikeAsync(Models.Like like, CancellationToken cancellationToken);
    Task<bool> HasUserLikedAsync(Guid userId, Guid articleId, CancellationToken cancellationToken);
    Task<bool> DeleteLikeAsync(Guid userId, Guid articleId, CancellationToken cancellationToken);
}