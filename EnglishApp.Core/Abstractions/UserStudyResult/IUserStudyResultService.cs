namespace EnglishApp.Core.Abstractions.UserStudyResult;

public interface IUserStudyResultService
{
    Task<List<Models.UserStudyResult>> GetAllUsersResults(CancellationToken cancellationToken);
    Task<List<Models.UserStudyResult>> GetUserResults(Guid userId, CancellationToken cancellationToken);
    Task<Guid> CreateUserResult(Models.UserStudyResult userStudyResult, CancellationToken cancellationToken);
    Task<Guid> UpdateUserResult(Guid id, double percent, CancellationToken cancellationToken);
    Task<Guid> DeleteUserResult(Guid id, CancellationToken cancellationToken);
}