using EnglishApp.Application.DTOs.AdminRoleDTOs;
using EnglishApp.Core.Abstractions.AdminRole; 
using Microsoft.AspNetCore.Mvc;
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
        public async Task<ActionResult<List<AdminDto>>> GetAdmins(CancellationToken cancellationToken)
        {
            var admins = await _service.GetAdmins(cancellationToken);
            return Ok(admins);
        }
        
        [HttpGet("{id:guid}")]
        public async Task<ActionResult<AdminDto>> GetAdmin(Guid id, CancellationToken cancellationToken)
        {
            var admin = await _service.GetAdmin(id, cancellationToken);
            return Ok(admin);
        }

        [HttpPost]
        public async Task<ActionResult<Guid>> CreateRole(
            [FromBody] CreateAdminDto createAdminDto,
            CancellationToken cancellationToken)
        {
            var admin = new AdminRole()
            {
                Id = Guid.NewGuid(),
                UserId = createAdminDto.UserId
            };
            
            var roleId = await _service.CreateAdmin(admin, cancellationToken);

            return Ok(roleId);
        }

        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> Delete(Guid id, CancellationToken cancellationToken)
        {
            return Ok(await _service.Delete(id, cancellationToken));
        }
    }
}