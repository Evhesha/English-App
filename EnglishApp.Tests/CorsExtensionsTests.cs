using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Xunit;

namespace EnglishStorageApplication.EnglishApp.Extensions.Tests
{
    //Этот юнит-тест проверяет, что метод AddCustomCors корректно
    //регистрирует политику CORS в контейнере зависимостей.
    //Тест загружает конфигурацию из файла appsettings.json, вызывает метод AddCustomCors,
    //чтобы настроить политику CORS, и затем проверяет,
    //что политика AllowSpecificOrigin была успешно добавлена
    //и содержит правильный разрешенный источник http://localhost:5173

    public class CorsExtensionsTests
    {
        [Fact]
        public void AddCustomCors_ShouldRegisterCorsPolicy()
        {
            // Arrange
            var services = new ServiceCollection();

            // Загрузка конфигурации из файла appsettings.json
            IConfiguration configuration = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .Build();

            // Act
            services.AddCustomCors(configuration);
            var serviceProvider = services.BuildServiceProvider();
            var options = serviceProvider.GetRequiredService<IOptions<CorsOptions>>();

            // Assert
            Assert.NotNull(options);
            var policy = options.Value.GetPolicy("AllowSpecificOrigin");
            Assert.NotNull(policy);
            Assert.Contains("http://localhost:5173", policy.Origins);
        }
    }
}
