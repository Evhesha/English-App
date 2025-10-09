using EnglishApp.Core.Abstractions.UserCard;
using EnglishApp.Core.Exceptions.UserCardExceptions;
using EnglishApp.DataAccess;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace EnglishStorageApplication.EnglishApp.DataAccess.Repositories
{
    public class UsersCardsRepository : IUsersCardsRepository
    {
        private readonly ApplicationDbContext _context;

        public UsersCardsRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<UserCard>> GetUsersCardsAsync(CancellationToken cancellationToken)
        {
            return await _context.UsersCards
                .AsNoTracking()
                .ToListAsync(cancellationToken);
        }

        public async Task<List<UserCard>> GetUserCardsByUserIdAsync(
            Guid userId,
            CancellationToken cancellationToken)
        {
            return await _context.UsersCards
                .AsNoTracking()
                .Where(x => x.UserId == userId)
                .ToListAsync(cancellationToken);
        }

        public async Task<Guid> CreateUserCardAsync(
            UserCard userCard,
            CancellationToken cancellationToken)
        {
            var userCardEntity = new UserCard
            {
                Id = userCard.Id,
                UserId = userCard.UserId,
                NameOfUsersCard = userCard.NameOfUsersCard,
                UserCardData = userCard.UserCardData,
            };

            await _context.UsersCards.AddAsync(userCardEntity, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);
            return userCardEntity.Id;
        }

        public async Task<Guid> UpdateUserCardAsync(
            Guid id,
            UserCard userCard,
            CancellationToken cancellationToken)
        {
            var userCardEntity = await _context.UsersCards.FindAsync(userCard.Id);
            if (userCardEntity == null)
            {
                throw new NotFoundUserCardException("User card wasn't found");
            }
            
            userCardEntity.NameOfUsersCard = userCard.NameOfUsersCard;
            userCardEntity.UserCardData = userCard.UserCardData;
            await _context.SaveChangesAsync(cancellationToken);
            
            return userCardEntity.Id;
        }

        public async Task<Guid> DeleteUserCardAsync(
            Guid id,
            CancellationToken cancellationToken)
        {
            var userCardEntity = await _context.UsersCards.FindAsync(id);
            if (userCardEntity == null)
            {
                throw new NotFoundUserCardException("User card wasn't found");
            }
            
            _context.UsersCards.Remove(userCardEntity);
            await _context.SaveChangesAsync(cancellationToken);
            
            return id;
        }
    }
}