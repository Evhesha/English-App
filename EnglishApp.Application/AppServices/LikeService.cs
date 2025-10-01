using EnglishApp.Core.Abstractions.Like;
using EnglishApp.Core.Models;

namespace EnglishApp.Application.AppServices;

public class LikeService : ILikeService
{
    private readonly ILikesRepository  _likesRepository;
    
    public LikeService(ILikesRepository likesRepository)
    {
        _likesRepository = likesRepository;
    }

    public async Task<int> CountArticleLikes(Guid articleId, CancellationToken cancellationToken)
    {
        return await _likesRepository.CountArticleLikesAsync(articleId, cancellationToken);
    }

    public async Task<Like> AddLike(Guid articleId, Guid userId, CancellationToken cancellationToken)
    {
        return await _likesRepository.AddLikeAsync(articleId, userId, cancellationToken);
    }

    public async Task<bool> HasUserLiked(Guid userId, Guid articleId, CancellationToken cancellationToken)
    {
        return await _likesRepository.HasUserLikedAsync(userId, articleId, cancellationToken);
    }

    public async Task<bool> DeleteLike(Guid userId, Guid articleId, CancellationToken cancellationToken)
    {
        return await _likesRepository.DeleteLikeAsync(userId, articleId, cancellationToken);
    }
}