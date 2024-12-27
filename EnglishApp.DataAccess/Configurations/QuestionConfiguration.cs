using EnglishApp.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EnglishApp.DataAccess.Configurations
{
    public class QuestionConfiguration : IEntityTypeConfiguration<QuestionEntity>
    {
        public void Configure(EntityTypeBuilder<QuestionEntity> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.QuestionText).IsRequired();
            builder.HasMany(x => x.Options)
                   .WithOne()
                   .HasForeignKey(x => x.QuestionId)
                   .OnDelete(DeleteBehavior.Cascade); // Указываем каскадное удаление для опций
        }
    }
}
