using System.Linq.Expressions;
using EnglishApp.Core.Models;
using EnglishApp.Core.Params.LessonParams;
using EnglishApp.Core.Params.LessonParams.TestParams;

namespace EnglishApp.Application.ParameterExtensions;

public static class TestExtensions
{
    public static IQueryable<Test> Filter(
        this IQueryable<Test> query,
        TestFilter testFilter)
    {
        query = query.Where(t => t.IsPublic);
        
        if (!string.IsNullOrEmpty(testFilter.Title))
        {
            var titleLower = testFilter.Title.ToLower();
            query = query.Where(l => l.Name.ToLower().StartsWith(titleLower));
        }

        if (!string.IsNullOrEmpty(testFilter.AuthorName))
        {
            var authorNameLower = testFilter.AuthorName.ToLower();
            query = query.Where(l => l.User.Name.ToLower().StartsWith(authorNameLower));
        }
        
        return query;
    }

    public static IQueryable<Test> Sort(
        this IQueryable<Test> query,
        SortParams sortParams)
    {
        return sortParams.Direction == SortDirection.Descending
            ? query.OrderByDescending(GetKeySelector(sortParams.OrderBy))
            : query.OrderBy(GetKeySelector(sortParams.OrderBy));
    }

    public static IQueryable<Test> Page(
        this IQueryable<Test> query,
        PageParams pageParams)
    {
        var page = pageParams.Page ?? 1;
        var pageSize = pageParams.PageSize ?? 30;

        var skip = (page - 1) * pageSize;
        return query.Skip(skip).Take(pageSize);
    }
    
    public static (IQueryable<Test> pagedQuery, int totalCount) PageWithCount(
        this IQueryable<Test> query,
        PageParams pageParams)
    {
        var totalCount = query.Count();
        var pagedQuery = query.Page(pageParams);
        return (pagedQuery, totalCount);
    }
    
    private static Expression<Func<Test, object>> GetKeySelector(string orderBy)
    {
        if (string.IsNullOrEmpty(orderBy))
        {
            return t => t.Name;
        }   

        return orderBy switch
        {
            nameof(Test.LastUpdateAt) => t => t.LastUpdateAt,
            
            nameof(Test.PassCount) => t => t.PassCount,
        };
    }
}