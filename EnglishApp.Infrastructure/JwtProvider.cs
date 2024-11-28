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

        public string GenerateToken(User user, bool isAdmin)
        {
            var claims = new List<Claim>
            {
                new Claim("UserId", user.Id.ToString())
            };

            if (isAdmin)
            {
                claims.Add(new Claim("role", "Admin"));
            }

            var signingCredentials = new SigningCredentials(
                new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_options.SecretKey)), SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                claims: claims,
                signingCredentials: signingCredentials,
                expires: DateTime.UtcNow.AddHours(_options.ExpiresHours)
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
