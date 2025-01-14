using EnglishApp.Infrastructure;
using EnglishStorageApplication.EnglishApp.Extensions;
using EnglishStorageApplication.Server.Extensions;

var builder = WebApplication.CreateBuilder(args);

// ������������ �����
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// ����������� ������������ JwtOptions (extension)
builder.Services.Configure<JwtOptions>(builder.Configuration.GetSection("JwtOptions"));

// ����������� �������� (extension)
builder.Services.AddApplicationServices();

// ��������� �������������� � JWT (extension)
builder.Services.AddJwtAuthentication(builder.Configuration);

// ��������� ����� ��� ����������� (extension)
builder.Logging.AddFile(Path.Combine(Directory.GetCurrentDirectory(), "logger.txt"));

// ��������� CORS
builder.Services.AddCustomCors(builder.Configuration);

// database extensions
builder.Services.AddDatabaseServices(builder.Configuration);

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

// ���������� �������� CORS
app.UseCors("AllowSpecificOrigin");

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
