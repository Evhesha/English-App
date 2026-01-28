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
            ILoggerFactory loggerFactory,
            CancellationToken cancellationToken) =>
        {
            var logger = loggerFactory.CreateLogger("MessageEndpoints");
            var message = new Message
            {
                Text = messageDto.Text,
                Date = DateTime.UtcNow,
                Type = "userMessage"
            };
            
            await messageService.AddMessage(chatId, message, cancellationToken);
            
            var systemInstruction = 
                "You are a professional English Tutor. " +
                "1. LANGUAGE: If the user writes in English, answer in English. If the user writes in Russian, answer in Russian. " +
                "2. VOCABULARY: Always end your response with a 'Useful Vocabulary' section. " +
                "3. FORMAT: The vocabulary must be: 'English Word - Перевод на русский'. After vocabulary you write nothing! " +
                "4. FOCUS: Only answer questions related to English language learning.";

        
            var prompt = $"System: {systemInstruction}\n\nUser: {messageDto.Text}\n\nAssistant:";

            string llmText = "";
            await foreach (var chunk 
                           in ollamaApiClient.GenerateAsync(prompt, cancellationToken: cancellationToken))
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
            logger.LogInformation("Message and answer were successfully created.");
            return Results.Ok(responseMessage);
        });
    }
}