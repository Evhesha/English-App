using EnglishApp.Core.Abstractions.AdminRole;
using EnglishStorageApplication.EnglishApp.DataAccess;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;
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

        public async Task<List<AdminRole>> GetAdminsAsync(CancellationToken cancellationToken)
        {
            return await _context.AdminRoles
                .AsNoTracking()
                .ToListAsync(cancellationToken);
        }

        public async Task<AdminRole?> GetAdminByIdAsync(
            Guid userId,
            CancellationToken cancellationToken)
        {
            return await _context.AdminRoles
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.UserId == userId, cancellationToken);
        }

        public async Task<Guid> CreateAdminAsync(
            AdminRole adminRole,
            CancellationToken cancellationToken)
        {
            var roleEntity = new AdminRole
            {
                Id = adminRole.Id,
                UserId = adminRole.UserId,
            };

            await _context.AdminRoles.AddAsync(roleEntity, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);

            return adminRole.Id;
        }

        public async Task<Guid> DeleteAdminAsync(
            Guid id,
            CancellationToken cancellationToken)
        {
            var role = await _context.AdminRoles.FindAsync(id, cancellationToken);

            if (role != null)
            {
                _context.AdminRoles.Remove(role);
                await _context.SaveChangesAsync(cancellationToken);
            }

            return id;
        }

        public async Task<bool> IsAdminAsync(Guid userId) 
        {
            return await _context.AdminRoles.AsNoTracking().AnyAsync(x => x.UserId == userId); 
        }
    }
}