using EnglishApp.DataAccess.UserEntites;
using EnglishStorageApplication.EnglishApp.DataAccess.UserEntites;
using EnglishStorageApplication.Server.Data.UserEntites;
using Microsoft.EntityFrameworkCore;

namespace EnglishStorageApplication.EnglishApp.DataAccess
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<UserEntity> Users { get; set; }
        public DbSet<UserCardEntity> UsersCards { get; set; }
        public DbSet<UserActivityEntity> UsersActivities { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }
    }
}
