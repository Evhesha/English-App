using EnglishApp.Core.Models;

namespace EnglishApp.Application.DTOs.LessonDTOs;

public class LessonWithUserNameDto
{
    public Lesson Lesson { get; set; }
    public string UserName { get; set; }
}