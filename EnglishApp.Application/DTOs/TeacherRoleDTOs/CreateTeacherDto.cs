using System.ComponentModel.DataAnnotations;

namespace EnglishApp.Application.DTOs.TeacherRoleDTOs;

public class CreateTeacherDto
{
    [Required(ErrorMessage = "User is required")]
    public Guid UserId { get; set; }
}