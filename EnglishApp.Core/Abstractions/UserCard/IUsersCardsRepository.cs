namespace EnglishApp.Core.Abstractions.UserCard;

public interface IUsersCardsRepository
{
    Task<List<EnglishStorageApplication.EnglishApp.Core.Models.UserCard>> GetUsersCardsAsync(CancellationToken cancellationToken);

    Task<List<EnglishStorageApplication.EnglishApp.Core.Models.UserCard>> GetUserCardsByUserIdAsync(
        Guid userId,
        CancellationToken cancellationToken);

    Task<Guid> CreateUserCardAsync(
        EnglishStorageApplication.EnglishApp.Core.Models.UserCard userCard,
        CancellationToken cancellationToken);

    Task<Guid> UpdateUserCardAsync(Guid id, EnglishStorageApplication.EnglishApp.Core.Models.UserCard userCard, CancellationToken cancellationToken);
    Task<Guid> DeleteUserCardAsync(Guid id, CancellationToken cancellationToken);
}