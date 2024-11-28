using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.EnglishApp.Core.Models;

namespace EnglishApp.Application.AppServices
{
    public class AdminRoleService : IAdminRoleService
    {
        private readonly IAdminRoleRepository _roleRepository;

        public AdminRoleService(IAdminRoleRepository roleRepository)
        {
            _roleRepository = roleRepository;
        }

        public async Task<List<AdminRole>> GetAllRoles()
        {
            return await _roleRepository.Get();
        }

        public async Task<AdminRole> GetRole(Guid userId)
        {
            return await _roleRepository.GetAdmin(userId);
        }

        public async Task<Guid> CreateRole(AdminRole adminRole)
        {
            return await _roleRepository.Create(adminRole);
        }

        public async Task<Guid> Delete(Guid id)
        {
            return await _roleRepository.Delete(id);
        }
    }
}
