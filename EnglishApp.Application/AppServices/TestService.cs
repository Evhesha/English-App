using EnglishApp.Core.Models;
using EnglishApp.DataAccess.Repositories;

namespace EnglishApp.Application.AppServices
{
    public class TestService
    {
        private readonly TestRepository _testRepository;

        public TestService(TestRepository testRepository)
        {
            _testRepository = testRepository;
        }

        public async Task<List<Test>> Get()
        {
            return await _testRepository.Get();
        }

        public async Task<List<Test>> GetUserTest(Guid userId)
        {
            return await _testRepository.GetUserTests(userId);
        }

        public async Task<List<Test>> GetTestsWithQuestions(Guid testId)
        {
            return await _testRepository.GetTestWithQuestions(testId);
        }

        public async Task<Guid> Create(Test test)
        {
            return await _testRepository.CreateTest(test);
        }

        public async Task<Guid> Update(Guid id, string name)
        {
            return await _testRepository.Update(id, name);
        }

        public async Task<Guid> Delete(Guid id)
        {
            return await _testRepository.Delete(id);
        }
    }
}