using EnglishApp.Core.Models;
using EnglishApp.DataAccess.Entities;
using EnglishStorageApplication.EnglishApp.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace EnglishApp.DataAccess.Repositories
{
    public class TestRepository
    {
        private readonly ApplicationDbContext _applicationDbContext;

        public TestRepository(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        public async Task<List<TestEntity>> GetTest()
        {
            return  await _applicationDbContext.Tests
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<List<TestEntity>> GetTestWithQuestions(Guid testId)
        {
            return await _applicationDbContext.Tests
                .AsNoTracking()
                .Where(t => t.UserId == testId)
                .Include(t => t.Questions)
                .ToListAsync();
        }

        public async Task CreateTest(Guid userId, string name, List<QuestionEntity> questions)
        {

        }

        public async Task<Guid> Delete(Guid testId)
        {
            var test = await _applicationDbContext.Tests.FirstOrDefaultAsync(t =>  t.Id == testId);

            if (test != null)
            {
                _applicationDbContext.Remove(test);
                await _applicationDbContext.SaveChangesAsync();
            }

            return testId;
        }
    }
}
