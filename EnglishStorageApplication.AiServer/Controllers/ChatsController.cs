using EnglishStorageApplication.AiServer.Abstractions.Services;

namespace EnglishStorageApplication.AiServer.Controllers;

public class ChatsController
{
    private readonly IChatsService _chatsService;

    public ChatsController(IChatsService chatsService)
    {
        _chatsService = chatsService;
    }
    
}