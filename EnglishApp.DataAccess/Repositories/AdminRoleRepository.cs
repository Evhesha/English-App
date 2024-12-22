using EnglishStorageApplication.EnglishApp.DataAccess;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;
using EnglishApp.DataAccess.Entities;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishApp.DataAccess.Repositories
{
    public class AdminRoleRepository : IAdminRoleRepository
    {
        private readonly ApplicationDbContext _context;

        public AdminRoleRepository(ApplicationDbContext applicationDbContext)
        {
            _context = applicationDbContext;
        }

        public async Task<List<AdminRole>> Get()
        {
            var roleEntities = await _context.AdminRoles
                .AsNoTracking()
                .ToListAsync();

            var role = roleEntities
                .Select(x => AdminRole.Create(x.Id, x.UserId).AdminRole)
                .ToList();

            return role;
        }

        public async Task<AdminRole> GetAdmin(Guid userId)
        {
            var roleEntities = await _context.AdminRoles
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.UserId == userId);

            var (adminRole, error) = AdminRole.Create(roleEntities.Id, roleEntities.UserId);
            return adminRole;
        }

        public async Task<Guid> Create(AdminRole adminRole)
        {
            var roleEntity = new AdminRoleEntity
            {
                Id = adminRole.Id,
                UserId = adminRole.UserId,
            };

            await _context.AdminRoles.AddAsync(roleEntity);
            await _context.SaveChangesAsync();

            return adminRole.Id;
        }

        public async Task<Guid> Delete(Guid id)
        {
            var role = await _context.AdminRoles.FindAsync(id);

            if (role != null)
            {
                _context.AdminRoles.Remove(role);
                await _context.SaveChangesAsync();
            }

            return id;
        }

        public async Task<bool> IsAdmin(Guid userId) 
        {
            return await _context.AdminRoles.AsNoTracking().AnyAsync(x => x.UserId == userId); 
        }
    }
}
