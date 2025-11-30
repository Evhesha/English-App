using EnglishApp.Application.DTOs.LikeDTOs;
using EnglishApp.Core.Abstractions.Like;
using EnglishApp.Core.Exceptions.LikeExceptions;
using EnglishApp.Core.Models;
using Microsoft.AspNetCore.Mvc;
using EnglishStorageApplication.Server.Controllers;
using NSubstitute;
using NSubstitute.ExceptionExtensions;
using Xunit;

namespace EnglishApp.Tests.Auth.Controllers;

public class LikesControllerTests
{
    ILikeService mockService = Substitute.For<ILikeService>();
    CancellationToken ct = new CancellationToken();
    
    [Fact]
    public async Task CountArticleLikes_WithValidId_ReturnsOkWithCount()
    {
        // Arrange
        var articleId = Guid.NewGuid();
        var expectedCount = 10;
        
        mockService.CountLessonLikes(articleId, ct).Returns(expectedCount);
        var controller = new LikesController(mockService);
        
        // Act
        var result = await controller.CountArticleLikes(articleId, ct);

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        Assert.Equal(expectedCount, okResult.Value);
    }
    
    [Fact]
    public async Task HasUserLiked_WhenUserLikedArticle_ReturnsTrue()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var articleId = Guid.NewGuid();
    
        mockService.HasUserLiked(userId, articleId, ct).Returns(true);
        var controller = new LikesController(mockService);
    
        // Act
        var result = await controller.HasUserLiked(articleId, userId, ct);

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        Assert.True((bool)okResult.Value);
    }

    [Fact]
    public async Task HasUserLiked_WhenUserNotLikedArticle_ReturnsFalse()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var articleId = Guid.NewGuid();
    
        mockService.HasUserLiked(userId, articleId, ct).Returns(false);
        var controller = new LikesController(mockService);
    
        // Act
        var result = await controller.HasUserLiked(articleId, userId, ct);

        // Assert
        Assert.IsType<NotFoundObjectResult>(result.Result);
    }

    [Fact]
    public async Task AddLike_WithValidDto_ReturnsOkWithLike()
    {
        // Arrange
        var addLikeDto = new AddLikeDto 
        { 
            UserId = Guid.NewGuid(), 
            ArticleId = Guid.NewGuid() 
        };
        var like = new Like 
        { 
            Id = Guid.NewGuid(), 
            UserId = addLikeDto.UserId, 
            LessonId = addLikeDto.ArticleId 
        };
        
        mockService.AddLike(Arg.Any<Like>(), ct).Returns(like);
        var controller = new LikesController(mockService);
        
        // Act
        var result = await controller.AddLike(addLikeDto, ct);

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        var returnedLike = Assert.IsType<Like>(okResult.Value);
        Assert.Equal(addLikeDto.UserId, returnedLike.UserId);
        Assert.Equal(addLikeDto.ArticleId, returnedLike.LessonId);
    }
    
    [Fact]
    public async Task AddLike_ThatAlreadyExists_ReturnsException()
    {
        // Arrange
        var addLikeDto = new AddLikeDto
        {
            UserId = Guid.NewGuid(),
            ArticleId = Guid.NewGuid()
        };
        
        mockService
            .AddLike(Arg.Any<Like>(), ct)
            .Throws(new LessonHadAlreadyLikedException("The user has already liked this item."));

        var controller = new LikesController(mockService);

        // Act & Assert
        await Assert.ThrowsAsync<LessonHadAlreadyLikedException>(
            async () => await controller.AddLike(addLikeDto, ct)
        );
    }

    [Fact]
    public async Task DeleteLike_WithValidData_ReturnsOkWithTrue()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var articleId = Guid.NewGuid();
        
        mockService.DeleteLike(userId, articleId, ct).Returns(true);
        var controller = new LikesController(mockService);
        
        // Act
        var result = await controller.DeleteLike(userId, articleId, ct);

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        Assert.True((bool)okResult.Value);
    }
    
    [Fact]
    public async Task DeleteLike_WhenLikeNotFound_ReturnsException()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var articleId = Guid.NewGuid();
        
        mockService
            .DeleteLike(userId, articleId, ct)
            .Throws(new LikeWasNotFoundException("Like was not found."));
        
        var controller = new LikesController(mockService);
        
        // Act & Assert
        await Assert.ThrowsAsync<LikeWasNotFoundException>(
            async () => await controller.DeleteLike(userId, articleId, ct)
        );
    }
}