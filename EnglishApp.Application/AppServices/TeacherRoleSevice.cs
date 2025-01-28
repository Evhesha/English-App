using EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishApp.Application.AppServices
{
    public class TeacherRoleSevice : ITeacherRoleSevice
    {
        private readonly ITeacherRoleRepository _teacherRoleRepository;

        public TeacherRoleSevice(ITeacherRoleRepository teacherRoleRepository)
        {
            _teacherRoleRepository = teacherRoleRepository;
        }

        public async Task<List<TeacherRole>> GetAllRoles()
        {
            return await _teacherRoleRepository.Get();
        }

        public async Task<TeacherRole> GetRole(Guid userId)
        {
            return await _teacherRoleRepository.GetTeacher(userId);
        }

        public async Task<Guid> CreateRole(TeacherRole teacherRole)
        {
            return await _teacherRoleRepository.Create(teacherRole);
        }

        public async Task<Guid> DeleteRole(Guid userId)
        {
            return await _teacherRoleRepository.Delete(userId);
        }
    }
}