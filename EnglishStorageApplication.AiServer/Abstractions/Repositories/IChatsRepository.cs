using EnglishStorageApplication.AiServer.Models;

namespace EnglishStorageApplication.AiServer.Abstractions.Repositories;

public interface IChatsRepository
{
    Task<List<Chat>> GetUserChatsByUserIdAsync(string userId, CancellationToken cancellationToken);
    Task<List<Chat>> GetUserChatsWithoutMessagesAsync(string userId, CancellationToken cancellationToken);
    Task<Chat> GetChatByChatIdAsync(string chatId, CancellationToken cancellationToken);
    Task CreateChatAsync(Chat chat, CancellationToken cancellationToken);
    Task DeleteChatByChatIdAsync(string chatId, CancellationToken cancellationToken);
}