namespace EnglishApp.Core.Abstractions.Test;

public interface ITestService
{
    Task<List<Models.Test>> GetAllTets(CancellationToken cancellationToken);
    Task<List<Models.Test>> GetUserTests(Guid userId, CancellationToken cancellationToken);
    Task<Models.Test?> GetTestById(Guid testId, CancellationToken cancellationToken);
    Task<Guid> CreateTest(Models.Test test, CancellationToken cancellationToken);
    Task<Guid> UpdateTest(Models.Test test, CancellationToken cancellationToken);
    Task<Guid> IncrementTestPassCount(Guid testId, CancellationToken cancellationToken);
    Task<Guid> DeleteTest(Guid testId, CancellationToken cancellationToken);
}