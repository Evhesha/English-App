using EnglishStorageApplication.AiServer.Abstractions.Services;
using EnglishStorageApplication.AiServer.DTOs.ChatsDtos;
using EnglishStorageApplication.AiServer.Extensions;
using EnglishStorageApplication.AiServer.Models;

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

app.MapPost("/chat", async (CreateChatDto CreateChatDto, IChatsService chatsService) =>
{
    var chat = new Chat
    {
        UserId = CreateChatDto.UserId,
        Title = CreateChatDto.Title
    };
    
    await chatsService.CreateChat(chat);
    return Results.Created(); 
});

app.MapDelete("/chat/{chatId}", async (string chatId, IChatsService chatsService) =>
{
    await chatsService.DeleteChat(chatId);
    return Results.NoContent();
});

app.Run();