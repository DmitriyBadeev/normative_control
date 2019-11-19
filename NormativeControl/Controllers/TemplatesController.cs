using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using DocumentFormat.OpenXml.Wordprocessing;
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
    public class TemplatesController : ControllerBase
    {
        private readonly Context _context;
        IHostingEnvironment _appEnvironment;

        public TemplatesController(Context context, IHostingEnvironment appEnvironment)
        {
            _context = context;
            _appEnvironment = appEnvironment;
        }

        [HttpGet]
        public IEnumerable<Template> GetTemplates()
        {
            return _context.Templates;
        }

        [Authorize]
        [HttpPost]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> PostTemplate([FromForm] PostTemplateData templateData)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!User.IsInRole(Role.NORMCONTROL))
            {
                return StatusCode(403);
            }

            var uploadFile = templateData.File;
            var fileName = $"{uploadFile.GetHashCode()}.docx";

            var path = $"{_appEnvironment.ContentRootPath}\\StaticWords\\Templates\\{fileName}";
            var webPath = $"\\StaticWords\\Templates\\{fileName}";

            using (var fileStream = new FileStream(path,
                FileMode.Create, FileAccess.ReadWrite))
            {
                await uploadFile.CopyToAsync(fileStream);
            }

            var newTemplate = new Template()
            {
                Name = templateData.Name,
                Path = webPath
            };

            _context.Templates.Add(newTemplate);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTemplate([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var template = await _context.Templates.FindAsync(id);
            if (template == null)
            {
                return NotFound();
            }

            _context.Templates.Remove(template);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }

    public class PostTemplateData
    {
        public string Name { get; set; }

        public IFormFile File { get; set; }
    }
}