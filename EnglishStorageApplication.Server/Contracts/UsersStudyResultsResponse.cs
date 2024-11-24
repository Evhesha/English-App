namespace EnglishStorageApplication.Server.Contracts
{
    public record UsersStudyResultsResponse(
        Guid id,
        Guid userId,
        Guid testId,
        double percent
    );

    public record UsersStudyResultsRequest(
        Guid userId,
        Guid testId,
        double percent
    );
}