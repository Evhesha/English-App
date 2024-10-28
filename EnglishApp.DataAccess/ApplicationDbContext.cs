using EnglishApp.DataAccess.UserEntites;
using EnglishStorageApplication.Server.Data.UserEntites;
using Microsoft.EntityFrameworkCore;

// Entities - используется для независимого взаимодействия между данными и контекстом
// Configures

namespace EnglishStorageApplication.EnglishApp.DataAccess
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<UserEntity> Users { get; set; }
        public DbSet<UserCardEntity> UsersCards { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }
    }
}
