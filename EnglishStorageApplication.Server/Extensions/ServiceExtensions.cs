using EnglishApp.Application.AppServices;
using EnglishApp.DataAccess.Repositories;
using EnglishApp.Infrastructure;
using EnglishStorageApplication.EnglishApp.Application.AppServices;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.EnglishApp.DataAccess.Repositories;
using EnglishStorageApplication.EnglishApp.Infrastructure;

namespace EnglishStorageApplication.EnglishApp.Extensions
{
    public static class ServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IUsersRepository, UsersRepository>();

            services.AddScoped<IUserCardService, UserCardService>();
            services.AddScoped<IUsersCardsRepository, UsersCardsRepository>();

            services.AddScoped<IUserActivityService, UserActivityService>();
            services.AddScoped<IUsersActivitiesRepository, UsersActivitiesRepository>();

            services.AddScoped<IUserStudyResultService, UserStudyResultService>();
            services.AddScoped<IUsersStudyResultsRepository, UsersStudyResultsRepository>();

            services.AddScoped<IArticleService, ArticleService>();
            services.AddScoped<IArticleRepository, ArticleRepository>();

            services.AddScoped<IAdminRoleService, AdminRoleService>();
            services.AddScoped<IAdminRoleRepository, AdminRoleRepository>();

            services.AddScoped<ITeacherRoleSevice, TeacherRoleSevice>();
            services.AddScoped<ITeacherRoleRepository, TeacherRoleRepository>();

            //services.AddScoped<ITestService, TestService>();
            //services.AddScoped<ITestRepository, TestRepository>();

            //services.AddScoped<IQuestionService, QuestionService>();
            //services.AddScoped<IQuestionRepository, QuestionRepository>();

            //services.AddScoped<IOptionService, OptionService>();
            //services.AddScoped<IOptionRepository, OptionRepository>();

            services.AddScoped<JwtProvider>();
            services.AddScoped<IAuthenticationService, AuthenticationService>();
            services.AddScoped<IPasswordHasher, PasswordHasher>();

            return services;
        }
    }
}