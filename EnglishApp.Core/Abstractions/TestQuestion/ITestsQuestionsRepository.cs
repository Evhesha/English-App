namespace EnglishApp.Core.Abstractions.TestQuestion;

public interface ITestsQuestionsRepository
{
    Task<List<Models.TestQuestion>> GetTestsQuestionsByTestIdAsync(
        Guid testId,
        CancellationToken cancellationToken);

    Task<Models.TestQuestion> CreateTestQuestionAsync(
        Models.TestQuestion testQuestion,
        CancellationToken cancellationToken);

    Task<Guid> UpdateTestQuestionAsync(Models.TestQuestion testQuestion, CancellationToken cancellationToken);
    Task<Guid> DeleteTestQuestionAsync(Guid testQuestionId, CancellationToken cancellationToken);
}