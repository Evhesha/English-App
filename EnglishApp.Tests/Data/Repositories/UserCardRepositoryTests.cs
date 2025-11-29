using EnglishApp.Core.Abstractions.UserCard;
using EnglishApp.Core.Exceptions.UserCardExceptions;
using EnglishApp.Core.Models;
using EnglishApp.DataAccess;
using EnglishStorageApplication.EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.DataAccess.Repositories;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace EnglishApp.Tests.Repositories.UserCards;

public class UsersCardsRepositoryTests : IDisposable
{
    private readonly ApplicationDbContext _context;
    private readonly UsersCardsRepository _repository;

    public UsersCardsRepositoryTests()
    {
        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: $"TestDb_{Guid.NewGuid()}")
            .Options;

        _context = new ApplicationDbContext(options);
        _repository = new UsersCardsRepository(_context);
        
        InitializeTestData();
    }

    private void InitializeTestData()
    {
        var testUsers = new List<User>
        {
            new User { Id = Guid.NewGuid(), Name = "User 1", Email = "user1@test.com", PasswordHash = "hash1" },
            new User { Id = Guid.NewGuid(), Name = "User 2", Email = "user2@test.com", PasswordHash = "hash2" }
        };

        _context.Users.AddRange(testUsers);

        var testUserCards = new List<UserCard>
        {
            new UserCard 
            { 
                Id = Guid.NewGuid(), 
                UserId = testUsers[0].Id, 
                NameOfUsersCard = "Vocabulary Set 1",
                UserCardData = "{\"words\": [\"apple\", \"banana\"]}",
                User = testUsers[0]
            },
            new UserCard 
            { 
                Id = Guid.NewGuid(), 
                UserId = testUsers[0].Id, 
                NameOfUsersCard = "Grammar Rules",
                UserCardData = "{\"rules\": [\"present simple\"]}",
                User = testUsers[0]
            },
            new UserCard 
            { 
                Id = Guid.NewGuid(), 
                UserId = testUsers[1].Id, 
                NameOfUsersCard = "Phrasal Verbs",
                UserCardData = "{\"verbs\": [\"give up\", \"look after\"]}",
                User = testUsers[1]
            }
        };

        _context.UsersCards.AddRange(testUserCards);
        _context.SaveChanges();
    }

    [Fact]
    public async Task GetUsersCardsAsync_ReturnsAllCards()
    {
        // Act
        var results = await _repository.GetUsersCardsAsync(CancellationToken.None);

        // Assert
        Assert.NotNull(results);
        Assert.Equal(3, results.Count);
    }

    [Fact]
    public async Task GetUserCardsByUserIdAsync_ReturnsOnlyUserCards()
    {
        // Arrange
        var userId = _context.UsersCards.First().UserId;

        // Act
        var results = await _repository.GetUserCardsByUserIdAsync(userId, CancellationToken.None);

        // Assert
        Assert.NotNull(results);
        Assert.Equal(2, results.Count); // У первого пользователя 2 карточки
        Assert.All(results, card => Assert.Equal(userId, card.UserId));
    }

    [Fact]
    public async Task GetUserCardsByUserIdAsync_WithInvalidUserId_ReturnsEmptyList()
    {
        // Arrange
        var invalidUserId = Guid.NewGuid();

        // Act
        var results = await _repository.GetUserCardsByUserIdAsync(invalidUserId, CancellationToken.None);

        // Assert
        Assert.NotNull(results);
        Assert.Empty(results);
    }

    [Fact]
    public async Task CreateUserCardAsync_CreatesNewCard()
    {
        // Arrange
        var newCard = new UserCard
        {
            Id = Guid.NewGuid(),
            UserId = Guid.NewGuid(),
            NameOfUsersCard = "New Vocabulary",
            UserCardData = "{\"words\": [\"cat\", \"dog\"]}"
        };

        // Act
        var cardId = await _repository.CreateUserCardAsync(newCard, CancellationToken.None);

        // Assert
        Assert.Equal(newCard.Id, cardId);
        
        var createdCard = await _context.UsersCards.FindAsync(cardId);
        Assert.NotNull(createdCard);
        Assert.Equal(newCard.NameOfUsersCard, createdCard.NameOfUsersCard);
        Assert.Equal(newCard.UserCardData, createdCard.UserCardData);
        Assert.Equal(newCard.UserId, createdCard.UserId);
    }

    [Fact]
    public async Task UpdateUserCardAsync_UpdatesCardProperties()
    {
        // Arrange
        var existingCard = _context.UsersCards.First();
        var updatedCard = new UserCard
        {
            Id = existingCard.Id,
            NameOfUsersCard = "Updated Name",
            UserCardData = "{\"updated\": true}"
        };

        // Act
        var updatedId = await _repository.UpdateUserCardAsync(existingCard.Id, updatedCard, CancellationToken.None);

        // Assert
        Assert.Equal(existingCard.Id, updatedId);
        
        var cardFromDb = await _context.UsersCards.FindAsync(existingCard.Id);
        Assert.NotNull(cardFromDb);
        Assert.Equal(updatedCard.NameOfUsersCard, cardFromDb.NameOfUsersCard);
        Assert.Equal(updatedCard.UserCardData, cardFromDb.UserCardData);
        // Проверяем что UserId не изменился
        Assert.Equal(existingCard.UserId, cardFromDb.UserId);
    }

    [Fact]
    public async Task UpdateUserCardAsync_WithInvalidId_ThrowsNotFoundException()
    {
        // Arrange
        var invalidId = Guid.NewGuid();
        var card = new UserCard
        {
            Id = invalidId,
            NameOfUsersCard = "Invalid Card"
        };

        // Act & Assert
        await Assert.ThrowsAsync<NotFoundUserCardException>(() =>
            _repository.UpdateUserCardAsync(invalidId, card, CancellationToken.None));
    }

    [Fact]
    public async Task UpdateUserCardAsync_WithMismatchedIds_ThrowsNotFoundException()
    {
        // Arrange
        var existingCard = _context.UsersCards.First();
        var cardWithDifferentId = new UserCard
        {
            Id = Guid.NewGuid(), // Другой ID
            NameOfUsersCard = "Different Card"
        };

        // Act & Assert
        await Assert.ThrowsAsync<NotFoundUserCardException>(() =>
            _repository.UpdateUserCardAsync(existingCard.Id, cardWithDifferentId, CancellationToken.None));
    }

    [Fact]
    public async Task DeleteUserCardAsync_DeletesCard()
    {
        // Arrange
        var cardToDelete = _context.UsersCards.First();

        // Act
        var deletedId = await _repository.DeleteUserCardAsync(cardToDelete.Id, CancellationToken.None);

        // Assert
        Assert.Equal(cardToDelete.Id, deletedId);
        
        var deletedCard = await _context.UsersCards.FindAsync(cardToDelete.Id);
        Assert.Null(deletedCard);
    }

    [Fact]
    public async Task DeleteUserCardAsync_WithInvalidId_ThrowsNotFoundException()
    {
        // Arrange
        var invalidId = Guid.NewGuid();

        // Act & Assert
        await Assert.ThrowsAsync<NotFoundUserCardException>(() =>
            _repository.DeleteUserCardAsync(invalidId, CancellationToken.None));
    }

    [Fact]
    public async Task GetMethods_UseAsNoTracking()
    {
        // Arrange
        var userId = _context.UsersCards.First().UserId;

        // Act
        var allCards = await _repository.GetUsersCardsAsync(CancellationToken.None);
        var userCards = await _repository.GetUserCardsByUserIdAsync(userId, CancellationToken.None);

        // Assert 
        Assert.All(allCards, card => 
            Assert.Equal(EntityState.Detached, _context.Entry(card).State));
        Assert.All(userCards, card => 
            Assert.Equal(EntityState.Detached, _context.Entry(card).State));
    }

    [Fact]
    public async Task CreateUserCardAsync_WithValidData_SavesAllProperties()
    {
        // Arrange
        var newCard = new UserCard
        {
            Id = Guid.NewGuid(),
            UserId = Guid.NewGuid(),
            NameOfUsersCard = "Test Card",
            UserCardData = "{\"test\": \"data\", \"array\": [1, 2, 3]}"
        };

        // Act
        var cardId = await _repository.CreateUserCardAsync(newCard, CancellationToken.None);

        // Assert
        var createdCard = await _context.UsersCards.FindAsync(cardId);
        Assert.NotNull(createdCard);
        Assert.Equal(newCard.NameOfUsersCard, createdCard.NameOfUsersCard);
        Assert.Equal(newCard.UserCardData, createdCard.UserCardData);
        Assert.Equal(newCard.UserId, createdCard.UserId);
    }

    [Fact]
    public async Task UpdateUserCardAsync_UpdatesOnlyAllowedProperties()
    {
        // Arrange
        var existingCard = _context.UsersCards.First();
        var originalUserId = existingCard.UserId;
        
        var updatedCard = new UserCard
        {
            Id = existingCard.Id,
            UserId = Guid.NewGuid(), 
            NameOfUsersCard = "Updated Name",
            UserCardData = "{\"updated\": \"data\"}"
        };

        // Act
        var updatedId = await _repository.UpdateUserCardAsync(existingCard.Id, updatedCard, CancellationToken.None);

        // Assert
        var cardFromDb = await _context.UsersCards.FindAsync(updatedId);
        Assert.NotNull(cardFromDb);
        Assert.Equal(updatedCard.NameOfUsersCard, cardFromDb.NameOfUsersCard);
        Assert.Equal(updatedCard.UserCardData, cardFromDb.UserCardData);
        // UserId не должен измениться
        Assert.Equal(originalUserId, cardFromDb.UserId);
    }

    [Fact]
    public async Task ComplexScenario_MultipleUsersWithCards()
    {
        // Arrange
        var user1Id = _context.Users.First().Id;
        var user2Id = _context.Users.Skip(1).First().Id;

        // Act & Assert 
        var user1Cards = await _repository.GetUserCardsByUserIdAsync(user1Id, CancellationToken.None);
        var user2Cards = await _repository.GetUserCardsByUserIdAsync(user2Id, CancellationToken.None);

        Assert.Equal(2, user1Cards.Count);
        Assert.Single(user2Cards);

        var newCard = new UserCard
        {
            Id = Guid.NewGuid(),
            UserId = user1Id,
            NameOfUsersCard = "Additional Card",
            UserCardData = "{\"new\": \"card\"}"
        };

        await _repository.CreateUserCardAsync(newCard, CancellationToken.None);
        
        user1Cards = await _repository.GetUserCardsByUserIdAsync(user1Id, CancellationToken.None);
        Assert.Equal(3, user1Cards.Count);

        await _repository.DeleteUserCardAsync(newCard.Id, CancellationToken.None);
        user1Cards = await _repository.GetUserCardsByUserIdAsync(user1Id, CancellationToken.None);
        Assert.Equal(2, user1Cards.Count);
    }

    public void Dispose()
    {
        _context?.Dispose();
    }
}