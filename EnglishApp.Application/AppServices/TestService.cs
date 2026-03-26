using EnglishApp.Application.ParameterExtensions;
using EnglishApp.Core.Abstractions.Test;
using EnglishApp.Core.Models;
using EnglishApp.Core.Params.LessonParams;
using EnglishApp.Core.Params.LessonParams.TestParams;
using Microsoft.EntityFrameworkCore;

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
    
    public async Task<(List<Test> test, int totalCount)> GetTestsWithParameters(
        TestFilter lessonFilter,
        SortParams sortParams,
        PageParams pageParams,
        CancellationToken cancellationToken)
    {
        var query = _testsRepository.GetTestsQueryable();

        query = query
            .Filter(lessonFilter)
            .Sort(sortParams);

        var (pagedQuery, totalCount) = query.PageWithCount(pageParams);
        var lessons = await pagedQuery.ToListAsync(cancellationToken);

        return (lessons, totalCount);
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

    public async Task<Guid> IncrementTestPassCount(Guid testId, CancellationToken cancellationToken)
    {
        return await _testsRepository.IncrementTestPassCountAsync(testId, cancellationToken);
    }

    public async Task<Guid> DeleteTest(Guid testId, CancellationToken cancellationToken)
    {
        return await _testsRepository.DeleteTestAsync(testId, cancellationToken);
    }
}