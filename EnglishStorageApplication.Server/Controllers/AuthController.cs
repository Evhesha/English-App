using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using EnglishStorageApplication.Server.Contracts;
using Microsoft.EntityFrameworkCore;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        
        private readonly IUserService _authService;

        public AuthController(IUserService authService)
        {
            _authService = authService;
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register([FromBody] UsersResponse request)
        {
            var (user, error) = EnglishStorageApplication.EnglishApp.Core.Models.User.Create(
                Guid.NewGuid(),
                request.name,
                request.email,
                request.password
            );

            if (!string.IsNullOrEmpty(error))
            {
                return BadRequest(error);
            }

            var userId = await _authService.CreateUser(user);
            return Ok(userId);
        }

        //[HttpPost("login")]
        //public async Task<ActionResult<string>> Login([FromBody] LoginRequest request)
        //{
        //    try
        //    {
        //        var token = await _authService.Login(request.email, request.password);
        //        return Ok(token);
        //    }
        //    catch (UnauthorizedAccessException)
        //    {
        //        return Unauthorized("Invalid credentials");
        //    }
        //}
    }
}
