using EnglishApp.Core.Abstractions.User;
using EnglishStorageApplication.EnglishApp.Application.AppServices;
using EnglishStorageApplication.EnglishApp.Core.Models;
using NSubstitute;
using Xunit;

namespace EnglishApp.Tests.Auth.Services;

public class EmailTests
{
    [Fact]
    public async Task GetUserByEmail_CheckUserWithCorrectEmail_ReturnsUser()
    {
        // Arrange
        var mockRepo = Substitute.For<IUsersRepository>();
        var userEmail = "userEmail@gmail.com";
        var user = new User{ Id = Guid.NewGuid(), Email = userEmail };
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
    public async Task GetUserByEmail_CheckUserWithWrongEmail_ReturnsNull()
    {
        // Arrange
        var mockRepo = Substitute.For<IUsersRepository>();
        var correctUserEmail = "correct@gmail.com";
        var wrongUserEmail = "wrong@gmail.com";
        
        var user = new User{ Id = Guid.NewGuid(), Email = correctUserEmail };
        var ct = new CancellationToken();
        
        mockRepo.GetUserByEmailAsync(correctUserEmail, ct).Returns(user);
        var service = new UserService(mockRepo);
        
        // Act
        var result = await service.GetUserByEmail(wrongUserEmail, ct);
        
        // Assert
        Assert.Null(result);
    }
}