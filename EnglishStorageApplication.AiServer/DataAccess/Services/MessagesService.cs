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

    public async Task<List<Message>> GetChatMessages(string userId, CancellationToken cancellationToken)
    {
        return await _messagesRepository.GetChatMessagesAsync(userId, cancellationToken);
    }

    public async Task AddMessage(string chatId, Message message, CancellationToken cancellationToken)
    {
        await _messagesRepository.AddMessageAsync(chatId, message, cancellationToken);
    }
}