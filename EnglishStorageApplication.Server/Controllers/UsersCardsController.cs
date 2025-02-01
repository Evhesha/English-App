using Microsoft.AspNetCore.Mvc;
using EnglishStorageApplication.Server.Contracts;
using EnglishStorageApplication.EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersCardsController : ControllerBase
    {
        private readonly IUserCardService _service;
        public UsersCardsController(IUserCardService userCardService)
        {
            _service = userCardService;
        }

        [HttpGet]
        public async Task<ActionResult<List<UsersCardsResponse>>> GetUsersCards()
        {
            var usersCards = await _service.GetAllUsersCards();
            var response = usersCards.Select(u => new UsersCardsResponse(u.Id, u.UserId, u.NameOfUserCard, u.UserCardData));
            return Ok(response);
        }

        [HttpGet("{userId:guid}")]
        public async Task<ActionResult<List<UsersCardsResponse>>> GetUserCards(Guid userId)
        {
            var userCards = await _service.GetAllUserCards(userId);
            if (userCards == null || !userCards.Any())
            {
                return NoContent();
            }
            var response = userCards.Select(u => new UsersCardsResponse(u.Id, u.UserId, u.NameOfUserCard, u.UserCardData)).ToList();
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<Guid>> CreateUserCard([FromBody] UsersCardsRequest request)
        {
            var (userCard, error) = UserCard.Create(
                Guid.NewGuid(),
                request.userId,
                request.nameOfUserCard,
                request.userCardData
            );

            if (!string.IsNullOrEmpty(error))
            {
                return BadRequest(error);
            }

            var userId = await _service.CreateUserCard(userCard);
            return Ok(userId);
        }

        [HttpPut("{id:guid}")]
        public async Task<IActionResult> UpdateUserCard(Guid id, [FromBody] UsersCardsRequest request)
        {
            var userCardId = await _service.UpdateUserCard(id, request.userId, request.nameOfUserCard, request.userCardData);
            return Ok(userCardId);
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> DeleteUserCard(Guid id)
        {
            return Ok(await _service.DeleteUserCard(id));
        }
    }
}
