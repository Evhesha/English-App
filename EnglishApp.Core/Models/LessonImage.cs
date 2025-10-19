namespace EnglishApp.Core.Models;

public class LessonImage
{
    public Guid Id { get; set; }
    public Guid LessonId { get; set; }
    public string ImageURL { get; set; } =  string.Empty;
    public Lesson Lesson { get; set; }
}