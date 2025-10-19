namespace EnglishApp.Core.Models;

public class Like
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public Guid LessonId { get; set; }
    public Lesson Lesson { get; set; }
}