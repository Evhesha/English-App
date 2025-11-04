using System.Net;
using EnglishApp.Core.Exceptions.LessonExceptions;
using EnglishApp.Core.Exceptions.LikeExceptions;
using EnglishApp.Core.Exceptions.UserCardExceptions;
using EnglishApp.Core.Exceptions.UserExceptions;
using EnglishApp.Core.Exceptions.UserStudyResultExceptions;

namespace EnglishStorageApplication.Server.Middleware;

public class ExceptionHandlingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<ExceptionHandlingMiddleware> _logger;

    public ExceptionHandlingMiddleware(RequestDelegate next, ILogger<ExceptionHandlingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        try
        {
            await _next(context);
        }
        catch (Exception ex)
        {
            await HandleExceptionAsync(context, ex);
        }
    }

    private async Task HandleExceptionAsync(HttpContext context, Exception exception)
    {
        HttpStatusCode statusCode;
        string message = exception.Message;

        switch (exception)
        {
            // Lesson entity
            case NotFoundLessonException:
                statusCode = HttpStatusCode.NotFound;
                break;

            // User entity
            case NotFoundUserException:
                statusCode = HttpStatusCode.NotFound;
                break;
            
            // UserCard entity
            case NotFoundUserCardException:
                statusCode =  HttpStatusCode.NotFound;
                break;
            
            // User entity
            case NotFoundUserStudyResultException:
                statusCode = HttpStatusCode.NotFound;
                break;
            
            // Like entity
            case LessonHadAlreadyLikedException:
                statusCode = HttpStatusCode.Conflict;
                break;
            
            case LikeWasNotFoundException:
                statusCode = HttpStatusCode.NotFound;
                break;

            default:
                statusCode = HttpStatusCode.InternalServerError;
                _logger.LogError(exception, "Unhandled exception occurred.");
                message = "An unexpected error occurred.";
                break;
        }

        context.Response.StatusCode = (int)statusCode;
        context.Response.ContentType = "application/json";

        await context.Response.WriteAsJsonAsync(new
        {
            error = message,
            statusCode = (int)statusCode
        });
    }
}