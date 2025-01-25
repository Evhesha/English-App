namespace EnglishApp.Core.Models
{
    public class Question
    {
        private Question(
            Guid id,
            Guid testId,
            string type,
            string questionText,
            string correctAnswer)
        {
            Id = id;
            TestId = testId;
            Type = type;
            QuestionText = questionText;
            CorrectAnswer = correctAnswer;
        }

        public Guid Id { get; set; }
        public Guid TestId { get; set; }
        public string Type { get; set; } = string.Empty;
        public string QuestionText { get; set; } = string.Empty;
        public string CorrectAnswer { get; set; } = string.Empty;

        public (Question question, string Error) Create(
            Guid id,
            Guid testId,
            string type,
            string questionText,
            string correctAnswer)
        {
            string error = string.Empty;
            var question = new Question(id, testId, type, questionText, correctAnswer);

            if (string.IsNullOrEmpty(questionText))
            {
                error = "Question text can't be empty!";
            }

            if (string.IsNullOrEmpty(correctAnswer))
            {
                error = "Correct answer can't be empty";
            }

            return (question, error);
        }
    }
}
