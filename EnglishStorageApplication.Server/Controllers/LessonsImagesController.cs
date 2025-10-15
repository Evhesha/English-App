using EnglishApp.Application.DTOs.LessonImageDTOs;
using EnglishApp.Core.Abstractions.LessonImage;
using EnglishApp.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace EnglishStorageApplication.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class LessonsImagesController : ControllerBase
{
    private readonly ILessonImageService _lessonImageService;

    public LessonsImagesController(ILessonImageService lessonImageService)
    {
        _lessonImageService = lessonImageService;
    }

    [HttpGet]
    public async Task<ActionResult<List<LessonImageDto>>> GetImages(CancellationToken cancellationToken)
    {
        var lessonsImages = await _lessonImageService.GetImages(cancellationToken);

        return Ok(lessonsImages);
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<List<LessonImageDto>>> GetLessonImages(
        Guid id,
        CancellationToken cancellationToken)
    {
        var lessonImages = await _lessonImageService.GetLessonImages(
            id, cancellationToken);
        
        return Ok(lessonImages);
    }

    [HttpPost]
    public async Task<ActionResult<LessonImageDto>> CreateLessonImage(
        [FromBody] CreateLessonImageDto createLessonImageDto,
        CancellationToken cancellationToken)
    {
        var lessonImage = new LessonImage()
        {
            Id = Guid.NewGuid(),
            LessonId = createLessonImageDto.LessonId,
            ImageURL = createLessonImageDto.ImageURL
        };
        
        await _lessonImageService.CreateLessonImage(lessonImage, cancellationToken);
        return Ok(lessonImage);
    }

    [HttpDelete("{id:guid}")]
    public async Task<ActionResult<Guid>> DeleteImage(
        Guid id,
        CancellationToken  cancellationToken)
    {
        return Ok(await _lessonImageService.DeleteLessonImage(id, cancellationToken));
    }
}