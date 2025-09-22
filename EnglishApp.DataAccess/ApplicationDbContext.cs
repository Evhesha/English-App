using EnglishApp.DataAccess.Configurations;
using EnglishApp.DataAccess.Entities;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace EnglishStorageApplication.EnglishApp.DataAccess
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<TestEntity> Tests { get; set; }
        public DbSet<QuestionEntity> Questions { get; set; }
        public DbSet<OptionEntity> Options { get; set; }

        public DbSet<ArticleEntity> Articles { get; set; }

        public DbSet<TeacherRoleEntity> TeacherRoles { get; set; }
        public DbSet<AdminRoleEntity> AdminRoles { get; set; }

        public DbSet<User> Users { get; set; }
        public DbSet<UserCardEntity> UsersCards { get; set; }
        public DbSet<UserActivityEntity> UsersActivities { get; set; }
        public DbSet<UserStudyResultEntity> UsersStudyResults { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new TestConfiguration());
            modelBuilder.ApplyConfiguration(new QuestionConfiguration());
            modelBuilder.ApplyConfiguration(new OptionConfiguration());
        }
    }
}
