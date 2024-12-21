namespace EnglishApp.Core.Models
{
    public class Test
    {
        private Test(Guid id, Guid userId, string name, List<Question> questions)
        {
            Id = id;
            UserId = userId;
            Name = name;
            Questions = questions;
        }

        public Guid Id { get; }
        public Guid UserId { get; }
        public string Name { get; }
        public List<Question> Questions { get; } = new();

        public (string Error, Test test) Create
            (Guid id,
            Guid userId,
            string name,
            List<Question> questions)
        {
            string error = string.Empty;

            // Condition if

            var test = new Test(id, userId, name, questions);
            
            return (error, test);
        }
    }
}
