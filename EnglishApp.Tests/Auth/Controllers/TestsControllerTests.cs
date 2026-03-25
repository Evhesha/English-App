using EnglishApp.Application.DTOs.TestDTOs;
using EnglishApp.Core.Abstractions.Test;
using EnglishApp.Core.Params.LessonParams;
using EnglishApp.Core.Params.LessonParams.TestParams;
using EnglishStorageApplication.Server.Controllers;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;
using TestEntity = EnglishApp.Core.Models.Test;
using EnglishStorageApplication.EnglishApp.Core.Models;
using Xunit;

namespace EnglishApp.Tests.Auth.Controllers;

public class TestsControllerTests
{
    private readonly ITestService _testService = Substitute.For<ITestService>();
    private readonly CancellationToken _ct = CancellationToken.None;

    [Fact]
    public async Task GetAllTestsWithParams_ReturnsMappedPagedResponse()
    {
        var user = new User
        {
            Id = Guid.NewGuid(),
            Name = "Teacher Name",
            Email = "teacher@example.com",
            PasswordHash = "hash"
        };

        var tests = new List<TestEntity>
        {
            new()
            {
                Id = Guid.NewGuid(),
                UserId = user.Id,
                User = user,
                Name = "Grammar",
                Description = "Description",
                IsPublic = true,
                PassCount = 5,
                LastUpdateAt = DateTime.UtcNow
            }
        };

        _testService.GetTestsWithParameters(
                Arg.Any<TestFilter>(),
                Arg.Any<SortParams>(),
                Arg.Any<PageParams>(),
                _ct)
            .Returns((tests, 1));

        var controller = new TestsController(_testService);

        var result = await controller.GetAllTestsWithParams(
            new TestFilter(),
            new SortParams(),
            new PageParams(),
            _ct);

        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        var response = Assert.IsType<PagedTestsResponse>(okResult.Value);
        Assert.Single(response.Tests);
        Assert.Equal("Teacher Name", response.Tests[0].AuthorName);
        Assert.Equal(1, response.TotalCount);
    }

    [Fact]
    public async Task CreateTest_ReturnsGeneratedIdAndMapsDtoToEntity()
    {
        var dto = new CreateTestDto
        {
            UserId = Guid.NewGuid(),
            Name = "Created test",
            Description = "Created description",
            IsPublic = true
        };

        TestEntity? capturedTest = null;
        _testService.CreateTest(Arg.Do<TestEntity>(test => capturedTest = test), _ct)
            .Returns(callInfo => ((TestEntity)callInfo[0]).Id);

        var controller = new TestsController(_testService);

        var result = await controller.CreateTest(dto, _ct);

        Assert.NotEqual(Guid.Empty, result.Value);
        Assert.NotNull(capturedTest);
        Assert.Equal(result.Value, capturedTest!.Id);
        Assert.Equal(dto.UserId, capturedTest.UserId);
        Assert.Equal(dto.Name, capturedTest.Name);
        Assert.Equal(dto.Description, capturedTest.Description);
        Assert.Equal(dto.IsPublic, capturedTest.IsPublic);
        Assert.Equal(0, capturedTest.PassCount);
    }

    [Fact]
    public async Task UpdateTest_ReturnsOkWithRouteIdAndMapsDtoToEntity()
    {
        var testId = Guid.NewGuid();
        var dto = new UpdateTestDto
        {
            Name = "Updated test",
            Description = "Updated description",
            IsPublic = false
        };

        TestEntity? capturedTest = null;
        _testService.UpdateTest(Arg.Do<TestEntity>(test => capturedTest = test), _ct)
            .Returns(testId);

        var controller = new TestsController(_testService);

        var result = await controller.UpdateTest(testId, dto, _ct);

        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        Assert.Equal(testId, okResult.Value);
        Assert.NotNull(capturedTest);
        Assert.Equal(testId, capturedTest!.Id);
        Assert.Equal(dto.Name, capturedTest.Name);
        Assert.Equal(dto.Description, capturedTest.Description);
        Assert.Equal(dto.IsPublic, capturedTest.IsPublic);
    }

    [Fact]
    public async Task DeleteTest_ReturnsOkWithDeletedId()
    {
        var testId = Guid.NewGuid();
        _testService.DeleteTest(testId, _ct).Returns(testId);

        var controller = new TestsController(_testService);

        var result = await controller.DeleteTest(testId, _ct);

        var okResult = Assert.IsType<OkObjectResult>(result.Result);
        Assert.Equal(testId, okResult.Value);
    }
}
