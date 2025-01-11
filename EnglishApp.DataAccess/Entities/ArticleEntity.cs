namespace EnglishApp.DataAccess.Entities
{
    public class ArticleEntity
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Text { get; set; } = string.Empty;
        public required List<byte[]> Images { get; set; }
    }
}
