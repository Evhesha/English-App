using EnglishApp.Core.Abstractions.AdminRole;
using EnglishApp.Core.Abstractions.TeacherRole;
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
        private readonly IAdminRoleRepository _adminRolesRepository;
        private readonly ITeacherRoleRepository _teacherRoleRepository;
        private readonly JwtProvider _jwtProvider;

        public AuthenticationService(
            IUsersRepository usersRepository,
            IPasswordHasher passwordHasher,
            IAdminRoleRepository adminRolesRepository,
            ITeacherRoleRepository teacherRoleRepository,
            JwtProvider jwtProvider)
        {
            _usersRepository = usersRepository;
            _passwordHasher = passwordHasher;
            _jwtProvider = jwtProvider;
            _adminRolesRepository = adminRolesRepository;
            _teacherRoleRepository = teacherRoleRepository;
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
            return user.Id;
        }

        public async Task<string> Login(string email, string password, CancellationToken cancellationToken)
        {
            var user = await _usersRepository.GetUserByEmailAsync(email, cancellationToken);
            if (user == null || !_passwordHasher.Verify(password, user.PasswordHash))
            {
                throw new UnauthorizedAccessException("Invalid credentials");
            }

            var isAdmin = await _adminRolesRepository.IsAdminAsync(user.Id);
            var isTeacher = await _teacherRoleRepository.IsTeacherAsync(user.Id);

            return _jwtProvider.GenerateToken(user, isAdmin, isTeacher);
        }
    }
}
