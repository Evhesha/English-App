namespace EnglishApp.Core.Exceptions.TestExceptions;

public class TestWasNotFoundException : Exception
{
    public  TestWasNotFoundException(string message)
        : base(message)
    {
    }
}