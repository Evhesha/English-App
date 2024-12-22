using EnglishApp.DataAccess.Configurations;
using EnglishApp.DataAccess.Entities;
using Microsoft.EntityFrameworkCore;

namespace EnglishStorageApplication.EnglishApp.DataAccess
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<TestEntity> TestEntities { get; set; }
        public DbSet<QuestionEntity> QuestionEntities { get; set; }
        public DbSet<OptionEntity> OptionEntities { get; set; }

        public DbSet<TeacherRoleEntity> TeacherRoleEntities { get; set; }
        public DbSet<AdminRoleEntity> AdminRoles { get; set; }

        public DbSet<UserEntity> Users { get; set; }
        public DbSet<UserCardEntity> UsersCards { get; set; }
        public DbSet<UserActivityEntity> UsersActivities { get; set; }
        public DbSet<UserStudyResultEntity> UsersStudyResults { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new TeacherRoleConfiguration());
            modelBuilder.ApplyConfiguration(new TestConfiguration());
            modelBuilder.ApplyConfiguration(new QuestionConfiguration());
            modelBuilder.ApplyConfiguration(new OptionConfiguration());
        }
    }
}
