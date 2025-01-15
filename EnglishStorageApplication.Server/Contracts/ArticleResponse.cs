namespace EnglishStorageApplication.Server.Contracts
{
    public record ArticleResponse(
        Guid id,
        Guid userId,
        string title,
        string text);

    public record ArticleUpdate(
        string title,
        string text
        );

    public record ArticleRequest(
        Guid userId,
        string title,
        string text,
        List<byte[]> images);
}
