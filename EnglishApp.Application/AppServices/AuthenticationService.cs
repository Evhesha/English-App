using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.EnglishApp.Core.Models;
using EnglishApp.Infrastructure;
using System.Security.Claims;
using System.Text;

namespace EnglishApp.Application.AppServices
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IPasswordHasher _passwordHasher;
        private readonly IUsersRepository _usersRepository;
        private readonly JwtProvider _jwtProvider;

        public AuthenticationService(IUsersRepository usersRepository, IPasswordHasher passwordHasher, JwtProvider jwtProvider)
        {
            _usersRepository = usersRepository;
            _passwordHasher = passwordHasher;
            _jwtProvider = jwtProvider;
        }

        public async Task<Guid> Register(string userName, string email, string password)
        {
            var hashedPassword = _passwordHasher.Generate(password);
            var (user, error) = User.Create(Guid.NewGuid(), userName, email, hashedPassword);

            if (!string.IsNullOrEmpty(error))
            {
                throw new Exception(error);
            }

            await _usersRepository.Create(user);
            return user.Id;
        }

        public async Task<string> Login(string email, string password)
        {
            var user = await _usersRepository.GetByEmail(email);
            if (user == null || !_passwordHasher.Verify(password, user.Password))
            {
                throw new UnauthorizedAccessException("Invalid credentials");
            }

            return _jwtProvider.GenerateToken(user);
        }
    }
}
