using EnglishStorageApplication.EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface IUserService
    {
        Task<Guid> CreateUser(User user);
        Task<Guid> DeleteUser(Guid id);
        Task<List<User>> GetAllUsers();
        Task<List<User>> GetUser(Guid id);
        Task<Guid> UpdateUser(Guid id, string name, string email, string password);
    }
}