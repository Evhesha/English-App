using EnglishApp.Application.DTOs.UserDTOs;
using EnglishApp.Core.Abstractions.User;
using EnglishApp.Core.Exceptions.UserExceptions;
using EnglishStorageApplication.EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.Infrastructure;
using EnglishStorageApplication.Server.Controllers;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;
using NSubstitute.ExceptionExtensions;
using Xunit;

namespace EnglishApp.Tests.Auth.Controllers;

public class UserControllerTest
{
    PasswordHasher ph = new PasswordHasher();
    CancellationToken  ct = new CancellationToken();
    IUserService mockService = Substitute.For<IUserService>();
    
    [Fact]
    public async Task GetUserById_ReturnsUserWithOkResponse()
    {
        // Arrange 
        var user = new User
        {
            Id = Guid.NewGuid(),
            Email = "example@gmail.com",
            Name = "Evgenii"
        };
        
        mockService.GetUserById(user.Id, ct).Returns(user);
        var controller = new UsersController(mockService, ph);

        // Act
        var result = await controller.GetUserById(user.Id, ct);
        
        // Assert
        Assert.IsType<OkObjectResult>(result);
    }
    
    [Fact]
    public async Task GetUserById_ReturnsNotFoundWhenIdWasNotFound()
    {
        // Arrange 
        Guid wrongId = Guid.NewGuid();
        
        mockService
            .GetUserById(wrongId, ct)
            .Throws(new NotFoundUserException("User wasn't found"));
        
        var controller = new UsersController(mockService, ph);
        
        // Act
        var result = await controller.GetUserById(wrongId, ct);
    
        // Assert
        var notFoundResult = Assert.IsType<NotFoundObjectResult>(result);
        Assert.Equal("User wasn't found", notFoundResult.Value);
    }

    [Fact]
    public async Task GetUserByEmail_ReturnsUserWithOkResponse()
    {
        // Arrange
        var user = new User
        {
            Id = Guid.NewGuid(),
            Email = "example@gmail.com",
            Name = "Evgenii"
        };
        
        mockService.GetUserByEmail(user.Email, ct).Returns(user);
        var controller = new UsersController(mockService, ph);
        
        // Act
        var result = await controller.GetUserByEmail(user.Email, ct);
        
        // Assert
        Assert.IsType<ActionResult<UserDto>>(result);
    }

    [Fact]
    public async Task GetUserByEmail_ReturnsNotFoundWhenEmailWasNotFound()
    {
        // Arrange
        string wrongEmail = "wrongEmail@gmail.com";
        mockService
            .GetUserByEmail(wrongEmail, ct)
            .Throws(new NotFoundUserException("User wasn't found"));
        
        var controller = new UsersController(mockService, ph);
        
        // Act
        var result = await controller.GetUserByEmail(wrongEmail, ct);
    
        // Assert
        var notFoundResult = Assert.IsType<NotFoundObjectResult>(result.Result);
        Assert.Equal("User wasn't found", notFoundResult.Value);
    }
    
    [Fact]
    public async Task UpdateUserRole_ReturnsGuidWithOkResponse()
    {
        // Arrange
        var user = new User
        {
            Id = Guid.NewGuid(),
            Email = "example@gmail.com",
            Name = "Evgenii",
            Role = "User"
        };

        var editUserRoleDto = new EditUserRoleDto
        {
            Role = "Teacher"
        };
        
        mockService.UpdateUserRole(user, ct).Returns(user.Id);
        var controller = new UsersController(mockService, ph);

        // Act
        var result = await controller.UpdateUserRole(user.Id, editUserRoleDto, ct);
        
        // Assert
        Assert.IsType<OkObjectResult>(result);
    }
    
}