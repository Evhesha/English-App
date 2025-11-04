using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;

namespace EnglishStorageApplication.EnglishApp.Extensions
{
    public static class AuthenticationExtensions
    {
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
                        RoleClaimType = ClaimTypes.Role,
                        NameClaimType = ClaimTypes.Name
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
                                var cookieToken = context.Request.Cookies["token"];
                                if (!string.IsNullOrEmpty(cookieToken))
                                {
                                    context.Token = cookieToken;
                                }
                            }

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
    }
}