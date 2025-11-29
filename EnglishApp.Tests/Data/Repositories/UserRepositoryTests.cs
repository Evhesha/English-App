using EnglishApp.Core.Exceptions.UserExceptions;
using EnglishApp.DataAccess;
using EnglishApp.DataAccess.Repositories;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace EnglishApp.Tests.Data.Repositories;

public class UsersRepositoryTests : IDisposable
{
    private readonly ApplicationDbContext _context;
    private readonly UsersRepository _repository;

    public UsersRepositoryTests()
    {
        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: $"TestDb_{Guid.NewGuid()}")
            .Options;

        _context = new ApplicationDbContext(options);
        _repository = new UsersRepository(_context);
        
        InitializeTestData();
    }

    private void InitializeTestData()
    {
        var testUsers = new List<User>
        {
            new User 
            { 
                Id = Guid.NewGuid(), 
                Name = "John Doe", 
                Email = "john@example.com", 
                PasswordHash = "hash1",
                Role = "User"
            },
            new User 
            { 
                Id = Guid.NewGuid(), 
                Name = "Jane Smith", 
                Email = "jane@example.com", 
                PasswordHash = "hash2",
                Role = "Admin"
            },
            new User 
            { 
                Id = Guid.NewGuid(), 
                Name = "Bob Johnson", 
                Email = "bob@example.com", 
                PasswordHash = "hash3",
                Role = "User"
            }
        };

        _context.Users.AddRange(testUsers);
        _context.SaveChanges();
    }

    [Fact]
    public async Task GetUserByIdAsync_ReturnsCorrectUser()
    {
        // Arrange
        var expectedUser = _context.Users.First();

        // Act
        var result = await _repository.GetUserByIdAsync(expectedUser.Id, CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(expectedUser.Id, result.Id);
        Assert.Equal(expectedUser.Name, result.Name);
        Assert.Equal(expectedUser.Email, result.Email);
    }

    [Fact]
    public async Task GetUserByIdAsync_WithInvalidId_ThrowsNotFoundException()
    {
        // Arrange
        var invalidId = Guid.NewGuid();

        // Act & Assert
        await Assert.ThrowsAsync<NotFoundUserException>(() =>
            _repository.GetUserByIdAsync(invalidId, CancellationToken.None));
    }

    [Fact]
    public async Task GetUserByEmailAsync_ReturnsCorrectUser()
    {
        // Arrange
        var expectedUser = _context.Users.First();
        var email = expectedUser.Email;

        // Act
        var result = await _repository.GetUserByEmailAsync(email, CancellationToken.None);

        // Assert
        Assert.NotNull(result);
        Assert.Equal(expectedUser.Id, result.Id);
        Assert.Equal(expectedUser.Email, result.Email);
        Assert.Equal(expectedUser.Name, result.Name);
    }

    [Fact]
    public async Task GetUserByEmailAsync_WithInvalidEmail_ThrowsNotFoundException()
    {
        // Arrange
        var invalidEmail = "nonexistent@example.com";

        // Act & Assert
        await Assert.ThrowsAsync<NotFoundUserException>(() =>
            _repository.GetUserByEmailAsync(invalidEmail, CancellationToken.None));
    }

    [Fact]
    public async Task CreateUserAsync_CreatesNewUser()
    {
        // Arrange
        var newUser = new User
        {
            Id = Guid.NewGuid(),
            Name = "New User",
            Email = "newuser@example.com",
            PasswordHash = "newhash",
            Role = "User"
        };

        // Act
        var userId = await _repository.CreateUserAsync(newUser, CancellationToken.None);

        // Assert
        Assert.Equal(newUser.Id, userId);
        
        var createdUser = await _context.Users.FindAsync(userId);
        Assert.NotNull(createdUser);
        Assert.Equal(newUser.Name, createdUser.Name);
        Assert.Equal(newUser.Email, createdUser.Email);
        Assert.Equal(newUser.PasswordHash, createdUser.PasswordHash);
        Assert.Equal(newUser.Role, createdUser.Role);
    }

    [Fact]
    public async Task UpdateUserAsync_UpdatesUserProperties()
    {
        // Arrange
        var existingUser = _context.Users.First();
        var updatedUser = new User
        {
            Id = existingUser.Id,
            Name = "Updated Name",
            Email = "updated@example.com",
            PasswordHash = "updatedhash"
        };

        // Act
        var updatedId = await _repository.UpdateUserAsync(updatedUser, CancellationToken.None);

        // Assert
        Assert.Equal(existingUser.Id, updatedId);
        
        var userFromDb = await _context.Users.FindAsync(existingUser.Id);
        Assert.NotNull(userFromDb);
        Assert.Equal(updatedUser.Name, userFromDb.Name);
        Assert.Equal(updatedUser.Email, userFromDb.Email);
        Assert.Equal(updatedUser.PasswordHash, userFromDb.PasswordHash);
        // Роль не должна измениться при обычном обновлении
        Assert.Equal(existingUser.Role, userFromDb.Role);
    }

    [Fact]
    public async Task UpdateUserRoleAsync_UpdatesOnlyRole()
    {
        // Arrange
        var existingUser = _context.Users.First();
        var originalName = existingUser.Name;
        var originalEmail = existingUser.Email;
        
        var userWithNewRole = new User
        {
            Id = existingUser.Id,
            Role = "Admin" 
        };

        // Act
        var updatedId = await _repository.UpdateUserRoleAsync(userWithNewRole, CancellationToken.None);

        // Assert
        Assert.Equal(existingUser.Id, updatedId);
        
        var userFromDb = await _context.Users.FindAsync(existingUser.Id);
        Assert.NotNull(userFromDb);
        Assert.Equal("Admin", userFromDb.Role);
        Assert.Equal(originalName, userFromDb.Name);
        Assert.Equal(originalEmail, userFromDb.Email);
        Assert.Equal(existingUser.PasswordHash, userFromDb.PasswordHash);
    }

    [Fact]
    public async Task UpdateUserRoleAsync_WithInvalidId_ThrowsNotFoundException()
    {
        // Arrange
        var invalidUser = new User
        {
            Id = Guid.NewGuid(),
            Role = "Admin"
        };

        // Act & Assert
        await Assert.ThrowsAsync<NotFoundUserException>(() =>
            _repository.UpdateUserRoleAsync(invalidUser, CancellationToken.None));
    }

    [Fact]
    public async Task DeleteUserAsync_DeletesUser()
    {
        // Arrange
        var userToDelete = _context.Users.First();

        // Act
        var deletedId = await _repository.DeleteUserAsync(userToDelete.Id, CancellationToken.None);

        // Assert
        Assert.Equal(userToDelete.Id, deletedId);
        
        var deletedUser = await _context.Users.FindAsync(userToDelete.Id);
        Assert.Null(deletedUser);
    }

    [Fact]
    public async Task DeleteUserAsync_WithInvalidId_ThrowsNotFoundException()
    {
        // Arrange
        var invalidId = Guid.NewGuid();

        // Act & Assert
        await Assert.ThrowsAsync<NotFoundUserException>(() =>
            _repository.DeleteUserAsync(invalidId, CancellationToken.None));
    }
    
    public void Dispose()
    {
        _context?.Dispose();
    }
}