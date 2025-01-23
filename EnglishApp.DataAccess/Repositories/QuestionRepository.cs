using EnglishApp.Core.Models;
using EnglishApp.DataAccess.Entities;
using EnglishStorageApplication.EnglishApp.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace EnglishApp.DataAccess.Repositories
{
    public class QuestionRepository
    {
        private readonly ApplicationDbContext _context;

        public QuestionRepository(ApplicationDbContext applicationDbContext)
        {
            _context = applicationDbContext;
        }

        public async Task<List<QuestionEntity>> Get()
        {
            return await _context.Questions
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<List<QuestionEntity>> GetTestQuestions(Guid testId)
        {
            return await _context.Questions
                .AsNoTracking()
                .Where(q => q.TestId == testId)
                .ToListAsync();
        }

        //public async Task<List<QuestionEntity>> GetQuestionsWithOptions()
        //{

        //}

        public async Task<Guid> Create(Question question)
        {
            var questionEntity = new QuestionEntity
            {
                Id = question.Id,
                TestId = question.TestId,
                Type = question.Type,
                QuestionText = question.QuestionText,
                CorrectAnswer = question.CorrectAnswer
            };

            await _context.Questions.AddAsync(questionEntity);
            await _context.SaveChangesAsync();

            return question.Id;
        }

        //public async Task<Guid> Update(string type, string questionText, string correctAnswer)
        //{

        //}

        public async Task<Guid> Delete(Guid id)
        {
            var question = await _context.Questions.FindAsync(id);

            if (question != null)
            {
                _context.Questions.Remove(question);
                await _context.SaveChangesAsync();
            }

            return id;
        }
    }
}