using EnglishApp.Core.Abstractions.Like;
using EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace EnglishApp.DataAccess.Repositories;

public class LikesRepository : ILikesRepository
{
    private readonly ApplicationDbContext _context;
    
    public LikesRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<int> CountLessonLikesAsync(Guid articleId, CancellationToken cancellationToken)
    {
        return await _context.Likes
            .AsNoTracking()
            .CountAsync(l => l.ArticleId == articleId, cancellationToken);
    }

    public async Task<Like> AddLikeAsync(Like like, CancellationToken cancellationToken)
    {
        var exists = await _context.Likes
            .AnyAsync(l => l.ArticleId == like.ArticleId && l.UserId == like.UserId, cancellationToken);

        if (exists)
            throw new InvalidOperationException("User has already liked this article.");

        var likeEntity = new Like
        {
            Id = like.Id,
            ArticleId = like.ArticleId,
            UserId = like.UserId
        };

        await _context.Likes.AddAsync(likeEntity, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);
        
        return likeEntity;
    }

    public async Task<bool> HasUserLikedAsync(Guid userId, Guid articleId, CancellationToken cancellationToken)
    {
        return await _context.Likes
            .AsNoTracking()
            .AnyAsync(l => l.UserId == userId && l.ArticleId == articleId, cancellationToken);
    }

    public async Task<bool> DeleteLikeAsync(Guid userId, Guid articleId, CancellationToken cancellationToken)
    {
        var likeEntity = await _context.Likes
            .FirstOrDefaultAsync(l => l.ArticleId == articleId && l.UserId == userId, cancellationToken);

        if (likeEntity == null)
            return false;

        _context.Likes.Remove(likeEntity);
        await _context.SaveChangesAsync(cancellationToken);

        return true;
    }
}