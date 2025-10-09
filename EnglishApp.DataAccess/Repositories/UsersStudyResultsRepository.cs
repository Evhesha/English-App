using EnglishApp.Core.Abstractions.UserStudyResult;
using EnglishApp.Core.Exceptions.UserStudyResultExceptions;
using EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace EnglishApp.DataAccess.Repositories
{
    public class UsersStudyResultsRepository : IUsersStudyResultsRepository
    {
        private readonly ApplicationDbContext _context;

        public UsersStudyResultsRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<UserStudyResult>> GetUsersStudyResultsAsync(CancellationToken cancellationToken)
        {
            return await _context.UsersStudyResults
                .AsNoTracking()
                .ToListAsync(cancellationToken);
        }

        public async Task<List<UserStudyResult>> GetUserStudyResultsByIdAsync(
            Guid userId,
            CancellationToken cancellationToken)
        {
            return await _context.UsersStudyResults
                .AsNoTracking()
                .Where(x => x.UserId == userId)
                .ToListAsync(cancellationToken);
        }

        public async Task<Guid> CreateUserStudyResultAsync(
            UserStudyResult userStudyResult,
            CancellationToken cancellationToken)
        {
            var userStudyResultEntity = new UserStudyResult
            {
                Id = userStudyResult.Id,
                UserId = userStudyResult.UserId,
                TestId = userStudyResult.TestId,
                PercentResult = userStudyResult.PercentResult
            };

            await _context.AddAsync(userStudyResultEntity, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);

            return userStudyResult.Id;
        }

        public async Task<Guid> UpdateUserStudyResultAsync(
            Guid id,
            double percent,
            CancellationToken cancellationToken)
        {
            var result = await _context.UsersStudyResults.FindAsync(id);
            if (result == null)
            {
                throw new NotFoundUserStudyResultException("Result wasn't found");
            }
            
            result.PercentResult = percent;
            await _context.SaveChangesAsync(cancellationToken);

            return id;
        }

        public async Task<Guid> DeleteUserStudyResultAsync(
            Guid id,
            CancellationToken cancellationToken)
        {
            var result = await _context.UsersStudyResults.FindAsync(id);
            if (result == null)
            {
                throw new NotFoundUserStudyResultException("Result wasn't found");
            }
            
            _context.UsersStudyResults.Remove(result);
            await _context.SaveChangesAsync(cancellationToken);

            return id;
        }
    }
}