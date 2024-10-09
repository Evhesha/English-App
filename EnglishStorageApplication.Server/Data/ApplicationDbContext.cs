using EnglishStorageApplication.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace EnglishStorageApplication.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }
    }
}
