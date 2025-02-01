using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.Server.Contracts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using EnglishApp.Core.Models;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersStudyResultsController : ControllerBase
    {

        private readonly IUserStudyResultService _service;

        public UsersStudyResultsController(IUserStudyResultService userStudyResultService)
        {
            _service = userStudyResultService;
        }

        [HttpGet]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult<List<UsersStudyResultsResponse>>> GetUsersStudyResults()
        {
            var usersResults = await _service.GetAllUsersResults();
            var response = usersResults.Select(r => new UsersStudyResultsResponse(r.Id, r.UserId, r.TestId, r.PercentResult));
            return Ok(response);
        }

        [HttpGet("{userId:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult<List<UsersStudyResultsResponse>>> GetUserStudyResults(Guid userId)
        {
            var userResults = await _service.GetUserResults(userId);
            if (userResults == null || !userResults.Any())
            {
                return NoContent();
            }

            var response = userResults.Select(r => new UsersStudyResultsResponse(r.Id, r.UserId, r.TestId, r.PercentResult)).ToList();

            return Ok(response);
        }

        [HttpPost]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult<Guid>> CreateUserStudyResult(
            [FromBody] UsersStudyResultsResponse usersStudyResultsResponse
        )
        {
            var (userResult, error) = UserStudyResult.Create(
                Guid.NewGuid(),
                usersStudyResultsResponse.id,
                usersStudyResultsResponse.userId,
                usersStudyResultsResponse.percent
            );

            if (!string.IsNullOrEmpty(error))
            {
                return BadRequest(error);
            }

            var userResultId = await _service.CreateUserResult(userResult);

            return Ok(userResultId);
        }

        [HttpPut("{id:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<IActionResult> UpdateUserStudyResult(
            Guid id,
            [FromBody] UsersStudyResultsRequest usersStudyResultsRequest
            )
        {
            var userResult = await _service.Update(
                id, usersStudyResultsRequest.percent);
            return Ok(userResult);
        }

        [HttpDelete("{id:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<IActionResult> DeleteUserStudyResult(Guid id)
        {
            return Ok(await _service.Delete(id));
        }
    }
}
