using EnglishApp.Application.AppServices;
using EnglishApp.Core.Abstractions.Lesson;
using EnglishApp.Core.Abstractions.LessonImage;
using EnglishApp.Core.Abstractions.Like;
using EnglishApp.Core.Abstractions.User;
using EnglishApp.Core.Abstractions.UserCard;
using EnglishApp.Core.Abstractions.UserStudyResult;
using EnglishApp.DataAccess.Repositories;
using EnglishApp.Infrastructure;
using EnglishStorageApplication.EnglishApp.Application.AppServices;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.EnglishApp.DataAccess.Repositories;

namespace EnglishStorageApplication.Server.Extensions
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

            services.AddScoped<ILessonService, LessonService>();
            services.AddScoped<ILessonRepository, LessonsRepository>();

            services.AddScoped<ILessonImageService, LessonImageService>();
            services.AddScoped<ILessonsImagesRepository, LessonsImagesRepository>();
            
            services.AddScoped<ILikeService, LikeService>();
            services.AddScoped<ILikesRepository, LikesRepository>();

            services.AddScoped<JwtProvider>();
            services.AddScoped<IAuthenticationService, AuthenticationService>();
            services.AddScoped<IPasswordHasher, PasswordHasher>();

            return services;
        }
    }
}