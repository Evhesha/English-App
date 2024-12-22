namespace EnglishApp.DataAccess.Entities
{
    public class UserActivityEntity
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public DateTime DateTime { get; set; } = DateTime.Now;
        public bool IsActive { get; set; }
    }
}
