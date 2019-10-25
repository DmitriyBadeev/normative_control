using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NormativeControl.Config;
using NormativeControl.Models;

namespace NormativeControl.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorksController : ControllerBase
    {
        Context _context;
        IHostingEnvironment _appEnvironment;

        public WorksController(Context context, IHostingEnvironment appEnvironment)
        {
            _context = context;
            _appEnvironment = appEnvironment;
        }

        [Authorize]
        [HttpPost("/api/send")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> PostWork([FromForm] WorkData work)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == User.Identity.Name);
            
            var uploadFile = work.File;
            var fileName = $"{uploadFile.GetHashCode()}.docx";
            var path = $"{_appEnvironment.ContentRootPath}\\StaticWords\\{user.Id}\\{fileName}";

            using (var fileStream = new FileStream(path,
                FileMode.Create, FileAccess.ReadWrite))
            {
                await uploadFile.CopyToAsync(fileStream);
            }

            var newWork = new Work()
            {
                NameFile = fileName,
                Path = path,
                Student = user,
                StudentId = user.Id,
                IsEmailNotification = work.IsEmailNotification,
                Template = work.Template,
                Status = Status.CHECK 
            };

            _context.Work.Add(newWork);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }

    public class WorkData
    {
        public IFormFile File { get; set; }

        public string Template { get; set; }

        public bool IsEmailNotification { get; set; }
    }
}