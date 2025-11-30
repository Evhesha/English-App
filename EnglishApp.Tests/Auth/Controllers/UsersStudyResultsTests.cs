using EnglishApp.Application.DTOs.UserStudyResult;
using EnglishApp.Core.Abstractions.UserStudyResult;
using EnglishApp.Core.Models;
using EnglishStorageApplication.Server.Controllers;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;
using Xunit;

namespace EnglishApp.Tests.Auth.Controllers;

public class UsersStudyResultsTests
{
    private readonly IUserStudyResultService _mockService = Substitute.For<IUserStudyResultService>();
    private readonly CancellationToken _ct = new CancellationToken();

    [Fact]
    public async Task GetUserStudyResults_WithExistingUser_ReturnsOkWithList()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var expectedResults = new List<UserStudyResult>
        {
            new() { Id = Guid.NewGuid(), UserId = userId, TestId = Guid.NewGuid(), PercentResult = 85 },
            new() { Id = Guid.NewGuid(), UserId = userId, TestId = Guid.NewGuid(), PercentResult = 92 }
        };
        
        _mockService.GetUserResults(userId, _ct).Returns(expectedResults);
        var controller = new UsersStudyResultsController(_mockService);

        // Act
        var result = await controller.GetUserStudyResults(userId, _ct);

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        var returnedResults = Assert.IsType<List<UserStudyResult>>(okResult.Value);
        Assert.Equal(2, returnedResults.Count);
        Assert.All(returnedResults, r => Assert.Equal(userId, r.UserId));
    }

    [Fact]
    public async Task GetUserStudyResults_WithNoResults_ReturnsNoContent()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var emptyResults = new List<UserStudyResult>();
        
        _mockService.GetUserResults(userId, _ct).Returns(emptyResults);
        var controller = new UsersStudyResultsController(_mockService);

        // Act
        var result = await controller.GetUserStudyResults(userId, _ct);

        // Assert
        Assert.IsType<NoContentResult>(result.Result);
    }

    [Fact]
    public async Task CreateUserStudyResult_WithValidDto_ReturnsOkWithId()
    {
        // Arrange
        var createDto = new CreateUserStudyResultDto
        {
            UserId = Guid.NewGuid(),
            TestId = Guid.NewGuid(),
            PercentResult = 85
        };
        
        var expectedId = Guid.NewGuid();
        _mockService.CreateUserResult(Arg.Any<UserStudyResult>(), _ct).Returns(expectedId);
        var controller = new UsersStudyResultsController(_mockService);

        // Act
        var result = await controller.CreateUserStudyResult(createDto, _ct);

        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        Assert.Equal(expectedId, okResult.Value);
    }
}