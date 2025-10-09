namespace EnglishApp.Core.Exceptions.UserStudyResultExceptions;

public class NotFoundUserStudyResultException : Exception
{
    public NotFoundUserStudyResultException(string message) : base(message)
    {
    }
}