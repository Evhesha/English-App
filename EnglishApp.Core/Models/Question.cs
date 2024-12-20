﻿namespace EnglishApp.Core.Models
{
    public class Question
    {
        Guid Id { get; set; }
        Guid TestId { get; set; }
        public required Test Test { get; set; }
        public string Type { get; set; } = string.Empty;
        public string QuestionText { get; set; } = string.Empty;
        public List<Option> Options { get; set; } = new();
        public string CorrectAnswer { get; set; } = string.Empty;
    }
}
