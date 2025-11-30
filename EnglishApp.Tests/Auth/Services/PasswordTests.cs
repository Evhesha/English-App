using EnglishApp.Infrastructure;
using Xunit;

namespace EnglishApp.Tests.Auth.Services;

public class PasswordTests
{
    [Fact]
    public void Generate_HashingPassword_ReturnsHashedPassword()
    {
        // Arrange
        var password = "123";
        var passwordHasher = new PasswordHasher();
        
        // Act
        var hashedPassword = passwordHasher.Generate(password);
        
        // Assert
        Assert.NotNull(hashedPassword);
        Assert.NotEmpty(hashedPassword);
        Assert.NotEqual(password, hashedPassword);
    }

    [Fact]
    public void Verify_CheckingTheCorrectPassword_ReturnsTrue()
    {
        // Arrange
        var password = "123";
        var passwordHasher = new PasswordHasher();
        
        // Act
        var hashedPassword = passwordHasher.Generate(password);
        var result= passwordHasher.Verify(password, hashedPassword);
        
        // Assert
        Assert.True(result);
    }

    [Fact]
    public void Verify_CheckingTheWrongPassword_ReturnsFalse()
    {
        // Arrange
        var correctPassword = "123";
        var wrongPassword = "wrong";
        var passwordHasher = new PasswordHasher();
        
        // Act
        var hashedPassword = passwordHasher.Generate(correctPassword);
        var result = passwordHasher.Verify(wrongPassword, hashedPassword);
        
        // Assert
        Assert.False(result);
    }

    [Fact]
    public void Verify_SamePasswordGenerating_ReturnsNotEqual()
    {
        // Arrange
        var passwordHasher = new PasswordHasher();
        var password = "123";
        
        // Act
        var hash1 = passwordHasher.Generate(password);
        var hash2 = passwordHasher.Generate(password);
        
        // Assert
        Assert.NotEqual(hash1, hash2);
    }

    [Fact]
    public void Generate_NullPassword_ThrowsException()
    {
        // Arrange
        var passwordHasher = new PasswordHasher();
    
        // Act & Assert
        Assert.Throws<ArgumentNullException>(() => passwordHasher.Generate(null));
    }
}