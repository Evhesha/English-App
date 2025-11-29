using EnglishApp.Core.Abstractions.Like;
using EnglishApp.Core.Exceptions.LikeExceptions;
using EnglishApp.Core.Models;
using EnglishApp.DataAccess;
using EnglishApp.DataAccess.Repositories;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace EnglishApp.Tests.Repositories.Likes;

public class LikesRepositoryTests : IDisposable
{
    private readonly ApplicationDbContext _context;
    private readonly LikesRepository _repository;

    public LikesRepositoryTests()
    {
        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: $"TestDb_{Guid.NewGuid()}")
            .Options;

        _context = new ApplicationDbContext(options);
        _repository = new LikesRepository(_context);
        
        InitializeTestData();
    }

    private void InitializeTestData()
    {
        var testUsers = new List<User>
        {
            new User { Id = Guid.NewGuid(), Name = "User 1", Email = "user1@test.com", PasswordHash = "hash1" },
            new User { Id = Guid.NewGuid(), Name = "User 2", Email = "user2@test.com", PasswordHash = "hash2" }
        };

        _context.Users.AddRange(testUsers);

        var testLessons = new List<Lesson>
        {
            new Lesson { Id = Guid.NewGuid(), UserId = testUsers[0].Id, Title = "Lesson 1", Text = "Text 1", IsPublic = true },
            new Lesson { Id = Guid.NewGuid(), UserId = testUsers[1].Id, Title = "Lesson 2", Text = "Text 2", IsPublic = true }
        };

        _context.Lessons.AddRange(testLessons);

        var testLikes = new List<Like>
        {
            new Like { Id = Guid.NewGuid(), UserId = testUsers[0].Id, LessonId = testLessons[0].Id },
            new Like { Id = Guid.NewGuid(), UserId = testUsers[1].Id, LessonId = testLessons[0].Id }, // Два лайка на первый урок
            new Like { Id = Guid.NewGuid(), UserId = testUsers[0].Id, LessonId = testLessons[1].Id }  // Один лайк на второй урок
        };

        _context.Likes.AddRange(testLikes);
        _context.SaveChanges();
    }

    [Fact]
    public async Task CountLessonLikesAsync_ReturnsCorrectCount()
    {
        // Arrange
        var lessonId = _context.Likes.First().LessonId;

        // Act
        var count = await _repository.CountLessonLikesAsync(lessonId, CancellationToken.None);

        // Assert
        var expectedCount = _context.Likes.Count(l => l.LessonId == lessonId);
        Assert.Equal(expectedCount, count);
    }

    [Fact]
    public async Task CountLessonLikesAsync_WithNoLikes_ReturnsZero()
    {
        // Arrange
        var lessonWithNoLikes = Guid.NewGuid();

        // Act
        var count = await _repository.CountLessonLikesAsync(lessonWithNoLikes, CancellationToken.None);

        // Assert
        Assert.Equal(0, count);
    }

    [Fact]
    public async Task AddLikeAsync_CreatesNewLike()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var lessonId = Guid.NewGuid();
        
        var lesson = new Lesson { Id = lessonId, UserId = userId, Title = "New Lesson", Text = "Text" };
        _context.Lessons.Add(lesson);
        await _context.SaveChangesAsync();

        var newLike = new Like
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            LessonId = lessonId
        };

        // Act
        var result = await _repository.AddLikeAsync(newLike, CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(newLike.Id, result.Id);
        Assert.Equal(newLike.UserId, result.UserId);
        Assert.Equal(newLike.LessonId, result.LessonId);
        
        var likeInDb = await _context.Likes.FindAsync(newLike.Id);
        Assert.NotNull(likeInDb);
    }

    [Fact]
    public async Task AddLikeAsync_WhenLikeAlreadyExists_ThrowsException()
    {
        // Arrange
        var existingLike = _context.Likes.First();
        var duplicateLike = new Like
        {
            Id = Guid.NewGuid(),
            UserId = existingLike.UserId,
            LessonId = existingLike.LessonId
        };

        // Act & Assert
        await Assert.ThrowsAsync<LessonHadAlreadyLikedException>(() =>
            _repository.AddLikeAsync(duplicateLike, CancellationToken.None));
    }

    [Fact]
    public async Task HasUserLikedAsync_WhenUserLiked_ReturnsTrue()
    {
        // Arrange
        var existingLike = _context.Likes.First();
        var userId = existingLike.UserId;
        var lessonId = existingLike.LessonId;

        // Act
        var result = await _repository.HasUserLikedAsync(userId, lessonId, CancellationToken.None);

        // Assert
        Assert.True(result);
    }

    [Fact]
    public async Task HasUserLikedAsync_WhenUserNotLiked_ReturnsFalse()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var lessonId = Guid.NewGuid();

        // Act
        var result = await _repository.HasUserLikedAsync(userId, lessonId, CancellationToken.None);

        // Assert
        Assert.False(result);
    }

    [Fact]
    public async Task DeleteLikeAsync_DeletesExistingLike()
    {
        // Arrange
        var likeToDelete = _context.Likes.First();
        var userId = likeToDelete.UserId;
        var lessonId = likeToDelete.LessonId;

        // Act
        var result = await _repository.DeleteLikeAsync(userId, lessonId, CancellationToken.None);

        // Assert
        Assert.True(result);
        
        var deletedLike = await _context.Likes
            .FirstOrDefaultAsync(l => l.UserId == userId && l.LessonId == lessonId);
        Assert.Null(deletedLike);
    }

    [Fact]
    public async Task DeleteLikeAsync_WhenLikeNotFound_ThrowsException()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var lessonId = Guid.NewGuid();

        // Act & Assert
        await Assert.ThrowsAsync<LikeWasNotFoundException>(() =>
            _repository.DeleteLikeAsync(userId, lessonId, CancellationToken.None));
    }

    [Fact]
    public async Task CountLessonLikesAsync_UsesAsNoTracking()
    {
        // Arrange
        var lessonId = _context.Likes.First().LessonId;

        // Act
        var count = await _repository.CountLessonLikesAsync(lessonId, CancellationToken.None);

        // Assert
        var likes = _context.Likes.Where(l => l.LessonId == lessonId).ToList();
        Assert.All(likes, like => 
            Assert.Equal(EntityState.Detached, _context.Entry(like).State));
    }

    [Fact]
    public async Task HasUserLikedAsync_UsesAsNoTracking()
    {
        // Arrange
        var existingLike = _context.Likes.First();

        // Act
        var result = await _repository.HasUserLikedAsync(
            existingLike.UserId, existingLike.LessonId, CancellationToken.None);

        // Assert 
        Assert.True(result);
    }

    [Fact]
    public async Task ComplexScenario_MultipleUsersLikingSameLesson()
    {
        // Arrange
        var lessonId = Guid.NewGuid();
        var userIds = new[] { Guid.NewGuid(), Guid.NewGuid(), Guid.NewGuid() };
        
        var lesson = new Lesson { Id = lessonId, UserId = userIds[0], Title = "Popular Lesson", Text = "Text" };
        _context.Lessons.Add(lesson);
        await _context.SaveChangesAsync();

        // Act & Assert 
        foreach (var userId in userIds)
        {
            var like = new Like { Id = Guid.NewGuid(), UserId = userId, LessonId = lessonId };
            await _repository.AddLikeAsync(like, CancellationToken.None);
            
            var hasLiked = await _repository.HasUserLikedAsync(userId, lessonId, CancellationToken.None);
            Assert.True(hasLiked);
        }

        var likeCount = await _repository.CountLessonLikesAsync(lessonId, CancellationToken.None);
        Assert.Equal(3, likeCount);

        await _repository.DeleteLikeAsync(userIds[0], lessonId, CancellationToken.None);
        likeCount = await _repository.CountLessonLikesAsync(lessonId, CancellationToken.None);
        Assert.Equal(2, likeCount);
    }

    public void Dispose()
    {
        _context?.Dispose();
    }
}