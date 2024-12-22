using EnglishApp.Core.Models;

namespace EnglishApp.DataAccess.Entities
{
    public class TestEntity
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Name { get; set; } = string.Empty;
        public List<Question> Questions { get; set; } = new ();
    }
}
