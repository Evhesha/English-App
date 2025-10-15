using System.ComponentModel.DataAnnotations;

namespace EnglishApp.Application.DTOs.LessonImageDTOs;

public class CreateLessonImageDto
{
    [Required(ErrorMessage = "User is required")]
    public Guid LessonId { get; set; }
    
    [Required(ErrorMessage = "Image URL is required")]
    public string ImageURL { get; set; } =  string.Empty;
}