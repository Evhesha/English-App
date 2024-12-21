namespace EnglishApp.Core.Models
{
    public class Article
    {
        private Article(Guid id, Guid userId, string title, string text)
        {
            Id = id;
            UserId = userId;
            Title = title;
            Text = text;
        }

        public Guid Id { get; }
        public Guid UserId { get; }
        public string Title { get; }
        public string Text { get; }

        public (string Error, Article Article) Create(Guid id, Guid userId, string title, string text)
        {
            string error = string.Empty;

            //Condition if

            var article = new Article(id, userId, title, text);

            return (error, article);
        }
    }
}
