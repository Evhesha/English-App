using EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface IUserStudyResultService
    {
        Task<Guid> CreateUserResult(UserStudyResult userStudyResult);
        Task<Guid> Delete(Guid id);
        Task<List<UserStudyResult>> GetAllUsersResults();
        Task<List<UserStudyResult>> GetUserResults(Guid userId);
        Task<Guid> Update(Guid id, double percent);
    }
}