using EnglishApp.Core.Abstractions.Lesson;
using EnglishApp.Core.Models;
using EnglishApp.Application.AppServices;
using NSubstitute;
using Xunit;

namespace EnglishApp.Tests.Data.Lessons;

public class LessonsServiceTests
{
    [Fact]
    public async Task GetUserLessonByLessonId_WithValidId_ReturnsLesson()
    {
        // Arrange
        var mockRepo = Substitute.For<ILessonRepository>();
        var lessonId = Guid.NewGuid();
        var lesson = new Lesson 
        { 
            Id = lessonId, 
            Title = "Test Lesson" 
        };
        var ct = new CancellationToken();
        
        mockRepo.GetUserLessonByLessonIdAsync(lessonId, ct).Returns(lesson);
        var service = new LessonService(mockRepo);
        
        // Act
        var result = await service.GetUserLessonByLessonId(lessonId, ct);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(lessonId, result.Id);
        Assert.Equal("Test Lesson", result.Title);
    }

    [Fact]
    public async Task GetUserLessonByLessonId_WithInvalidId_ReturnsNull()
    {
        // Arrange
        var mockRepo = Substitute.For<ILessonRepository>();
        var lessonId = Guid.NewGuid();
        var ct = new CancellationToken();
        
        mockRepo.GetUserLessonByLessonIdAsync(lessonId, ct).Returns((Lesson?)null);
        var service = new LessonService(mockRepo);
        
        // Act
        var result = await service.GetUserLessonByLessonId(lessonId, ct);

        // Assert
        Assert.Null(result);
    }

    [Fact]
    public async Task CreateLesson_WithValidData_ReturnsGuid()
    {
        // Arrange
        var mockRepo = Substitute.For<ILessonRepository>();
        var lesson = new Lesson 
        { 
            Id = Guid.NewGuid(), 
            Title = "New Lesson" 
        };
        var expectedGuid = Guid.NewGuid();
        var ct = new CancellationToken();
        
        mockRepo.CreateLessonAsync(lesson, ct).Returns(expectedGuid);
        var service = new LessonService(mockRepo);
        
        // Act
        var result = await service.CreateLesson(lesson, ct);

        // Assert
        Assert.Equal(expectedGuid, result);
    }

    [Fact]
    public async Task GetUserLessons_WithValidUserId_ReturnsUserLessons()
    {
        // Arrange
        var mockRepo = Substitute.For<ILessonRepository>();
        var userId = Guid.NewGuid();
        var userLessons = new List<Lesson>
        {
            new() { Id = Guid.NewGuid(), Title = "User Lesson 1" },
            new() { Id = Guid.NewGuid(), Title = "User Lesson 2" }
        };
        var ct = new CancellationToken();
        
        mockRepo.GetUserLessonsAsync(userId, ct).Returns(userLessons);
        var service = new LessonService(mockRepo);
        
        // Act
        var result = await service.GetUserLessons(userId, ct);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(2, result.Count);
        Assert.All(result, lesson => Assert.Contains("User Lesson", lesson.Title));
    }
}
