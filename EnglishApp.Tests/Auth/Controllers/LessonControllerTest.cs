using EnglishApp.Core.Abstractions.Lesson;
using EnglishApp.Core.Exceptions.LessonExceptions;
using EnglishStorageApplication.Server.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Hybrid;
using NSubstitute;
using NSubstitute.ExceptionExtensions;
using Xunit;

namespace EnglishApp.Tests.Auth.Controllers;

public class LessonControllerTest
{
    ILessonService mockService = Substitute.For<ILessonService>();
    CancellationToken ct = new CancellationToken();
    HybridCache  hybridCache;
    
    [Fact]
    public async Task GetUserLessonByLessonId_ReturnsOkObjectResult()
    {
        // Arrange
        
        // Act
        
        // Assert
        
    }
    
    [Fact]
    public async Task DeleteLessonWhenLessonFound_ReturnsGuid()
    {
        // Arrange
        var userId = Guid.NewGuid();
        
        mockService.DeleteLesson(userId, ct)
            .Returns(userId);
        
        var controller = new LessonsController(mockService, hybridCache);
        
        // Act
        var result = await controller.DeleteLesson(userId, ct);
        
        // Assert
        Assert.IsType<ActionResult<Guid>>(result);
    }
    
    [Fact]
    public async Task DeleteLessonWhenLessonIsNotFound_ReturnsNotFound()
    {
        // Arrange
        var wrongLessonId = Guid.NewGuid();
        
        mockService.DeleteLesson(wrongLessonId, ct)
            .Throws(new NotFoundLessonException("User wasn't found"));
        
        var controller = new LessonsController(mockService, hybridCache);
        
        // Act
        var result = await controller.DeleteLesson(wrongLessonId, ct);
        
        // Assert
        Assert.IsType<NotFoundObjectResult>(result.Result);
    }
    
}