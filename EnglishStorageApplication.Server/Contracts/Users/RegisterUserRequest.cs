using System.ComponentModel.DataAnnotations;

namespace EnglishStorageApplication.Server.Contracts.Users;

public record RegisterUserRequest(
    [Required] string Name,
    [Required] string Email,
    [Required] string Password);