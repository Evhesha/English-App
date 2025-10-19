namespace EnglishApp.Application.DTOs.LessonDTOs;

public class ListLessonsDto
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string Title { get; set; } = string.Empty;
    public bool isPublic { get; set; } = true;
    public int WatchCount { get; set; }
    public DateTime CreatedDate { get; set; }
}