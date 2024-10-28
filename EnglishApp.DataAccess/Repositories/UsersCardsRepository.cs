using EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace EnglishApp.DataAccess.Repositories
{
    public class UsersCardsRepository
    {
        private readonly ApplicationDbContext _context;

        public UsersCardsRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<UserCard>> Get()
        {
            var userCardsEntities = await _context.UsersCards
                .AsNoTracking()
                .ToListAsync();

            var usersCards = userCardsEntities
                .Select(x => UserCard.Create( x.Id, x.UserId, x.NameOfUsersCard, x.UserCardData ).UserCard)
                .ToList();

            return usersCards;
        }
    }
}
