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

        public async Task<List<Question>> Get()
        {
            var questionEntity =  await _context.Questions
                .AsNoTracking()
                .ToListAsync();

            var questions = questionEntity
                .Select(q => Question.Create(q.Id, q.TestId, q.Type, q.QuestionText, q.CorrectAnswer).Question)
                .ToList();

            return questions;
        }

        public async Task<List<Question>> GetTestQuestions(Guid testId)
        {
            var questionEntity =  await _context.Questions
                .AsNoTracking()
                .Where(q => q.TestId == testId)
                .ToListAsync();

            var questions = questionEntity
                .Select(q => Question.Create(q.Id, q.TestId, q.Type, q.QuestionText, q.CorrectAnswer).Question)
                .ToList();

            return questions;
        }

        //public async Task<List<Question>> GetQuestionsWithOptions()
        //{
        //    return await _context.Options
        //        .AsNoTracking()
        //        .Include()
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