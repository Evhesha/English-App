using EnglishStorageApplication.EnglishApp.Core.Models;
using EnglishApp.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;

namespace EnglishStorageApplication.EnglishApp.DataAccess.Repositories
{
    public class UsersCardsRepository : IUsersCardsRepository
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
                .Select(x => UserCard.Create(x.Id, x.UserId, x.NameOfUsersCard, x.UserCardData).UserCard)
                .ToList();

            return usersCards;
        }

        public async Task<List<UserCard>> GetUserCards(Guid userId)
        {
            var userCardsEntities = await _context.UsersCards
                .AsNoTracking()
                .Where(x => x.UserId == userId)
                .ToListAsync();

            var userCards = userCardsEntities
                .Select(x => UserCard.Create(x.Id, x.UserId, x.NameOfUsersCard, x.UserCardData).UserCard)
                .ToList();

            return userCards;
        }

        public async Task<Guid> Create(UserCard userCard)
        {
            var userCardEntity = new UserCardEntity
            {
                Id = userCard.Id,
                UserId = userCard.UserId,
                NameOfUsersCard = userCard.NameOfUserCard,
                UserCardData = userCard.UserCardData,
            };

            await _context.UsersCards.AddAsync(userCardEntity);
            await _context.SaveChangesAsync();
            return userCardEntity.Id;
        }


        public async Task<Guid> Update(Guid id, Guid userId, string nameOfUsersCard, string userCardData)
        {
            var userCard = await _context.UsersCards.FindAsync(id);
            if (userCard != null)
            {
                userCard.UserId = userId;
                userCard.NameOfUsersCard = nameOfUsersCard;
                userCard.UserCardData = userCardData;
                await _context.SaveChangesAsync();
            }
            return id;
        }

        public async Task<Guid> Delete(Guid id)
        {
            var userCard = await _context.UsersCards.FindAsync(id);
            if (userCard != null)
            {
                _context.UsersCards.Remove(userCard);
                await _context.SaveChangesAsync();
            }
            return id;
        }
    }
}