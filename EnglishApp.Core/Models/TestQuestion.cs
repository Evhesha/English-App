namespace EnglishApp.Core.Models;

public class TestQuestion
{
    public Guid Id {get; set;}
    public Guid TestId {get; set;}
    public string Type {get; set;}
    public string[] Options {get; set;}
    public string CorrectAnswer {get; set;}
    public Test Test {get; set;}
}