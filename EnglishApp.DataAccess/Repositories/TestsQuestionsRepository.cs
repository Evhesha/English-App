using EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace EnglishApp.DataAccess.Repositories;

public class TestsQuestionsRepository
{
    private readonly ApplicationDbContext _context;
    
    public TestsQuestionsRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<TestQuestion>> GetTestsQuestionsByTestIdAsync(Guid testId, CancellationToken cancellationToken)
    {
        return await  _context.TestQuestions
            .AsNoTracking()
            .Where(q => q.TestId == testId)
            .ToListAsync(cancellationToken);
    }

    public async Task<TestQuestion> CreateTestQuestionAsync(TestQuestion testQuestion, CancellationToken cancellationToken)
    {
        _context.Add(testQuestion);
        await _context.SaveChangesAsync(cancellationToken);
        return testQuestion;
    }

    public async Task<Guid> DeleteTestQuestionAsync(Guid testQuestionId, CancellationToken cancellationToken)
    {
        var testQuestionEntity = await _context.TestQuestions
            .FirstOrDefaultAsync(t => t.Id == testQuestionId);

        if (testQuestionEntity == null)
        {
            
        }

        _context.TestQuestions.Remove(testQuestionEntity);
        await _context.SaveChangesAsync(cancellationToken);
        return testQuestionId;
    }
}