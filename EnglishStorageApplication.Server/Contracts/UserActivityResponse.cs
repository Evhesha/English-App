namespace EnglishStorageApplication.Server.Contracts
{
    public record UserActivityResponse(
        Guid id,
        Guid userId,
        DateTime dateTime,
        bool isActive
        );

    public record UserActivityRequest(
        Guid userId,
        DateTime dateTime,
        bool isActive
        );
}
