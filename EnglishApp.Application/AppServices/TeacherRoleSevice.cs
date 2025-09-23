using EnglishApp.Core.Abstractions.TeacherRole;
using EnglishApp.Core.Models;

namespace EnglishApp.Application.AppServices
{
    public class TeacherRoleSevice : ITeacherRoleSevice
    {
        private readonly ITeacherRoleRepository _teacherRoleRepository;

        public TeacherRoleSevice(ITeacherRoleRepository teacherRoleRepository)
        {
            _teacherRoleRepository = teacherRoleRepository;
        }

        public async Task<List<TeacherRole>> GetTeachers(CancellationToken cancellationToken)
        {
            return await _teacherRoleRepository.GetTeachersAsync(cancellationToken);
        }

        public async Task<TeacherRole?> GetTeacher(Guid userId, CancellationToken cancellationToken)
        {
            return await _teacherRoleRepository.GetTeacherByUserIdAsync(userId, cancellationToken);
        }

        public async Task<Guid> CreateTeacher(TeacherRole teacherRole, CancellationToken cancellationToken)
        {
            return await _teacherRoleRepository.CreateTeacherAsync(teacherRole, cancellationToken);
        }

        public async Task<Guid> DeleteTeacher(Guid userId, CancellationToken cancellationToken)
        {
            return await _teacherRoleRepository.DeleteTeacherAsync(userId, cancellationToken);
        }
    }
}