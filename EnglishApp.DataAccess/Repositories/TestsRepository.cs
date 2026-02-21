using EnglishApp.Core.Abstractions.Test;
using EnglishApp.Core.Exceptions.TestExceptions;
using EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace EnglishApp.DataAccess.Repositories;

public class TestsRepository : ITestsRepository
{
    private readonly ApplicationDbContext _context;
    
    public TestsRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<Test>> GetAllTestsAsync(CancellationToken cancellationToken)
    {
        return await _context.Tests
            .AsNoTracking()
            .ToListAsync(cancellationToken);
    }

    public async Task<List<Test>> GetUsersTestsAsync(Guid userId, CancellationToken cancellationToken)
    {
        return await _context.Tests
            .AsNoTracking()
            .Where(t => t.UserId == userId)
            .ToListAsync(cancellationToken);
    }

    public async Task<Test?> GetTestByIdAsync(Guid id, CancellationToken cancellationToken)
    {
        return await _context.Tests
            .AsNoTracking()
            .FirstOrDefaultAsync(t => t.Id == id, cancellationToken);
    }

    public async Task<Guid> CreateTestAsync(Test test, CancellationToken cancellationToken)
    {
        _context.Tests.Add(test);
        await _context.SaveChangesAsync(cancellationToken);
        return test.Id;
    }

    public async Task<Guid> UpdateTestAsync(Test test, CancellationToken cancellationToken)
    {
        var testEntity = await _context.Tests.FirstOrDefaultAsync(t => t.Id == test.Id, cancellationToken);
        if (testEntity == null)
        {
            throw new TestWasNotFoundException("Test test was not found");
        }

        testEntity.Name = test.Name;
        testEntity.Description = test.Description;
        testEntity.LastUpdateAt = test.LastUpdateAt;
        
        await _context.SaveChangesAsync(cancellationToken);
        return test.Id;
    }

    public async Task<Guid> DeleteTestAsync(Guid testId, CancellationToken cancellationToken)
    {
        var testEntity = await _context.Tests.FirstOrDefaultAsync(t => t.Id == testId, cancellationToken);
        if (testEntity == null)
        {
            throw new TestWasNotFoundException("Test test was not found");
        }
        
        _context.Tests.Remove(testEntity);
        await _context.SaveChangesAsync(cancellationToken);
        return testEntity.Id;
    }
}