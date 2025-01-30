using EnglishApp.Core.Models;
using EnglishApp.DataAccess.Entities;
using EnglishStorageApplication.EnglishApp.DataAccess;
using Microsoft.EntityFrameworkCore;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishApp.DataAccess.Repositories
{
    public class TestRepository : ITestRepository
    {
        private readonly ApplicationDbContext _context;

        public TestRepository(ApplicationDbContext applicationDbContext)
        {
            _context = applicationDbContext;
        }

        public async Task<List<Test>> Get()
        {
            var testEntity = await _context.Tests
                .AsNoTracking()
                .ToListAsync();

            var tests = testEntity
                .Select(t => Test.Create(t.Id, t.UserId, t.Name).Test)
                .ToList();

            return tests;
        }

        public async Task<List<Test>> GetUserTests(Guid userId)
        {
            var testEntity = await _context.Tests
                .AsNoTracking()
                .Where(t => t.UserId == userId)
                .ToListAsync();

            var tests = testEntity
                .Select(t => Test.Create(t.Id, t.UserId, t.Name).Test)
                .ToList();

            return tests;
        }

        public async Task<List<Test>> GetTestWithQuestions(Guid testId)
        {
            var testEntity = await _context.Tests
                .AsNoTracking()
                .Where(t => t.Id == testId)
                .Include(t => t.Questions)
                .ToListAsync();

            var tests = testEntity
                .Select(t => Test.Create(t.Id, t.UserId, t.Name).Test)
                .ToList();

            return tests;
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
                await _context.SaveChangesAsync();
            }

            return id;
        }

        public async Task<Guid> Delete(Guid testId)
        {
            var test = await _context.Tests.FirstOrDefaultAsync(t => t.Id == testId);

            if (test != null)
            {
                _context.Remove(test);
                await _context.SaveChangesAsync();
            }

            return testId;
        }
    }
}