namespace EnglishApp.Core.Exceptions.TestQuestionExceptions;

public class TestQuestionWasNotFoundException : Exception
{
    public TestQuestionWasNotFoundException(string message)
        : base(message)
    {
        
    }
}