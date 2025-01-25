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

        public static (Test Test, string Error) Create
            (Guid id,
            Guid userId,
            string name)
        {
            string error = string.Empty;

            if (string.IsNullOrEmpty(name))
            {
                error = "Name can't be empty!";
            }

            var test = new Test(id, userId, name);
            
            return (test, error);
        }
    }
}
