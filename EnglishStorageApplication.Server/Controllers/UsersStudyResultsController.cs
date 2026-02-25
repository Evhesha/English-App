using EnglishApp.Application.DTOs.UserStudyResultDTOs;
using EnglishApp.Core.Abstractions.Test;
using EnglishApp.Core.Abstractions.UserStudyResult;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using EnglishApp.Core.Models;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersStudyResultsController : ControllerBase
    {
        private readonly IUserStudyResultService _userStudyResultService;
        private readonly ITestService _testService;

        public UsersStudyResultsController(
            IUserStudyResultService userStudyResultUserStudyResultService,
            ITestService testService)
        {
            _userStudyResultService = userStudyResultUserStudyResultService;
            _testService = testService;
        }

        [HttpGet]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult<List<UserStudyResultDto>>> GetUsersStudyResults(
            CancellationToken cancellationToken)
        {
            var usersResults = await _userStudyResultService.GetAllUsersResults(cancellationToken);
                
            return Ok(usersResults);
        }

        [HttpGet("{userId:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult<List<UserStudyResultDto>>> GetUserStudyResults(
            Guid userId,
            CancellationToken cancellationToken)
        {
            var userResults = await _userStudyResultService.GetUserResults(userId, cancellationToken);
            
            if (!userResults.Any())
            {
                return NoContent();
            }
            
            return Ok(userResults);
        }
        
        [HttpGet("percent/{userId:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult> GetUserStudyPercentById(
            Guid userId,
            CancellationToken cancellationToken)
        {
            var userResults = await _userStudyResultService.GetUserStudyPercentById(userId, cancellationToken);

            var userStudyPercentDto = new UserStudyPercentDto
            {
                Percent = userResults.Item1,
                Count = userResults.Item2
            };
            
            return Ok(userStudyPercentDto);
        }

        [HttpPost("users/{userId:guid}/tests-results")]
        public async Task<ActionResult<List<UserStudyResult>>> GetUserTestResultsBatch(
            Guid userId,
            [FromBody] List<Guid> testIds,
            CancellationToken cancellationToken)
        {
            return Ok(await _userStudyResultService.GetTestsStudyResultsByUserIdAndTestId(userId, testIds, cancellationToken));
        }
        
        [HttpPost]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult<Guid>> CreateUserStudyResult(
            [FromBody] CreateUserStudyResultDto createUserStudyResultDto,
            CancellationToken cancellationToken
        )
        {
            var userResult = new UserStudyResult
            {
                Id = Guid.NewGuid(),
                UserId = createUserStudyResultDto.UserId,
                TestId = createUserStudyResultDto.TestId,
                PercentResult = createUserStudyResultDto.PercentResult
            };

            var userResultId = await _userStudyResultService.CreateUserResult(userResult, cancellationToken);
            await _testService.IncrementTestPassCount(createUserStudyResultDto.TestId, cancellationToken);
            return Ok(userResultId);
        }

        [HttpPut("{id:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<IActionResult> UpdateUserStudyResult(
            Guid id,
            [FromBody] UpdateUserStudyResultDto updateUserStudyResultDto,
            CancellationToken cancellationToken
            )
        {
            var userResult = await _userStudyResultService.UpdateUserResult(
                id, updateUserStudyResultDto.PercentResult, cancellationToken);
            
            return Ok(userResult);
        }

        [HttpDelete("{id:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<IActionResult> DeleteUserStudyResult(Guid id, CancellationToken cancellationToken)
        {
            return Ok(await _userStudyResultService.DeleteUserResult(id, cancellationToken));
        }

        [HttpDelete("tests/{userId:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<IActionResult> DeleteUsersTestsStudyResults(Guid userId, CancellationToken cancellationToken)
        {
            return Ok(await _userStudyResultService.DeleteUsersStudyResultByUserId(userId, cancellationToken));
        }
    }
}