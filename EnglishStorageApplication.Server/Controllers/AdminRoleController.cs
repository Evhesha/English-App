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

    }
}
