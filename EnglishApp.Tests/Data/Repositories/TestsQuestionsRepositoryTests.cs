using EnglishApp.Core.Exceptions.TestQuestionExceptions;
using EnglishApp.DataAccess;
using EnglishApp.DataAccess.Repositories;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;
using TestEntity = EnglishApp.Core.Models.Test;
using TestQuestionEntity = EnglishApp.Core.Models.TestQuestion;
using Xunit;

namespace EnglishApp.Tests.Data.Repositories;

public class TestsQuestionsRepositoryTests : IDisposable
{
    private readonly ApplicationDbContext _context;
    private readonly TestsQuestionsRepository _repository;

    public TestsQuestionsRepositoryTests()
    {
        var options = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseInMemoryDatabase(databaseName: $"TestQuestionsRepositoryDb_{Guid.NewGuid()}")
            .Options;

        _context = new ApplicationDbContext(options);
        _repository = new TestsQuestionsRepository(_context);

        SeedData();
    }

    [Fact]
    public async Task GetTestsQuestionsByTestIdAsync_ReturnsOnlyTestQuestions()
    {
        var testId = _context.TestQuestions.First().TestId;

        var result = await _repository.GetTestsQuestionsByTestIdAsync(testId, CancellationToken.None);

        Assert.Equal(2, result.Count);
        Assert.All(result, question => Assert.Equal(testId, question.TestId));
    }

    [Fact]
    public async Task CreateTestQuestionAsync_CreatesNewQuestion()
    {
        var testId = _context.Tests.First().Id;
        var question = new TestQuestionEntity
        {
            Id = Guid.NewGuid(),
            TestId = testId,
            Type = "single",
            Question = "Created question",
            Options = ["A", "B"],
            CorrectAnswer = "A"
        };

        var result = await _repository.CreateTestQuestionAsync(question, CancellationToken.None);

        Assert.Equal(question.Id, result.Id);
        var fromDb = await _context.TestQuestions.FindAsync(question.Id);
        Assert.NotNull(fromDb);
        Assert.Equal(question.Question, fromDb!.Question);
    }

    [Fact]
    public async Task UpdateTestQuestionAsync_UpdatesQuestionFields()
    {
        var existing = _context.TestQuestions.First();
        var updated = new TestQuestionEntity
        {
            Id = existing.Id,
            Type = "multiple",
            Question = "Updated question",
            Options = ["A", "B", "C"],
            CorrectAnswer = "C"
        };

        var result = await _repository.UpdateTestQuestionAsync(updated, CancellationToken.None);

        Assert.Equal(existing.Id, result);
        var fromDb = await _context.TestQuestions.FindAsync(existing.Id);
        Assert.NotNull(fromDb);
        Assert.Equal(updated.Type, fromDb!.Type);
        Assert.Equal(updated.Question, fromDb.Question);
        Assert.Equal(updated.Options, fromDb.Options);
        Assert.Equal(updated.CorrectAnswer, fromDb.CorrectAnswer);
    }

    [Fact]
    public async Task UpdateTestQuestionAsync_WithInvalidId_ThrowsNotFoundException()
    {
        var updated = new TestQuestionEntity
        {
            Id = Guid.NewGuid(),
            Type = "single",
            Question = "Missing",
            Options = ["A"],
            CorrectAnswer = "A"
        };

        await Assert.ThrowsAsync<TestQuestionWasNotFoundException>(() =>
            _repository.UpdateTestQuestionAsync(updated, CancellationToken.None));
    }

    [Fact]
    public async Task DeleteTestQuestionAsync_DeletesQuestion()
    {
        var existing = _context.TestQuestions.First();

        var result = await _repository.DeleteTestQuestionAsync(existing.Id, CancellationToken.None);

        Assert.Equal(existing.Id, result);
        var fromDb = await _context.TestQuestions.FindAsync(existing.Id);
        Assert.Null(fromDb);
    }

    private void SeedData()
    {
        var user = new User
        {
            Id = Guid.NewGuid(),
            Name = "Teacher",
            Email = "teacher@example.com",
            PasswordHash = "hash"
        };

        var firstTest = new TestEntity
        {
            Id = Guid.NewGuid(),
            UserId = user.Id,
            Name = "First test",
            Description = "Description",
            IsPublic = true,
            PassCount = 0,
            LastUpdateAt = DateTime.UtcNow
        };

        var secondTest = new TestEntity
        {
            Id = Guid.NewGuid(),
            UserId = user.Id,
            Name = "Second test",
            Description = "Description",
            IsPublic = true,
            PassCount = 0,
            LastUpdateAt = DateTime.UtcNow
        };

        _context.Users.Add(user);
        _context.Tests.AddRange(firstTest, secondTest);
        _context.TestQuestions.AddRange(
            new TestQuestionEntity
            {
                Id = Guid.NewGuid(),
                TestId = firstTest.Id,
                Type = "single",
                Question = "Q1",
                Options = ["A", "B"],
                CorrectAnswer = "A"
            },
            new TestQuestionEntity
            {
                Id = Guid.NewGuid(),
                TestId = firstTest.Id,
                Type = "single",
                Question = "Q2",
                Options = ["C", "D"],
                CorrectAnswer = "D"
            },
            new TestQuestionEntity
            {
                Id = Guid.NewGuid(),
                TestId = secondTest.Id,
                Type = "single",
                Question = "Other",
                Options = ["Yes", "No"],
                CorrectAnswer = "Yes"
            });

        _context.SaveChanges();
    }

    public void Dispose()
    {
        _context.Dispose();
    }
}
