using EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EnglishApp.DataAccess.Configurations;

public class TestQuestionConfiguration : IEntityTypeConfiguration<TestQuestion>
{
    public void Configure(EntityTypeBuilder<TestQuestion> builder)
    {
        builder.HasKey(t => t.Id);
        builder
            .HasOne(t => t.Test)
            .WithMany()
            .HasForeignKey(t => t.TestId)
            .OnDelete(DeleteBehavior.Cascade);
        
        builder.Property(t => t.Id).IsRequired();
        builder.Property(t => t.TestId).IsRequired();
    }
}