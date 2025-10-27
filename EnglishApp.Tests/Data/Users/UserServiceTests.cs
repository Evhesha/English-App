using EnglishApp.Core.Abstractions.User;
using EnglishStorageApplication.EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.Application.AppServices;
using NSubstitute;
using Xunit;

namespace EnglishApp.Tests.Data.Users;

public class UserServiceTests
{
    [Fact]
    public async Task GetUserById_WithValidId_ReturnsUser()
    {
        // Arrange
        var mockRepo = Substitute.For<IUsersRepository>();
        var userId = Guid.NewGuid();
        var user = new User { Id = userId, Email = "test@example.com", Name = "Test User" };
        var ct = new CancellationToken();
        
        mockRepo.GetUserByIdAsync(userId, ct).Returns(user);
        var service = new UserService(mockRepo);
        
        // Act
        var result = await service.GetUserById(userId, ct);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(userId, result.Id);
        Assert.Equal("test@example.com", result.Email);
    }

    [Fact]
    public async Task GetUserByEmail_WithValidEmail_ReturnsUser()
    {
        // Arrange
        var mockRepo = Substitute.For<IUsersRepository>();
        var userEmail = "user@example.com";
        var user = new User { Id = Guid.NewGuid(), Email = userEmail, Name = "Test User" };
        var ct = new CancellationToken();
        
        mockRepo.GetUserByEmailAsync(userEmail, ct).Returns(user);
        var service = new UserService(mockRepo);
        
        // Act
        var result = await service.GetUserByEmail(userEmail, ct);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(userEmail, result.Email);
    }

    [Fact]
    public async Task GetUserByEmail_WithInvalidEmail_ReturnsNull()
    {
        // Arrange
        var mockRepo = Substitute.For<IUsersRepository>();
        var userEmail = "nonexistent@example.com";
        var ct = new CancellationToken();
        
        mockRepo.GetUserByEmailAsync(userEmail, ct).Returns((User?)null);
        var service = new UserService(mockRepo);
        
        // Act
        var result = await service.GetUserByEmail(userEmail, ct);

        // Assert
        Assert.Null(result);
    }

    [Fact]
    public async Task GetAllUsers_ReturnsListOfUsers()
    {
        // Arrange
        var mockRepo = Substitute.For<IUsersRepository>();
        var users = new List<User>
        {
            new() { Id = Guid.NewGuid(), Email = "user1@example.com", Name = "User 1" },
            new() { Id = Guid.NewGuid(), Email = "user2@example.com", Name = "User 2" }
        };
        var ct = new CancellationToken();
        
        mockRepo.GetUsersAsync(ct).Returns(users);
        var service = new UserService(mockRepo);
        
        // Act
        var result = await service.GetAllUsers(ct);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(2, result.Count);
    }

    [Fact]
    public async Task CreateUser_WithValidData_ReturnsGuid()
    {
        // Arrange
        var mockRepo = Substitute.For<IUsersRepository>();
        var user = new User 
        { 
            Id = Guid.NewGuid(), 
            Email = "new@example.com", 
            Name = "New User" 
        };
        var expectedGuid = Guid.NewGuid();
        var ct = new CancellationToken();
        
        mockRepo.CreateUserAsync(user, ct).Returns(expectedGuid);
        var service = new UserService(mockRepo);
        
        // Act
        var result = await service.CreateUser(user, ct);

        // Assert
        Assert.Equal(expectedGuid, result);
    }

    [Fact]
    public async Task UpdateUser_WithValidData_ReturnsGuid()
    {
        // Arrange
        var mockRepo = Substitute.For<IUsersRepository>();
        var user = new User 
        { 
            Id = Guid.NewGuid(), 
            Email = "updated@example.com", 
            Name = "Updated User" 
        };
        var expectedGuid = Guid.NewGuid();
        var ct = new CancellationToken();
        
        mockRepo.UpdateUserAsync(user, ct).Returns(expectedGuid);
        var service = new UserService(mockRepo);
        
        // Act
        var result = await service.UpdateUser(user, ct);

        // Assert
        Assert.Equal(expectedGuid, result);
    }
}