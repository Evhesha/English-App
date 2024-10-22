using EnglishStorageApplication.Server.Models;

namespace EnglishStorageApplication.Server.Services.Interfaces
{
    public interface IUsersRepository
    {
        Task<Guid> Create(User user);
        Task<Guid> Delete(Guid id);
        Task<List<User>> Get();
        Task<Guid> Update(Guid id, string name, string email, string password);
    }
}