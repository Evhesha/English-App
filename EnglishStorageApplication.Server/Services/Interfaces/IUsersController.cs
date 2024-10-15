using EnglishStorageApplication.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace EnglishStorageApplication.Server.Services.Interfaces
{
    public interface IUsersController
    {
        Task<ActionResult<IEnumerable<User>>> GetUsers();
        Task<ActionResult<User>> GetUser(Guid id);
        Task<ActionResult<User>> PostUser(User user);
        Task<IActionResult> PutUser(Guid id, User user);
        Task<IActionResult> DeleteUser(Guid id);
    }
}
