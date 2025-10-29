using System.IdentityModel.Tokens.Jwt;
using EnglishApp.Infrastructure;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Microsoft.Extensions.Options;
using Xunit;

namespace EnglishApp.Tests.Auth.Services;

public class JwtTests
{
    [Fact]
    public void GenerateToken_ReturnsValidToken()
    {
        // Arrange
        var options = Options.Create(new JwtOptions
        {
            Issuer = "TestIssuer",
            Audience = "TestAudience",
            SecretKey = "ab123_2024projecThisIsExtraSecKey32Chars",
            ExpiresHours = 1
        });

        var jwtProvider = new JwtProvider(options);

        var user = new User
        {
            Id = Guid.NewGuid(),
            Name = "John Doe",
            Email = "john@example.com",
            Role = "Admin"
        };

        // Act
        var token = jwtProvider.GenerateToken(user);

        // Assert
        Assert.False(string.IsNullOrEmpty(token));
        Assert.Contains(".", token);
    }

    [Fact]
    public void GenerateToken_ContainsExpectedClaims()
    {
        // Arrange
        var options = Options.Create(new JwtOptions
        {
            Issuer = "TestIssuer",
            Audience = "TestAudience",
            SecretKey = "ab123_2024projecThisIsExtraSecKey32Chars",
            ExpiresHours = 1
        });

        var jwtProvider = new JwtProvider(options);

        var user = new User
        {
            Id = Guid.NewGuid(),
            Name = "John Doe",
            Email = "john@example.com",
        };

        // Act
        var token = jwtProvider.GenerateToken(user);
        var handler = new JwtSecurityTokenHandler();
        var jwt = handler.ReadJwtToken(token);
        
        // Assert
        Assert.Contains(jwt.Claims, c => c.Type == "userId");
        Assert.Contains(jwt.Claims, c => c.Type == "name" && c.Value == "john@example.com");
        Assert.Contains(jwt.Claims, c => c.Type == "role" && c.Value == "User");
    }
    
    [Fact]
    public void GenerateToken_CheckTokenLife_ReturnTrue()
    {
        // Arrange
        var options = Options.Create(new JwtOptions
        {
            Issuer = "TestIssuer",
            Audience = "TestAudience",
            SecretKey = "ab123_2024projecThisIsExtraSecKey32Chars",
            ExpiresHours = 1
        });

        var jwtProvider = new JwtProvider(options);

        var user = new User
        {
            Id = Guid.NewGuid(),
            Name = "John Doe",
            Email = "john@example.com",
        };

        // Act
        var token = jwtProvider.GenerateToken(user);
        var handler = new JwtSecurityTokenHandler();
        var jwt = handler.ReadJwtToken(token);
        
        // Assert
        Assert.True(jwt.ValidTo > DateTime.UtcNow);
        Assert.True(jwt.ValidTo <= DateTime.UtcNow.AddHours(1.1));
    }
}