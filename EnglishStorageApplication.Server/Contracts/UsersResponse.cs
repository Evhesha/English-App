namespace EnglishStorageApplication.Server.Contracts
{
    public record UsersResponse(
        Guid id,
        string name,
        string email,
        string password);

    public record UsersRequest(
        string name,
        string email,
        string password);
}
