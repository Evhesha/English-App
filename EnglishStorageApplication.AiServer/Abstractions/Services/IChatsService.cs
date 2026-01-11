using EnglishStorageApplication.AiServer.Models;

namespace EnglishStorageApplication.AiServer.Abstractions.Services;

public interface IChatsService
{
    Task<List<Chat>> GetUserChatsByUserId(string userId, CancellationToken cancellationToken);
    Task<List<Chat>> GetUserChatsWithoutMessages(string userId, CancellationToken cancellationToken);
    Task<Chat> GetChatByChatId(string chatId, CancellationToken cancellationToken);
    Task CreateChat(Chat chat, CancellationToken cancellationToken);
    Task DeleteChat(string chatId, CancellationToken cancellationToken);
}