using EnglishStorageApplication.EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface IAdminRoleService
    {
        Task<Guid> CreateRole(AdminRole adminRole);
        Task<Guid> Delete(Guid id);
        Task<List<AdminRole>> GetAllRoles();
        Task<AdminRole> GetRole(Guid userId);
    }
}