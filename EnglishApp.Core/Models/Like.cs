namespace EnglishApp.Core.Models;

public class Like
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public Guid ArticleId { get; set; }
}