using EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface IQuestionRepository
    {
        Task<Guid> Create(Question question);
        Task<Guid> Delete(Guid id);
        Task<List<Question>> Get();
        Task<List<Question>> GetQuestionWithOptions(Guid id);
        Task<List<Question>> GetTestQuestions(Guid testId);
        Task<Guid> Update(Guid id, string type, string questionText, string correctAnswer);
    }
}