using EnglishApp.Core.Models;

namespace EnglishApp.Application.DTOs.LessonDTOs;

public class LessonDto
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Text { get; set; } = string.Empty;
    public bool IsPublic { get; set; }
    public List<LessonImage> Images { get; set; } = new();
    public int WatchCount { get; set; }
    public DateTime CreatedDate { get; set; }
}