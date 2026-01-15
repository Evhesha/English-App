using EnglishStorageApplication.AiServer.Endpoints;
using EnglishStorageApplication.AiServer.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddApplicationServices();
builder.Services.AddDataBase(builder.Configuration);
builder.Services.AddCustomCors(builder.Configuration);
builder.Services.AddOllamaApiClient(new Uri("http://localhost:11434")); 

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();
app.UseCors("AllowSpecificOrigin");
app.MapChatEndpoints();
app.MapMessageEndpoints();
app.Run();