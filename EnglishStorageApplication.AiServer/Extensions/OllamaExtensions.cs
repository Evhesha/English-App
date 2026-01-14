using OllamaSharp;

namespace EnglishStorageApplication.AiServer.Extensions;

public static class OllamaExtensions
{
    public static IServiceCollection AddOllamaApiClient(this IServiceCollection services, Uri uri, string defaultModel = "gemma2:2b")
    {
        services.AddSingleton<IOllamaApiClient>(sp => 
        {
            var client = new OllamaApiClient(uri);
            client.SelectedModel = defaultModel;
            return client;
        });
        return services;
    }
}