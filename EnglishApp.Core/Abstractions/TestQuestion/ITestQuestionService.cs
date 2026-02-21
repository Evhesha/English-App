namespace EnglishApp.Core.Abstractions.TestQuestion;

public interface ITestQuestionService
{
    Task<List<Models.TestQuestion>> GetTestQuestion(Guid testId, CancellationToken cancellationToken);
    Task<Models.TestQuestion> CreateTestQuestion(Models.TestQuestion testQuestion, CancellationToken cancellationToken);
    Task<Guid> UpdateTestQuestion(Models.TestQuestion testQuestion, CancellationToken cancellationToken);
    Task<Guid> DeleteTestQuestion(Guid testId, CancellationToken cancellationToken);
}