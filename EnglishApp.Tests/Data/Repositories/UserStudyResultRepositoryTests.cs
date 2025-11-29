using EnglishApp.Core.Abstractions.UserStudyResult;
using EnglishApp.Core.Exceptions.UserStudyResultExceptions;
using EnglishApp.Core.Models;
using EnglishApp.DataAccess;
using EnglishApp.DataAccess.Repositories;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace EnglishApp.Tests.Repositories.UserStudyResults;

public class UserStudyResultRepositoryTests : IDisposable
{
    private readonly ApplicationDbContext _context;
    private readonly UsersStudyResultsRepository _repository;

    public UserStudyResultRepositoryTests()
    {
        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: $"TestDb_{Guid.NewGuid()}")
            .Options;

        _context = new ApplicationDbContext(options);
        _repository = new UsersStudyResultsRepository(_context);
        
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

        var testResults = new List<UserStudyResult>
        {
            new UserStudyResult 
            { 
                Id = Guid.NewGuid(), 
                UserId = testUser.Id, 
                TestId = Guid.NewGuid(), 
                PercentResult = 75.0 
            },
            new UserStudyResult 
            { 
                Id = Guid.NewGuid(), 
                UserId = testUser.Id, 
                TestId = Guid.NewGuid(), 
                PercentResult = 90.5 
            },
            new UserStudyResult 
            { 
                Id = Guid.NewGuid(), 
                UserId = Guid.NewGuid(), 
                TestId = Guid.NewGuid(), 
                PercentResult = 60.0 
            }
        };

        _context.UsersStudyResults.AddRange(testResults);
        _context.SaveChanges();
    }

    [Fact]
    public async Task GetUsersStudyResultsAsync_ReturnsAllResults()
    {
        // Act
        var results = await _repository.GetUsersStudyResultsAsync(CancellationToken.None);

        // Assert
        Assert.NotNull(results);
        Assert.Equal(3, results.Count);
    }

    [Fact]
    public async Task GetUserStudyResultsByIdAsync_ReturnsOnlyUserResults()
    {
        // Arrange
        var userId = _context.UsersStudyResults.First().UserId;

        // Act
        var results = await _repository.GetUserStudyResultsByIdAsync(userId, CancellationToken.None);

        // Assert
        Assert.NotNull(results);
        Assert.Equal(2, results.Count);
        Assert.All(results, r => Assert.Equal(userId, r.UserId));
    }

    [Fact]
    public async Task GetUserStudyResultsByIdAsync_WithInvalidUserId_ReturnsEmptyList()
    {
        // Arrange
        var invalidUserId = Guid.NewGuid();

        // Act
        var results = await _repository.GetUserStudyResultsByIdAsync(invalidUserId, CancellationToken.None);

        // Assert
        Assert.NotNull(results);
        Assert.Empty(results);
    }

    [Fact]
    public async Task CreateUserStudyResultAsync_CreatesNewResult()
    {
        // Arrange
        var newResult = new UserStudyResult
        {
            Id = Guid.NewGuid(),
            UserId = Guid.NewGuid(),
            TestId = Guid.NewGuid(),
            PercentResult = 85.0
        };

        // Act
        var resultId = await _repository.CreateUserStudyResultAsync(newResult, CancellationToken.None);

        // Assert
        Assert.Equal(newResult.Id, resultId);
        
        var createdResult = await _context.UsersStudyResults.FindAsync(resultId);
        Assert.NotNull(createdResult);
        Assert.Equal(newResult.PercentResult, createdResult.PercentResult);
        Assert.Equal(newResult.UserId, createdResult.UserId);
    }

    [Fact]
    public async Task UpdateUserStudyResultAsync_UpdatesPercentResult()
    {
        // Arrange
        var existingResult = _context.UsersStudyResults.First();
        var newPercent = 95.5;

        // Act
        var updatedId = await _repository.UpdateUserStudyResultAsync(existingResult.Id, newPercent, CancellationToken.None);

        // Assert
        Assert.Equal(existingResult.Id, updatedId);
        
        var updatedResult = await _context.UsersStudyResults.FindAsync(existingResult.Id);
        Assert.NotNull(updatedResult);
        Assert.Equal(newPercent, updatedResult.PercentResult);
    }

    [Fact]
    public async Task UpdateUserStudyResultAsync_WithInvalidId_ThrowsNotFoundException()
    {
        // Arrange
        var invalidId = Guid.NewGuid();
        var newPercent = 95.5;

        // Act & Assert
        await Assert.ThrowsAsync<NotFoundUserStudyResultException>(() =>
            _repository.UpdateUserStudyResultAsync(invalidId, newPercent, CancellationToken.None));
    }

    [Fact]
    public async Task DeleteUserStudyResultAsync_DeletesResult()
    {
        // Arrange
        var resultToDelete = _context.UsersStudyResults.First();

        // Act
        var deletedId = await _repository.DeleteUserStudyResultAsync(resultToDelete.Id, CancellationToken.None);

        // Assert
        Assert.Equal(resultToDelete.Id, deletedId);
        
        var deletedResult = await _context.UsersStudyResults.FindAsync(resultToDelete.Id);
        Assert.Null(deletedResult);
    }

    [Fact]
    public async Task DeleteUserStudyResultAsync_WithInvalidId_ThrowsNotFoundException()
    {
        // Arrange
        var invalidId = Guid.NewGuid();

        // Act & Assert
        await Assert.ThrowsAsync<NotFoundUserStudyResultException>(() =>
            _repository.DeleteUserStudyResultAsync(invalidId, CancellationToken.None));
    }

    [Fact]
    public async Task GetMethods_UseAsNoTracking()
    {
        // Arrange
        var userId = _context.UsersStudyResults.First().UserId;

        // Act
        var allResults = await _repository.GetUsersStudyResultsAsync(CancellationToken.None);
        var userResults = await _repository.GetUserStudyResultsByIdAsync(userId, CancellationToken.None);
        
        Assert.All(allResults, result => 
            Assert.Equal(EntityState.Detached, _context.Entry(result).State));
        Assert.All(userResults, result => 
            Assert.Equal(EntityState.Detached, _context.Entry(result).State));
    }

    public void Dispose()
    {
        _context?.Dispose();
    }
}