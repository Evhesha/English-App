namespace EnglishApp.Application.DTOs.LessonDTOs;

public class LessonDto
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Text { get; set; } = string.Empty;
    public bool isPublic = true;
    public required List<byte[]> Images { get; set; }
}