using EnglishStorageApplication.AiServer.DataAccess;
using MongoDB.Driver;

namespace EnglishStorageApplication.AiServer.Extensions;

public static class DataBaseExtensions
{
    public static IServiceCollection AddDataBase(this IServiceCollection services, IConfiguration configuration)
    {
        string mongoConnectionString = configuration.GetConnectionString("MongoConnection");
        services.AddSingleton<IMongoClient>(new MongoClient(mongoConnectionString));
        services.AddScoped<MongoDbContext>();
        return services;
    }
}