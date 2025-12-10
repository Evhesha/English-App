using EnglishApp.Core.Exceptions.UserCardExceptions;
using EnglishApp.DataAccess;
using EnglishStorageApplication.EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.DataAccess.Repositories;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace EnglishApp.Tests.Data.Repositories;

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
        var user1Id = Guid.NewGuid();
        var user2Id = Guid.NewGuid();
    
        var testUsers = new List<User>
        {
            new User { Id = user1Id, Name = "User 1", Email = "user1@test.com", PasswordHash = "hash1" },
            new User { Id = user2Id, Name = "User 2", Email = "user2@test.com", PasswordHash = "hash2" }
        };

        _context.Users.AddRange(testUsers);

        var testUserCards = new List<UserCard>
        {
            new UserCard { Id = Guid.NewGuid(), UserId = user1Id, NameOfUsersCard = "Vocabulary Set 1", UserCardData = "{\"words\": [\"apple\", \"banana\"]}" },
            new UserCard { Id = Guid.NewGuid(), UserId = user1Id, NameOfUsersCard = "Grammar Rules", UserCardData = "{\"rules\": [\"present simple\"]}" },
            new UserCard { Id = Guid.NewGuid(), UserId = user2Id, NameOfUsersCard = "Phrasal Verbs", UserCardData = "{\"verbs\": [\"give up\", \"look after\"]}" }
        };

        _context.UsersCards.AddRange(testUserCards);
        _context.SaveChanges();
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
        Assert.Equal(2, results.Count); 
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
    
    public void Dispose()
    {
        _context?.Dispose();
    }
}