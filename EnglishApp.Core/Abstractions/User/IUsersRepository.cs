using EnglishStorageApplication.EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface IUsersRepository
    {
        Task<Guid> Create(User user);
        Task<Guid> Delete(Guid id);
        Task<List<User>> Get();
        Task<List<User>> GetUser(Guid id);
        Task<User> GetByEmail(string email);
        Task<Guid> Update(Guid id, string name, string email, string password);
    }
}