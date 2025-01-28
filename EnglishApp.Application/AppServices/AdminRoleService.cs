using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.EnglishApp.Core.Models;

namespace EnglishApp.Application.AppServices
{
    public class AdminRoleService : IAdminRoleService
    {
        private readonly IAdminRoleRepository _adminRoleRepository;

        public AdminRoleService(IAdminRoleRepository adminRoleRepository)
        {
            _adminRoleRepository = adminRoleRepository;
        }

        public async Task<List<AdminRole>> GetAllRoles()
        {
            return await _adminRoleRepository.Get();
        }

        public async Task<AdminRole> GetRole(Guid userId)
        {
            return await _adminRoleRepository.GetAdmin(userId);
        }

        public async Task<Guid> CreateRole(AdminRole adminRole)
        {
            return await _adminRoleRepository.Create(adminRole);
        }

        public async Task<Guid> Delete(Guid id)
        {
            return await _adminRoleRepository.Delete(id);
        }
    }
}