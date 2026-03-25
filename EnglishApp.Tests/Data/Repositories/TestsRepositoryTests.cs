using EnglishApp.DataAccess;
using EnglishApp.DataAccess.Repositories;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;
using TestEntity = EnglishApp.Core.Models.Test;
using Xunit;

namespace EnglishApp.Tests.Data.Repositories;

public class TestsRepositoryTests : IDisposable
{
    private readonly ApplicationDbContext _context;
    private readonly TestsRepository _repository;

    public TestsRepositoryTests()
    {
        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: $"TestsRepositoryDb_{Guid.NewGuid()}")
            .Options;

        _context = new ApplicationDbContext(options);
        _repository = new TestsRepository(_context);

        SeedData();
    }

    [Fact]
    public void GetTestsQueryable_ReturnsTestsWithUsersIncluded()
    {
        var tests = _repository.GetTestsQueryable().ToList();

        Assert.Equal(3, tests.Count);
        Assert.All(tests, test => Assert.NotNull(test.User));
    }

    [Fact]
    public async Task GetUsersTestsAsync_ReturnsOnlySpecifiedUserTests()
    {
        var userId = _context.Tests.First().UserId;

        var tests = await _repository.GetUsersTestsAsync(userId, CancellationToken.None);

        Assert.Equal(2, tests.Count);
        Assert.All(tests, test => Assert.Equal(userId, test.UserId));
    }

    [Fact]
    public async Task GetTestByIdAsync_ReturnsCorrectTest()
    {
        var expected = _context.Tests.First();

        var result = await _repository.GetTestByIdAsync(expected.Id, CancellationToken.None);

        Assert.NotNull(result);
        Assert.Equal(expected.Id, result!.Id);
        Assert.Equal(expected.Name, result.Name);
    }

    [Fact]
    public async Task CreateTestAsync_CreatesNewTest()
    {
        var owner = _context.Users.First();
        var test = new TestEntity
        {
            Id = Guid.NewGuid(),
            UserId = owner.Id,
            Name = "Created test",
            Description = "Created description",
            IsPublic = true,
            PassCount = 0,
            LastUpdateAt = DateTime.UtcNow
        };

        var result = await _repository.CreateTestAsync(test, CancellationToken.None);

        Assert.Equal(test.Id, result);
        var created = await _context.Tests.FindAsync(test.Id);
        Assert.NotNull(created);
        Assert.Equal(test.Name, created!.Name);
    }

    [Fact]
    public async Task UpdateTestAsync_UpdatesMutableFields()
    {
        var existing = _context.Tests.First();
        var updated = new TestEntity
        {
            Id = existing.Id,
            Name = "Updated name",
            Description = "Updated description",
            IsPublic = !existing.IsPublic,
            LastUpdateAt = DateTime.UtcNow
        };

        var result = await _repository.UpdateTestAsync(updated, CancellationToken.None);

        Assert.Equal(existing.Id, result);
        var fromDb = await _context.Tests.FindAsync(existing.Id);
        Assert.NotNull(fromDb);
        Assert.Equal(updated.Name, fromDb!.Name);
        Assert.Equal(updated.Description, fromDb.Description);
        Assert.Equal(updated.IsPublic, fromDb.IsPublic);
        Assert.Equal(existing.UserId, fromDb.UserId);
        Assert.Equal(existing.PassCount, fromDb.PassCount);
    }

    private void SeedData()
    {
        var firstUser = new User
        {
            Id = Guid.NewGuid(),
            Name = "Anna",
            Email = "anna@example.com",
            PasswordHash = "hash"
        };

        var secondUser = new User
        {
            Id = Guid.NewGuid(),
            Name = "Bob",
            Email = "bob@example.com",
            PasswordHash = "hash"
        };

        _context.Users.AddRange(firstUser, secondUser);
        _context.Tests.AddRange(
            new TestEntity
            {
                Id = Guid.NewGuid(),
                UserId = firstUser.Id,
                Name = "Grammar basics",
                Description = "Basics",
                IsPublic = true,
                PassCount = 1,
                LastUpdateAt = DateTime.UtcNow.AddDays(-1)
            },
            new TestEntity
            {
                Id = Guid.NewGuid(),
                UserId = firstUser.Id,
                Name = "Advanced grammar",
                Description = "Advanced",
                IsPublic = false,
                PassCount = 4,
                LastUpdateAt = DateTime.UtcNow
            },
            new TestEntity
            {
                Id = Guid.NewGuid(),
                UserId = secondUser.Id,
                Name = "Vocabulary",
                Description = "Vocabulary",
                IsPublic = true,
                PassCount = 3,
                LastUpdateAt = DateTime.UtcNow
            });

        _context.SaveChanges();
    }

    public void Dispose()
    {
        _context.Dispose();
    }
}
