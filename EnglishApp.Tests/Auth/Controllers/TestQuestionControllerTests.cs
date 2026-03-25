using EnglishApp.Application.DTOs.TestQuestionDTOs;
using EnglishApp.Core.Abstractions.TestQuestion;
using EnglishStorageApplication.Server.Controllers;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;
using TestQuestionEntity = EnglishApp.Core.Models.TestQuestion;
using Xunit;

namespace EnglishApp.Tests.Auth.Controllers;

public class TestQuestionControllerTests
{
    private readonly ITestQuestionService _testQuestionService = Substitute.For<ITestQuestionService>();
    private readonly CancellationToken _ct = CancellationToken.None;

    [Fact]
    public async Task GetTestQuestions_ReturnsOkWithQuestions()
    {
        var testId = Guid.NewGuid();
        var questions = new List<TestQuestionEntity>
        {
            new() { Id = Guid.NewGuid(), TestId = testId, Type = "single", Question = "Q1", Options = ["A"], CorrectAnswer = "A" }
        };

        _testQuestionService.GetTestQuestion(testId, _ct).Returns(questions);
        var controller = new TestQuestionController(_testQuestionService);

        var result = await controller.GetTestQuestions(testId, _ct);

        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        var value = Assert.IsType<List<TestQuestionEntity>>(okResult.Value);
        Assert.Single(value);
    }

    [Fact]
    public async Task CreateTestQuestion_ReturnsGeneratedIdAndMapsDtoToEntity()
    {
        var dto = new CreateTestQuestionDto
        {
            TestId = Guid.NewGuid(),
            Type = "single",
            Question = "Created question",
            Options = ["A", "B"],
            CorrectAnswer = "A"
        };

        TestQuestionEntity? capturedQuestion = null;
        _testQuestionService.CreateTestQuestion(Arg.Do<TestQuestionEntity>(question => capturedQuestion = question), _ct)
            .Returns(callInfo => (TestQuestionEntity)callInfo[0]);

        var controller = new TestQuestionController(_testQuestionService);

        var result = await controller.CreateTestQuestion(dto, _ct);

        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        var returnedId = Assert.IsType<Guid>(okResult.Value);
        Assert.NotEqual(Guid.Empty, returnedId);
        Assert.NotNull(capturedQuestion);
        Assert.Equal(returnedId, capturedQuestion!.Id);
        Assert.Equal(dto.TestId, capturedQuestion.TestId);
        Assert.Equal(dto.Question, capturedQuestion.Question);
        Assert.Equal(dto.Options, capturedQuestion.Options);
        Assert.Equal(dto.CorrectAnswer, capturedQuestion.CorrectAnswer);
    }

    [Fact]
    public async Task UpdateTestQuestion_ReturnsOkWithRouteIdAndMapsDtoToEntity()
    {
        var questionId = Guid.NewGuid();
        var dto = new UpdateTestQuestionDto
        {
            Type = "multiple",
            Question = "Updated question",
            Options = ["A", "B", "C"],
            CorrectAnswer = "C"
        };

        TestQuestionEntity? capturedQuestion = null;
        _testQuestionService.UpdateTestQuestion(Arg.Do<TestQuestionEntity>(question => capturedQuestion = question), _ct)
            .Returns(questionId);

        var controller = new TestQuestionController(_testQuestionService);

        var result = await controller.UpdateTestQuestion(questionId, dto, _ct);

        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        Assert.Equal(questionId, okResult.Value);
        Assert.NotNull(capturedQuestion);
        Assert.Equal(questionId, capturedQuestion!.Id);
        Assert.Equal(dto.Type, capturedQuestion.Type);
        Assert.Equal(dto.Question, capturedQuestion.Question);
        Assert.Equal(dto.Options, capturedQuestion.Options);
        Assert.Equal(dto.CorrectAnswer, capturedQuestion.CorrectAnswer);
    }

    [Fact]
    public async Task DeleteTestQuestion_ReturnsOkWithDeletedId()
    {
        var questionId = Guid.NewGuid();
        _testQuestionService.DeleteTestQuestion(questionId, _ct).Returns(questionId);

        var controller = new TestQuestionController(_testQuestionService);

        var result = await controller.DeleteTestQuestion(questionId, _ct);

        var okResult = Assert.IsType<OkObjectResult>(result);
        Assert.Equal(questionId, okResult.Value);
    }
}
