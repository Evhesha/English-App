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
    
    public async Task<List<Chat>> GetUserChatsByUserIdAsync(string userId)
    {
        var filter = Builders<Chat>.Filter.Eq(c => c.UserId, userId);
        return await _chats.Find(filter).ToListAsync();
    }
    
    public async Task<Chat> GetChatByChatIdAsync(string chatId)
    {
        var filter = Builders<Chat>.Filter.Eq(c => c.Id, chatId);
        return await _chats.Find(filter).FirstOrDefaultAsync();
    }

    public async Task CreateChatAsync(Chat chat)
    {
        await _chats.InsertOneAsync(chat);   
    }

    public async Task DeleteChatByChatIdAsync(string chatId)
    {
        var filter = Builders<Chat>.Filter.Eq(c => c.Id, chatId);
        var result = await _chats.DeleteOneAsync(filter);
    }
}