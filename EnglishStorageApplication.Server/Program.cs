using EnglishApp.Application.AppServices;
using EnglishApp.Infrastructure;
using EnglishStorageApplication.EnglishApp.Application.AppServices;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.EnglishApp.DataAccess.Repositories;
using EnglishStorageApplication.EnglishApp.DataAccess;
using EnglishStorageApplication.EnglishApp.Extensions;
using EnglishStorageApplication.EnglishApp.Infrastructure;
using Microsoft.EntityFrameworkCore;
using EnglishApp.DataAccess.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Конфигурация служб
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("ApplicationDbContext"));
});

// Регистрация конфигурации JwtOptions
builder.Services.Configure<JwtOptions>(builder.Configuration.GetSection("JwtOptions"));

// Регистрация сервисов
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IUsersRepository, UsersRepository>();

builder.Services.AddScoped<IUserCardService, UserCardService>();
builder.Services.AddScoped<IUsersCardsRepository, UsersCardsRepository>();

builder.Services.AddScoped<IUserActivityService, UserActivityService>();
builder.Services.AddScoped<IUsersActivitiesRepository, UsersActivitiesRepository>();

builder.Services.AddScoped<IUserStudyResultService, UserStudyResultService>();
builder.Services.AddScoped<IUsersStudyResultsRepository, UsersStudyResultsRepository>();

builder.Services.AddScoped<JwtProvider>();
builder.Services.AddScoped<IAuthenticationService, AuthenticationService>();
builder.Services.AddScoped<IPasswordHasher, PasswordHasher>();

// Настройка аутентификации и JWT
builder.Services.AddJwtAuthentication(builder.Configuration);

// Настройка CORS
builder.Services.AddCustomCors(builder.Configuration);

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseRouting();

// Применение политики CORS
app.UseCors("AllowSpecificOrigin");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
