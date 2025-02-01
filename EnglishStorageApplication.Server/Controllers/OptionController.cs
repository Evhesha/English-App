using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using Microsoft.AspNetCore.Mvc;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OptionController : ControllerBase
    {
        private readonly IOptionService _service;

        public OptionController(IOptionService optionService)
        {
            _service = optionService;
        }

    }
}
