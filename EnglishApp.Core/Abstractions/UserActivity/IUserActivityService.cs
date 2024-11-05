using EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface IUserActivityService
    {
        Task<Guid> CreateUserActivity(UserActivity userActivity);
        Task<List<UserActivity>> GetAllUsersActivity();
        Task<List<UserActivity>> GetUserActivity(Guid userId);
    }
}