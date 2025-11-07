using EnglishApp.Infrastructure;
using EnglishStorageApplication.EnglishApp.Extensions;
using EnglishStorageApplication.Server.Extensions;
using EnglishStorageApplication.Server.Middleware;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerWithAuth();
builder.Services.AddMemoryCache(); // Memory cache

builder.Services.Configure<JwtOptions>(builder.Configuration.GetSection("JwtOptions"));
builder.Services.AddApplicationServices();
builder.Services.AddJwtAuthentication(builder.Configuration);
builder.Services.AddCustomCors(builder.Configuration);
builder.Services.AddDatabaseServices(builder.Configuration);
builder.Services.AddDistributedCacheServices(builder.Configuration); // distributed cache

builder.Logging.AddFile(Path.Combine(Directory.GetCurrentDirectory(), "logger.txt"));

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseCors("AllowSpecificOrigin");
app.UseAuthentication();
app.UseAuthorization();
app.UseMiddleware<ExceptionHandlingMiddleware>();
app.MapControllers();
app.MapFallbackToFile("/index.html");
app.Run();