using System.ComponentModel.DataAnnotations;

namespace EnglishApp.Application.DTOs.TestDTOs;

public class CreateTestDto
{
    [Required]
    public Guid UserId { get; set; }
    
    [Required]
    [MaxLength(50, ErrorMessage = "Name is required")]
    public string Name { get; set; }
    
    public string Description { get; set; }
    
    [Required]
    public bool IsPublic { get; set; }
}