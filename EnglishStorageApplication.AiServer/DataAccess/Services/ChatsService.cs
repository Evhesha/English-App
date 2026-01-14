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

    public async Task<List<Chat>> GetUserChatsByUserId(string userId, CancellationToken cancellationToken)
    {
        return await _chatsRepository.GetUserChatsByUserIdAsync(userId, cancellationToken);
    }

    public async Task<List<Chat>> GetUserChatsWithoutMessages(string userId, CancellationToken cancellationToken)
    {
        return await _chatsRepository.GetUserChatsWithoutMessagesAsync(userId, cancellationToken);
    }

    public async Task<Chat> GetChatByChatId(string chatId, CancellationToken cancellationToken)
    {
        return await _chatsRepository.GetChatByChatIdAsync(chatId, cancellationToken);
    }

    public async Task CreateChat(Chat chat, CancellationToken cancellationToken)
    {
        await _chatsRepository.CreateChatAsync(chat, cancellationToken);
    }

    public async Task DeleteChat(string chatId, CancellationToken cancellationToken)
    {
        await _chatsRepository.DeleteChatByChatIdAsync(chatId, cancellationToken);
    }
}