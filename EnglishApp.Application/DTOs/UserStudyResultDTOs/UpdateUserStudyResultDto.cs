using System.ComponentModel.DataAnnotations;

namespace EnglishApp.Application.DTOs.UserStudyResult;

public class UpdateUserStudyResultDto
{
    [Required(ErrorMessage = "Percent result is required")]
    [Range(0, 100, ErrorMessage = "Percent result must be between 0 and 100")]
    public double PercentResult { get; set; }
}