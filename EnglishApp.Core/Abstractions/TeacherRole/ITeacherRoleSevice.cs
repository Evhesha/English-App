using EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface ITeacherRoleSevice
    {
        Task<Guid> CreateRole(TeacherRole teacherRole);
        Task<Guid> DeleteRole(Guid userId);
        Task<List<TeacherRole>> GetAllRoles();
        Task<TeacherRole> GetRole(Guid userId);
    }
}