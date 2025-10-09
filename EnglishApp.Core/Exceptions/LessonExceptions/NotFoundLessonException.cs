namespace EnglishApp.Core.Exceptions.LessonExceptions;

public class NotFoundLessonException : Exception
{
    public NotFoundLessonException(string message)
        : base(message)
    {
    }
}