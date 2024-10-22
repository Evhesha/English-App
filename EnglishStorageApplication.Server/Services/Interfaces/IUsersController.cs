using EnglishStorageApplication.Server.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace EnglishStorageApplication.Server.Controllers
{
    public interface IUsersController
    {
        Task<ActionResult<Guid>> CreateUser([FromBody] UsersRequest request);
        Task<IActionResult> DeleteUser(Guid id);
        Task<ActionResult<List<UsersResponse>>> GetUsers();
        Task<IActionResult> UpdateUser(Guid id, [FromBody] UsersRequest request);
    }
}