using System.ComponentModel.DataAnnotations;

namespace EnglishApp.Application.DTOs.AdminRoleDTOs;

public class AdminDto
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
}