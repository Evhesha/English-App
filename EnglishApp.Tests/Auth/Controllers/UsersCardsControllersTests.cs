using EnglishApp.Application.DTOs.UserCardDTOs;
using EnglishApp.Core.Abstractions.UserCard;
using EnglishApp.Core.Exceptions.UserCardExceptions;
using EnglishStorageApplication.EnglishApp.Core.Models;
using EnglishStorageApplication.Server.Controllers;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;
using NSubstitute.ExceptionExtensions;
using Xunit;

namespace EnglishApp.Tests.Auth.Controllers;

public class UsersCardsControllersTests
{
    [Fact]
    public async Task GetUserCards_ReturnsUserCardsOk()
    {
        // Arrange
        var mockService = Substitute.For<IUserCardService>();
        var userId = Guid.NewGuid();
        var ct = new CancellationToken();
        const int ARRAY_SIZE = 2;

        var userscards = new List<UserCard>(2)
        {
            new UserCard
            {
                Id = Guid.NewGuid(),
                UserId = userId,
            },
            new UserCard
            {
                Id = Guid.NewGuid(),
                UserId = userId,
            }
        };

        mockService.GetUserCards(userId, ct).Returns(userscards);
        var controller = new UsersCardsController(mockService);
        
        // Act
        var result = await controller.GetUserCards(userId, ct);
        
        // Assert
        Assert.NotNull(result);
        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        var returnedCards = Assert.IsAssignableFrom<IEnumerable<UserCard>>(okResult.Value);
        Assert.Equal(ARRAY_SIZE, returnedCards.Count());
    }

    [Fact]
    public async Task CreateUserCard_ReturnsGuidOk()
    {
        // Arrange
        var mockService = Substitute.For<IUserCardService>();
        var ct = new CancellationToken();
        var userCard = new UserCard
        {
            Id = Guid.NewGuid(),
            UserId = Guid.NewGuid(),
            NameOfUsersCard = "name"
        };

        mockService.CreateUserCard(userCard, ct).Returns(userCard.Id);
        var controller = new UsersCardsController(mockService);
        
        // Act
        var createUserCardDto = new CreateUserCardDto
        {
            UserId = userCard.UserId,
            NameOfUsersCard = userCard.NameOfUsersCard
        };
        
        var result = await controller.CreateUserCard(createUserCardDto, ct);
        
        // Assert
        Assert.NotNull(result);
        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        Assert.IsAssignableFrom<Guid>(okResult.Value);
    }

    [Fact]
    public async Task UpdateUserCard_WhenUserCardDoesNotExist_ReturnsException()
    {
        // Arrange
        var mockService = Substitute.For<IUserCardService>();
        var ct = new CancellationToken();
        
        var userCard = new UserCard
        {
            Id = Guid.NewGuid(),
            UserId = Guid.NewGuid(),
            NameOfUsersCard = "name"
        };
        
        mockService
            .UpdateUserCard(Arg.Any<Guid>(), Arg.Any<UserCard>(), ct)
            .Throws(new NotFoundUserCardException("User card wasn't found"));
        
        var controller = new UsersCardsController(mockService);
        
        // Act & Assert
        var updateUserCardDto = new UpdateUserCardDto
        {
            NameOfUsersCard = userCard.NameOfUsersCard
        };
        
        await Assert.ThrowsAsync<NotFoundUserCardException>(
            async () => await controller.UpdateUserCard(userCard.Id, updateUserCardDto, ct)
        );
    }

    [Fact]
    public async Task DeleteUserCard_WhenUserCardExists_ReturnsOk()
    {
        // Arrange 
        var mockService = Substitute.For<IUserCardService>();
        var ct = new CancellationToken();
        var userCard = new UserCard
        {
            Id = Guid.NewGuid(),
            UserId = Guid.NewGuid(),
            NameOfUsersCard = "name"
        };
        
        mockService.DeleteUserCard(userCard.Id, ct).Returns(userCard.Id);
        var controller = new UsersCardsController(mockService);
        
        // Act
        var result = await controller.DeleteUserCard(userCard.Id, ct);
        
        // Assert
        Assert.NotNull(result);
        Assert.IsType<OkObjectResult>(result.Result);
    }
    
    [Fact]
    public async Task DeleteUserCard_WhenUserCardDoesNotExist_ReturnsException()
    {
        // Arrange 
        var mockService = Substitute.For<IUserCardService>();
        var ct = new CancellationToken();
        var userCard = new UserCard
        {
            Id = Guid.NewGuid(),
            UserId = Guid.NewGuid(),
            NameOfUsersCard = "name"
        };
        
        mockService
            .DeleteUserCard(userCard.Id, ct)
            .Throws(new NotFoundUserCardException("User card wasn't found"));
        
        var controller = new UsersCardsController(mockService);
        
        // Act & Assert
        await Assert.ThrowsAsync<NotFoundUserCardException>(
            async () => await controller.DeleteUserCard(userCard.Id, ct)
        );
    }
}