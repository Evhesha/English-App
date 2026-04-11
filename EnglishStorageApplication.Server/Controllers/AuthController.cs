using EnglishApp.Application.DTOs.UserDTOs;
using Microsoft.AspNetCore.Mvc;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.EnglishApp.Core.Models;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private const string AuthCookieName = "token";
        private const string LegacyAuthCookieName = "tasty-cookies";
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
            HttpContext.Response.Cookies.Delete(LegacyAuthCookieName, new CookieOptions
            {
                Path = "/"
            });
            HttpContext.Response.Cookies.Append(AuthCookieName, token, new CookieOptions
            {
                Expires = DateTimeOffset.UtcNow.AddDays(7),
                IsEssential = true,
                Path = "/",
                SameSite = SameSiteMode.Lax,
                Secure = HttpContext.Request.IsHttps
            });

            return Ok(new {token});
        }
    }
}
