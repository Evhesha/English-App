using EnglishApp.Core.Models;
using EnglishApp.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EnglishApp.DataAccess.Configurations
{
    public class QuestionConfiguration : IEntityTypeConfiguration<Question>
    {
        public void Configure(EntityTypeBuilder<Question> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Type).IsRequired();
            builder.Property(x => x.QuestionText).IsRequired();
            builder.Property(x => x.CorrectAnswer).IsRequired();
            builder.HasMany(x => x.Options).WithOne(x => x.Question).HasForeignKey(x => x.QuestionId);
        }
    }
}
