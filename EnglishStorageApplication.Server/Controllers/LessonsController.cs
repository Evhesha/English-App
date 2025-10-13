using EnglishApp.Application.DTOs.LessonDTOs;
using EnglishApp.Core.Abstractions.Lesson;
using EnglishApp.Core.Models;
using EnglishApp.Core.Params;
using Microsoft.AspNetCore.Mvc;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LessonsController : ControllerBase
    {
        private readonly ILessonService _lessonService;

        public LessonsController(ILessonService lessonService)
        {
            _lessonService = lessonService;
        }

        [HttpGet]
        public async Task<ActionResult<List<LessonDto>>> GetLessons(CancellationToken cancellationToken)
        {
            var lessons = await _lessonService.GetLessons(cancellationToken);
            
            var listLessonsDto = new List<ListLessonsDto>();
            
            return Ok(lessons);
        }

        [HttpGet("lessons/{userId:guid}")]
        public async Task<ActionResult<List<LessonDto>>> GetUserLessons(
            Guid userId,
            CancellationToken cancellationToken)
        {
            var lessons = await _lessonService.GetUserLessons(userId, cancellationToken);
            return Ok(lessons);
        }

        [HttpGet("lesson/params")]
        public async Task<ActionResult<List<Lesson>>> GetLessonsWithParams(
            [FromQuery] LessonFilter lessonFilter,
            [FromQuery] SortParams sortParams,
            [FromQuery]  PageParams pageParams,
            CancellationToken cancellationToken
        )
        {
            var lessons = await _lessonService.GetLessonsWithParameters(
                lessonFilter,
                sortParams,
                pageParams,
                cancellationToken);

            return Ok(lessons);
        }
        
        [HttpGet("lesson/{lessonId:guid}")]
        public async Task<ActionResult<List<LessonDto>>> GetUserLessonByLessonId(
            Guid lessonId,
            CancellationToken cancellationToken)
        {
            var lessons = await _lessonService.GetUserLessonByLessonId(lessonId, cancellationToken);
            return Ok(lessons);
        }

        [HttpPost]
        public async Task<ActionResult<Guid>> CreateLesson(
            [FromBody]CreateLessonDto createLessonDto,
            CancellationToken cancellationToken)
        {
            var lesson = new Lesson
            {
                Id =  Guid.NewGuid(),
                CreatedDate = DateTime.UtcNow
                ,
                UserId = createLessonDto.UserId,
                Title = createLessonDto.Title,
                Text = createLessonDto.Text,
                isPublic = createLessonDto.isPublic
            };

            await _lessonService.CreateLesson(lesson, cancellationToken);

            return Ok(lesson.Id);
        }

        [HttpPut("{id:guid}")]
        public async Task<ActionResult<Guid>> UpdateLesson(
            Guid id,
            [FromBody]UpdateLessonDto updateLessonDto,
             CancellationToken cancellationToken)
        {
            var lesson = new Lesson
            {
                Id =  id,
                UserId = updateLessonDto.UserId,
                Title = updateLessonDto.Title,
                Text = updateLessonDto.Text,
                isPublic = updateLessonDto.isPublic
            };
            
            var articleId = await _lessonService.UpdateLesson(lesson, cancellationToken); 
            return Ok(articleId);
        }

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<Guid>> DeleteLesson(Guid id, CancellationToken cancellationToken)
        {
            return Ok(await _lessonService.DeleteLesson(id, cancellationToken));
        }
    }
}