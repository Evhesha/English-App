using System.Threading.Tasks;
using EnglishStorageApplication.EnglishApp.Core.Models;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface IAuthenticationService
    {
        Task<Guid> Register(string password, User user, CancellationToken cancellationToken);
        Task<string> Login(string email, string password, CancellationToken cancellationToken);
    }
}
