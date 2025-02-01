using EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface ITestService
    {
        Task<Guid> Create(Test test);
        Task<Guid> Delete(Guid id);
        Task<List<Test>> Get();
        Task<List<Test>> GetTestsWithQuestions(Guid testId);
        Task<List<Test>> GetUserTest(Guid userId);
        Task<Guid> Update(Guid id, string name);
    }
}