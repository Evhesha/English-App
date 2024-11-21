using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishApp.Application.AppServices
{
    public class UserStudyResultService
    {
        IUsersStudyResultsRepository _resultsRepository;

        public UserStudyResultService(IUsersStudyResultsRepository resultsRepository)
        {
            _resultsRepository = resultsRepository;
        }


    }
}
