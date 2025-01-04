namespace EnglishApp.DataAccess.Entities
{
    public class ArticleEntity
    {
        public Guid Id { get; set; }
        public Guid userId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Text { get; set; } = string.Empty;
    }
}
