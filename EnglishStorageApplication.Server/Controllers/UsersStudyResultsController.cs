﻿using EnglishApp.Application.DTOs.UserStudyResult;
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

        private readonly IUserStudyResultService _service;

        public UsersStudyResultsController(IUserStudyResultService userStudyResultService)
        {
            _service = userStudyResultService;
        }

        [HttpGet]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult<List<UserStudyResultDto>>> GetUsersStudyResults(CancellationToken cancellationToken)
        {
            var usersResults = await _service.GetAllUsersResults(cancellationToken);
                
            return Ok(usersResults);
        }

        [HttpGet("{userId:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult<List<UserStudyResultDto>>> GetUserStudyResults(Guid userId, CancellationToken cancellationToken)
        {
            var userResults = await _service.GetUserResults(userId, cancellationToken);
            
            if (!userResults.Any())
            {
                return NoContent();
            }
            
            return Ok(userResults);
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

            var userResultId = await _service.CreateUserResult(userResult, cancellationToken);
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
            var userResult = await _service.UpdateUserResult(
                id, updateUserStudyResultDto.PercentResult, cancellationToken);
            
            return Ok(userResult);
        }

        [HttpDelete("{id:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<IActionResult> DeleteUserStudyResult(Guid id, CancellationToken cancellationToken)
        {
            return Ok(await _service.DeleteUserResult(id, cancellationToken));
        }
    }
}