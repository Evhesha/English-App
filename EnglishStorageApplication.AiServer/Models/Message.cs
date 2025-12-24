using MongoDB.Bson.Serialization.Attributes;

namespace EnglishStorageApplication.AiServer.Models;

public class Message
{
    [BsonElement("type")]
    public string Type { get; set; }
    
    [BsonElement("chatId")]
    public string ChatId { get; set; }

    [BsonElement("text")]
    public string Text { get; set; }
    
    [BsonElement("date")]
    public DateTime DateOfCreation { get; set; }
}