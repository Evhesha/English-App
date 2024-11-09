namespace EnglishApp.Core.Models
{
    public class UserActivity
    {
        private UserActivity(Guid id, Guid userId, DateTime dateTime, bool isActivity)
        {
            Id = id;
            UserId = userId;
            DateTime = dateTime;
            IsActive = isActivity;
        }

        public Guid Id { get; }
        public Guid UserId { get; }
        public DateTime DateTime { get; }
        public bool IsActive { get; }

        public static (UserActivity UserActivity, string error) Create(Guid id, Guid userId, DateTime dateTime, bool isActive)
        {
            string error = string.Empty;

            if(userId == Guid.Empty)
            {
                error = "User ID can't be empty.";
            }

            if (dateTime > DateTime.Now)
            {
                error = "Date can't be in the future.";
            }

            var userActivity = new UserActivity(id, userId, dateTime, isActive);

            return (userActivity, error);   
        }
    }
}
