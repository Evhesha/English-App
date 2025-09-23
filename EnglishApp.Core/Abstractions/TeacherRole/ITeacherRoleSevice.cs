namespace EnglishApp.Core.Abstractions.TeacherRole;

public interface ITeacherRoleSevice
{
    Task<List<Models.TeacherRole>> GetTeachers(CancellationToken cancellationToken);
    Task<Models.TeacherRole?> GetTeacher(Guid userId, CancellationToken cancellationToken);
    Task<Guid> CreateTeacher(Models.TeacherRole teacherRole, CancellationToken cancellationToken);
    Task<Guid> DeleteTeacher(Guid userId, CancellationToken cancellationToken);
}