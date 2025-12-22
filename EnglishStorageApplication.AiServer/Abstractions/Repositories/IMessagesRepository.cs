using EnglishStorageApplication.AiServer.Models;

namespace EnglishStorageApplication.AiServer.Abstractions.Repositories;

public interface IMessagesRepository
{
    Task<List<Message>> GetChatMessagesAsync(string chatId);
    Task AddMessageAsync(string chatId, Message message);
}