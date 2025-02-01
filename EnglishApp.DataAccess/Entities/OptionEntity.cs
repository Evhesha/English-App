namespace EnglishApp.DataAccess.Entities
{
    public class OptionEntity
    {
        public Guid Id { get; set; }
        public Guid QuestionId { get; set; }
        public QuestionEntity Question { get; set; } = new();
        public string OptionText { get; set; } = string.Empty;
    }
}
