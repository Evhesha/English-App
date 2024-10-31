using Microsoft.EntityFrameworkCore;
using EnglishStorageApplication.EnglishApp.DataAccess.UserEntites;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EnglishApp.DataAccess.Configurations
{
    public class UserCardConfiguration : IEntityTypeConfiguration<UserCardEntity>
    {
        public void Configure(EntityTypeBuilder<UserCardEntity> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.UserId)
                .IsRequired();

            builder.Property(x => x.NameOfUsersCard)
                .IsRequired();

            builder.Property(x => x.UserCardData)
                .IsRequired();
        }
    }
}
