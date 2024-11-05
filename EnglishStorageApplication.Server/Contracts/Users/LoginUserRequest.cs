using System.ComponentModel.DataAnnotations;

namespace EnglishStorageApplication.Server.Contracts.Users;

public record LoginUserRequest(
    [Required] string Email,
    [Required] string Password);
