using EnglishApp.Application.DTOs.UserDTOs;
using Microsoft.AspNetCore.Mvc;
using EnglishStorageApplication.Server.Contracts.Users;
using Microsoft.AspNetCore.Identity.Data;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.EnglishApp.Core.Models;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthenticationService _authService;

        public AuthController(IAuthenticationService authAuthService)
        {
            _authService = authAuthService;
        }
        
        [HttpPost("register")]
        public async Task<ActionResult> Register(
            CreateUserDto createUserDto,
            CancellationToken cancellationToken)
        {
            var user = new User
            {
                Id = Guid.NewGuid(),
                Name = createUserDto.Name,
                Email = createUserDto.Email,
            };

            await _authService.Register(createUserDto.Password, user, cancellationToken);

            var userDto = new UserDto
            {
                Id = user.Id,
                Name = user.Name,
                Email = user.Email
            };

            return Ok(userDto);
        }

        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(
            LoginUserDto loginDto,
            CancellationToken cancellationToken)
        {
            var token = await _authService.Login(loginDto.Email, loginDto.Password, cancellationToken);
            HttpContext.Response.Cookies.Append("tasty-cookies", token);
            return Ok();
        }
    }
}