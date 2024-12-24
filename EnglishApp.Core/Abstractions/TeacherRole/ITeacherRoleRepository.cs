using EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface ITeacherRoleRepository
    {
        Task<Guid> Create(TeacherRole role);
        Task<Guid> Delete(Guid id);
        Task<List<TeacherRole>> Get();
        Task<TeacherRole> GetTeacher(Guid id);
        Task<bool> IsTeacher(Guid userId);
    }
}