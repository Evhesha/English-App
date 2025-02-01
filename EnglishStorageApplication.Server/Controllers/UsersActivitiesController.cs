using EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.Server.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersActivitiesController : ControllerBase
    {
        private readonly IUserActivityService _service;

        public UsersActivitiesController(IUserActivityService userActivityService)
        {
            _service = userActivityService;
        }

        [HttpGet]
        public async Task<ActionResult<List<UserActivityRequest>>> GetUsersActivities()
        {
            var userActivities = await _service.GetAllUsersActivity();
            var response = userActivities.Select(a => new UserActivityRequest(a.UserId, a.DateTime, a.IsActive)).ToList();
            return Ok(response);
        }

        [HttpGet("{userId:guid}")]
        public async Task<ActionResult<List<UserActivityRequest>>> GetUserActivities(Guid userId)
        {
            var userActivities = await _service.GetUserActivity(userId);
            var response = userActivities.Select(a => new UserActivityRequest(a.UserId, a.DateTime, a.IsActive)).ToList();
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<Guid>> CreateUserActivity([FromBody] UserActivityResponse activityResponse)
        {
            var (userActivity, error) = UserActivity.Create(
                Guid.NewGuid(),
                activityResponse.userId,
                DateTime.UtcNow, // Текущее время
                activityResponse.isActive
            );

            var activityId = await _service.CreateUserActivity(userActivity);
            return Ok(activityId);
        }
    }
}