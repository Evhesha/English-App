using EnglishStorageApplication.AiServer.Abstractions.Services;
using EnglishStorageApplication.AiServer.DTOs.MessagesDtos;
using EnglishStorageApplication.AiServer.Models;
using OllamaSharp;
using OllamaSharp.Models;

namespace EnglishStorageApplication.AiServer.Endpoints;

public static class MessageEndpoints
{
    private const string prompt =
        "You are an English teacher.\n" +
        "Answer in the same language as the student.\n" +
        "Use short and clear sentences.\n" +
        "Do not write anything except the format.\n\n" +
        "Format:\n" +
        "Answer: <short answer>\n" +
        "Useful Vocabulary:\n" +
        "1. <word> - <translation to Russian>\n" +
        "2. <word> - <translation to Russian>\n" +
        "3. <word> - <translation to Russian>\n\n" +
        "Example:\n" +
        "Student: Что значит слово dog?\n" +
        "Answer: Слово \"dog\" означает собака.\n" +
        "Useful Vocabulary:\n" +
        "1. dog - собака\n" +
        "2. animal - животное\n" +
        "3. pet - домашнее животное\n\n" +
        "Student: ";
    
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

            var finalPrompt = prompt + messageDto.Text;
            
            string llmText = "";
            await foreach (var chunk in ollamaApiClient.GenerateAsync(
                    new GenerateRequest
                    {
                        Prompt = finalPrompt,
                        Options = new()
                        {
                            Temperature = 0.2f,
                            TopP = 0.9f
                        }
                    },
                    cancellationToken))
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