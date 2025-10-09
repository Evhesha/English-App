namespace EnglishApp.Core.Exceptions.LikeExceptions;

public class LessonHadAlreadyLikedException : Exception
{
       public LessonHadAlreadyLikedException(string message)
              : base(message)
       {
       }
}