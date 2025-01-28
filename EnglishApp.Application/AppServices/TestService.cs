using EnglishApp.DataAccess.Repositories;

namespace EnglishApp.Application.AppServices
{
    public class TestService
    {
        private readonly TestRepository _testRepository;

        public TestService(TestRepository testRepository)
        {

        }
    }
}