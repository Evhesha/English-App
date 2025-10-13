using EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EnglishApp.DataAccess.Configurations;

public class UserStudyResultConfiguration : IEntityTypeConfiguration<UserStudyResult>
{
    public void Configure(EntityTypeBuilder<UserStudyResult> builder)
    {
        builder.HasKey(u => u.Id);
        
        builder
            .HasOne(usr => usr.User)
            .WithMany(u => u.UserStudyResults)
            .HasForeignKey(usr => usr.UserId)
            .OnDelete(DeleteBehavior.Cascade);
        
        builder.Property(u => u.UserId).IsRequired();
    }
}