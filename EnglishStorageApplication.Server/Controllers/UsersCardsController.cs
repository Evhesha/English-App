using Microsoft.AspNetCore.Mvc;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersCardsController : ControllerBase
    {
        private readonly IUserService _userService;
        public UsersCardsController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public IActionResult GetUsersCards()
        {
            return NoContent();
        }

        [HttpGet("{id:int}")]
        public IActionResult GetUserCards(int id)
        {
            return NoContent();
        }

        //[HttpPost]
        //public IActionResult CreateUserCard([FromBody] UserCard userCardD)
        //{
        //    return NoContent();
        //}

        //[HttpPut("{id:guid}")]
        //public IActionResult UpdateUserCard(Guid id, [FromBody] UserCard userCard)
        //{
        //    return NoContent();
        //}

        [HttpDelete("{id:guid}")]
        public IActionResult DeleteUserCard(Guid id)
        {
            return NoContent();
        }
    }
}
