using EnglishStorageApplication.AiServer.Abstractions.Services;
using EnglishStorageApplication.AiServer.DTOs.MessagesDtos;
using EnglishStorageApplication.AiServer.Models;

namespace EnglishStorageApplication.AiServer.Endpoints;

public static class MessageEndpoints
{
    public static void MapMessageEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapGet("/chat/{chatId}/messages", async (string chatId, IMessagesService messageService) =>
        {
            var chatMessages = await messageService.GetChatMessages(chatId);
            return Results.Ok(chatMessages);
        });

        app.MapPost("chat/message/{chatId}", async (
            string chatId,
            AddMessageDto messageDto,
            IMessagesService messageService) =>
        {
            var message = new Message
            {
                Text = messageDto.Text,
                Date = DateTime.UtcNow,
                Type = "userMessage"
            };

            try
            {
                await messageService.AddMessage(chatId, message);
            }
            catch (ArgumentException)
            {
                return Results.BadRequest();
            }
            
            // send a message to llm service
            
            return Results.Created();
        });
    }
}