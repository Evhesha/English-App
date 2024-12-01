namespace EnglishStorageApplication.EnglishApp.Core.Models
{
    public class AdminRole
    {
        private AdminRole(Guid id, Guid userId)
        {
            Id = id;
            UserId = userId;
        }

        public Guid Id { get; set; }
        public Guid UserId { get; set; }

        public static (AdminRole AdminRole, string error) Create(Guid id, Guid userId)
        {
            string error = string.Empty;

            //Conditions if

            var adminRole = new AdminRole(id, userId);

            return (adminRole, error);  
        }
    }
}
