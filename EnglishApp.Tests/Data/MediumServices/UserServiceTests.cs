using EnglishApp.Core.Abstractions.User;
using EnglishStorageApplication.EnglishApp.Application.AppServices;
using EnglishStorageApplication.EnglishApp.Core.Models;
using NSubstitute;
using Xunit;

namespace EnglishApp.Tests.Data.MediumServices;

public class UserServiceTests
{
    IUsersRepository mockRepo = Substitute.For<IUsersRepository>();
    CancellationToken ct = new CancellationToken();
    
    [Fact]
    public async Task GetUserById_WithValidId_ReturnsUser()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var user = new User { Id = userId, Email = "test@example.com", Name = "Test User" };
        
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
        var userEmail = "user@example.com";
        var user = new User { Id = Guid.NewGuid(), Email = userEmail, Name = "Test User" };
        
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
        var userEmail = "nonexistent@example.com";
        
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
        var users = new List<User>
        {
            new() { Id = Guid.NewGuid(), Email = "user1@example.com", Name = "User 1" },
            new() { Id = Guid.NewGuid(), Email = "user2@example.com", Name = "User 2" }
        };
        
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
        var user = new User 
        { 
            Id = Guid.NewGuid(), 
            Email = "new@example.com", 
            Name = "New User" 
        };
        var expectedGuid = Guid.NewGuid();
        
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
        var user = new User 
        { 
            Id = Guid.NewGuid(), 
            Email = "updated@example.com", 
            Name = "Updated User" 
        };
        var expectedGuid = Guid.NewGuid();
        
        mockRepo.UpdateUserAsync(user, ct).Returns(expectedGuid);
        var service = new UserService(mockRepo);
        
        // Act
        var result = await service.UpdateUser(user, ct);

        // Assert
        Assert.Equal(expectedGuid, result);
    }
}