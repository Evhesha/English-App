namespace EnglishApp.Core.Models
{
    public class UserStudyResult
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid TestId { get; set; }
        public double PercentResult { get; set; }
    }
}
