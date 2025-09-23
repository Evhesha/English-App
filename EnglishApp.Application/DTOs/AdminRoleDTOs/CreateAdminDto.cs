using System.ComponentModel.DataAnnotations;

namespace EnglishApp.Application.DTOs.AdminRoleDTOs;

public class CreateAdminDto
{
    [Required(ErrorMessage = "User is required")]
    public Guid UserId { get; set; }
}