using EnglishStorageApplication.AiServer.Endpoints;
using EnglishStorageApplication.AiServer.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddApplicationServices();
builder.Services.AddDataBase(builder.Configuration);
builder.Services.AddCustomCors(builder.Configuration);

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