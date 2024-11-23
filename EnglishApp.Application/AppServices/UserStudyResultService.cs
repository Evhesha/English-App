using EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishApp.Application.AppServices
{
    public class UserStudyResultService : IUserStudyResultService
    {
        IUsersStudyResultsRepository _resultsRepository;

        public UserStudyResultService(IUsersStudyResultsRepository resultsRepository)
        {
            _resultsRepository = resultsRepository;
        }

        public async Task<List<UserStudyResult>> GetAllUsersResults()
        {
            return await _resultsRepository.Get();
        }

        public async Task<List<UserStudyResult>> GetUserResults(Guid userId)
        {
            return await _resultsRepository.GetUserResults(userId);
        }

        public async Task<Guid> CreateUserResult(UserStudyResult userStudyResult)
        {
            return await _resultsRepository.Create(userStudyResult);
        }

        public async Task<Guid> Update(Guid id, double percent)
        {
            return await _resultsRepository.Update(id, percent);
        }

        public async Task<Guid> Delete(Guid id)
        {
            return await _resultsRepository.Delete(id);
        }
    }
}
