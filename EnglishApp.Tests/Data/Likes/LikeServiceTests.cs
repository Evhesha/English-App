using EnglishApp.Core.Abstractions.Like;
using EnglishApp.Core.Models;
using EnglishApp.Application.AppServices;
using NSubstitute;
using Xunit;

namespace EnglishApp.Tests.Data.Likes;

public class LikeServiceTests
{
    [Fact]
    public async Task CountLessonLikes_WithValidArticleId_ReturnsCorrectCount()
    {
        // Arrange
        var mockRepo = Substitute.For<ILikesRepository>();
        var articleId = Guid.NewGuid();
        const int EXPECTED_COUNT = 5;
        var ct = new CancellationToken();
        
        mockRepo.CountLessonLikesAsync(articleId, ct).Returns(EXPECTED_COUNT);
        var service = new LikeService(mockRepo);
        
        // Act
        var result = await service.CountLessonLikes(articleId, ct);

        // Assert
        Assert.Equal(EXPECTED_COUNT, result);
    }

    [Fact]
    public async Task AddLike_WithValidLike_ReturnsAddedLike()
    {
        // Arrange
        var mockRepo = Substitute.For<ILikesRepository>();
        var like = new Like 
        { 
            Id = Guid.NewGuid(), 
            UserId = Guid.NewGuid(), 
            LessonId = Guid.NewGuid() 
        };
        var ct = new CancellationToken();
        
        mockRepo.AddLikeAsync(like, ct).Returns(like);
        var service = new LikeService(mockRepo);
        
        // Act
        var result = await service.AddLike(like, ct);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(like.Id, result.Id);
        Assert.Equal(like.UserId, result.UserId);
        Assert.Equal(like.LessonId, result.LessonId);
    }

    [Fact]
    public async Task HasUserLiked_WhenUserLikedArticle_ReturnsTrue()
    {
        // Arrange
        var mockRepo = Substitute.For<ILikesRepository>();
        var userId = Guid.NewGuid();
        var articleId = Guid.NewGuid();
        var ct = new CancellationToken();
        
        mockRepo.HasUserLikedAsync(userId, articleId, ct).Returns(true);
        var service = new LikeService(mockRepo);
        
        // Act
        var result = await service.HasUserLiked(userId, articleId, ct);

        // Assert
        Assert.True(result);
    }

    [Fact]
    public async Task HasUserLiked_WhenUserNotLikedArticle_ReturnsFalse()
    {
        // Arrange
        var mockRepo = Substitute.For<ILikesRepository>();
        var userId = Guid.NewGuid();
        var articleId = Guid.NewGuid();
        var ct = new CancellationToken();
        
        mockRepo.HasUserLikedAsync(userId, articleId, ct).Returns(false);
        var service = new LikeService(mockRepo);
        
        // Act
        var result = await service.HasUserLiked(userId, articleId, ct);

        // Assert
        Assert.False(result);
    }

    [Fact]
    public async Task DeleteLike_WithValidData_ReturnsTrue()
    {
        // Arrange
        var mockRepo = Substitute.For<ILikesRepository>();
        var userId = Guid.NewGuid();
        var articleId = Guid.NewGuid();
        var ct = new CancellationToken();
        
        mockRepo.DeleteLikeAsync(userId, articleId, ct).Returns(true);
        var service = new LikeService(mockRepo);
        
        // Act
        var result = await service.DeleteLike(userId, articleId, ct);

        // Assert
        Assert.True(result);
    }

    [Fact]
    public async Task DeleteLike_WhenLikeNotFound_ReturnsFalse()
    {
        // Arrange
        var mockRepo = Substitute.For<ILikesRepository>();
        var userId = Guid.NewGuid();
        var articleId = Guid.NewGuid();
        var ct = new CancellationToken();
        
        mockRepo.DeleteLikeAsync(userId, articleId, ct).Returns(false);
        var service = new LikeService(mockRepo);
        
        // Act
        var result = await service.DeleteLike(userId, articleId, ct);

        // Assert
        Assert.False(result);
    }
}