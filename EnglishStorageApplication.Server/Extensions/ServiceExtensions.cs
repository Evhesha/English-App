using EnglishApp.Application.AppServices;
using EnglishApp.DataAccess.Repositories;
using EnglishStorageApplication.EnglishApp.Application.AppServices;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.EnglishApp.DataAccess.Repositories;

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

            return services;
        }
    }
}
