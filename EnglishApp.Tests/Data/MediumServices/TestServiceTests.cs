using EnglishApp.Application.AppServices;
using EnglishApp.Core.Abstractions.Test;
using EnglishApp.Core.Params.LessonParams;
using EnglishApp.Core.Params.LessonParams.TestParams;
using EnglishApp.DataAccess;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;
using NSubstitute;
using TestEntity = EnglishApp.Core.Models.Test;
using Xunit;

namespace EnglishApp.Tests.Data.MediumServices;

public class TestServiceTests : IDisposable
{
    private readonly ApplicationDbContext _context;
    private readonly ITestsRepository _testsRepository;
    private readonly TestService _service;
    private readonly CancellationToken _ct = CancellationToken.None;

    public TestServiceTests()
    {
        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: $"TestServiceDb_{Guid.NewGuid()}")
            .Options;

        _context = new ApplicationDbContext(options);
        _testsRepository = Substitute.For<ITestsRepository>();
        _service = new TestService(_testsRepository);

        SeedTests();
    }

    [Fact]
    public async Task GetTestsWithParameters_AppliesPublicFilterSortingAndPaging()
    {
        var filter = new TestFilter { AuthorName = "Anna" };
        var sortParams = new SortParams
        {
            OrderBy = nameof(TestEntity.PassCount),
            Direction = SortDirection.Descending
        };
        var pageParams = new PageParams { Page = 1, PageSize = 1 };

        _testsRepository.GetTestsQueryable()
            .Returns(_context.Tests.Include(test => test.User).AsNoTracking());

        var (tests, totalCount) = await _service.GetTestsWithParameters(
            filter,
            sortParams,
            pageParams,
            _ct);

        Assert.Equal(2, totalCount);
        Assert.Single(tests);
        Assert.Equal("Public Advanced", tests[0].Name);
        Assert.True(tests[0].IsPublic);
        Assert.Equal("Anna Teacher", tests[0].User.Name);
    }

    [Fact]
    public async Task IncrementTestPassCount_ReturnsRepositoryResult()
    {
        var testId = Guid.NewGuid();

        _testsRepository.IncrementTestPassCountAsync(testId, _ct)
            .Returns(testId);

        var result = await _service.IncrementTestPassCount(testId, _ct);

        Assert.Equal(testId, result);
        await _testsRepository.Received(1).IncrementTestPassCountAsync(testId, _ct);
    }

    [Fact]
    public async Task CreateTest_ReturnsRepositoryResult()
    {
        var test = new TestEntity
        {
            Id = Guid.NewGuid(),
            UserId = Guid.NewGuid(),
            Name = "Grammar test",
            Description = "Description"
        };

        _testsRepository.CreateTestAsync(test, _ct).Returns(test.Id);

        var result = await _service.CreateTest(test, _ct);

        Assert.Equal(test.Id, result);
        await _testsRepository.Received(1).CreateTestAsync(test, _ct);
    }

    private void SeedTests()
    {
        var anna = new User
        {
            Id = Guid.NewGuid(),
            Name = "Anna Teacher",
            Email = "anna@example.com",
            PasswordHash = "hash"
        };

        var bob = new User
        {
            Id = Guid.NewGuid(),
            Name = "Bob Teacher",
            Email = "bob@example.com",
            PasswordHash = "hash"
        };

        _context.Users.AddRange(anna, bob);
        _context.Tests.AddRange(
            new TestEntity
            {
                Id = Guid.NewGuid(),
                UserId = anna.Id,
                User = anna,
                Name = "Public Basic",
                Description = "Basic",
                IsPublic = true,
                PassCount = 2,
                LastUpdateAt = DateTime.UtcNow.AddDays(-2)
            },
            new TestEntity
            {
                Id = Guid.NewGuid(),
                UserId = anna.Id,
                User = anna,
                Name = "Public Advanced",
                Description = "Advanced",
                IsPublic = true,
                PassCount = 9,
                LastUpdateAt = DateTime.UtcNow.AddDays(-1)
            },
            new TestEntity
            {
                Id = Guid.NewGuid(),
                UserId = anna.Id,
                User = anna,
                Name = "Private Draft",
                Description = "Draft",
                IsPublic = false,
                PassCount = 100,
                LastUpdateAt = DateTime.UtcNow
            },
            new TestEntity
            {
                Id = Guid.NewGuid(),
                UserId = bob.Id,
                User = bob,
                Name = "Bob Public",
                Description = "Other author",
                IsPublic = true,
                PassCount = 7,
                LastUpdateAt = DateTime.UtcNow
            });

        _context.SaveChanges();
    }

    public void Dispose()
    {
        _context.Dispose();
    }
}
