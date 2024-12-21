namespace EnglishApp.Core.Models
{
    public class Option
    {
        public Guid Id { get; set; }
        public Guid QuestionId { get; set; }
        public required Question Question { get; set; }
        public string OptionText { get; set; } = string.Empty;
    }
}
