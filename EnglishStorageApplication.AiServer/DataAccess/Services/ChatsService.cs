using EnglishStorageApplication.AiServer.Abstractions.Repositories;
using EnglishStorageApplication.AiServer.Abstractions.Services;
using EnglishStorageApplication.AiServer.Models;

namespace EnglishStorageApplication.AiServer.DataAccess.Services;

public class ChatsService : IChatsService
{
    private readonly IChatsRepository _chatsRepository;

    public ChatsService(IChatsRepository chatsRepository)
    {
        _chatsRepository = chatsRepository;
    }

    public async Task<List<Chat>> GetUserChatsByUserId(string userId)
    {
        return await _chatsRepository.GetUserChatsByUserIdAsync(userId);
    }

    public async Task<Chat> GetChatByChatId(string chatId)
    {
        return await _chatsRepository.GetChatByChatIdAsync(chatId);
    }

    public async Task CreateChat(Chat chat)
    {
        await _chatsRepository.CreateChatAsync(chat);
    }

    public async Task DeleteChat(string chatId)
    {
        await _chatsRepository.DeleteChatByChatIdAsync(chatId);
    }
}