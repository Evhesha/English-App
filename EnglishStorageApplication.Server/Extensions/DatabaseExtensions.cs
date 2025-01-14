using EnglishStorageApplication.EnglishApp.DataAccess;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Runtime.CompilerServices;

namespace EnglishStorageApplication.Server.Extensions
{
    public static class DatabaseExtensions
    {
        public static IServiceCollection AddDatabaseServices(
            this IServiceCollection services,
            IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseNpgsql(configuration.GetConnectionString("ApplicationDbContext"));
            });

            return services;
        }
    }
}
