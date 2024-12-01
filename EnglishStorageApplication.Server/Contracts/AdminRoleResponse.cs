namespace EnglishStorageApplication.Server.Contracts
{
    public record AdminRolesResponse(
        Guid id,
        Guid userId
        );

    public record AdminRolesRequest(
        Guid userId
        );
}
