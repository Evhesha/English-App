using EnglishStorageApplication.AiServer.Abstractions.Services;
using EnglishStorageApplication.AiServer.DTOs.ChatsDtos;
using EnglishStorageApplication.AiServer.Models;

namespace EnglishStorageApplication.AiServer.Endpoints;

public static class ChatsEndpoints
{
    public static void MapChatEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapGet("/user/{userId}/chats", async (string userId, IChatsService chatsService) =>
        {
            var userChats = await chatsService.GetUserChatsByUserId(userId);
            return Results.Ok(userChats);
        });

        app.MapPost("/chat", async (CreateChatDto createChatDto, IChatsService chatsService) =>
        {
            var chat = new Chat
            {
                UserId = createChatDto.UserId,
                Title = createChatDto.Title,
                Messages = new List<Message>()
            };
    
            await chatsService.CreateChat(chat);
            return Results.Created(); 
        });
        
        app.MapDelete("/chat/{chatId}", async (string chatId, IChatsService chatsService) =>
        {
            await chatsService.DeleteChat(chatId);
            return Results.NoContent();
        });
    }
}