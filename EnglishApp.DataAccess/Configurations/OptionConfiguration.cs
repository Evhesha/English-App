using EnglishApp.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EnglishApp.DataAccess.Configurations
{
    public class OptionConfiguration : IEntityTypeConfiguration<OptionEntity>
    {
        public void Configure(EntityTypeBuilder<OptionEntity> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.OptionText).IsRequired();
            builder.HasOne<QuestionEntity>()
                   .WithMany(q => q.Options)
                   .HasForeignKey(x => x.QuestionId)
                   .OnDelete(DeleteBehavior.Cascade); // Указываем каскадное удаление
        }
    }
}
