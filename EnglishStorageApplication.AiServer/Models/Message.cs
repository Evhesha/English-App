using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace EnglishStorageApplication.AiServer.Models;

public class Message
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string Id { get; set; }

    [BsonElement("chatId")]
    public string ChatId { get; set; }

    [BsonElement("text")]
    public string Text { get; set; }
}