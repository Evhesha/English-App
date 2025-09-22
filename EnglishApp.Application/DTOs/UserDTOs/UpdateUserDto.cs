using System.ComponentModel.DataAnnotations;

namespace EnglishApp.Application.DTOs.UserDTOs;

public class UpdateUserDto
{
    [Required(ErrorMessage = "Name is required")]
    [StringLength(20, ErrorMessage = "The name length can't exceed 20 symbols")]
    public string Name { get; set; } = string.Empty;

    [Required(ErrorMessage = "Email is required.")]
    [EmailAddress(ErrorMessage = "Invalid email format.")]
    public string Email { get; set; } = string.Empty;

    [Required(ErrorMessage = "Password is required")]
    [StringLength(100, MinimumLength = 6, ErrorMessage = "Password must be at least 6 characters long")]
    public string Password { get; set; } = string.Empty;  
}