namespace EnglishApp.Core.Models
{
    public class UserStudyResult
    {
        private UserStudyResult(Guid id, Guid userId, Guid testId, double percent)
        {
            Id = id;
            UserId = userId;
            TestId = testId;
            PercentResult = percent;    
        }

        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid TestId { get; set; }
        public double PercentResult { get; set; }

        public static (UserStudyResult UserStudyResult, string error) Create(Guid id, Guid userId, Guid testId, double percent)
        {
            string errorString = string.Empty;

            if (percent < 0 || percent > 100)
            {
                errorString = "percent result can not be less than 0 and bigger than 100";
            }

            var userResult = new UserStudyResult(id, userId, testId, percent);

            return (userResult, errorString);   
        }
    }
}
