using EnglishApp.Core.Models;
using EnglishApp.DataAccess.Entities;
using EnglishStorageApplication.EnglishApp.DataAccess;
using Microsoft.EntityFrameworkCore;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishApp.DataAccess.Repositories
{
    public class OptionRepository : IOptionRepository
    {
        private readonly ApplicationDbContext _context;

        public OptionRepository(ApplicationDbContext applicationDbContext)
        {
            _context = applicationDbContext;
        }

        public async Task<List<Option>> Get()
        {
            var optionEntity = await _context.Options
                .AsNoTracking()
                .ToListAsync();

            var options = optionEntity
                .Select(o => Option.Create(o.Id, o.QuestionId, o.OptionText).Option)
                .ToList();

            return options;
        }

        public async Task<List<Option>> GetQuestionOptions(Guid questionId)
        {
            var optionEntity = await _context.Options
                .AsNoTracking()
                .Where(o => o.QuestionId == questionId)
                .ToListAsync();

            var options = optionEntity
                .Select(o => Option.Create(o.Id, o.QuestionId, o.OptionText).Option)
                .ToList();

            return options;
        }

        public async Task<Guid> Create(Option option)
        {
            var optionEntity = new OptionEntity
            {
                Id = option.Id,
                QuestionId = option.QuestionId,
                OptionText = option.OptionText,
            };

            await _context.Options.AddAsync(optionEntity);
            await _context.SaveChangesAsync();

            return optionEntity.Id;
        }

        public async Task<Guid> Update(Guid id, string optionText)
        {
            var optionEntity = await _context.Options.FindAsync(id);

            if (optionEntity != null)
            {
                optionEntity.OptionText = optionText;
                await _context.SaveChangesAsync();
            }

            return id;
        }

        public async Task<Guid> Delete(Guid id)
        {
            var option = await _context.Options.FindAsync(id);

            if (option != null)
            {
                _context.Options.Remove(option);
                await _context.SaveChangesAsync();
            }

            return id;
        }
    }
}