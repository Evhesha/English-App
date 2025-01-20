using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Xunit;
using EnglishApp.Infrastructure;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.EnglishApp.DataAccess;
using Microsoft.EntityFrameworkCore;

namespace EnglishStorageApplication.EnglishApp.Extensions.Tests
{
    //Этот юнит-тест проверяет, что метод AddApplicationServices корректно регистрирует
    //все необходимые сервисы и репозитории в контейнере зависимостей.
    //Он загружает конфигурацию из appsettings.json, настраивает in-memory базу данных для ApplicationDbContext,
    //регистрирует настройки JwtOptions, вызывает AddApplicationServices и затем проверяет,
    //что все сервисы успешно добавлены и могут быть разрешены через serviceProvider.

    public class ServiceExtensionsTests
    {
        [Fact]
        public void AddApplicationServices_ShouldRegisterAllServices()
        {
            // Arrange
            var services = new ServiceCollection();

            // Загрузка конфигурации из файла appsettings.json
            IConfiguration configuration = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .Build();

            // Регистрация in-memory database для ApplicationDbContext
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseInMemoryDatabase("TestDatabase"));

            // Регистрация настроек JwtOptions
            services.Configure<JwtOptions>(configuration.GetSection("JwtOptions"));

            // Act
            services.AddApplicationServices();
            var serviceProvider = services.BuildServiceProvider();

            // Assert
            Assert.NotNull(serviceProvider.GetService<IUserService>());
            Assert.NotNull(serviceProvider.GetService<IUsersRepository>());
            Assert.NotNull(serviceProvider.GetService<IUserCardService>());
            Assert.NotNull(serviceProvider.GetService<IUsersCardsRepository>());
            Assert.NotNull(serviceProvider.GetService<IUserActivityService>());
            Assert.NotNull(serviceProvider.GetService<IUsersActivitiesRepository>());
            Assert.NotNull(serviceProvider.GetService<IUserStudyResultService>());
            Assert.NotNull(serviceProvider.GetService<IUsersStudyResultsRepository>());
            Assert.NotNull(serviceProvider.GetService<IAdminRoleService>());
            Assert.NotNull(serviceProvider.GetService<IAdminRoleRepository>());
            Assert.NotNull(serviceProvider.GetService<JwtProvider>());
            Assert.NotNull(serviceProvider.GetService<IAuthenticationService>());
            Assert.NotNull(serviceProvider.GetService<IPasswordHasher>());
            Assert.NotNull(serviceProvider.GetService<IArticleService>());
            Assert.NotNull(serviceProvider.GetService<IArticleRepository>());
        }
    }
}
