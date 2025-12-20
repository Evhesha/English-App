using EnglishStorageApplication.AiServer.Models;

namespace EnglishStorageApplication.AiServer.Abstractions.Services;

public interface IChatsService
{
    Task<List<Chat>> GetUserChatsByUserId(string userId);
    Task CreateChat(Chat chat);
    Task DeleteChat(string chatId);
}