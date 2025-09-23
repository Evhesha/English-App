namespace EnglishApp.Core.Abstractions.AdminRole;

public interface IAdminRoleService
{
    Task<List<EnglishStorageApplication.EnglishApp.Core.Models.AdminRole>> GetAdmins(CancellationToken cancellationToken);
    Task<EnglishStorageApplication.EnglishApp.Core.Models.AdminRole?> GetAdmin(Guid userId, CancellationToken cancellationToken);
    Task<Guid> CreateAdmin(EnglishStorageApplication.EnglishApp.Core.Models.AdminRole adminRole, CancellationToken cancellationToken);
    Task<Guid> Delete(Guid id, CancellationToken cancellationToken);
}