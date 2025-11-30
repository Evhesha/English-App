using EnglishApp.Application.DTOs.LikeDTOs;
using EnglishApp.Core.Abstractions.Like;
using EnglishApp.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace EnglishStorageApplication.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class LikesController : ControllerBase
{
    private readonly ILikeService _likeService;

    public LikesController(ILikeService likeService)
    {
        _likeService = likeService;
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<int>> CountArticleLikes(Guid id, CancellationToken cancellationToken)
    {
        var likes = await _likeService.CountLessonLikes(id, cancellationToken);
        return Ok(likes);
    }
    
    [HttpGet]
    public async Task<ActionResult<bool>> HasUserLiked(
        [FromQuery] Guid articleId,
        [FromQuery] Guid userId,
        CancellationToken cancellationToken)
    {
        var hasUserLiked = await _likeService.HasUserLiked(userId, articleId, cancellationToken);

        if (!hasUserLiked)
        {
            return NotFound("Like not found");
        }

        return Ok(hasUserLiked);
    }

    [HttpPost]
    public async Task<ActionResult<Like>> AddLike(
        [FromBody] AddLikeDto addLikeDto,
        CancellationToken cancellationToken)
    {
        var like = new Like
        {
            Id = Guid.NewGuid(),
            UserId = addLikeDto.UserId,
            LessonId = addLikeDto.ArticleId
        };

        await _likeService.AddLike(like, cancellationToken);
        
        return Ok(like);
    }

    [HttpDelete]
    public async Task<ActionResult<bool>> DeleteLike(
        [FromQuery] Guid userId,
        [FromQuery] Guid articleId,
        CancellationToken cancellationToken)
    {
        return Ok(await _likeService.DeleteLike(userId, articleId, cancellationToken));
    }
}