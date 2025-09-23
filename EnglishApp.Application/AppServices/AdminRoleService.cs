namespace EnglishApp.Core.Abstractions.AdminRole
{
    public class AdminRoleService : IAdminRoleService
    {
        private readonly IAdminRoleRepository _adminRoleRepository;

        public AdminRoleService(IAdminRoleRepository adminRoleRepository)
        {
            _adminRoleRepository = adminRoleRepository;
        }

        public async Task<List<EnglishStorageApplication.EnglishApp.Core.Models.AdminRole>> GetAdmins(CancellationToken cancellationToken)
        {
            return await _adminRoleRepository.GetAdminsAsync(cancellationToken);
        }

        public async Task<EnglishStorageApplication.EnglishApp.Core.Models.AdminRole?> GetAdmin(Guid userId, CancellationToken cancellationToken)
        {
            return await _adminRoleRepository.GetAdminByIdAsync(userId, cancellationToken);
        }

        public async Task<Guid> CreateAdmin(EnglishStorageApplication.EnglishApp.Core.Models.AdminRole adminRole, CancellationToken cancellationToken)
        {
            return await _adminRoleRepository.CreateAdminAsync(adminRole, cancellationToken);
        }

        public async Task<Guid> Delete(Guid id, CancellationToken cancellationToken)
        {
            return await _adminRoleRepository.DeleteAdminAsync(id, cancellationToken);
        }
    }
}