namespace EnglishStorageApplication.EnglishApp.Core.Models
{
    public class UserCard
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string NameOfUsersCard { get; set; } = string.Empty;
        public string UserCardData { get; set; } = string.Empty;
        public User User { get; set; } = null!;
    }
}
