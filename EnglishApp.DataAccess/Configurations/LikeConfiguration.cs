using EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EnglishApp.DataAccess.Configurations;

public class LikeConfiguration : IEntityTypeConfiguration<Like>
{
    public void Configure(EntityTypeBuilder<Like> builder)
    {
        builder.HasKey(l => l.Id);
        
        builder
            .HasOne(l => l.Lesson)
            .WithMany()
            .HasForeignKey(l => l.LessonId)
            .OnDelete(DeleteBehavior.Cascade);
        
        builder.Property(l => l.UserId).IsRequired();
        builder.Property(l => l.LessonId).IsRequired();
    }
}