using EnglishApp.Core.Models;
using EnglishApp.DataAccess.Entities;
using EnglishStorageApplication.EnglishApp.DataAccess;
using Microsoft.EntityFrameworkCore;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishApp.DataAccess.Repositories
{
    public class QuestionRepository : IQuestionRepository
    {
        private readonly ApplicationDbContext _context;

        public QuestionRepository(ApplicationDbContext applicationDbContext)
        {
            _context = applicationDbContext;
        }

        public async Task<List<Question>> Get()
        {
            var questionEntity = await _context.Questions
                .AsNoTracking()
                .ToListAsync();

            var questions = questionEntity
                .Select(q => Question.Create(q.Id, q.TestId, q.Type, q.QuestionText, q.CorrectAnswer).Question)
                .ToList();

            return questions;
        }

        public async Task<List<Question>> GetTestQuestions(Guid testId)
        {
            var questionEntity = await _context.Questions
                .AsNoTracking()
                .Where(q => q.TestId == testId)
                .ToListAsync();

            var questions = questionEntity
                .Select(q => Question.Create(q.Id, q.TestId, q.Type, q.QuestionText, q.CorrectAnswer).Question)
                .ToList();

            return questions;
        }

        public async Task<List<Question>> GetQuestionWithOptions(Guid id)
        {
            var questionEntity = await _context.Questions
                .AsNoTracking()
                .Where(q => q.Id == id)
                .Include(q => q.Options)
                .ToListAsync();

            var questions = questionEntity
                .Select(q => Question.Create(q.Id, q.TestId, q.Type, q.QuestionText, q.CorrectAnswer).Question)
                .ToList();

            return questions;
        }

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

        public async Task<Guid> Update(Guid id, string type, string questionText, string correctAnswer)
        {
            var questionEntity = await _context.Questions.FindAsync(id);

            if (questionEntity != null)
            {
                questionEntity.Type = type;
                questionEntity.QuestionText = questionText;
                questionEntity.CorrectAnswer = correctAnswer;
            }

            return id;
        }

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