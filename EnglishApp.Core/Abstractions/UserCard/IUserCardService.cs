namespace EnglishApp.Core.Abstractions.UserCard;

public interface IUserCardService
{
    Task<List<EnglishStorageApplication.EnglishApp.Core.Models.UserCard>> GetUsersCards(CancellationToken cancellationToken);
    Task<List<EnglishStorageApplication.EnglishApp.Core.Models.UserCard>> GetUserCards(Guid userId, CancellationToken cancellationToken);
    Task<Guid> CreateUserCard(EnglishStorageApplication.EnglishApp.Core.Models.UserCard userCard, CancellationToken cancellationToken);
    Task<Guid> UpdateUserCard(Guid id, EnglishStorageApplication.EnglishApp.Core.Models.UserCard userCard, CancellationToken cancellationToken);
    Task<Guid> DeleteUserCard(Guid userId, CancellationToken cancellationToken);
}