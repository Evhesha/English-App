using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Xunit;

namespace EnglishStorageApplication.EnglishApp.Extensions.Tests
{
    public class CorsExtensionsTests
    {
        [Fact]
        public void AddCustomCors_ShouldRegisterCorsPolicy()
        {
            // Arrange
            var services = new ServiceCollection();
            
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