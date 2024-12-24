namespace EnglishApp.DataAccess.Entities
{
    public class UserStudyResultEntity
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid TestId { get; set; }
        public double PercentResult { get; set; }
    }
}
