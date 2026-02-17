using EnglishApp.Core.Models;
using EnglishApp.DataAccess.Configurations;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.EntityFrameworkCore;

namespace EnglishApp.DataAccess
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Lesson> Lessons { get; set; }
        public DbSet<LessonImage> LessonImages { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserCard> UsersCards { get; set; }
        public DbSet<UserStudyResult> UsersStudyResults { get; set; }
        public DbSet<Like> Likes { get; set; }
        public DbSet<Test> Tests { get; set; }
        public DbSet<TestQuestion> TestQuestions { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new LessonConfiguration());
            modelBuilder.ApplyConfiguration(new LessonImageConfiguration());
            modelBuilder.ApplyConfiguration(new LikeConfiguration());
            modelBuilder.ApplyConfiguration(new UserCardConfiguration());
            modelBuilder.ApplyConfiguration(new UserConfiguration());
            modelBuilder.ApplyConfiguration(new UserStudyResultConfiguration());
            modelBuilder.ApplyConfiguration(new TestConfiguration());
            modelBuilder.ApplyConfiguration(new TestQuestionConfiguration());
        }
    }
}