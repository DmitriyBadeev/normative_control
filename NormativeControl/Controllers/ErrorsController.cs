using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection.Metadata;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NormativeControl.Models;
using NormativeControl.CheckDocuments;
using NormativeControl.Config;
using Document = NormativeControl.CheckDocuments.Document;
using Error = NormativeControl.CheckDocuments.Error;

namespace NormativeControl.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ErrorsController : ControllerBase
    {
        Context _context;
        IHostingEnvironment _appEnvironment;

        public ErrorsController(Context context, IHostingEnvironment appEnvironment)
        {
            _context = context;
            _appEnvironment = appEnvironment;
        }     

        [Authorize]
        [HttpGet("/api/errors")]
        public async Task<IActionResult> GetErrors([FromQuery] int templateId)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == User.Identity.Name);

            var path = $"{_appEnvironment.ContentRootPath}/StaticWords/{user.Id}/temp/tempFile.docx";

            var dirInfo = new DirectoryInfo($"{_appEnvironment.ContentRootPath}/StaticWords/{user.Id}/temp");

            if (!dirInfo.Exists)
                return StatusCode(400);

            var template = TemplateDependency.GetTemplate(templateId);

            if (template != null)
            {
                var document = new Document(path, template);
                var errors = document.GetErrors();

                return Ok(ErrorsToString(errors));
            }

            return Ok(new List<string>());
        }

        private List<string> ErrorsToString(List<Error> errors)
        {
            var errorsInString = new List<string>();

            foreach (var error in errors)
                errorsInString.Add($"{error.Parameter} (Ожидалось: {error.ExpectValue}, Было: {error.Value})");

            return errorsInString;
        }

        [Authorize]
        [HttpPut("/api/put-error")]
        public async Task<IActionResult> PutErrorToWork([FromBody] putErrorsData data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!User.IsInRole(Role.NORMCONTROL))
            {
                return StatusCode(403);
            }

            var work = await _context.Works.FindAsync(data.workId);
            work.Status = Status.PENDING_CORRECTION;
            work.DateSend = DateTime.Now;

            foreach (var error in _context.Errors)
            {
                if (error.WorkId == data.workId)
                    _context.Remove(error);
            }

            foreach (var errorDesc in data.errors)
            {
                var error = new Models.Error()
                {
                    Description = errorDesc,
                    NumberElement = 0,
                    WorkId = data.workId,
                    Work = work
                };

                await _context.Errors.AddAsync(error);
            }
            
            await _context.SaveChangesAsync();
            return Ok();
        }
    }

    public class putErrorsData
    {
        public List<string> errors { get; set; }
        public int workId { get; set; }
    }
}