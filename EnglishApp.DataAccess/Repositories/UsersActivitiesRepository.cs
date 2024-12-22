using EnglishApp.Core.Models;
using EnglishApp.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using System.Data;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishStorageApplication.EnglishApp.DataAccess.Repositories
{
    public class UsersActivitiesRepository : IUsersActivitiesRepository
    {
        private readonly ApplicationDbContext _context;

        public UsersActivitiesRepository(ApplicationDbContext applicationDbContext)
        {
            _context = applicationDbContext;
        }

        public async Task<List<UserActivity>> Get()
        {
            var userActivityEntities = await _context.UsersActivities
                .AsNoTracking()
                .ToListAsync();

            var usersActivities = userActivityEntities
                .Select(x => UserActivity.Create(x.Id, x.UserId, x.DateTime, x.IsActive).UserActivity)
                .ToList();

            return usersActivities;
        }

        public async Task<List<UserActivity>> GetUserActivity(Guid userId)
        {
            var userActivityEntities = await _context.UsersActivities
                .Where(x => x.UserId == userId)
                .AsNoTracking()
                .ToListAsync();

            var usersActivities = userActivityEntities
                .Select(x => UserActivity.Create(x.Id, x.UserId, x.DateTime, x.IsActive).UserActivity)
                .ToList();

            return usersActivities;
        }

        public async Task<Guid> Create(UserActivity userActivity)
        {
            var userActivityEntity = new UserActivityEntity
            {
                Id = userActivity.Id,
                UserId = userActivity.UserId,
                DateTime = userActivity.DateTime,
                IsActive = userActivity.IsActive
            };

            await _context.AddAsync(userActivityEntity);
            await _context.SaveChangesAsync();

            return userActivityEntity.Id;
        }
    }
}
