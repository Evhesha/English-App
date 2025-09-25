namespace EnglishApp.Core.Abstractions.User;

public interface IUsersRepository
{
    Task<List<EnglishStorageApplication.EnglishApp.Core.Models.User>> GetUsersAsync(CancellationToken cancellationToken);
    Task<EnglishStorageApplication.EnglishApp.Core.Models.User?> GetUserByIdAsync(Guid id, CancellationToken cancellationToken);
    Task<EnglishStorageApplication.EnglishApp.Core.Models.User?> GetUserByEmailAsync(string email, CancellationToken cancellationToken);
    Task<Guid> CreateUserAsync(EnglishStorageApplication.EnglishApp.Core.Models.User user, CancellationToken cancellationToken);
    Task<Guid> UpdateUserAsync(EnglishStorageApplication.EnglishApp.Core.Models.User user, CancellationToken cancellationToken);
    Task<Guid> DeleteUserAsync(Guid id, CancellationToken cancellationToken);
}