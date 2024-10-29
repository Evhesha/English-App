using Microsoft.AspNetCore.Mvc;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.Server.Contracts;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _context;

        public UsersController(IUserService context)
        {
            _context = context;
        }

        //Метод NoContent() вернет статус-код 204, что означает "Нет содержимого",
        //и таким образом сигнализирует, что запрос был успешным, но данных для возвращения нет.
        //Это временное решение, пока ты не готов добавить реальную функциональность!

        [HttpGet]
        public async Task<ActionResult<List<UsersResponse>>> GetUsers()
        {
            var users = await _context.GetAllUsers();
            var response = users.Select(u => new UsersResponse(u.Id, u.Name, u.Email, u.Password));
            return Ok(response);
        }

        [HttpPost]
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

            var userId = await _context.CreateUser(user);
            return Ok(userId);
        }


        [HttpPut("{id:guid}")]
        public async Task<IActionResult> UpdateUser(Guid id, [FromBody] UsersRequest request)
        {
            var userId = await _context.UpdateUser(id, request.name, request.email, request.password);

            return Ok(userId);
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            return Ok(await _context.DeleteUser(id));
        }
    }
}
