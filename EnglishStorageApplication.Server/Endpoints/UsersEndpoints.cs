using EnglishStorageApplication.Server.Contracts;
using EnglishApp.Application.AppServices;
using EnglishStorageApplication.Server.Contracts.Users;

namespace EnglishStorageApplication.Server.Endpoints
{
    public static class UsersEndpoints
    {
        public static IEndpointRouteBuilder MapUserEndPoints(this IEndpointRouteBuilder app)
        {
            app.MapPost("/api/users/register", Register);
            app.MapPost("/api/users/login", Login);
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

            return Results.Ok(new { Message = "User registered successfully" });
        }

        private static async Task<IResult> Login(
            LoginUserRequest loginUserRequest,
            AuthenticationService authenticationService)
        {
            var token = await authenticationService.Login(
                loginUserRequest.Email,
                loginUserRequest.Password
            );

            if (string.IsNullOrEmpty(token))
            {
                return Results.Unauthorized();
            }

            return Results.Ok(new { Token = token });
        }
    }
}

