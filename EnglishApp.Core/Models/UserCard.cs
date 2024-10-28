namespace EnglishApp.Core.Models
{
    public class UserCard
    {
        private UserCard(Guid id, Guid userId, string nameOfUsersCard, string userCardData)
        {
            Id = id;
            UserId = userId;
            NameOfUserCard = nameOfUsersCard;
            UserCardData = userCardData;
        }

        public Guid Id { get; }
        public Guid UserId { get; }
        public string NameOfUserCard { get; } = string.Empty;
        public string UserCardData { get; } = string.Empty;

        public static (UserCard UserCard, string Error) Create(Guid id, Guid userId, string nameOfUsersCard, string userCardData)
        {
            string error = string.Empty;

            if (nameOfUsersCard == string.Empty)
            {
                error = "Name of card can't be empty";
            }

            var userCard = new UserCard(id, userId, nameOfUsersCard, userCardData);

            return (userCard, error);
        }
    }
}
