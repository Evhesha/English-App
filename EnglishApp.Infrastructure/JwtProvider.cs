using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace EnglishApp.Infrastructure
{
    public class JwtProvider
    {
        private readonly JwtOptions _options;

        public JwtProvider(IOptions<JwtOptions> options)
        {
            _options = options.Value ?? throw new ArgumentNullException(nameof(options));
        }

        public string GenerateToken(User user)
        {
            if (string.IsNullOrEmpty(user.Role))
                throw new InvalidOperationException($"User {user.Name} does not have a role assigned.");

            var claims = new List<Claim>
            {
                new Claim("userId", user.Id.ToString()),
                new Claim("name", user.Email),
                new Claim("role", user.Role)
            };

            var signingCredentials = new SigningCredentials(
                new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_options.SecretKey)),
                SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _options.Issuer,     
                audience: _options.Audience, 
                claims: claims,
                signingCredentials: signingCredentials,
                expires: DateTime.UtcNow.AddHours(_options.ExpiresHours)
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}