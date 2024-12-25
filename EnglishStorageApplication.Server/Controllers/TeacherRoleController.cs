using EnglishApp.Core.Models;
using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.Server.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherRoleController : ControllerBase
    {
        private readonly ITeacherRoleSevice _teacherRoleService;

        public TeacherRoleController(ITeacherRoleSevice teacherRoleSevice)
        {
            _teacherRoleService = teacherRoleSevice;
        }

        [HttpGet]
        public async Task<ActionResult<List<AdminRolesResponse>>> GetRoles()
        {
            var roles = await _teacherRoleService.GetAllRoles();
            var response = roles.Select(r => new AdminRolesResponse(r.Id, r.UserId));
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<Guid>> CreateRole([FromBody] TeacherRoleRequest teacherRoleRequest)
        {
            var (role, error) = TeacherRole.Create(Guid.NewGuid(), teacherRoleRequest.userId);

            if (!string.IsNullOrEmpty(error))
            {
                return BadRequest(error);
            }

            var roleId = await _teacherRoleService.CreateRole(role);
            return Ok(roleId);
        }

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<Guid>> DeleteRole(Guid id)
        {
            return Ok(await _teacherRoleService.DeleteRole(id));
        }
    }
}
