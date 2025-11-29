using EnglishApp.Application.AppServices;
using EnglishApp.Core.Abstractions.Like;
using EnglishApp.Core.Models;
using NSubstitute;
using Xunit;

namespace EnglishApp.Tests.Data.MediumServices;

public class LikeServiceTests
{
    ILikesRepository mockRepo = Substitute.For<ILikesRepository>();
    CancellationToken ct = new CancellationToken();
    
    [Fact]
    public async Task CountLessonLikes_WithValidArticleId_ReturnsCorrectCount()
    {
        // Arrange
        var articleId = Guid.NewGuid();
        const int EXPECTED_COUNT = 5;
        
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
        var like = new Like 
        { 
            Id = Guid.NewGuid(), 
            UserId = Guid.NewGuid(), 
            LessonId = Guid.NewGuid() 
        };
        
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
        var userId = Guid.NewGuid();
        var articleId = Guid.NewGuid();
        
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
        var userId = Guid.NewGuid();
        var articleId = Guid.NewGuid();
        
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
        var userId = Guid.NewGuid();
        var articleId = Guid.NewGuid();
        
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
        var userId = Guid.NewGuid();
        var articleId = Guid.NewGuid();
        
        mockRepo.DeleteLikeAsync(userId, articleId, ct).Returns(false);
        var service = new LikeService(mockRepo);
        
        // Act
        var result = await service.DeleteLike(userId, articleId, ct);

        // Assert
        Assert.False(result);
    }
}