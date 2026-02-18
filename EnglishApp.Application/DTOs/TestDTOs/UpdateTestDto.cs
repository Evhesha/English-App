using System.ComponentModel.DataAnnotations;

namespace EnglishApp.Application.DTOs.TestDTOs;

public class UpdateTestDto
{
    [Required]
    [MaxLength(50, ErrorMessage = "Name is required")]
    public string Name { get; set; }
    
    public string Description  { get; set; }
}