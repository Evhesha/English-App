using EnglishApp.Application.DTOs.UserDTOs;
using EnglishApp.Core.Abstractions.User;
using EnglishApp.Core.Exceptions.UserExceptions;
using EnglishApp.Core.Params.UserParams;
using Microsoft.AspNetCore.Mvc;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.AspNetCore.Authorization;
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

        [HttpGet("role")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult<List<UserDto>>> GetRoleUsers(
            [FromQuery] UserFilter userFilter,
            CancellationToken cancellationToken)
        {
            var users = await _userService.GetUsersWithParams(userFilter, cancellationToken);
            return Ok(users);
        }

        [HttpGet("{id:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult> GetUserById(
            Guid id,
            CancellationToken cancellationToken)
        {
            try
            {
                var user = await _userService.GetUserById(id, cancellationToken);
                return Ok(user);
            }
            catch (NotFoundUserException ex)
            {
                return NotFound(ex.Message);
            }
            
        }

        [HttpGet("/byEmail")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult<UserDto>> GetUserByEmail(
            [FromQuery]string email,
            CancellationToken cancellationToken)
        {
            try
            {
                var user = await _userService.GetUserByEmail(email, cancellationToken);
                return Ok(user);
            }
            catch (NotFoundUserException ex)
            {
                return NotFound(ex.Message);
            }
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
        
        [Authorize(Roles = "Admin")]
        [HttpPatch("assign-role")]
        public async Task<IActionResult> AssignRole(Guid userId, string role, CancellationToken ct)
        {
            var user = await _userService.GetUserById(userId, ct);
            if (user == null) return NotFound();

            user.Role = role;
            await _userService.UpdateUser(user, ct);

            return Ok($"Role {role} assigned to {user.Name}");
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
        
        [HttpPatch("{id:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<IActionResult> UpdateUserRole(
            Guid id,
            [FromBody] EditUserRoleDto editUserRoleDto,
            CancellationToken cancellationToken)
        {
            var user = new User
            {
                Id = id,
                Role = editUserRoleDto.Role,
            };

            await _userService.UpdateUserRole(user, cancellationToken);
            
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