namespace EnglishApp.Core.Exceptions.UserCardExceptions;

public class NotFoundUserCardException : Exception
{
    public NotFoundUserCardException(string message) 
        :  base(message)
    {
    }
}