namespace EnglishApp.Core.Abstractions.User;

public interface IUserService
{
    Task<List<EnglishStorageApplication.EnglishApp.Core.Models.User>> GetAllUsers(CancellationToken cancellationToken);
    Task<EnglishStorageApplication.EnglishApp.Core.Models.User?> GetUserById(Guid id,
        CancellationToken  cancellationToken);

    Task<EnglishStorageApplication.EnglishApp.Core.Models.User?> GetUserByEmail(string email,
        CancellationToken cancellationToken);
    Task<Guid> CreateUser(EnglishStorageApplication.EnglishApp.Core.Models.User user,
        CancellationToken cancellationToken);
    Task<Guid> UpdateUser(EnglishStorageApplication.EnglishApp.Core.Models.User user,
        CancellationToken cancellationToken);
    Task<Guid> DeleteUser(Guid id, CancellationToken cancellationToken);
}