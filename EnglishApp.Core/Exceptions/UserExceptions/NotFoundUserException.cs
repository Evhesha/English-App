namespace EnglishApp.Core.Exceptions.UserExceptions;

public class NotFoundUserException : Exception
{
    public NotFoundUserException(string message) : base(message)
    {
    }
}