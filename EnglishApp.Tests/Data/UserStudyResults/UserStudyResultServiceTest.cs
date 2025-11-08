using EnglishApp.Application.AppServices;
using EnglishApp.Core.Abstractions.UserStudyResult;
using EnglishApp.Core.Models;
using NSubstitute;
using Xunit;

namespace EnglishApp.Tests.Data.UserStudyResults;

public class UserStudyResultServiceTests
{
    [Fact]
    public async Task GetUserResults_ReturnsUserStudyResults()
    {
        // Arrange
        var mockRepo = Substitute.For<IUsersStudyResultsRepository>();
        var service = new UserStudyResultService(mockRepo);
        var userId = Guid.NewGuid();
        var cancellationToken = new CancellationToken();
        
        var expectedResults = new List<UserStudyResult>
        {
            CreateTestResult(userId, 75.0),
            CreateTestResult(userId, 90.5)
        };
        
        mockRepo.GetUserStudyResultsByIdAsync(userId, cancellationToken)
               .Returns(expectedResults);

        // Act
        var result = await service.GetUserResults(userId, cancellationToken);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(2, result.Count);
        Assert.Equal(userId, result[0].UserId);
        Assert.Equal(userId, result[1].UserId);
    }

    [Fact]
    public async Task CreateUserResult_ReturnsGuid()
    {
        // Arrange
        var mockRepo = Substitute.For<IUsersStudyResultsRepository>();
        var service = new UserStudyResultService(mockRepo);
        var cancellationToken = new CancellationToken();
        
        var userStudyResult = CreateTestResult(Guid.NewGuid(), 85.0);
        var expectedGuid = Guid.NewGuid();
        
        mockRepo.CreateUserStudyResultAsync(userStudyResult, cancellationToken)
               .Returns(expectedGuid);

        // Act
        var result = await service.CreateUserResult(userStudyResult, cancellationToken);

        // Assert
        Assert.Equal(expectedGuid, result);
    }

    [Fact]
    public async Task DeleteUserResult_ReturnsGuid()
    {
        // Arrange
        var mockRepo = Substitute.For<IUsersStudyResultsRepository>();
        var service = new UserStudyResultService(mockRepo);
        var cancellationToken = new CancellationToken();
        
        var resultId = Guid.NewGuid();
        var expectedGuid = Guid.NewGuid();
        
        mockRepo.DeleteUserStudyResultAsync(resultId, cancellationToken)
               .Returns(expectedGuid);

        // Act
        var result = await service.DeleteUserResult(resultId, cancellationToken);

        // Assert
        Assert.Equal(expectedGuid, result);
    }

    [Fact]
    public async Task UpdateUserResult_WithPerfectScore_ReturnsGuid()
    {
        // Arrange
        var mockRepo = Substitute.For<IUsersStudyResultsRepository>();
        var service = new UserStudyResultService(mockRepo);
        var cancellationToken = new CancellationToken();
        
        var resultId = Guid.NewGuid();
        var perfectScore = 100.0;
        var expectedGuid = Guid.NewGuid();
        
        mockRepo.UpdateUserStudyResultAsync(resultId, perfectScore, cancellationToken)
               .Returns(expectedGuid);

        // Act
        var result = await service.UpdateUserResult(resultId, perfectScore, cancellationToken);

        // Assert
        Assert.Equal(expectedGuid, result);
    }

    private UserStudyResult CreateTestResult(Guid userId, double percentResult)
    {
        return new UserStudyResult
        {
            Id = Guid.NewGuid(),
            UserId = userId,
            TestId = Guid.NewGuid(),
            PercentResult = percentResult
        };
    }
}