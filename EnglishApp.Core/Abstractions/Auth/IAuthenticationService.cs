using System.Threading.Tasks;

namespace EnglishStorageApplication.EnglishApp.Core.Abstractions
{
    public interface IAuthenticationService
    {
        Task<Guid> Register(string userName, string email, string password);
        Task<string> Login(string email, string password);
    }
}
