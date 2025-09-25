using EnglishApp.Application.AppServices;
using EnglishApp.Core.Abstractions.AdminRole;
using EnglishApp.Core.Abstractions.Article;
using EnglishApp.Core.Abstractions.TeacherRole;
using EnglishApp.Core.Abstractions.User;
using EnglishApp.Core.Abstractions.UserCard;
using EnglishApp.Core.Abstractions.UserStudyResult;
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

            services.AddScoped<IUserStudyResultService, UserStudyResultService>();
            services.AddScoped<IUsersStudyResultsRepository, UsersStudyResultsRepository>();

            services.AddScoped<IArticleService, ArticleService>();
            services.AddScoped<IArticleRepository, ArticleRepository>();

            services.AddScoped<IAdminRoleService, AdminRoleService>();
            services.AddScoped<IAdminRoleRepository, AdminRoleRepository>();

            services.AddScoped<ITeacherRoleSevice, TeacherRoleSevice>();
            services.AddScoped<ITeacherRoleRepository, TeacherRoleRepository>();

            services.AddScoped<JwtProvider>();
            services.AddScoped<IAuthenticationService, AuthenticationService>();
            services.AddScoped<IPasswordHasher, PasswordHasher>();

            return services;
        }
    }
}