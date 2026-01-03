using EnglishApp.Core.Abstractions.UserStudyResult;
using EnglishApp.Core.Models;

namespace EnglishApp.Application.AppServices
{
    public class UserStudyResultService : IUserStudyResultService
    {
        IUsersStudyResultsRepository _usersStudyResultsRepository;

        public UserStudyResultService(IUsersStudyResultsRepository usersStudyResultsRepository)
        {
            _usersStudyResultsRepository = usersStudyResultsRepository;
        }

        public async Task<List<UserStudyResult>> GetAllUsersResults(CancellationToken cancellationToken)
        {
            return await _usersStudyResultsRepository.GetUsersStudyResultsAsync(cancellationToken);
        }

        public async Task<List<UserStudyResult>> GetUserResults(Guid userId, CancellationToken cancellationToken)
        {
            return await _usersStudyResultsRepository.GetUserStudyResultsByIdAsync(userId, cancellationToken);
        }

        public async Task<(double, int)> GetUserStudyPercentById(Guid userId, CancellationToken cancellationToken)
        {
            return await _usersStudyResultsRepository.GetUserStudyPercentByIdAsync(userId, cancellationToken);
        }

        public async Task<Guid> CreateUserResult(UserStudyResult userStudyResult, CancellationToken cancellationToken)
        {
            return await _usersStudyResultsRepository.CreateUserStudyResultAsync(userStudyResult, cancellationToken);
        }

        public async Task<Guid> UpdateUserResult(Guid id, double percent, CancellationToken cancellationToken)
        {
            return await _usersStudyResultsRepository.UpdateUserStudyResultAsync(id, percent, cancellationToken);
        }

        public async Task<Guid> DeleteUserResult(Guid id, CancellationToken cancellationToken)
        {
            return await _usersStudyResultsRepository.DeleteUserStudyResultAsync(id, cancellationToken);
        }
    }
}