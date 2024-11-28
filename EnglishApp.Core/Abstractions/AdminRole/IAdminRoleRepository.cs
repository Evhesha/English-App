using EnglishStorageApplication.EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface IAdminRoleRepository
    {
        Task<Guid> Create(AdminRole adminRole);
        Task<Guid> Delete(Guid id);
        Task<List<AdminRole>> Get();
        Task<AdminRole> GetAdmin(Guid userId);
        Task<bool> IsAdmin(Guid userId);
    }
}