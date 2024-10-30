using Microsoft.AspNetCore.Mvc;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.Server.Contracts;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersCardsController : ControllerBase
    {
        private readonly IUserCardService _userCardService;
        public UsersCardsController(IUserCardService userCardService)
        {
            _userCardService = userCardService;
        }

        [HttpGet]
        public async Task<ActionResult<List<UsersCardsResponse>>> GetUsersCards()
        {
            var usersCards = await _userCardService.GetAllUsersCards();
            var response = usersCards.Select(u => new UsersCardsResponse(u.Id, u.UserId, u.NameOfUserCard, u.UserCardData));
            return Ok(response);
        }

        [HttpGet("{userId:guid}")]
        public async Task<ActionResult<List<UsersCardsResponse>>> GetUserCards(Guid userId)
        {
            var userCards = await _userCardService.GetAllUserCards(userId);
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

            var userId = await _userCardService.CreateUserCard(userCard);
            return Ok(userId);
        }

        [HttpPut("{id:guid}")]
        public async Task<IActionResult> UpdateUserCard(Guid id, [FromBody] UsersCardsRequest request)
        {
            var userCardId = await _userCardService.UpdateUserCard(id, request.userId, request.nameOfUserCard, request.userCardData);
            return Ok(userCardId);
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> DeleteUserCard(Guid id)
        {
            return Ok(await _userCardService.DeleteUserCard(id));
        }
    }
}
