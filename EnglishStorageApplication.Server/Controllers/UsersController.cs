using EnglishApp.Application.DTOs.UserDTOs;
using EnglishApp.Core.Abstractions.User;
using Microsoft.AspNetCore.Mvc;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.AspNetCore.Cors;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;
        private readonly IPasswordHasher _passwordHasher;

        public UsersController(
            IUserService userUserService,
            IPasswordHasher passwordHasher)
        {
            _userService = userUserService;
            _passwordHasher = passwordHasher;
        }

        [HttpGet]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult<List<UserDto>>> GetUsers(CancellationToken cancellationToken)
        {
            var users = await _userService.GetAllUsers(cancellationToken);
           
            return Ok(users);
        }

        [HttpGet("{id:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult> GetUserById(
            Guid id,
            CancellationToken cancellationToken)
        {
            var user = await _userService.GetUserById(id, cancellationToken);
            return Ok(user);
        }

        [HttpPost]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult<Guid>> CreateUser(
            [FromBody] CreateUserDto createUserDto,
            CancellationToken cancellationToken)
        {
            var user = new User
            {
                Id = Guid.NewGuid(),
                Name = createUserDto.Name,
                Email = createUserDto.Email,
                PasswordHash = _passwordHasher.Generate(createUserDto.Password)
            };

            var userId = await _userService.CreateUser(user, cancellationToken);
            return Ok(userId);
        }
        
        [HttpPut("{id:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<IActionResult> UpdateUser(
            Guid id,
            [FromBody] UpdateUserDto updateUserDto,
            CancellationToken cancellationToken)
        {
            var user = new User
            {
                Id = id,
                Name = updateUserDto.Name,
                Email = updateUserDto.Email,
                PasswordHash = _passwordHasher.Generate(updateUserDto.Password)
            };

            await _userService.UpdateUser(user, cancellationToken);
            
            return Ok(user.Id);
        }

        [HttpDelete("{id:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<IActionResult> DeleteUser(Guid id, CancellationToken cansellationToken)
        {
            return Ok(await _userService.DeleteUser(id, cansellationToken));
        }
    }
}
