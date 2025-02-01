using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using Microsoft.AspNetCore.Mvc;
using EnglishStorageApplication.Server.Contracts;
using EnglishStorageApplication.EnglishApp.Core.Models;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminRoleController : ControllerBase
    {
        private readonly IAdminRoleService _service;

        public AdminRoleController(IAdminRoleService adminRoleService)
        {
            _service = adminRoleService;   
        }

        [HttpGet]
        public async Task<ActionResult<List<AdminRolesResponse>>> GetRoles()
        {
            var roles = await _service.GetAllRoles();
            var response = roles.Select(r => new AdminRolesResponse(r.Id, r.UserId));
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<Guid>> CreateRole([FromBody] AdminRolesRequest request)
        {
            var (role, error) = AdminRole.Create(Guid.NewGuid(), request.userId);

            if (!string.IsNullOrEmpty(error))
            {
                return BadRequest(error);
            }

            var roleId = await _service.CreateRole(role);

            return Ok(roleId);
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            return Ok(await _service.Delete(id));
        }
    }
}
