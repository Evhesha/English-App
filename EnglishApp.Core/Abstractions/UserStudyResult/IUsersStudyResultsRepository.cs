using EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface IUsersStudyResultsRepository
    {
        Task<Guid> Create(UserStudyResult userStudyResult);
        Task<Guid> Delete(Guid id);
        Task<List<UserStudyResult>> Get();
        Task<List<UserStudyResult>> GetUserResults(Guid userId);
        Task<Guid> Update(Guid id, double percent);
    }
}