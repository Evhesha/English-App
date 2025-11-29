using EnglishApp.Core.Abstractions.User;
using EnglishApp.Core.Exceptions.UserExceptions;
using EnglishApp.Core.Models;
using EnglishApp.DataAccess;
using EnglishApp.DataAccess.Repositories;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace EnglishApp.Tests.Repositories.Users;

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
    public async Task GetUsersAsync_ReturnsAllUsers()
    {
        // Act
        var results = await _repository.GetUsersAsync(CancellationToken.None);

        // Assert
        Assert.NotNull(results);
        Assert.Equal(3, results.Count);
    }

    [Fact]
    public void GetUsersQueryable_ReturnsQueryable()
    {
        // Act
        var query = _repository.GetUsersQueryable();
        var results = query.ToList();

        // Assert
        Assert.NotNull(results);
        Assert.Equal(3, results.Count);
        Assert.IsAssignableFrom<IQueryable<User>>(query);
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
    public async Task GetUserByEmailAsync_WithCaseSensitiveEmail_ThrowsNotFoundException()
    {
        // Arrange
        var existingUser = _context.Users.First();
        var differentCaseEmail = existingUser.Email.ToUpper();

        // Act & Assert
        await Assert.ThrowsAsync<NotFoundUserException>(() =>
            _repository.GetUserByEmailAsync(differentCaseEmail, CancellationToken.None));
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
    public async Task UpdateUserAsync_WithInvalidId_ThrowsNotFoundException()
    {
        // Arrange
        var invalidUser = new User
        {
            Id = Guid.NewGuid(),
            Name = "Invalid User"
        };

        // Act & Assert
        await Assert.ThrowsAsync<NotFoundUserException>(() =>
            _repository.UpdateUserAsync(invalidUser, CancellationToken.None));
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
        Assert.Equal("Moderator", userFromDb.Role);
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

    [Fact]
    public async Task GetMethods_UseAsNoTracking()
    {
        // Act
        var allUsers = await _repository.GetUsersAsync(CancellationToken.None);
        var userById = await _repository.GetUserByIdAsync(_context.Users.First().Id, CancellationToken.None);
        var userByEmail = await _repository.GetUserByEmailAsync(_context.Users.First().Email, CancellationToken.None);

        // Assert 
        Assert.All(allUsers, user => 
            Assert.Equal(EntityState.Detached, _context.Entry(user).State));
        Assert.Equal(EntityState.Detached, _context.Entry(userById).State);
        Assert.Equal(EntityState.Detached, _context.Entry(userByEmail).State);
    }

    [Fact]
    public void GetUsersQueryable_AllowsFurtherFiltering()
    {
        // Arrange
        var adminEmail = "jane@example.com";

        // Act
        var adminUsers = _repository.GetUsersQueryable()
            .Where(u => u.Role == "Admin")
            .ToList();

        var specificUser = _repository.GetUsersQueryable()
            .FirstOrDefault(u => u.Email == adminEmail);

        // Assert
        Assert.Single(adminUsers);
        Assert.NotNull(specificUser);
        Assert.Equal("Admin", specificUser.Role);
        Assert.Equal(adminEmail, specificUser.Email);
    }

    [Fact]
    public async Task CreateUserAsync_WithDuplicateEmail_AllowsCreation()
    {
        // Arrange
        var existingUser = _context.Users.First();
        var newUserWithSameEmail = new User
        {
            Id = Guid.NewGuid(),
            Name = "Different User",
            Email = existingUser.Email, 
            PasswordHash = "differenthash",
            Role = "User"
        };

        // Act
        var userId = await _repository.CreateUserAsync(newUserWithSameEmail, CancellationToken.None);

        // Assert 
        Assert.Equal(newUserWithSameEmail.Id, userId);
        
        var usersWithSameEmail = _context.Users.Where(u => u.Email == existingUser.Email).ToList();
        Assert.Equal(2, usersWithSameEmail.Count);
    }

    [Fact]
    public async Task ComplexScenario_UserLifecycle()
    {
        // Arrange
        var newUser = new User
        {
            Id = Guid.NewGuid(),
            Name = "Test User",
            Email = "test@example.com",
            PasswordHash = "testhash",
            Role = "User"
        };

        // Act & Assert 
        var userId = await _repository.CreateUserAsync(newUser, CancellationToken.None);
        var createdUser = await _repository.GetUserByIdAsync(userId, CancellationToken.None);
        Assert.NotNull(createdUser);
        Assert.Equal("User", createdUser.Role);

        var userForRoleUpdate = new User { Id = userId, Role = "Admin" };
        await _repository.UpdateUserRoleAsync(userForRoleUpdate, CancellationToken.None);
        
        var updatedUser = await _repository.GetUserByIdAsync(userId, CancellationToken.None);
        Assert.Equal("Admin", updatedUser.Role);

        var userForUpdate = new User 
        { 
            Id = userId, 
            Name = "Updated Test User", 
            Email = "updated@example.com",
            PasswordHash = "updatedhash"
        };
        await _repository.UpdateUserAsync(userForUpdate, CancellationToken.None);
        
        var finalUser = await _context.Users.FindAsync(userId);
        Assert.NotNull(finalUser);
        Assert.Equal("Updated Test User", finalUser.Name);
        Assert.Equal("updated@example.com", finalUser.Email);
        Assert.Equal("updatedhash", finalUser.PasswordHash);
        Assert.Equal("Admin", finalUser.Role); 
        
        await _repository.DeleteUserAsync(userId, CancellationToken.None);
        await Assert.ThrowsAsync<NotFoundUserException>(() =>
            _repository.GetUserByIdAsync(userId, CancellationToken.None));
    }

    public void Dispose()
    {
        _context?.Dispose();
    }
}