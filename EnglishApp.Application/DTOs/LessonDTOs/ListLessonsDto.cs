using EnglishApp.Core.Models;

namespace EnglishApp.Application.DTOs.LessonDTOs;

public class ListLessonsDto
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string Title { get; set; } = string.Empty;
    public int WatchCount { get; set; }
    public DateTime CreatedDate { get; set; }
}