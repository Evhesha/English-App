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

        if (!string.IsNullOrEmpty(userFilter.Name))
        {
            var usersLower = userFilter.Name.ToLower();
            query = query.Where(u => u.Name.ToLower().StartsWith(usersLower));
        }

        if (!string.IsNullOrEmpty(userFilter.Email))
        {
            var usersEmail = userFilter.Email.ToLower();
            query = query.Where(u => u.Email.ToLower().StartsWith(usersEmail));
        }
        
        return query;
    }
    
    //pagination
}