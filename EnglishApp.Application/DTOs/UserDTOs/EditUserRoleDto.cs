using System.ComponentModel.DataAnnotations;

namespace EnglishApp.Application.DTOs.UserDTOs;

public class EditUserRoleDto
{
    [Required(ErrorMessage = "Role is required")]
    [RegularExpression("^(Admin|User|Teacher)$", ErrorMessage = "Role must be Admin, User or Teacher")]
    public string Role { get; set; } = string.Empty;
}