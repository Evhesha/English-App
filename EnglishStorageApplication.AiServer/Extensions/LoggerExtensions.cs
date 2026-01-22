using Serilog;

namespace EnglishStorageApplication.AiServer.Extensions;

public static class LoggerExtensions
{
    public static void UseSerilogLogging(this WebApplicationBuilder app)
    {
        Log.Logger = new LoggerConfiguration()
            .WriteTo.Console()
            .CreateLogger();

        app.Host.UseSerilog();
    }
}