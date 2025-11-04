namespace EnglishApp.Core.Exceptions.LikeExceptions;

public class LikeWasNotFoundException : Exception
{
    public LikeWasNotFoundException(string message) 
        : base(message)
    {
    }
}