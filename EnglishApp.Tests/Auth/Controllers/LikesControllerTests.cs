using EnglishApp.Application.DTOs.LikeDTOs;
using EnglishApp.Core.Abstractions.Like;
using EnglishApp.Core.Models;
using Microsoft.AspNetCore.Mvc;
using EnglishStorageApplication.Server.Controllers;
using NSubstitute;
using Xunit;

namespace EnglishApp.Tests.Auth.Controllers;

public class LikesControllerTests
{
    [Fact]
    public async Task CountArticleLikes_WithValidId_ReturnsOkWithCount()
    {
        // Arrange
        var mockService = Substitute.For<ILikeService>();
        var articleId = Guid.NewGuid();
        var expectedCount = 10;
        var ct = new CancellationToken();
        
        mockService.CountLessonLikes(articleId, ct).Returns(expectedCount);
        var controller = new LikesController(mockService);
        
        // Act
        var result = await controller.CountArticleLikes(articleId, ct);

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        Assert.Equal(expectedCount, okResult.Value);
    }

    [Fact]
    public async Task AddLike_WithValidDto_ReturnsOkWithLike()
    {
        // Arrange
        var mockService = Substitute.For<ILikeService>();
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
        var ct = new CancellationToken();
        
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
    public async Task DeleteLike_WithValidData_ReturnsOkWithTrue()
    {
        // Arrange
        var mockService = Substitute.For<ILikeService>();
        var userId = Guid.NewGuid();
        var articleId = Guid.NewGuid();
        var ct = new CancellationToken();
        
        mockService.DeleteLike(userId, articleId, ct).Returns(true);
        var controller = new LikesController(mockService);
        
        // Act
        var result = await controller.DeleteLike(articleId, userId, ct);

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        Assert.True((bool)okResult.Value);
    }
}