using EnglishApp.Application.ParameterExtensions;
using EnglishApp.Core.Abstractions.User;
using EnglishApp.Core.Params.UserParams;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;

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

        public async Task<List<User>> GetUsersWithParams(
            UserFilter userFilter,
            CancellationToken cancellationToken)
        {
            var query = _usersRepository.GetUsersQueryable();

            query = query
                .Filter(userFilter);
            
            var users = await query.ToListAsync(cancellationToken);
            
            return users;
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

        public async Task<Guid> UpdateUserRole(User user, CancellationToken cancellationToken)
        {
            return await _usersRepository.UpdateUserRoleAsync(user, cancellationToken);
        }

        public async Task<Guid> DeleteUser(Guid id, CancellationToken cancellationToken)
        {
            return await _usersRepository.DeleteUserAsync(id, cancellationToken);
        }
    }
}