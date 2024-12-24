using EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.DataAccess;
using Microsoft.EntityFrameworkCore;
using EnglishApp.DataAccess.Entities;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishApp.DataAccess.Repositories
{
    public class TeacherRoleRepository : ITeacherRoleRepository
    {
        private readonly ApplicationDbContext _context;

        public TeacherRoleRepository(ApplicationDbContext applicationDbContext)
        {
            _context = applicationDbContext;
        }

        public async Task<List<TeacherRole>> Get()
        {
            var roleEntities = await _context.TeacherRoles
                .AsNoTracking()
                .ToListAsync();

            var role = roleEntities
                .Select(x => TeacherRole.Create(x.Id, x.UserId).TeacherRole)
                .ToList();

            return role;
        }

        public async Task<TeacherRole> GetTeacher(Guid id)
        {
            var roleEntity = await _context.TeacherRoles
                .AsNoTracking()
                .FirstOrDefaultAsync(x => x.Id == id);

            var (teacherRole, error) = TeacherRole.Create(roleEntity.Id, roleEntity.UserId);
            return teacherRole;
        }

        public async Task<Guid> Create(TeacherRole role)
        {
            var roleEntity = new TeacherRoleEntity
            {
                Id = role.Id,
                UserId = role.UserId,
            };

            await _context.TeacherRoles.AddAsync(roleEntity);
            await _context.SaveChangesAsync();

            return roleEntity.Id;
        }

        public async Task<Guid> Delete(Guid id)
        {
            var roleEntity = await _context.TeacherRoles.FindAsync(id);

            if (roleEntity != null)
            {
                _context.TeacherRoles.Remove(roleEntity);
                await _context.SaveChangesAsync();
            }

            return id;
        }

        public async Task<bool> IsTeacher(Guid userId)
        {
            return await _context.TeacherRoles.AsNoTracking().AnyAsync(x => x.UserId == userId);
        }
    }
}
