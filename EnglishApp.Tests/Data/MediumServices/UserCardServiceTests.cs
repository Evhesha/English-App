using EnglishApp.Application.AppServices;
using EnglishApp.Core.Abstractions.UserCard;
using EnglishStorageApplication.EnglishApp.Core.Models;
using NSubstitute;
using Xunit;

namespace EnglishApp.Tests.Data.MediumServices;

public class UserCardServiceTests
{
    IUsersCardsRepository mockRepo = Substitute.For<IUsersCardsRepository>();
    CancellationToken ct = new CancellationToken();
    
    [Fact]
    public async Task GetUserCards_WithValidUserId_ReturnsUserCards()
    {
        // Arrange
        var userId = Guid.NewGuid();
        var userCards = new List<UserCard>
        {
            new() { 
                Id = Guid.NewGuid(), 
                UserId = userId, 
                NameOfUsersCard = "Vocabulary Set 1",
                UserCardData = "Word data 1"
            },
            new() { 
                Id = Guid.NewGuid(), 
                UserId = userId, 
                NameOfUsersCard = "Vocabulary Set 2",
                UserCardData = "Word data 2"
            }
        };
        
        mockRepo.GetUserCardsByUserIdAsync(userId, ct).Returns(userCards);
        var service = new UserCardService(mockRepo);
        
        // Act
        var result = await service.GetUserCards(userId, ct);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(2, result.Count);
        Assert.All(result, card => Assert.Equal(userId, card.UserId));
        Assert.Equal("Vocabulary Set 1", result[0].NameOfUsersCard);
    }

    [Fact]
    public async Task CreateUserCard_WithValidData_ReturnsGuid()
    {
        // Arrange
        var userCard = new UserCard 
        { 
            Id = Guid.NewGuid(), 
            UserId = Guid.NewGuid(), 
            NameOfUsersCard = "New Vocabulary Set",
            UserCardData = "New word data"
        };
        var expectedGuid = Guid.NewGuid();
        
        mockRepo.CreateUserCardAsync(userCard, ct).Returns(expectedGuid);
        var service = new UserCardService(mockRepo);
        
        // Act
        var result = await service.CreateUserCard(userCard, ct);

        // Assert
        Assert.Equal(expectedGuid, result);
    }

    [Fact]
    public async Task UpdateUserCard_WithValidData_ReturnsGuid()
    {
        // Arrange
        var cardId = Guid.NewGuid();
        var userCard = new UserCard 
        { 
            Id = cardId, 
            UserId = Guid.NewGuid(), 
            NameOfUsersCard = "Updated Vocabulary Set",
            UserCardData = "Updated word data"
        };
        var expectedGuid = Guid.NewGuid();
        
        mockRepo.UpdateUserCardAsync(cardId, userCard, ct).Returns(expectedGuid);
        var service = new UserCardService(mockRepo);
        
        // Act
        var result = await service.UpdateUserCard(cardId, userCard, ct);

        // Assert
        Assert.Equal(expectedGuid, result);
    }

    [Fact]
    public async Task DeleteUserCard_WithValidId_ReturnsGuid()
    {
        // Arrange
        var cardId = Guid.NewGuid();
        var expectedGuid = Guid.NewGuid();
        
        mockRepo.DeleteUserCardAsync(cardId, ct).Returns(expectedGuid);
        var service = new UserCardService(mockRepo);
        
        // Act
        var result = await service.DeleteUserCard(cardId, ct);

        // Assert
        Assert.Equal(expectedGuid, result);
    }
}