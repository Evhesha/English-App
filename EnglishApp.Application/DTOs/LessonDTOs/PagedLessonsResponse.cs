namespace EnglishApp.Application.DTOs.LessonDTOs;

public class PagedLessonsResponse
{
    public List<ListLessonsDto> Lessons { get; set; } = new();
    public int TotalCount { get; set; }
}