using EnglishStorageApplication.AiServer.Models;

namespace EnglishStorageApplication.AiServer.Abstractions.Services;

public interface IMessagesService
{
    Task<List<Message>> GetChatMessages(string userId, CancellationToken cancellationToken);
    Task AddMessage(string chatId, Message message, CancellationToken cancellationToken);
}