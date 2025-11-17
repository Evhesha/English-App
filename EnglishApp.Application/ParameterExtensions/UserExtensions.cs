using EnglishApp.Core.Params.UserParams;
using EnglishStorageApplication.EnglishApp.Core.Models;

namespace EnglishApp.Application.ParameterExtensions;

public static class UserExtensions
{
    public static IQueryable<User> Filter(
        this IQueryable<User> query,
        UserFilter userFilter)
    {
        
        if (!string.IsNullOrEmpty(userFilter.Role))
        {
            query = query.Where(u => u.Role == userFilter.Role);
        }
        
        return query;
    }
}