namespace EnglishApp.Core.Abstractions.Test;

public interface ITestsRepository
{
    IQueryable<Models.Test> GetLessonsQueryable();
    Task<List<Models.Test>> GetAllTestsAsync(CancellationToken cancellationToken);
    Task<List<Models.Test>> GetUsersTestsAsync(Guid userId, CancellationToken cancellationToken);
    Task<Models.Test?> GetTestByIdAsync(Guid id, CancellationToken cancellationToken);
    Task<Guid> CreateTestAsync(Models.Test test, CancellationToken cancellationToken);
    Task<Guid> UpdateTestAsync(Models.Test test, CancellationToken cancellationToken);
    Task<Guid> IncrementTestPassCountAsync(Guid testId, CancellationToken cancellationToken);
    Task<Guid> DeleteTestAsync(Guid testId, CancellationToken cancellationToken);
}