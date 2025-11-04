namespace EnglishStorageApplication.Server.Extensions;

public static class DistributedCacheExtensions
{
    public static IServiceCollection AddDistributedCacheServices(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        services.AddStackExchangeRedisCache(options =>
        {
            options.Configuration = configuration.GetConnectionString("Redis");
            options.InstanceName = "EnglishApp_";
        });

        return services;
    }
}