using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using EnglishStorageApplication.Server.Contracts;
using Microsoft.AspNetCore.Mvc;

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

        [HttpGet("{userId:guid}")]
        public async Task<ActionResult<List<ArticleResponse>>> GetUserArticles(Guid userId)
        {
            var articles = await _articleService.GetUserArticles(userId);
            var response = articles.Select(a => new ArticleResponse(a.Id, a.UserId, a.Title, a.Text));
            return Ok(response);
        }

        [HttpPost]
        public async Task<ActionResult<Guid>> CreateArticle([FromBody]ArticleRequest request)
        {
            //var (article, error) = EnglishApp.Core.Models.Article.Create(request);
            return Ok();
        }

        [HttpPut("{id:guid}")]
        public async Task<ActionResult<Guid>> UpdateArticle(Guid id, [FromBody]ArticleRequest request)
        {
            var userId = await _articleService.Update(request.userId, request.title, request.text); 
            return Ok(userId);
        }

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<Guid>> DeleteArticle(Guid id)
        {
            return Ok(await _articleService.Delete(id));
        }
    }
}
