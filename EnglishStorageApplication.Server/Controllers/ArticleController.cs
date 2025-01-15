using EnglishApp.Core.Models;
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
            var (article, error) = Article.Create(
                Guid.NewGuid(),
                request.userId,
                request.title,
                request.text,
                request.images);

            var articleId = await _articleService.Create(article);

            return Ok(articleId);
        }

        [HttpPut("{id:guid}")]
        public async Task<ActionResult<Guid>> UpdateArticle(Guid id, [FromBody]ArticleUpdate update)
        {
            var articleId = await _articleService.Update(id, update.title, update.text); 
            return Ok(articleId);
        }

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult<Guid>> DeleteArticle(Guid id)
        {
            return Ok(await _articleService.Delete(id));
        }
    }
}
