using EnglishApp.Application.DTOs.UserCardDTOs;
using EnglishApp.Core.Abstractions.UserCard;
using Microsoft.AspNetCore.Mvc;
using EnglishStorageApplication.EnglishApp.Core.Models;

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
        public async Task<ActionResult<List<UserCardDto>>> GetUsersCards(CancellationToken cancellationToken)
        {
            var usersCards = await _service.GetUsersCards(cancellationToken);
            return Ok(usersCards);
        }

        [HttpGet("{userId:guid}")]
        public async Task<ActionResult<List<UserCardDto>>> GetUserCards(Guid userId, CancellationToken cancellationToken)
        {
            var userCards = await _service.GetUserCards(userId, cancellationToken);
            if (!userCards.Any())
            {
                return NoContent();
            }
            
            return Ok(userCards);
        }

        [HttpPost]
        public async Task<ActionResult<Guid>> CreateUserCard(
            [FromBody] CreateUserCardDto createUserCardDto,
            CancellationToken cancellationToken)
        {
            var userCard = new UserCard
            {
                Id = Guid.NewGuid(),
                UserId = createUserCardDto.UserId,
                NameOfUsersCard = createUserCardDto.NameOfUsersCard,
                UserCardData = createUserCardDto.UserCardData
            };

            var userId = await _service.CreateUserCard(userCard, cancellationToken);
            return Ok(userId);
        }

        [HttpPut("{id:guid}")]
        public async Task<IActionResult> UpdateUserCard(
            Guid id,
            [FromBody] UpdateUserCardDto updateUserCardDto,
            CancellationToken cancellationToken)
        {
            var userCard = new UserCard
            {
                Id = id, 
                NameOfUsersCard = updateUserCardDto.NameOfUsersCard,
                UserCardData = updateUserCardDto.UserCardData
            };
            
            var userCardId = await _service.UpdateUserCard(id, userCard, cancellationToken);
            
            return Ok(userCardId);
        }

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<Guid>> DeleteUserCard(Guid id, CancellationToken cancellationToken)
        {
            return Ok(await _service.DeleteUserCard(id, cancellationToken));
        }
    }
}