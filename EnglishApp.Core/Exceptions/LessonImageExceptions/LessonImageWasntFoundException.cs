namespace EnglishApp.Core.Exceptions.LessonImageExceptions;

public class LessonImageWasntFoundException : Exception
{
    public LessonImageWasntFoundException(string message) 
        : base(message)
    {
    }
}