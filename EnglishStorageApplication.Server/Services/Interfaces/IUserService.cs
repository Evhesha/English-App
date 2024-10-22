using EnglishStorageApplication.Server.Models;

namespace EnglishStorageApplication.Server.Services.Interfaces
{
    public interface IUserService
    {
        Task<Guid> CreateUser(User user);
        Task<Guid> DeleteUser(Guid id);
        Task<List<User>> GetAllUsers();
        Task<Guid> UpdateUser(Guid id, string name, string email, string password);
    }
}