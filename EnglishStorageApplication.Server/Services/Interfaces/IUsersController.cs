using EnglishStorageApplication.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace EnglishStorageApplication.Server.Services.Interfaces
{
    public interface IUsersController
    {
        Task<ActionResult<IEnumerable<User>>> GetUsers();
        Task<ActionResult<User>> GetUser(int id);
        Task<ActionResult<User>> PostUser(User user);
        Task<IActionResult> PutUser(int id, User user);
        Task<IActionResult> DeleteUser(int id);
    }
}
