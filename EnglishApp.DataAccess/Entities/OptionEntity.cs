using EnglishApp.Core.Models;

namespace EnglishApp.DataAccess.Entities
{
    public class OptionEntity
    {
        public Guid Id { get; set; }
        public Guid QuestionId { get; set; }
        public required QuestionEntity Question { get; set; }
        public string OptionText { get; set; } = string.Empty;
    }
}
