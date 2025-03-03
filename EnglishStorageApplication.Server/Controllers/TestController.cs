﻿using EnglishStorageApplication.EnglishApp.Core.Abstractions;
using Microsoft.AspNetCore.Mvc;

namespace EnglishStorageApplication.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly ITestService _service;

        public TestController(ITestService testService)
        {
            _service = testService;
        }


    }
}