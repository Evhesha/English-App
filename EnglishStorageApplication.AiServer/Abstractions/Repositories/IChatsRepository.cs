using EnglishStorageApplication.AiServer.Models;

namespace EnglishStorageApplication.AiServer.Abstractions.Repositories;

public interface IChatsRepository
{
    Task<List<Chat>> GetUserChatsByUserIdAsync(string userId);
    Task<Chat> GetChatByChatIdAsync(string chatId);
    Task CreateChatAsync(Chat chat);
    Task DeleteChatByChatIdAsync(string chatId);
}