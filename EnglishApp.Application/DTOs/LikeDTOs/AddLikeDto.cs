using System.ComponentModel.DataAnnotations;

namespace EnglishApp.Application.DTOs.LikeDTOs;

public class AddLikeDto
{
    [Required(ErrorMessage = "User is required")]
    public Guid UserId { get; set; }
    
    [Required(ErrorMessage = "Article is required")]
    public Guid ArticleId { get; set; }
}