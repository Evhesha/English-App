using EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishApp.Application.AppServices
{
    public class UserActivityService : IUserActivityService
    {
        private readonly IUsersActivitiesRepository _usersActivitiesRepository;

        public UserActivityService(IUsersActivitiesRepository usersActivitiesRepository)
        {
            _usersActivitiesRepository = usersActivitiesRepository;
        }

        public async Task<List<UserActivity>> GetAllUsersActivity()
        {
            return await _usersActivitiesRepository.Get();
        }

        public async Task<List<UserActivity>> GetUserActivity(Guid userId)
        {
            return await _usersActivitiesRepository.GetUserActivity(userId);
        }

        public async Task<Guid> CreateUserActivity(UserActivity userActivity)
        {
            return await _usersActivitiesRepository.Create(userActivity);
        }
    }
}
