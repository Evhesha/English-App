using Microsoft.AspNetCore.Mvc;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.Server.Contracts;
using Microsoft.AspNetCore.Cors;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _service;

        public UsersController(IUserService userService)
        {
            _service = userService;
        }

        //Метод NoContent() вернет статус-код 204, что означает "Нет содержимого",
        //и таким образом сигнализирует, что запрос был успешным, но данных для возвращения нет.
        //Это временное решение, пока ты не готов добавить реальную функциональность!

        [HttpGet]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult<List<UsersResponse>>> GetUsers()
        {
            var users = await _service.GetAllUsers();
            var response = users.Select(u => new UsersResponse(u.Id, u.Name, u.Email, u.Password));
            return Ok(response);
        }

        [HttpGet("{id:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult<List<UserActivityResponse>>> GetUser(Guid id)
        {
            var user = await _service.GetUser(id);
            var response = user.Select(u => new UsersResponse(u.Id, u.Name, u.Email, u.Password));
            return Ok(response);
        }

        [HttpPost]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<ActionResult<Guid>> CreateUser([FromBody] UsersRequest request)
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

            var userId = await _service.CreateUser(user);
            return Ok(userId);
        }


        [HttpPut("{id:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<IActionResult> UpdateUser(Guid id, [FromBody] UsersRequest request)
        {
            var userId = await _service.UpdateUser(id, request.name, request.email, request.password);

            return Ok(userId);
        }

        [HttpDelete("{id:guid}")]
        [EnableCors("AllowSpecificOrigin")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            return Ok(await _service.DeleteUser(id));
        }
    }
}
