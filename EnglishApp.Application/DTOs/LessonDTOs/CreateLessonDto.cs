using System.ComponentModel.DataAnnotations;

namespace EnglishApp.Application.DTOs.LessonDTOs;

public class CreateLessonDto
{
    [Required(ErrorMessage = "User is required")]
    public Guid UserId { get; set; }
    
    [Required(ErrorMessage = "Title is required")]
    public string Title { get; set; } = string.Empty;
    
    public string Text { get; set; } = string.Empty;
    
    public bool IsPublic { get; set; }
    
    public required List<byte[]> Images { get; set; }
}