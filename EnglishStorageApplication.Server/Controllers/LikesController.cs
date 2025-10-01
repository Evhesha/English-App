using EnglishApp.Core.Abstractions.Like;
using Microsoft.AspNetCore.Mvc;

namespace EnglishStorageApplication.Server.Controllers;

[Route("api/[controller]")]
[ApiController]
public class LikesController : ControllerBase
{
    private readonly ILikeService _likeService;

    public LikesController()
    {
        
    }
}