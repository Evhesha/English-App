using EnglishApp.Core.Models;
using EnglishApp.DataAccess.Entities;
using EnglishStorageApplication.EnglishApp.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace EnglishApp.DataAccess.Repositories
{
    public class TestRepository
    {
        private readonly ApplicationDbContext _context;

        public TestRepository(ApplicationDbContext applicationDbContext)
        {
            _context = applicationDbContext;
        }

        public async Task<List<TestEntity>> GetTest()
        {
            return  await _context.Tests
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<List<TestEntity>> GetTestWithQuestions(Guid testId)
        {
            return await _context.Tests
                .AsNoTracking()
                .Where(t => t.UserId == testId)
                .Include(t => t.Questions)
                .ToListAsync();
        }

        public async Task<Guid> CreateTest(Test test)
        {
            var testEntity = new TestEntity
            {
                Id = test.Id,
                UserId = test.UserId,
                Name = test.Name
            };

            await _context.AddAsync(testEntity);
            await _context.SaveChangesAsync();

            return test.Id;
        }

        public async Task<Guid> Update(Guid id, string name)
        {
            var testEntity = await _context.Tests.FindAsync(id);

            if (testEntity != null)
            {
                testEntity.Name = name;
            }

            return id;
        }

        public async Task<Guid> Delete(Guid testId)
        {
            var test = await _context.Tests.FirstOrDefaultAsync(t =>  t.Id == testId);

            if (test != null)
            {
                _context.Remove(test);
                await _context.SaveChangesAsync();
            }

            return testId;
        }
    }
}
