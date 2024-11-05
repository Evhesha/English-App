// Controllers: Содержит контроллеры, которые обрабатывают HTTP-запросы и возвращают ответы.
// Models: Содержит модели данных, которые представляют сущности базы данных.
// Data: Содержит контекст базы данных и миграции.
// Services: Содержит бизнес-логику приложения. Здесь можно определить интерфейсы и их реализации для различных сервисов.
// Repositories: Содержит репозитории для доступа к данным. Это помогает отделить логику доступа к данным от бизнес-логики.
// DTOs: Содержит объекты передачи данных (Data Transfer Objects), которые используются для передачи данных между слоями приложения.
// Helpers: Содержит вспомогательные классы и утилиты, такие как генерация JWT токенов или отправка email.

using EnglishStorageApplication.EnglishApp.DataAccess;
using EnglishStorageApplication.EnglishApp.DataAccess.Repositories;
using EnglishStorageApplication.EnglishApp.Application.AppServices;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using Microsoft.EntityFrameworkCore;
using EnglishApp.Application.AppServices;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(
    options =>
    {
        options.UseNpgsql(builder.Configuration.GetConnectionString("ApplicationDbContext"));
    });

builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IUsersRepository, UsersRepository>();

builder.Services.AddScoped<IUserCardService, UserCardService>();
builder.Services.AddScoped<IUsersCardsRepository, UsersCardsRepository>();

builder.Services.AddScoped<IUserActivityService, UserActivityService>();
builder.Services.AddScoped<IUsersActivitiesRepository, UsersActivitiesRepository>();

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

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();