using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using Microsoft.AspNetCore.Mvc;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IQuestionService _service;

        public QuestionController(IQuestionService questionService)
        {
            _service = questionService;
        }

    }
}
