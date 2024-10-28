using EnglishStorageApplication.Server.Data.UserEntites;
using EnglishStorageApplication.EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.EnglishApp.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace EnglishStorageApplication.Server.Data.Repositories
{
    public class UsersRepository : IUsersRepository
    {
        private readonly ApplicationDbContext _context;

        public UsersRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<User>> Get()
        {
            var userEntityes = await _context.Users
                .AsNoTracking()
                .ToListAsync();

            var users = userEntityes
                .Select(x => User.Create(x.Id, x.Name, x.Email, x.Password).User)
                .ToList();

            return users;
        }

        public async Task<Guid> Create(User user)
        {
            var userEntity = new UserEntity
            {
                Id = user.Id,
                Name = user.Name,
                Email = user.Email,
                Password = user.Password,
            };

            await _context.Users.AddAsync(userEntity);
            await _context.SaveChangesAsync();
            return userEntity.Id;
        }

        public async Task<Guid> Update(Guid id, string name, string email, string password)
        {
            var user = await _context.Users.FindAsync(id);
            if (user != null)
            {
                user.Name = name;
                user.Email = email;
                user.Password = password;
                await _context.SaveChangesAsync();
            }
            return id;
        }

        public async Task<Guid> Delete(Guid id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
            }
            return id;
        }

    }
}
