using Microsoft.AspNetCore.Mvc;
using EnglishStorageApplication.Server.Contracts.Users;
using Microsoft.AspNetCore.Identity.Data;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly EnglishApp.Core.Abstractions.IAuthenticationService _authService;

        public AuthController(EnglishApp.Core.Abstractions.IAuthenticationService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register([FromBody] RegisterUserRequest request)
        {
            var (user, error) = EnglishStorageApplication.EnglishApp.Core.Models.User.Create(
                Guid.NewGuid(),
                request.Name,
                request.Email,
                request.Password
            );

            if (!string.IsNullOrEmpty(error))
            {
                return BadRequest(error);
            }

            var userId = await _authService.Register(user.Name, user.Email, user.Password);
            return Ok(new { UserId = userId });
        }


        [HttpPost("login")]
        public async Task<ActionResult<string>> Login([FromBody] LoginRequest request)
        {
            try
            {
                var token = await _authService.Login(request.Email, request.Password);
                return Ok(new { Token = token });
            }
            catch (UnauthorizedAccessException)
            {
                return Unauthorized("Invalid credentials");
            }
        }
    }
}
