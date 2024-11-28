namespace EnglishStorageApplication.EnglishApp.Core.Models
{
    public class UserRole
    {
        public Guid userId { get; set; }
        public User User { get; set; }

        public Guid RoleId { get; set; }
        public Role Role { get; set; }
    }
}
