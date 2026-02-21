using EnglishApp.Core.Abstractions.TestQuestion;
using EnglishApp.Core.Models;

namespace EnglishApp.Application.AppServices;

public class TestQuestionService : ITestQuestionService
{
    private readonly ITestsQuestionsRepository _testsQuestionsRepository;

    public TestQuestionService(ITestsQuestionsRepository testsQuestionsRepository)
    {
        _testsQuestionsRepository = testsQuestionsRepository;
    }

    public async Task<List<TestQuestion>> GetTestQuestion(Guid testId, CancellationToken cancellationToken)
    {
        return await _testsQuestionsRepository.GetTestsQuestionsByTestIdAsync(testId, cancellationToken);
    }

    public async Task<TestQuestion> CreateTestQuestion(TestQuestion testQuestion, CancellationToken cancellationToken)
    {
        return await _testsQuestionsRepository.CreateTestQuestionAsync(testQuestion, cancellationToken);
    }

    public async Task<Guid> UpdateTestQuestion(TestQuestion testQuestion, CancellationToken cancellationToken)
    {
        return await _testsQuestionsRepository.UpdateTestQuestionAsync(testQuestion, cancellationToken);
    }

    public async Task<Guid> DeleteTestQuestion(Guid testId, CancellationToken cancellationToken)
    {
        return await _testsQuestionsRepository.DeleteTestQuestionAsync(testId, cancellationToken);
    }
}