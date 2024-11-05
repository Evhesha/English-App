using EnglishStorageApplication.Server.Contracts;
using EnglishApp.Application.AppServices;
using EnglishStorageApplication.Server.Contracts.Users;

namespace EnglishStorageApplication.Server.Endpoints
{
    public static class UsersEndpoints
    {
        public static IEndpointRouteBuilder MapUserEndPoints (this IEndpointRouteBuilder app)
        {
            app.MapPost("register", Register);
            app.MapPost("login", Login);
            return app;
        }

        private static async Task<IResult> Register(
            RegisterUserRequest registerUserRequest,
            AuthenticationService authenticationService)
        {
            await authenticationService.Register(
                registerUserRequest.Name, 
                registerUserRequest.Email, 
                registerUserRequest.Password
            );

            return Results.Ok();
        }

        private static async Task<IResult> Login()
        {
            return Results.Ok();
        }
    }
}
