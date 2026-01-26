namespace EnglishApp.Core.Abstractions.UserStudyResult;

public interface IUsersStudyResultsRepository
{
    Task<List<Models.UserStudyResult>> GetUsersStudyResultsAsync(CancellationToken cancellationToken);

    Task<List<Models.UserStudyResult>> GetUserStudyResultsByIdAsync(
        Guid userId,
        CancellationToken cancellationToken);

    Task<(double, int)> GetUserStudyPercentByIdAsync(
        Guid userId,
        CancellationToken cancellationToken);

    Task<List<Models.UserStudyResult>> GetTestsStudyResultsByUserIdAndTestIdAsync(
        Guid userId,
        List<Guid> testsId,
        CancellationToken cancellationToken);
    
    
    Task<Guid> CreateUserStudyResultAsync(
        Models.UserStudyResult userStudyResult,
        CancellationToken cancellationToken);

    Task<Guid> UpdateUserStudyResultAsync(
        Guid id,
        double percent,
        CancellationToken cancellationToken);

    Task<Guid> DeleteUserStudyResultAsync(
        Guid id,
        CancellationToken cancellationToken);
    
    Task<Guid> DeleteUsersStudyResultByUserIdAsync(
        Guid userId,
        CancellationToken cancellationToken
    );
}