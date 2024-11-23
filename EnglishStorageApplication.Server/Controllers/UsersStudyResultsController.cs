using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.Server.Contracts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersStudyResultsController : ControllerBase
    {

        private readonly IUserStudyResultService _userStudyResultService;

        public UsersStudyResultsController(IUserStudyResultService userStudyResultService)
        {
            _userStudyResultService = userStudyResultService;
        }

        [HttpGet]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult<List<UsersStudyResultsResponse>>> GetUsersStudyResults()
        {
            return NoContent();
        }

        [HttpGet("{userId:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult<List<UsersStudyResultsResponse>>> GetUserStudyResults()
        {
            return NoContent();
        }

        [HttpPost]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult<Guid>> CreateUserStudyResult(
            [FromBody] UsersStudyResultsResponse usersStudyResultsResponse
        )
        {
            return NoContent();
        }

        [HttpPut("{id:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<IActionResult> UpdateUserStudyResult(
            Guid id,
            [FromBody] UsersStudyResultsRequest usersStudyResultsRequest
            )
        {
            return NoContent();
        }

        [HttpDelete("{id:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<IActionResult> DeleteUserStudyResult(Guid id)
        {
            return NoContent();
        }
    }
}
