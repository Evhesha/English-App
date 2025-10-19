using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EnglishApp.DataAccess.Configurations;

public class UserCardConfiguration : IEntityTypeConfiguration<UserCard>
{
    public void Configure(EntityTypeBuilder<UserCard> builder)
    {
        builder.HasKey(u => u.Id);
        
        builder
            .HasOne(uc => uc.User)
            .WithMany(u => u.UserCards)
            .HasForeignKey(uc => uc.UserId)
            .OnDelete(DeleteBehavior.Cascade);
        
        builder.Property(u => u.UserId).IsRequired();
    }
}