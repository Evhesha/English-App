using EnglishStorageApplication.AiServer.Models;
using MongoDB.Driver;

namespace EnglishStorageApplication.AiServer.DataAccess;

public class MongoDbContext(IMongoClient mongoClient)
{
    private readonly IMongoDatabase _database = mongoClient.GetDatabase("mongodb");
    
    public IMongoCollection<Message> Messages => _database.GetCollection<Message>("messages");
    public IMongoCollection<Chat> Chats => _database.GetCollection<Chat>("chats");
}