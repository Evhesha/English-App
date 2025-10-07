namespace EnglishApp.Core.Abstractions.Like;

public interface ILikeService
{
    Task<int> CountLessonLikes(Guid articleId, CancellationToken cancellationToken);
    Task<Models.Like> AddLike(Models.Like like, CancellationToken cancellationToken);
    Task<bool> HasUserLiked(Guid userId, Guid articleId, CancellationToken cancellationToken);
    Task<bool> DeleteLike(Guid userId, Guid articleId, CancellationToken cancellationToken);
}