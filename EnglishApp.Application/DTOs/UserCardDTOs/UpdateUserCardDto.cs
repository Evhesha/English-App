using System.ComponentModel.DataAnnotations;

namespace EnglishApp.Application.DTOs.UserCardDTOs;

public class UpdateUserCardDto
{
    [Required(ErrorMessage = "Name of card is required")]
    [StringLength(20, ErrorMessage = "The name length can't exceed 20 symbols")]
    public string NameOfUsersCard { get; set; } = string.Empty;
    
    public string UserCardData { get; set; } = string.Empty;
}