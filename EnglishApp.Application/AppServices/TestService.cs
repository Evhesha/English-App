using EnglishApp.Core.Abstractions.Test;
using EnglishApp.Core.Models;

namespace EnglishApp.Application.AppServices;

public class TestService : ITestService
{
    private readonly ITestsRepository _testsRepository;

    public TestService(ITestsRepository testsRepository)
    {
        _testsRepository = testsRepository;
    }

    public async Task<List<Test>> GetAllTets(CancellationToken cancellationToken)
    {
        return await _testsRepository.GetAllTestsAsync(cancellationToken);
    }
    
    public async Task<List<Test>> GetUserTests(Guid userId, CancellationToken cancellationToken)
    {
        return await _testsRepository.GetUsersTestsAsync(userId, cancellationToken);
    }

    public async Task<Test?> GetTestById(Guid testId, CancellationToken cancellationToken)
    {
        return await _testsRepository.GetTestByIdAsync(testId, cancellationToken);
    }
    
    public async Task<Guid> CreateTest(Test test, CancellationToken cancellationToken)
    {
        return await _testsRepository.CreateTestAsync(test, cancellationToken);
    }
    
    public async Task<Guid> UpdateTest(Test test, CancellationToken cancellationToken)
    {
        return await _testsRepository.UpdateTestAsync(test, cancellationToken);
    }

    public async Task<Guid> DeleteTest(Guid testId, CancellationToken cancellationToken)
    {
        return await _testsRepository.DeleteTestAsync(testId, cancellationToken);
    }
}