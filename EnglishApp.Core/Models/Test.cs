using EnglishStorageApplication.EnglishApp.Core.Models;

namespace EnglishApp.Core.Models;

public class Test
{
    public Guid Id {get; set;}
    public Guid UserId { get; set; }
    public string Name {get; set;}
    public string Description {get; set;}
    public bool IsPublic {get; set;}
    public int PassCount {get; set;}
    public DateTime LastUpdateAt {get; set;}
    public User User {get; set;}
}