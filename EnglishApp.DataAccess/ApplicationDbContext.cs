using EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace EnglishStorageApplication.EnglishApp.DataAccess
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Article> Articles { get; set; }
        public DbSet<TeacherRole> TeacherRoles { get; set; }
        public DbSet<AdminRole> AdminRoles { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserCard> UsersCards { get; set; }
        public DbSet<UserStudyResult> UsersStudyResults { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        } 
    }
}