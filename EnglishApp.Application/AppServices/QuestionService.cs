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

    }
}