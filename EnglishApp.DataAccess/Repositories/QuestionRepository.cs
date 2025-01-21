using EnglishStorageApplication.EnglishApp.DataAccess;

namespace EnglishApp.DataAccess.Repositories
{
    public class QuestionRepository
    {
        private readonly ApplicationDbContext _context;

        public QuestionRepository(ApplicationDbContext applicationDbContext)
        {
            _context = applicationDbContext;
        }


    }
}
