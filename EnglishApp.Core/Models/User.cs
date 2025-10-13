using EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
        public string Role { get; set; } = "User";
        public List<UserCard> UserCards { get; set; } = new();
        public List<UserStudyResult>  UserStudyResults { get; set; } = new();
    }
}
