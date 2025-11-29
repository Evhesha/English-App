using EnglishApp.Core.Abstractions.Lesson;
using EnglishApp.Core.Exceptions.LessonExceptions;
using EnglishApp.Core.Models;
using EnglishApp.DataAccess;
using EnglishApp.DataAccess.Repositories;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace EnglishApp.Tests.Repositories.Lessons;

public class LessonsRepositoryTests : IDisposable
{
    private readonly ApplicationDbContext _context;
    private readonly LessonsRepository _repository;

    public LessonsRepositoryTests()
    {
        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: $"TestDb_{Guid.NewGuid()}")
            .Options;

        _context = new ApplicationDbContext(options);
        _repository = new LessonsRepository(_context);
        
        InitializeTestData();
    }

    private void InitializeTestData()
    {
        var testUser = new User 
        { 
            Id = Guid.NewGuid(), 
            Name = "Test User", 
            Email = "test@example.com",
            PasswordHash = "hash"
        };

        _context.Users.Add(testUser);

        var testLessons = new List<Lesson>
        {
            new Lesson 
            { 
                Id = Guid.NewGuid(), 
                UserId = testUser.Id, 
                Title = "Lesson 1", 
                Text = "Text 1",
                IsPublic = true,
                WatchCount = 5,
                CreatedDate = DateTime.UtcNow.AddDays(-2),
                User = testUser
            },
            new Lesson 
            { 
                Id = Guid.NewGuid(), 
                UserId = testUser.Id, 
                Title = "Lesson 2", 
                Text = "Text 2",
                IsPublic = false,
                WatchCount = 10,
                CreatedDate = DateTime.UtcNow.AddDays(-1),
                User = testUser
            },
            new Lesson 
            { 
                Id = Guid.NewGuid(), 
                UserId = Guid.NewGuid(), 
                Title = "Lesson 3", 
                Text = "Text 3",
                IsPublic = true,
                WatchCount = 3,
                CreatedDate = DateTime.UtcNow,
                User = new User { Id = Guid.NewGuid(), Name = "Other User" }
            }
        };

        _context.Lessons.AddRange(testLessons);
        _context.SaveChanges();
    }

    [Fact]
    public void GetLessonsQueryable_ReturnsQueryableWithIncludes()
    {
        // Act
        var query = _repository.GetLessonsQueryable();
        var results = query.ToList();

        // Assert
        Assert.NotNull(results);
        Assert.Equal(3, results.Count);
        Assert.All(results, lesson => Assert.NotNull(lesson.User)); 
    }

    [Fact]
    public async Task GetLessonsAsync_ReturnsAllLessons()
    {
        // Act
        var results = await _repository.GetLessonsAsync(CancellationToken.None);

        // Assert
        Assert.NotNull(results);
        Assert.Equal(3, results.Count);
    }

    [Fact]
    public async Task GetUserLessonsAsync_ReturnsOnlyUserLessons()
    {
        // Arrange
        var userId = _context.Lessons.First().UserId;

        // Act
        var results = await _repository.GetUserLessonsAsync(userId, CancellationToken.None);

        // Assert
        Assert.NotNull(results);
        Assert.Equal(2, results.Count);
        Assert.All(results, lesson => Assert.Equal(userId, lesson.UserId));
    }

    [Fact]
    public async Task GetUserLessonsAsync_WithInvalidUserId_ReturnsEmptyList()
    {
        // Arrange
        var invalidUserId = Guid.NewGuid();

        // Act
        var results = await _repository.GetUserLessonsAsync(invalidUserId, CancellationToken.None);

        // Assert
        Assert.NotNull(results);
        Assert.Empty(results);
    }

    [Fact]
    public async Task GetUserLessonByLessonIdAsync_ReturnsLessonAndIncrementsWatchCount()
    {
        // Arrange
        var existingLesson = _context.Lessons.First();
        var initialWatchCount = existingLesson.WatchCount;

        // Act
        var result = await _repository.GetUserLessonByLessonIdAsync(existingLesson.Id, CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(existingLesson.Id, result.Id);
        Assert.Equal(initialWatchCount + 1, result.WatchCount); 
        
        // Проверяем что в базе тоже обновилось
        var lessonFromDb = await _context.Lessons.FindAsync(existingLesson.Id);
        Assert.NotNull(lessonFromDb);
        Assert.Equal(initialWatchCount + 1, lessonFromDb.WatchCount);
    }

    [Fact]
    public async Task GetUserLessonByLessonIdAsync_WithInvalidId_ThrowsNotFoundException()
    {
        // Arrange
        var invalidId = Guid.NewGuid();

        // Act & Assert
        await Assert.ThrowsAsync<NotFoundLessonException>(() =>
            _repository.GetUserLessonByLessonIdAsync(invalidId, CancellationToken.None));
    }

    [Fact]
    public async Task CreateLessonAsync_CreatesNewLesson()
    {
        // Arrange
        var newLesson = new Lesson
        {
            Id = Guid.NewGuid(),
            UserId = Guid.NewGuid(),
            Title = "New Lesson",
            Text = "New Text",
            IsPublic = true,
            CreatedDate = DateTime.UtcNow
        };

        // Act
        var lessonId = await _repository.CreateLessonAsync(newLesson, CancellationToken.None);

        // Assert
        Assert.Equal(newLesson.Id, lessonId);
        
        var createdLesson = await _context.Lessons.FindAsync(lessonId);
        Assert.NotNull(createdLesson);
        Assert.Equal(newLesson.Title, createdLesson.Title);
        Assert.Equal(newLesson.UserId, createdLesson.UserId);
    }

    [Fact]
    public async Task UpdateLessonAsync_UpdatesLessonProperties()
    {
        // Arrange
        var existingLesson = _context.Lessons.First();
        var updatedLesson = new Lesson
        {
            Id = existingLesson.Id,
            Title = "Updated Title",
            Text = "Updated Text",
            IsPublic = !existingLesson.IsPublic
        };

        // Act
        var updatedId = await _repository.UpdateLessonAsync(updatedLesson, CancellationToken.None);

        // Assert
        Assert.Equal(existingLesson.Id, updatedId);
        
        var lessonFromDb = await _context.Lessons.FindAsync(existingLesson.Id);
        Assert.NotNull(lessonFromDb);
        Assert.Equal(updatedLesson.Title, lessonFromDb.Title);
        Assert.Equal(updatedLesson.Text, lessonFromDb.Text);
        Assert.Equal(updatedLesson.IsPublic, lessonFromDb.IsPublic);
        Assert.Equal(existingLesson.UserId, lessonFromDb.UserId);
        Assert.Equal(existingLesson.WatchCount, lessonFromDb.WatchCount);
    }

    [Fact]
    public async Task UpdateLessonAsync_WithInvalidId_ThrowsNotFoundException()
    {
        // Arrange
        var invalidLesson = new Lesson
        {
            Id = Guid.NewGuid(),
            Title = "Invalid Lesson"
        };

        // Act & Assert
        await Assert.ThrowsAsync<NotFoundLessonException>(() =>
            _repository.UpdateLessonAsync(invalidLesson, CancellationToken.None));
    }

    [Fact]
    public async Task DeleteLessonAsync_DeletesLesson()
    {
        // Arrange
        var lessonToDelete = _context.Lessons.First();

        // Act
        var deletedId = await _repository.DeleteLessonAsync(lessonToDelete.Id, CancellationToken.None);

        // Assert
        Assert.Equal(lessonToDelete.Id, deletedId);
        
        var deletedLesson = await _context.Lessons.FindAsync(lessonToDelete.Id);
        Assert.Null(deletedLesson);
    }

    [Fact]
    public async Task DeleteLessonAsync_WithInvalidId_ThrowsNotFoundException()
    {
        // Arrange
        var invalidId = Guid.NewGuid();

        // Act & Assert
        await Assert.ThrowsAsync<NotFoundLessonException>(() =>
            _repository.DeleteLessonAsync(invalidId, CancellationToken.None));
    }

    [Fact]
    public async Task GetMethods_UseAsNoTracking()
    {
        // Arrange
        var userId = _context.Lessons.First().UserId;

        // Act
        var allLessons = await _repository.GetLessonsAsync(CancellationToken.None);
        var userLessons = await _repository.GetUserLessonsAsync(userId, CancellationToken.None);

        Assert.All(allLessons, lesson => 
            Assert.Equal(EntityState.Detached, _context.Entry(lesson).State));
        Assert.All(userLessons, lesson => 
            Assert.Equal(EntityState.Detached, _context.Entry(lesson).State));
    }

    [Fact]
    public async Task CreateLessonAsync_WithImages_CreatesLessonWithImages()
    {
        // Arrange
        var newLesson = new Lesson
        {
            Id = Guid.NewGuid(),
            UserId = Guid.NewGuid(),
            Title = "Lesson with Images",
            Text = "Text with images",
            IsPublic = true,
            CreatedDate = DateTime.UtcNow,
            Images = new List<LessonImage>
            {
                new LessonImage { Id = Guid.NewGuid(), ImageURL = "image1.jpg" },
                new LessonImage { Id = Guid.NewGuid(), ImageURL = "image2.jpg" }
            }
        };

        // Act
        var lessonId = await _repository.CreateLessonAsync(newLesson, CancellationToken.None);

        // Assert
        var createdLesson = await _context.Lessons
            .Include(l => l.Images)
            .FirstOrDefaultAsync(l => l.Id == lessonId);
        
        Assert.NotNull(createdLesson);
        Assert.Equal(2, createdLesson.Images.Count);
    }

    public void Dispose()
    {
        _context?.Dispose();
    }
}