namespace EnglishApp.Core.Abstractions.TeacherRole;

public interface ITeacherRoleRepository
{
    Task<List<Models.TeacherRole>> GetTeachersAsync(CancellationToken cancellationToken);

    Task<Models.TeacherRole?> GetTeacherByUserIdAsync(
        Guid id,
        CancellationToken cancellationToken);

    Task<Guid> CreateTeacherAsync(
        Models.TeacherRole role,
        CancellationToken  cancellationToken);

    Task<Guid> DeleteTeacherAsync(
        Guid id,
        CancellationToken cancellationToken);

    Task<bool> IsTeacherAsync(Guid userId);
}