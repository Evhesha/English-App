using EnglishApp.Core.Abstractions.TestQuestion;
using EnglishApp.Core.Exceptions.TestQuestionExceptions;
using EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace EnglishApp.DataAccess.Repositories;

public class TestsQuestionsRepository : ITestsQuestionsRepository
{
    private readonly ApplicationDbContext _context;
    
    public TestsQuestionsRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<TestQuestion>> GetTestsQuestionsByTestIdAsync(
        Guid testId,
        CancellationToken cancellationToken)
    {
        return await  _context.TestQuestions
            .AsNoTracking()
            .Where(q => q.TestId == testId)
            .ToListAsync(cancellationToken);
    }

    public async Task<TestQuestion> CreateTestQuestionAsync(
        TestQuestion testQuestion,
        CancellationToken cancellationToken)
    {
        _context.Add(testQuestion);
        await _context.SaveChangesAsync(cancellationToken);
        return testQuestion;
    }

    public async Task<Guid> UpdateTestQuestionAsync(TestQuestion testQuestion, CancellationToken cancellationToken)
    {
        var  testQuestionEntity = await _context.TestQuestions
            .FirstOrDefaultAsync(q => q.Id == testQuestion.Id,  cancellationToken);

        if (testQuestionEntity == null)
        {
            throw new TestQuestionWasNotFoundException("Test question was not found");
        }
        
        testQuestionEntity.Question = testQuestion.Question;
        testQuestionEntity.CorrectAnswer = testQuestion.CorrectAnswer;
        testQuestionEntity.Options = testQuestion.Options;
        testQuestionEntity.Type = testQuestion.Type;
        
        _context.TestQuestions.Update(testQuestionEntity);
        await _context.SaveChangesAsync(cancellationToken);
        return testQuestion.Id;
    }

    public async Task<Guid> DeleteTestQuestionAsync(Guid testQuestionId, CancellationToken cancellationToken)
    {
        var testQuestionEntity = await _context.TestQuestions
            .FirstOrDefaultAsync(t => t.Id == testQuestionId, cancellationToken);

        if (testQuestionEntity == null)
        {
            throw new TestQuestionWasNotFoundException("Test question was not found");
        }

        _context.TestQuestions.Remove(testQuestionEntity);
        await _context.SaveChangesAsync(cancellationToken);
        return testQuestionId;
    }
}