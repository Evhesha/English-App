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
                .Where(t => t.Id == testId)
                .Include(t => t.Questions)
                .ToListAsync();
        }

        public async Task CreateTest(Guid userId, string name, List<QuestionEntity> questions)
        {

        }
    }
}
