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
        private readonly IAdminRoleService _adminRoleService;

        public AdminRoleController(IAdminRoleService adminRoleService)
        {
            _adminRoleService = adminRoleService;   
        }

        [HttpGet]
        public async Task<ActionResult<List<AdminRolesResponse>>> GetRoles()
        {
            var roles = await _adminRoleService.GetAllRoles();
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

            var roleId = await _adminRoleService.CreateRole(role);

            return Ok(roleId);
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            return Ok(await _adminRoleService.Delete(id));
        }
    }
}
