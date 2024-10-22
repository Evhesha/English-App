// Controllers: �������� �����������, ������� ������������ HTTP-������� � ���������� ������.
// Models: �������� ������ ������, ������� ������������ �������� ���� ������.
// Data: �������� �������� ���� ������ � ��������.
// Services: �������� ������-������ ����������. ����� ����� ���������� ���������� � �� ���������� ��� ��������� ��������.
// Repositories: �������� ����������� ��� ������� � ������. ��� �������� �������� ������ ������� � ������ �� ������-������.
// DTOs: �������� ������� �������� ������ (Data Transfer Objects), ������� ������������ ��� �������� ������ ����� ������ ����������.
// Helpers: �������� ��������������� ������ � �������, ����� ��� ��������� JWT ������� ��� �������� email.

using EnglishStorageApplication.Server.Data;
using EnglishStorageApplication.Server.Data.Repositories;
using EnglishStorageApplication.Server.Services.AppServices;
using EnglishStorageApplication.Server.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(
    options =>
    {
        options.UseNpgsql(builder.Configuration.GetConnectionString(nameof(ApplicationDbContext)));
    });

builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IUsersRepository, UsersRepository>();

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