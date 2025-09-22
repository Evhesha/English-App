using System.ComponentModel.DataAnnotations;

namespace EnglishApp.Application.DTOs.UserDTOs;

public class LoginUserDto
{
    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required]
    public string Password { get; set; } = string.Empty;
}