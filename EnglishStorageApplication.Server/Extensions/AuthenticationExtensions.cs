using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace EnglishStorageApplication.EnglishApp.Extensions
{
    public static class AuthenticationExtensions
    {
        private const string AuthCookieName = "token";
        private const string LegacyAuthCookieName = "tasty-cookies";

        public static IServiceCollection AddJwtAuthentication(this IServiceCollection services, IConfiguration configuration)
        {
            var secretKey = configuration["JwtOptions:SecretKey"];
            if (string.IsNullOrEmpty(secretKey))
            {
                throw new ArgumentNullException("JwtOptions:SecretKey", "JWT Secret Key is missing or null.");
            }

            services.AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(options =>
                {
                    options.MapInboundClaims = false;

                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = configuration["JwtOptions:Issuer"],
                        ValidAudience = configuration["JwtOptions:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey)),
                        ClockSkew = TimeSpan.Zero,
                        RoleClaimType = "role",
                        NameClaimType = "name"
                    };
                    
                    options.Events = new JwtBearerEvents
                    {
                        OnMessageReceived = context =>
                        {
                            var token = context.Request.Headers["Authorization"].FirstOrDefault();
                            if (!string.IsNullOrEmpty(token) && token.StartsWith("Bearer "))
                            {
                                context.Token = token.Substring("Bearer ".Length).Trim();
                            }
                            
                            if (string.IsNullOrEmpty(context.Token))
                            {
                                var cookieToken = context.Request.Cookies[AuthCookieName];
                                if (!string.IsNullOrEmpty(cookieToken))
                                {
                                    context.Token = cookieToken;
                                }
                            }

                            return Task.CompletedTask;
                        },
                        OnAuthenticationFailed = context =>
                        {
                            DeleteAuthCookies(context.Response.Cookies);
                            return Task.CompletedTask;
                        }
                    };
                });

            services.AddAuthorization(options =>
            {
                options.AddPolicy("RequireAdmin", policy => policy.RequireRole("Admin"));
                options.AddPolicy("RequireTeacher", policy => policy.RequireRole("Teacher"));
            });

            return services;
        }

        private static void DeleteAuthCookies(IResponseCookies cookies)
        {
            var cookieOptions = new CookieOptions
            {
                Path = "/"
            };

            cookies.Delete(AuthCookieName, cookieOptions);
            cookies.Delete(LegacyAuthCookieName, cookieOptions);
        }
    }
}
