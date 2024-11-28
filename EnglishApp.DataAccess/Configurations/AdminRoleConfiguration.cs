using EnglishApp.DataAccess.UserEntites;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace EnglishApp.DataAccess.Configurations
{
    public class AdminRoleConfiguration : IEntityTypeConfiguration<AdminRoleEntity>
    {
        public void Configure(EntityTypeBuilder<AdminRoleEntity> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.UserId).IsRequired();
        }
    }
}
