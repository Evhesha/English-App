using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.EnglishApp.Core.Models;
using System.Security.Claims;
using System.Text;

namespace EnglishApp.Application.AppServices
{
    public class AuthenticationService
    {
        private readonly IPasswordHasher _passwordHasher;
        private readonly IUsersRepository _usersRepository;
        private readonly string _jwtSecret;

        public AuthenticationService(IUsersRepository usersRepository, IPasswordHasher passwordHasher, string jwtSecret)
        {
            _usersRepository = usersRepository;
            _passwordHasher = passwordHasher;
            _jwtSecret = jwtSecret;
        }

        public async Task Register(string userName, string email, string password)
        {
            var hashedPassword = _passwordHasher.Generate(password); 
            var (user, eror) = User.Create(Guid.NewGuid(), userName, email, hashedPassword);

            await _usersRepository.Create(user);
        }

        //public async Task<string> Login(string email, string password)
        //{
        //    var user = await _usersRepository.GetByEmail(email);
        //    if (user == null || !_passwordHasher.Verify(password, user.Password))
        //        throw new UnauthorizedAccessException();

        //    return GenerateJwtToken(user);
        //}
    }
}
