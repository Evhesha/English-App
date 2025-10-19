using EnglishApp.Core.Abstractions.User;
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

        public async Task<List<User>> GetAllUsers(CancellationToken  cancellationToken)
        {
            return await _usersRepository.GetUsersAsync(cancellationToken);
        }

        public async Task<User?> GetUserById(Guid id, CancellationToken  cancellationToken)
        {
            return await _usersRepository.GetUserByIdAsync(id, cancellationToken);
        }

        public async Task<User?> GetUserByEmail(string email, CancellationToken cancellationToken)
        {
            return await _usersRepository.GetUserByEmailAsync(email, cancellationToken);
        }

        public async Task<Guid> CreateUser(User user, CancellationToken cancellationToken)
        {
            return await _usersRepository.CreateUserAsync(user, cancellationToken);
        }

        public async Task<Guid> UpdateUser(User user, CancellationToken cancellationToken)
        {
            return await _usersRepository.UpdateUserAsync(user, cancellationToken);
        }

        public async Task<Guid> DeleteUser(Guid id, CancellationToken cancellationToken)
        {
            return await _usersRepository.DeleteUserAsync(id, cancellationToken);
        }
    }
}