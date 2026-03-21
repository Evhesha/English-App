namespace EnglishApp.Application.DTOs.TestDTOs;

public class ListTestsDto
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string AuthorName { get; set; } = string.Empty;
    public int PassCount { get; set; }
    public DateTime LastUpdateAt { get; set; }
}