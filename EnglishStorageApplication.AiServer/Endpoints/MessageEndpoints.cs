using EnglishStorageApplication.AiServer.Abstractions.Services;
using EnglishStorageApplication.AiServer.DTOs.MessagesDtos;
using EnglishStorageApplication.AiServer.Models;
using OllamaSharp;

namespace EnglishStorageApplication.AiServer.Endpoints;

public static class MessageEndpoints
{
    public static void MapMessageEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapGet("/chat/{chatId}/messages", async (
            string chatId,
            IMessagesService messageService,
            CancellationToken cancellationToken) =>
        {
            var chatMessages = await messageService.GetChatMessages(chatId, cancellationToken);
            return Results.Ok(chatMessages);
        });

        app.MapPost("chat/message/{chatId}", async (
            string chatId,
            AddMessageDto messageDto,
            IMessagesService messageService,
            IOllamaApiClient ollamaApiClient,
            CancellationToken cancellationToken) =>
        {
            var message = new Message
            {
                Text = messageDto.Text,
                Date = DateTime.UtcNow,
                Type = "userMessage"
            };
            
            await messageService.AddMessage(chatId, message, cancellationToken);

            string llmText = "";
            await foreach (var chunk 
                           in ollamaApiClient.GenerateAsync(messageDto.Text, cancellationToken: cancellationToken))
            {
                llmText += chunk?.Response;
            }
            
            var responseMessage = new Message
            {
                Text = llmText, 
                Date = DateTime.UtcNow,
                Type = "llmResponse"
            };
            
            await messageService.AddMessage(chatId, responseMessage, cancellationToken);
            return Results.Ok(responseMessage);
        });
    }
}