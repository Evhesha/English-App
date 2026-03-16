using EnglishStorageApplication.EnglishApp.Core.Models;

namespace EnglishApp.Core.Params.LessonParams;

public class LessonFilter
{
    public string? Title  { get; set; }
    public User? Author { get; set; }
    public DateTime? CreatedDate { get; set; }
}