using EnglishStorageApplication.AiServer.Abstractions.Services;

namespace EnglishStorageApplication.AiServer.Controllers;

public class MessagesController
{
    private readonly IMessagesService _messagesService;

    public MessagesController(IMessagesService messagesService)
    {
        _messagesService = messagesService;
    }
    
}