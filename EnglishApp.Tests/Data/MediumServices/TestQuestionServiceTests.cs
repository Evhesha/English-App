using EnglishApp.Application.AppServices;
using EnglishApp.Core.Abstractions.TestQuestion;
using NSubstitute;
using TestQuestionEntity = EnglishApp.Core.Models.TestQuestion;
using Xunit;

namespace EnglishApp.Tests.Data.MediumServices;

public class TestQuestionServiceTests
{
    private readonly ITestsQuestionsRepository _repository = Substitute.For<ITestsQuestionsRepository>();
    private readonly CancellationToken _ct = CancellationToken.None;

    [Fact]
    public async Task GetTestQuestion_ReturnsRepositoryQuestions()
    {
        var testId = Guid.NewGuid();
        var questions = new List<TestQuestionEntity>
        {
            new() { Id = Guid.NewGuid(), TestId = testId, Type = "single", Question = "Q1", Options = ["A"], CorrectAnswer = "A" },
            new() { Id = Guid.NewGuid(), TestId = testId, Type = "single", Question = "Q2", Options = ["B"], CorrectAnswer = "B" }
        };

        _repository.GetTestsQuestionsByTestIdAsync(testId, _ct).Returns(questions);
        var service = new TestQuestionService(_repository);

        var result = await service.GetTestQuestion(testId, _ct);

        Assert.Equal(2, result.Count);
        Assert.All(result, question => Assert.Equal(testId, question.TestId));
    }

    [Fact]
    public async Task CreateTestQuestion_ReturnsCreatedEntity()
    {
        var question = new TestQuestionEntity
        {
            Id = Guid.NewGuid(),
            TestId = Guid.NewGuid(),
            Type = "single",
            Question = "Question",
            Options = ["A", "B"],
            CorrectAnswer = "A"
        };

        _repository.CreateTestQuestionAsync(question, _ct).Returns(question);
        var service = new TestQuestionService(_repository);

        var result = await service.CreateTestQuestion(question, _ct);

        Assert.Same(question, result);
        await _repository.Received(1).CreateTestQuestionAsync(question, _ct);
    }

    [Fact]
    public async Task UpdateTestQuestion_ReturnsRepositoryResult()
    {
        var question = new TestQuestionEntity
        {
            Id = Guid.NewGuid(),
            TestId = Guid.NewGuid(),
            Type = "single",
            Question = "Updated",
            Options = ["A", "B"],
            CorrectAnswer = "B"
        };

        _repository.UpdateTestQuestionAsync(question, _ct).Returns(question.Id);
        var service = new TestQuestionService(_repository);

        var result = await service.UpdateTestQuestion(question, _ct);

        Assert.Equal(question.Id, result);
        await _repository.Received(1).UpdateTestQuestionAsync(question, _ct);
    }

    [Fact]
    public async Task DeleteTestQuestion_ReturnsRepositoryResult()
    {
        var questionId = Guid.NewGuid();

        _repository.DeleteTestQuestionAsync(questionId, _ct).Returns(questionId);
        var service = new TestQuestionService(_repository);

        var result = await service.DeleteTestQuestion(questionId, _ct);

        Assert.Equal(questionId, result);
        await _repository.Received(1).DeleteTestQuestionAsync(questionId, _ct);
    }
}
