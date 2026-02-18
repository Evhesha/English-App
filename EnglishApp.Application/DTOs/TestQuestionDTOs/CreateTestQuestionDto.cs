using System.ComponentModel.DataAnnotations;

namespace EnglishApp.Application.DTOs.TestQuestionDTOs;

public record CreateTestQuestionDto
{
    [Required]
    public Guid TestId  { get; set; }
    
    [Required]
    public string Type  { get; set; }
    
    [Required]
    public string Question { get; set; }
    
    public string[] Options  { get; set; }
    
    [Required]
    [MaxLength(50, ErrorMessage = "Correct answer is required")]
    public string CorrectAnswer  { get; set; }
}