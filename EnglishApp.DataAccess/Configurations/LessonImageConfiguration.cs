using EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EnglishApp.DataAccess.Configurations;

public class LessonImageConfiguration : IEntityTypeConfiguration<LessonImage>
{
    public void Configure(EntityTypeBuilder<LessonImage> builder)
    {
        builder.HasKey(l => l.Id);
        
        builder
            .HasOne(l => l.Lesson)
            .WithMany(l => l.Images)
            .HasForeignKey(l => l.LessonId)
            .OnDelete(DeleteBehavior.Cascade);
        
        builder.Property(l => l.LessonId).IsRequired();
    }
}