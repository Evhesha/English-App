using System.ComponentModel.DataAnnotations;

namespace EnglishApp.Application.DTOs.UserStudyResult;

public class CreateUserStudyResultDto
{
    [Required(ErrorMessage = "User is required")]
    public Guid UserId { get; set; }
    
    [Required(ErrorMessage = "Test id is required")]
    public Guid TestId { get; set; }
    
    [Required(ErrorMessage = "Percent result is required")]
    [Range(0, 100, ErrorMessage = "Percent result must be between 0 and 100")]
    public double PercentResult { get; set; }
}