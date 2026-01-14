using EnglishStorageApplication.AiServer.Abstractions.Repositories;
using EnglishStorageApplication.AiServer.Models;
using MongoDB.Driver;

namespace EnglishStorageApplication.AiServer.DataAccess.Repositories;

public class MessagesRepository : IMessagesRepository
{
    private readonly IMongoCollection<Chat> _chats;
    public MessagesRepository(IMongoClient mongoClient)
    {
        var database = mongoClient.GetDatabase("ChatDatabase");
        _chats = database.GetCollection<Chat>("Chats");
    }

    public async Task<List<Message>> GetChatMessagesAsync(string chatId, CancellationToken cancellationToken)
    {
        var filter = Builders<Chat>.Filter.Eq(c => c.Id, chatId);
        var chat = await _chats.Find(filter).FirstOrDefaultAsync(cancellationToken);
        return chat?.Messages ?? new List<Message>();
    }

    public async Task AddMessageAsync(string chatId, Message message, CancellationToken cancellationToken)
    {
        var filter = Builders<Chat>.Filter.Eq(c => c.Id, chatId);
        if (filter == null)
        {
            throw new ArgumentNullException(nameof(filter));
        }
        var update = Builders<Chat>.Update.Push("messages", message);
        await _chats.UpdateOneAsync(filter, update, cancellationToken: cancellationToken);
    }
}