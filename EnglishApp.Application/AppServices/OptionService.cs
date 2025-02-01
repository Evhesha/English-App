using EnglishApp.Core.Models;
using EnglishApp.DataAccess.Repositories;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishApp.Application.AppServices
{
    public class OptionService : IOptionService
    {
        private readonly OptionRepository _optionRepository;

        public OptionService(OptionRepository optionRepository)
        {
            _optionRepository = optionRepository;
        }

        public async Task<List<Option>> Get()
        {
            return await _optionRepository.Get();
        }

        public async Task<List<Option>> GetQuestionOptions(Guid questionId)
        {
            return await _optionRepository.GetQuestionOptions(questionId);
        }

        public async Task<Guid> Create(Option option)
        {
            return await _optionRepository.Create(option);
        }

        public async Task<Guid> Update(Guid id, string optionText)
        {
            return await _optionRepository.Update(id, optionText);
        }

        public async Task<Guid> Delete(Guid id)
        {
            return await _optionRepository.Delete(id);
        }
    }
}