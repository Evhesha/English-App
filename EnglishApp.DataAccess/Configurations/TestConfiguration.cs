using EnglishApp.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EnglishApp.DataAccess.Configurations
{
    public class TestConfiguration : IEntityTypeConfiguration<TestEntity>
    {
        public void Configure(EntityTypeBuilder<TestEntity> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Name).IsRequired();
            builder.HasMany(x => x.Questions)
                   .WithOne(x => x.Test)
                   .HasForeignKey(x => x.TestId)
                   .OnDelete(DeleteBehavior.Cascade); // Указываем каскадное удаление
        }
    }
}
