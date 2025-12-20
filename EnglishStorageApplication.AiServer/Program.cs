using EnglishStorageApplication.AiServer.Abstractions.Services;
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

app.MapGet("/user/{userId}/chats", async (string userId, IChatsService chatsService) =>
{
    var userChats = await chatsService.GetUserChatsByUserId(userId);
    return Results.Ok(userChats);
});


app.Run();