using EnglishStorageApplication.EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishApp.Application.AppServices
{
    public class UserCardService : IUserCardService
    {
        private readonly IUsersCardsRepository _usersCardsRepository;

        public UserCardService(IUsersCardsRepository usersCardsRepository)
        {
            _usersCardsRepository = usersCardsRepository;
        }

        public async Task<List<UserCard>> GetAllUsersCards()
        {
            return await _usersCardsRepository.Get();
        }

        public async Task<List<UserCard>> GetAllUserCards(Guid userId)
        {
            return await _usersCardsRepository.GetUserCards(userId);
        }

        public async Task<Guid> CreateUserCard(UserCard userCard)
        {
            return await _usersCardsRepository.Create(userCard);
        }

        public async Task<Guid> UpdateUserCard(Guid id, Guid userId, string nameOfUserCard, string userCardData)
        {
            return await _usersCardsRepository.Update(id, userId, nameOfUserCard, userCardData);
        }

        public async Task<Guid> DeleteUserCard(Guid userId)
        {
            return await _usersCardsRepository.Delete(userId);
        }
    }
}