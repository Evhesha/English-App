using EnglishApp.Core.Abstractions.User;
using EnglishApp.Core.Exceptions.UserExceptions;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace EnglishApp.DataAccess.Repositories
{
    public class UsersRepository : IUsersRepository
    {
        private readonly ApplicationDbContext _context;

        public UsersRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<User>> GetUsersAsync(CancellationToken cancellationToken)
        {
            return await _context.Users
                .AsNoTracking()
                .ToListAsync(cancellationToken);
        }

        public async Task<User?> GetUserByIdAsync(Guid id, CancellationToken cancellationToken)
        {
            return await _context.Users
                .AsNoTracking()
                .SingleOrDefaultAsync(u => u.Id == id, cancellationToken);
        }

        public async Task<User?> GetUserByEmailAsync(string email, CancellationToken cancellationToken)
        {
            return await _context.Users
                .AsNoTracking()
                .SingleOrDefaultAsync(u => u.Email == email, cancellationToken);
        }

        public async Task<Guid> CreateUserAsync(User user, CancellationToken cancellationToken)
        {
            var userEntity = new User
            {
                Id = user.Id,
                Name = user.Name,
                Email = user.Email,
                PasswordHash = user.PasswordHash,
            };

            await _context.Users.AddAsync(userEntity, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);
            return userEntity.Id;
        }

        public async Task<Guid> UpdateUserAsync(User user, CancellationToken cancellationToken)
        {
            var userEntity = await _context.Users.FindAsync(user.Id);
            
            if (userEntity == null)
            {
                throw new NotFoundUserException("User wasn't found");
            }
            
            userEntity.Name = user.Name;
            userEntity.Email = user.Email;
            userEntity.PasswordHash = user.PasswordHash;
            await _context.SaveChangesAsync(cancellationToken);
            
            return userEntity.Id;
        }
        
        public async Task<Guid> UpdateUserRoleAsync(User user, CancellationToken cancellationToken)
        {
            var userEntity = await _context.Users.FindAsync(user.Id);
            
            if (userEntity == null)
            {
                throw new NotFoundUserException("User wasn't found");
            }
            
            userEntity.Role = user.Role;
            await _context.SaveChangesAsync(cancellationToken);
            
            return userEntity.Id;
        }

        public async Task<Guid> DeleteUserAsync(Guid id, CancellationToken cancellationToken)
        {
            var userEntity = await _context.Users.FindAsync(id);
            if (userEntity == null)
            {
                throw new NotFoundUserException("User wasn't found");
            }
            
            _context.Users.Remove(userEntity);
            await _context.SaveChangesAsync(cancellationToken);
            
            return id;
        }
    }
}