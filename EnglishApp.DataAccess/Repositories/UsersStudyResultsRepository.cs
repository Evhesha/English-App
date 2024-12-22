using EnglishApp.Core.Models;
using EnglishApp.DataAccess.Entities;
using EnglishStorageApplication.EnglishApp.DataAccess;
using Microsoft.EntityFrameworkCore;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishApp.DataAccess.Repositories
{
    public class UsersStudyResultsRepository : IUsersStudyResultsRepository
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

        public async Task<List<UserStudyResult>> GetUserResults(Guid userId)
        {
            var userStudyResEntites = await _context.UsersStudyResults
                .AsNoTracking()
                .Where(x => x.UserId == userId)
                .ToListAsync();

            var results = userStudyResEntites
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

        public async Task<Guid> Update(Guid id, double percent)
        {
            var result = await _context.UsersStudyResults.FindAsync(id);
            if (result != null)
            {
                result.PercentResult = percent;
                await _context.SaveChangesAsync();
            }

            return id;
        }

        public async Task<Guid> Delete(Guid id)
        {
            var result = await _context.UsersStudyResults.FindAsync(id);
            if (result != null)
            {
                _context.UsersStudyResults.Remove(result);
                await _context.SaveChangesAsync();
            }

            return id;
        }
    }
}
