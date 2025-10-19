namespace EnglishApp.Application.DTOs.LessonImageDTOs;

public class LessonImageDto
{
    public Guid Id { get; set; }
    public Guid LessonId { get; set; }
    public string ImageURL { get; set; } =  string.Empty;
}