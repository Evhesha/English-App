namespace EnglishApp.Core.Models
{
    public class Option
    {
        private Option(Guid id, Guid questionId, string optionText)
        {
            Id = id;
            QuestionId = questionId;
            OptionText = optionText;
        }

        public Guid Id { get; set; }
        public Guid QuestionId { get; set; }
        public string OptionText { get; set; } = string.Empty;

        public static (Option Option, string Error) Create(
            Guid id, Guid questionId, string optionText)
        {
            string error = string.Empty;
            var option = new Option(id, questionId, optionText);

            if (string.IsNullOrEmpty(optionText))
            {
                error = "Option text can't be empty!";
            }

            return (option, error);
        }
    }
}
