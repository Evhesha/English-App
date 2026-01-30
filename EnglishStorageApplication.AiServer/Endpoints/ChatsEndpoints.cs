using EnglishStorageApplication.AiServer.Abstractions.Services;
using EnglishStorageApplication.AiServer.DTOs.ChatsDtos;
using EnglishStorageApplication.AiServer.Models;

namespace EnglishStorageApplication.AiServer.Endpoints;

public static class ChatsEndpoints
{
    public static void MapChatEndpoints(this IEndpointRouteBuilder app)
    {
        
        app.MapGet("/user/{userId}/chats", async (
            string userId,
            IChatsService chatsService,
            CancellationToken cancellationToken) =>
        {
            var userChats = await chatsService.GetUserChatsByUserId(userId, cancellationToken);
            return Results.Ok(userChats);
        });
        
        app.MapGet("/user/{userId}/chats/summary", async (
            string userId,
            IChatsService chatsService,
            CancellationToken cancellationToken) =>
        {
            var userChats = await chatsService.GetUserChatsWithoutMessages(userId, cancellationToken);
            return Results.Ok(userChats);
        });

        app.MapGet("/chat/{chatId}", async (
            string chatId,
            IChatsService chatsService,
            CancellationToken cancellationToken) =>
        {
            var userChat = await chatsService.GetChatByChatId(chatId, cancellationToken);
            return Results.Ok(userChat);
        });

        app.MapPost("/chat", async (
            CreateChatDto createChatDto,
            IChatsService chatsService,
            CancellationToken cancellationToken) =>
        {
            var chat = new Chat
            {
                UserId = createChatDto.UserId,
                Title = createChatDto.Title,
                Messages = new List<Message>()
            };
    
            await chatsService.CreateChat(chat, cancellationToken);
            return Results.Ok(chat.Id); 
        });

        app.MapPatch("/chat/{chatId}/title", async (
            string chatId,
            UpdateChatTitleDto updateChatTitleDto,
            IChatsService chatsService,
            CancellationToken cancellationToken) =>
        {
            var result = await chatsService.UpdateChatTitle(
                chatId,
                updateChatTitleDto.NewChatTitle,
                cancellationToken);
            
            return Results.Ok(result);
        });
        
        app.MapDelete("/chat/{chatId}", async (
            string chatId,
            IChatsService chatsService,
            CancellationToken cancellationToken) =>
        {
            await chatsService.DeleteChat(chatId, cancellationToken);
            return Results.NoContent();
        });
    }
}