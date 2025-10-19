using EnglishApp.Core.Abstractions.Like;
using EnglishApp.Core.Exceptions.LikeExceptions;
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
            .CountAsync(l => l.LessonId == articleId, cancellationToken);
    }

    public async Task<Like> AddLikeAsync(Like like, CancellationToken cancellationToken)
    {
        var exists = await _context.Likes
            .AnyAsync(l => l.LessonId == like.LessonId && l.UserId == like.UserId, cancellationToken);

        if (exists)
            throw new LessonHadAlreadyLikedException("User has already liked this article.");

        var likeEntity = new Like
        {
            Id = like.Id,
            LessonId = like.LessonId,
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
            .AnyAsync(l => l.UserId == userId && l.LessonId == articleId, cancellationToken);
    }

    public async Task<bool> DeleteLikeAsync(Guid userId, Guid articleId, CancellationToken cancellationToken)
    {
        var likeEntity = await _context.Likes
            .FirstOrDefaultAsync(l => l.LessonId == articleId && l.UserId == userId, cancellationToken);

        if (likeEntity == null)
            throw new LessonHadAlreadyLikedException("User has already liked this article.");

        _context.Likes.Remove(likeEntity);
        await _context.SaveChangesAsync(cancellationToken);

        return true;
    }
}