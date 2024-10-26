using EnglishStorageApplication.EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishStorageApplication.EnglishApp.Application.AppServices
{
    public class UserService : IUserService
    {
        private readonly IUsersRepository _usersRepository;

        public UserService(IUsersRepository usersRepository)
        {
            _usersRepository = usersRepository;
        }

        public async Task<List<User>> GetAllUsers()
        {
            return await _usersRepository.Get();
        }

        public async Task<Guid> CreateUser(User user)
        {
            return await _usersRepository.Create(user);
        }

        public async Task<Guid> UpdateUser(Guid id, string name, string email, string password)
        {
            return await _usersRepository.Update(id, name, email, password);
        }

        public async Task<Guid> DeleteUser(Guid id)
        {
            return await _usersRepository.Delete(id);
        }
    }
}
