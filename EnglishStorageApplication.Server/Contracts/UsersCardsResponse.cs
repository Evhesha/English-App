namespace EnglishStorageApplication.Server.Contracts
{
    public record UsersCardsResponse (
        Guid id,
        Guid userId,
        string nameOfUserCard,
        string userCardData
    );

    public record UsersCardsRequest(
        Guid userId,
        string nameOfUserCard,
        string userCardData
    );
}
