using EnglishStorageApplication.Server.Data.UserEntites;
using EnglishStorageApplication.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace EnglishStorageApplication.Server.Data.Repositories
{
    public class UserRepository
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<User>> GetUsers()
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

        //public async Task<Guid> Update(Guid id, string name, string email, string password)
        //{

        //}
    }
}
