using EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface IUsersActivitiesRepository
    {
        Task<Guid> Create(UserActivity userActivity);
        Task<List<UserActivity>> Get();
        Task<List<UserActivity>> GetUserActivity(Guid userId);
    }
}