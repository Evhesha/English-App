namespace EnglishApp.Core.Abstractions.AdminRole;

public interface IAdminRoleRepository
{
    Task<List<EnglishStorageApplication.EnglishApp.Core.Models.AdminRole>> GetAdminsAsync(CancellationToken cancellationToken);

    Task<EnglishStorageApplication.EnglishApp.Core.Models.AdminRole?> GetAdminByIdAsync(
        Guid userId,
        CancellationToken cancellationToken);

    Task<Guid> CreateAdminAsync(
        EnglishStorageApplication.EnglishApp.Core.Models.AdminRole adminRole,
        CancellationToken cancellationToken);

    Task<Guid> DeleteAdminAsync(
        Guid id,
        CancellationToken cancellationToken);

    Task<bool> IsAdminAsync(Guid userId);
}