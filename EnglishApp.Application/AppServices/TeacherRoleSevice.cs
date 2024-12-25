using EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishApp.Application.AppServices
{
    public class TeacherRoleSevice : ITeacherRoleSevice
    {
        private readonly ITeacherRoleRepository _repository;

        public TeacherRoleSevice(ITeacherRoleRepository teacherRoleRepository)
        {
            _repository = teacherRoleRepository;
        }

        public async Task<List<TeacherRole>> GetAllRoles()
        {
            return await _repository.Get();
        }

        public async Task<TeacherRole> GetRole(Guid userId)
        {
            return await _repository.GetTeacher(userId);
        }

        public async Task<Guid> CreateRole(TeacherRole teacherRole)
        {
            return await _repository.Create(teacherRole);
        }

        public async Task<Guid> DeleteRole(Guid userId)
        {
            return await _repository.Delete(userId);
        }
    }
}
