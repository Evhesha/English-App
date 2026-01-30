using EnglishStorageApplication.AiServer.Abstractions.Repositories;
using EnglishStorageApplication.AiServer.Models;
using MongoDB.Driver;

namespace EnglishStorageApplication.AiServer.DataAccess.Repositories;

public class ChatsRepository : IChatsRepository
{
    private readonly IMongoCollection<Chat> _chats;
    public ChatsRepository(IMongoClient mongoClient)
    {
        var database = mongoClient.GetDatabase("ChatDatabase");
        _chats = database.GetCollection<Chat>("Chats");
    }
    
    public async Task<List<Chat>> GetUserChatsByUserIdAsync(string userId, CancellationToken cancellationToken)
    {
        var filter = Builders<Chat>.Filter.Eq(c => c.UserId, userId);
        return await _chats.Find(filter).ToListAsync(cancellationToken);
    }

    public async Task<List<Chat>> GetUserChatsWithoutMessagesAsync(string userId, CancellationToken cancellationToken)
    {
        var filter = Builders<Chat>.Filter.Eq(c => c.UserId, userId);
        return await _chats.Find(filter)
            .Project<Chat>(Builders<Chat>.Projection
                .Exclude(c => c.Messages)) 
            .ToListAsync(cancellationToken);
    }
    
    public async Task<Chat> GetChatByChatIdAsync(string chatId,CancellationToken cancellationToken)
    {
        var filter = Builders<Chat>.Filter.Eq(c => c.Id, chatId);
        return await _chats.Find(filter).FirstOrDefaultAsync(cancellationToken);
    }

    public async Task CreateChatAsync(Chat chat, CancellationToken cancellationToken)
    {
        await _chats.InsertOneAsync(chat, cancellationToken: cancellationToken);   
    }

    public async Task<string> UpdateChatTitleAsync(
        string chatId,
        string newChatName,
        CancellationToken cancellationToken)
    {
        var filter = Builders<Chat>.Filter.Eq(c => c.Id, chatId);
        var update = Builders<Chat>.Update.Set(c => c.Title, newChatName);

        var result = await _chats.UpdateOneAsync(filter, update, null, cancellationToken);

        if (result.MatchedCount == 0)
        {
            throw new Exception("Chat not found");
        }

        return chatId;
    }

    public async Task DeleteChatByChatIdAsync(string chatId, CancellationToken cancellationToken)
    {
        var filter = Builders<Chat>.Filter.Eq(c => c.Id, chatId);
        var result = await _chats.DeleteOneAsync(filter, cancellationToken);
    }
}