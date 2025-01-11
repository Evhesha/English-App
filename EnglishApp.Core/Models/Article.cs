namespace EnglishApp.Core.Models
{
    public class Article
    {
        private Article(Guid id, Guid userId, string title, string text, List<byte[]> images)
        {
            Id = id;
            UserId = userId;
            Title = title;
            Text = text;
            Images = images ?? new List<byte[]>();
        }

        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Title { get; set; }
        public string Text { get; set; }
        public List<byte[]> Images { get; set; }

        public static (Article Article, string Error) Create(Guid id, Guid userId, string title, string text, List<byte[]> images)
        {
            string error = string.Empty;

            if (string.IsNullOrEmpty(title))
            {
                error = "Article title can't be empty.";
            }

            var article = new Article(id, userId, title, text, images);

            return (article, error);
        }
    }
}
