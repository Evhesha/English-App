using EnglishApp.Application.DTOs.TestDTOs;
using EnglishApp.Core.Abstractions.Test;
using EnglishApp.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace EnglishStorageApplication.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TestsController : ControllerBase
{
    private readonly ITestService _testService;
    
    public TestsController(ITestService testService)
    {
        _testService = testService;
    }

    [HttpGet]
    public async Task<ActionResult<List<TestDto>>> GetTests(CancellationToken cancellationToken)
    {
        return Ok(await _testService.GetAllTets(cancellationToken));
    }

    [HttpGet("/{userId}")]
    public async Task<ActionResult<List<TestDto>>> GetTestByUserId(Guid userId, CancellationToken cancellationToken)
    {
        return Ok(await _testService.GetUserTests(userId, cancellationToken));
    }

    [HttpPost]
    public async Task<ActionResult<Guid>> CreateTest(
        [FromBody] CreateTestDto createTestDto,
        CancellationToken cancellationToken)
    {
        var test = new Test
        {
            Id =  Guid.NewGuid(),
            UserId = createTestDto.UserId,
            Name = createTestDto.Name,
            Description = createTestDto.Description,
            LastUpdateAt =  DateTime.UtcNow,
        };
        
        await _testService.CreateTest(test, cancellationToken);
        return test.Id;
    }

    [HttpPut("{testId:guid}")]
    public async Task<ActionResult<Guid>> UpdateTest(
        Guid testId,
        [FromBody] UpdateTestDto updateTestDto,
        CancellationToken cancellationToken)
    {
        var test = new Test
        {
            Id = testId,
            Name = updateTestDto.Name,
            Description = updateTestDto.Description,
            LastUpdateAt = DateTime.UtcNow,
        };

        await _testService.UpdateTest(test, cancellationToken);
        return Ok(testId);
    }

    [HttpDelete("{testId:guid}")]
    public async Task<ActionResult<Guid>> DeleteTest(Guid testId, CancellationToken cancellationToken)
    {
        return Ok(await _testService.DeleteTest(testId, cancellationToken));
    }
}