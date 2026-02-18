using EnglishApp.Application.DTOs.TestQuestionDTOs;
using EnglishApp.Core.Abstractions.TestQuestion;
using EnglishApp.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace EnglishStorageApplication.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TestQuestionController : ControllerBase
{
    private readonly ITestQuestionService _testQuestionService;

    public TestQuestionController(ITestQuestionService testQuestionService)
    {
        _testQuestionService = testQuestionService;   
    }

    [HttpGet("{testId:guid}")]
    public async Task<ActionResult<List<TestQuestionDto>>> GetTestQuestions(
        Guid testId,
        CancellationToken cancellationToken)
    {
        return Ok(await _testQuestionService.GetTestQuestion(testId, cancellationToken));
    }

    [HttpPost]
    public async Task<ActionResult<Guid>> CreateTestQuestion(
        CreateTestQuestionDto createTestQuestionDto,
        CancellationToken cancellationToken)
    {
        var testQuestion = new TestQuestion
        {
            Id = Guid.NewGuid(),
            TestId = createTestQuestionDto.TestId,
            Type = createTestQuestionDto.Type,
            Question = createTestQuestionDto.Question,
            Options = createTestQuestionDto.Options,
            CorrectAnswer = createTestQuestionDto.CorrectAnswer,
        };
        
        await _testQuestionService.CreateTestQuestion(testQuestion, cancellationToken);
        return Ok(testQuestion.Id);
    }

    [HttpPut("{id:guid}")]
    public async Task<ActionResult<Guid>> UpdateTestQuestion(
        Guid id,
        [FromBody] UpdateTestQuestionDto updateTestQuestionDto,
        CancellationToken cancellationToken)
    {
        var testQuestion = new TestQuestion
        {
            Id = id,
            Type = updateTestQuestionDto.Type,
            Question = updateTestQuestionDto.Question,
            Options = updateTestQuestionDto.Options,
            CorrectAnswer = updateTestQuestionDto.CorrectAnswer,
        };
        
        await _testQuestionService.UpdateTestQuestion(testQuestion, cancellationToken);
        return Ok(testQuestion.Id);
    }

    [HttpDelete("{testQuestionId:guid}")]
    public async Task<ActionResult> DeleteTestQuestion(Guid testQuestionId, CancellationToken cancellationToken)
    {
        return Ok(await _testQuestionService.DeleteTestQuestion(testQuestionId, cancellationToken));
    }
}