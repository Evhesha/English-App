namespace EnglishApp.Core.Models
{
    public class Test
    {
        private Test(Guid id, Guid userId, string name)
        {
            Id = id;
            UserId = userId;
            Name = name;
        }

        public Guid Id { get; }
        public Guid UserId { get; }
        public string Name { get; }

        public (string Error, Test test) Create
            (Guid id,
            Guid userId,
            string name)
        {
            string error = string.Empty;

            // Condition if

            var test = new Test(id, userId, name);
            
            return (error, test);
        }
    }
}
