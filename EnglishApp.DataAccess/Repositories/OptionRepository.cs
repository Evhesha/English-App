using EnglishApp.DataAccess.Entities;
using EnglishStorageApplication.EnglishApp.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace EnglishApp.DataAccess.Repositories
{
    public class OptionRepository
    {
        private readonly ApplicationDbContext _context;

        public OptionRepository(ApplicationDbContext applicationDbContext)
        {
            _context = applicationDbContext;
        }

        public async Task<List<OptionEntity>> Get()
        {
            return await _context.Options
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<List<OptionEntity>> GetQuestionOptions(Guid questionId)
        {

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