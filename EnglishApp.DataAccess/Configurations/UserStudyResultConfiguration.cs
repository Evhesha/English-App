using EnglishApp.DataAccess.UserEntites;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EnglishApp.DataAccess.Configurations
{
    public class UserStudyResultConfiguration : IEntityTypeConfiguration<UserStudyResultEntity>
    {
        public void Configure(EntityTypeBuilder<UserStudyResultEntity> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.UserId)
                .IsRequired();

            builder.Property(x => x.TestId)
                .IsRequired();

            builder.Property(x => x.PercentResult)
                .IsRequired();
        }
    }
}
