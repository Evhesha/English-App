using EnglishApp.Core.Models;
using EnglishApp.DataAccess.UserEntites;
using EnglishStorageApplication.EnglishApp.DataAccess;
using Microsoft.EntityFrameworkCore;
using System.Dynamic;

namespace EnglishApp.DataAccess.Repositories
{
    public class UsersStudyResultsRepository
    {
        private readonly ApplicationDbContext _context;

        public UsersStudyResultsRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<UserStudyResult>> Get()
        {
            var userStudyResultEntities = await _context.UsersStudyResults
                .AsNoTracking() 
                .ToListAsync();

            var results = userStudyResultEntities
                .Select(x => UserStudyResult.Create(x.Id, x.UserId, x.TestId, x.PercentResult).UserStudyResult)
                .ToList();

            return results;
        }

        public async Task<Guid> Create(UserStudyResult userStudyResult)
        {
            var userStudyResultEntity = new UserStudyResultEntity
            {
                Id = userStudyResult.Id,
                UserId = userStudyResult.UserId,
                TestId = userStudyResult.TestId,
                PercentResult = userStudyResult.PercentResult
            };

            await _context.AddAsync(userStudyResultEntity);
            await _context.SaveChangesAsync();

            return userStudyResult.Id;
        }
    }
}
