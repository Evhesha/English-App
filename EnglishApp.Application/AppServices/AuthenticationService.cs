using EnglishApp.Core.Abstractions.User;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.EnglishApp.Core.Models;
using EnglishApp.Infrastructure;

namespace EnglishApp.Application.AppServices
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IPasswordHasher _passwordHasher;
        private readonly IUsersRepository _usersRepository;
        private readonly JwtProvider _jwtProvider;

        public AuthenticationService(
            IUsersRepository usersRepository,
            IPasswordHasher passwordHasher,
            JwtProvider jwtProvider)
        {
            _usersRepository = usersRepository;
            _passwordHasher = passwordHasher;
            _jwtProvider = jwtProvider;
        }

        public async Task<Guid> Register(string password, User user, CancellationToken cancellationToken)
        {
            var hashedPassword = _passwordHasher.Generate(password);
            var userEntity = new User
            {
                Id = Guid.NewGuid(),
                Name = user.Name,
                Email = user.Email,
                PasswordHash = hashedPassword,
            };
            
            await _usersRepository.CreateUserAsync(userEntity, cancellationToken);
            return userEntity.Id;
        }

        public async Task<string> Login(string email, string password, CancellationToken cancellationToken)
        {
            var user = await _usersRepository.GetUserByEmailAsync(email, cancellationToken);
            if (user == null || !_passwordHasher.Verify(password, user.PasswordHash))
            {
                throw new UnauthorizedAccessException("Invalid credentials");
            }

            return _jwtProvider.GenerateToken(user);
        }
    }
}
