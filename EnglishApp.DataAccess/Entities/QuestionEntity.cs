﻿using EnglishApp.Core.Models;

namespace EnglishApp.DataAccess.Entities
{
    public class QuestionEntity
    {
        public Guid Id { get; set; }
        public Guid TestId { get; set; }
        public required TestEntity Test { get; set; }
        public string Type { get; set; } = string.Empty;
        public string QuestionText { get; set; } = string.Empty;
        public List<OptionEntity> Options { get; set; } = new();
        public string CorrectAnswer { get; set; } = string.Empty;
    }
}
