using EnglishStorageApplication.EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface IUsersCardsRepository
    {
        Task<Guid> Create(UserCard userCard);
        Task<Guid> Delete(Guid id);
        Task<List<UserCard>> Get();
        Task<Guid> Update(Guid id, Guid userId, string nameOfUsersCard, string userCardData);
        Task<List<UserCard>> GetUserCards(Guid userId);
    }
}