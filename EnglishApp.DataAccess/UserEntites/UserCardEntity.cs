namespace EnglishApp.DataAccess.UserEntites
{
    public class UserCardEntity
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string NameOfUsersCard { get; set; } = string.Empty;
        public string UserCardData { get; set; } = string.Empty;
    }
}
