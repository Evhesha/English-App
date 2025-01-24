using EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface ITestRepository
    {
        Task<Guid> CreateTest(Test test);
        Task<Guid> Delete(Guid testId);
        Task<List<Test>> GetTest();
        Task<List<Test>> GetTestWithQuestions(Guid testId);
        Task<List<Test>> GetUserTests(Guid userId);
        Task<Guid> Update(Guid id, string name);
    }
}