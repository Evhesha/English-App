using EnglishApp.Core.Abstractions.TeacherRole;
using EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace EnglishApp.DataAccess.Repositories
{
    public class TeacherRoleRepository : ITeacherRoleRepository
    {
        private readonly ApplicationDbContext _context;

        public TeacherRoleRepository(ApplicationDbContext applicationDbContext)
        {
            _context = applicationDbContext;
        }

        public async Task<List<TeacherRole>> GetTeachersAsync(CancellationToken cancellationToken)
        {
            return await _context.TeacherRoles
                .AsNoTracking()
                .ToListAsync(cancellationToken);
        }

        public async Task<TeacherRole?> GetTeacherByUserIdAsync(
            Guid id,
            CancellationToken cancellationToken)
        {
            return await _context.TeacherRoles
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.Id == id, cancellationToken);
        }

        public async Task<Guid> CreateTeacherAsync(
            TeacherRole role,
            CancellationToken  cancellationToken)
        {
            var roleEntity = new TeacherRole
            {
                Id = role.Id,
                UserId = role.UserId,
            };

            await _context.TeacherRoles.AddAsync(roleEntity, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);

            return roleEntity.Id;
        }

        public async Task<Guid> DeleteTeacherAsync(
            Guid id,
            CancellationToken cancellationToken)
        {
            var roleEntity = await _context.TeacherRoles.FindAsync(id);

            if (roleEntity != null)
            {
                _context.TeacherRoles.Remove(roleEntity);
                await _context.SaveChangesAsync(cancellationToken);
            }

            return id;
        }

        public async Task<bool> IsTeacherAsync(Guid userId)
        {
            return await _context.TeacherRoles.AsNoTracking().AnyAsync(x => x.UserId == userId);
        }
    }
}