using EnglishApp.Core.Models;
using EnglishApp.DataAccess.Repositories;

namespace EnglishApp.Application.AppServices
{
    public class QuestionService
    {
        private readonly QuestionRepository _questionRepository;

        public QuestionService(QuestionRepository questionRepository)
        {
            _questionRepository = questionRepository;
        }

        public async Task<List<Question>> Get()
        {
            return await _questionRepository.Get();
        }

        public async Task<List<Question>> GetTestQuestions(Guid testId)
        {
            return await _questionRepository.GetTestQuestions(testId);
        }

        public async Task<List<Question>> GetQuestionWithOptions(Guid id)
        {
            return await _questionRepository.GetQuestionWithOptions(id);
        }

        public async Task<Guid> Create(Question question)
        {
            return await _questionRepository.Create(question);
        }

        public async Task<Guid> Update(Guid id, string type, string questionText, string correctAnswer)
        {
            return await _questionRepository.Update(id, type, questionText, correctAnswer);
        }

        public async Task<Guid> Delete(Guid id)
        {
            return await _questionRepository.Delete(id);
        }
    }
}