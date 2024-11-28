using EnglishApp.Infrastructure;
using EnglishStorageApplication.EnglishApp.DataAccess;
using EnglishStorageApplication.EnglishApp.Extensions;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Конфигурация служб
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseNpgsql(builder.Configuration.GetConnectionString("ApplicationDbContext"));
});

// Регистрация конфигурации JwtOptions (extension)
builder.Services.Configure<JwtOptions>(builder.Configuration.GetSection("JwtOptions"));

// Регистрация сервисов (extension)
builder.Services.AddApplicationServices();

// Настройка аутентификации и JWT (extension)
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
