using EnglishApp.Application.DTOs.UserDTOs;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.EnglishApp.Core.Models;
using EnglishStorageApplication.Server.Controllers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;
using Xunit;

namespace EnglishApp.Tests.Auth.Controllers;

public class AuthControllerTests
{
    private readonly IAuthenticationService _mockService;
    private readonly CancellationToken _ct;
    private readonly AuthController _controller;
    private readonly DefaultHttpContext _httpContext;
    
    public AuthControllerTests()
    {
        _mockService = Substitute.For<IAuthenticationService>();
        _ct = new CancellationToken();
        _httpContext = new DefaultHttpContext();
        _controller = new AuthController(_mockService)
        {
            ControllerContext = new ControllerContext
            {
                HttpContext = _httpContext
            }
        };
    }
    
    [Fact]
    public async Task Login_ReturnsToken()
    {
        // Arrange
        var loginUserDto = new LoginUserDto
        {
            Email = "email@gmail.com",
            Password = "123123"
        };
        
        var expectedToken = "test-jwt-token";
        
        _mockService.Login(loginUserDto.Email, loginUserDto.Password, _ct)
                   .Returns(expectedToken);
        
        // Act
        var result = await _controller.Login(loginUserDto, _ct);
        
        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        var responseValue = okResult.Value;
        
        var setCookieHeader = _httpContext.Response.Headers["Set-Cookie"].ToString();
        Assert.Contains("tasty-cookies", setCookieHeader);
        Assert.Contains(expectedToken, setCookieHeader);
        
        var tokenProperty = responseValue?.GetType().GetProperty("token");
        Assert.NotNull(tokenProperty);
        var actualToken = tokenProperty.GetValue(responseValue) as string;
        Assert.Equal(expectedToken, actualToken);
    }

    [Fact]
    public async Task Login_ReturnsOkResultWithToken()
    {
        // Arrange
        var loginUserDto = new LoginUserDto 
        { 
            Email = "test@email.com", 
            Password = "123" 
        };
        
        _mockService.Login(loginUserDto.Email, loginUserDto.Password, _ct)
                   .Returns("jwt-token");

        // Act
        var result = await _controller.Login(loginUserDto, _ct);
        
        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        Assert.NotNull(okResult.Value);
        await _mockService.Received(1).Login(loginUserDto.Email, loginUserDto.Password, _ct);
    }

    [Fact]
    public async Task Register_ReturnsUserDto()
    {
        // Arrange
        var createUserDto = new CreateUserDto
        {
            Name = "Test User",
            Email = "test@email.com",
            Password = "123123"
        };

        // Act
        var result = await _controller.Register(createUserDto, _ct);
        
        // Assert
        var okResult = Assert.IsType<OkObjectResult>(result);
        var userDto = Assert.IsType<UserDto>(okResult.Value);
        
        Assert.Equal(createUserDto.Name, userDto.Name);
        Assert.Equal(createUserDto.Email, userDto.Email);
        Assert.NotEqual(Guid.Empty, userDto.Id);
        
        await _mockService.Received(1)
            .Register(createUserDto.Password, Arg.Is<User>(u => 
                u.Name == createUserDto.Name && 
                u.Email == createUserDto.Email), _ct);
    }

    [Fact]
    public async Task Login_ThrowsException_WhenServiceFails()
    {
        // Arrange
        var loginUserDto = new LoginUserDto
        {
            Email = "invalid@email.com",
            Password = "wrongpassword"
        };
        
        _mockService.When(x => x.Login(loginUserDto.Email, loginUserDto.Password, _ct))
                   .Do(x => throw new UnauthorizedAccessException("Invalid credentials"));

        // Act & Assert
        await Assert.ThrowsAsync<UnauthorizedAccessException>(() => 
            _controller.Login(loginUserDto, _ct));
    }
}