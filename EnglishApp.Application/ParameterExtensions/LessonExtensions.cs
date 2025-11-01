using System.Linq.Expressions;
using EnglishApp.Core.Models;
using EnglishApp.Core.Params;

namespace EnglishApp.Application.ParameterExtensions;

public static class LessonExtensions
{
    public static IQueryable<Lesson> Filter(
        this IQueryable<Lesson> query,
        LessonFilter lessonFilter)
    {
        query = query.Where(l => l.IsPublic);
        
        if (!string.IsNullOrEmpty(lessonFilter.Title))
        {
            query = query.Where(l => l.Title == lessonFilter.Title);
        }

        if (lessonFilter.CreatedDate != null)
        {
            query = query.Where(l => l.CreatedDate >= lessonFilter.CreatedDate);
        }
        
        return query;
    }

    public static IQueryable<Lesson> Sort(
        this IQueryable<Lesson> query,
        SortParams sortParams)
    {
        return sortParams.Direction == SortDirection.Descending
            ? query.OrderByDescending(GetKeySelector(sortParams.OrderBy))
            : query.OrderBy(GetKeySelector(sortParams.OrderBy));
    }

    public static IQueryable<Lesson> Page(
        this IQueryable<Lesson> query,
        PageParams pageParams)
    {
        var page = pageParams.Page ?? 1;
        var pageSize = pageParams.PageSize ?? 50;

        var skip = (page - 1) * pageSize;
        return query.Skip(skip).Take(pageSize);
    }
    
    private static Expression<Func<Lesson, object>> GetKeySelector(string orderBy)
    {
        if (string.IsNullOrEmpty(orderBy))
        {
            return n => n.Title;
        }   

        return orderBy switch
        {
            nameof(Lesson.CreatedDate) => n => n.CreatedDate,
            _ => throw new NotImplementedException()
        };
    }
}