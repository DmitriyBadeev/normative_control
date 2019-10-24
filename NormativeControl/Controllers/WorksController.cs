using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NormativeControl.Models;

namespace NormativeControl.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorksController : ControllerBase
    {
        private readonly Context _context;

        public WorksController(Context context)
        {
            _context = context;
        }

        [Authorize]
        [HttpPost("api/send")]
        public async Task<IActionResult> PostWork([FromBody] WorkData work)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }



            return Ok();
        }
    }

    public class WorkData
    {
        public IFormFile File { get; set; }

        public string Template { get; set; }

    }
}