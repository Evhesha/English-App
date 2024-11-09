using EnglishStorageApplication.EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface IUserCardService
    {
        Task<Guid> CreateUserCard(UserCard userCard);
        Task<Guid> DeleteUserCard(Guid userId);
        Task<List<UserCard>> GetAllUserCards(Guid userId);
        Task<List<UserCard>> GetAllUsersCards();
        Task<Guid> UpdateUserCard(Guid id, Guid userId, string nameOfUserCard, string userCardData);
    }
}