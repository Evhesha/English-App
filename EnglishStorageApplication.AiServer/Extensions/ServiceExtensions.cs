using EnglishStorageApplication.AiServer.Abstractions.Repositories;
using EnglishStorageApplication.AiServer.Abstractions.Services;
using EnglishStorageApplication.AiServer.DataAccess.Repositories;
using EnglishStorageApplication.AiServer.DataAccess.Services;

namespace EnglishStorageApplication.AiServer.Extensions;

public static class ServiceExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        services.AddScoped<IChatsRepository, ChatsRepository>();
        services.AddScoped<IChatsService, ChatsService>();
        
        services.AddScoped<IMessagesRepository, MessagesRepository>();
        services.AddScoped<IMessagesService, MessagesService>();

        return services;
    }
}