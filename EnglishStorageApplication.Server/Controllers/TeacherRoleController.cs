using EnglishApp.Application.DTOs.TeacherRoleDTOs;
using EnglishApp.Core.Abstractions.TeacherRole;
using EnglishApp.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherRoleController : ControllerBase
    {
        private readonly ITeacherRoleSevice _service;

        public TeacherRoleController(ITeacherRoleSevice teacherRoleSevice)
        {
            _service = teacherRoleSevice;
        }

        [HttpGet]
        public async Task<ActionResult<List<TeacherDto>>> GetTeachers(CancellationToken cancellationToken)
        {
            var teachers = await _service.GetTeachers(cancellationToken);
            return Ok(teachers);
        }
        
        [HttpGet("{id:guid}")]
        public async Task<ActionResult<TeacherDto>> GetTeacher(Guid id, CancellationToken cancellationToken)
        {
            var teachers = await _service.GetTeacher(id, cancellationToken);
            return Ok(teachers);
        }
        
        [HttpPost]
        public async Task<ActionResult<Guid>> CreateRole(
            [FromBody] CreateTeacherDto createTeacherDto,
            CancellationToken cancellationToken)
        {
            var teacher = new TeacherRole
            {
                Id = Guid.NewGuid(),
                UserId = createTeacherDto.UserId
            };

            var roleId = await _service.CreateTeacher(teacher, cancellationToken);
            return Ok(roleId);
        }

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<Guid>> DeleteRole(Guid id, CancellationToken cancellationToken)
        {
            return Ok(await _service.DeleteTeacher(id, cancellationToken));
        }
    }
}