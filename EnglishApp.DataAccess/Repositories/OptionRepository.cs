using EnglishStorageApplication.EnglishApp.DataAccess;

namespace EnglishApp.DataAccess.Repositories
{
    public class OptionRepository
    {
        private readonly ApplicationDbContext _context;

        public OptionRepository(ApplicationDbContext applicationDbContext)
        {
            _context = applicationDbContext;
        }
    }
}
