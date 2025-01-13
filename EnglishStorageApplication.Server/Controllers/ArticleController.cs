using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.Server.Contracts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly IArticleService _articleService;

        public ArticleController(IArticleService articleService)
        {
            _articleService = articleService;
        }

        [HttpGet]
        public async Task<ActionResult<List<ArticleResponse>>> GetArticles()
        {
            var articles = await _articleService.GetAllArticles();
            var response = articles.Select(a => new ArticleResponse(a.Id, a.UserId, a.Title, a.Text));
            return Ok(response);
        }

        
    }
}
