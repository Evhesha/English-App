using EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface IOptionRepository
    {
        Task<Guid> Create(Option option);
        Task<Guid> Delete(Guid id);
        Task<List<Option>> Get();
        Task<List<Option>> GetQuestionOptions(Guid questionId);
        Task<Guid> Update(Guid id, string optionText);
    }
}