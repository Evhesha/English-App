using EnglishApp.Core.Abstractions.UserCard;
using EnglishStorageApplication.EnglishApp.Core.Models;

namespace EnglishApp.Application.AppServices
{
    public class UserCardService : IUserCardService
    {
        private readonly IUsersCardsRepository _usersCardsRepository;

        public UserCardService(IUsersCardsRepository usersCardsRepository)
        {
            _usersCardsRepository = usersCardsRepository;
        }

        public async Task<List<UserCard>> GetUsersCards(CancellationToken cancellationToken)
        {
            return await _usersCardsRepository.GetUsersCardsAsync(cancellationToken);
        }

        public async Task<List<UserCard>> GetUserCards(Guid userId, CancellationToken cancellationToken)
        {
            return await _usersCardsRepository.GetUserCardsByUserIdAsync(userId, cancellationToken);
        }

        public async Task<Guid> CreateUserCard(UserCard userCard, CancellationToken cancellationToken)
        {
            return await _usersCardsRepository.CreateUserCardAsync(userCard, cancellationToken);
        }

        public async Task<Guid> UpdateUserCard(Guid id, UserCard userCard, CancellationToken cancellationToken)
        {
            return await _usersCardsRepository.UpdateUserCardAsync(id, userCard, cancellationToken);
        }

        public async Task<Guid> DeleteUserCard(Guid userId, CancellationToken cancellationToken)
        {
            return await _usersCardsRepository.DeleteUserCardAsync(userId, cancellationToken);
        }
    }
}