namespace EnglishApp.Application.DTOs.TestDTOs;

public class PagedTestsResponse
{
    public List<ListTestsDto> Tests { get; set; } = new();
    public int TotalCount { get; set; }
}