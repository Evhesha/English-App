using EnglishStorageApplication.AiServer.Abstractions.Repositories;
using EnglishStorageApplication.AiServer.Abstractions.Services;
using EnglishStorageApplication.AiServer.Models;

namespace EnglishStorageApplication.AiServer.DataAccess.Services;

public class MessagesService : IMessagesService
{
    private readonly IMessagesRepository _messagesRepository;

    public MessagesService(IMessagesRepository messagesRepository)
    {
        _messagesRepository = messagesRepository;
    }

    public async Task<List<Message>> GetChatMessages(string userId)
    {
        return await _messagesRepository.GetChatMessagesAsync(userId);
    }

    public async Task AddMessage(string chatId, Message message)
    {
        await _messagesRepository.AddMessageAsync(chatId, message);
    }
}