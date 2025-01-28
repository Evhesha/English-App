using EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishApp.Application.AppServices
{
    public class UserStudyResultService : IUserStudyResultService
    {
        IUsersStudyResultsRepository _usersStudyResultsRepository;

        public UserStudyResultService(IUsersStudyResultsRepository usersStudyResultsRepository)
        {
            _usersStudyResultsRepository = usersStudyResultsRepository;
        }

        public async Task<List<UserStudyResult>> GetAllUsersResults()
        {
            return await _usersStudyResultsRepository.Get();
        }

        public async Task<List<UserStudyResult>> GetUserResults(Guid userId)
        {
            return await _usersStudyResultsRepository.GetUserResults(userId);
        }

        public async Task<Guid> CreateUserResult(UserStudyResult userStudyResult)
        {
            return await _usersStudyResultsRepository.Create(userStudyResult);
        }

        public async Task<Guid> Update(Guid id, double percent)
        {
            return await _usersStudyResultsRepository.Update(id, percent);
        }

        public async Task<Guid> Delete(Guid id)
        {
            return await _usersStudyResultsRepository.Delete(id);
        }
    }
}