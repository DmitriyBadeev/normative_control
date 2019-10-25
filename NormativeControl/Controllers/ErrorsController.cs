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
        [HttpPost("/api/upload-temp-file")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> UploadTempFile([FromForm] FormFile work)
        {
            var uploadFile = work.Work;

            if (uploadFile != null)
            {
                var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == User.Identity.Name);

                var fileName = "tempFile.docx";
                var fullPath = $"{_appEnvironment.ContentRootPath}/StaticWords/{user.Id}/temp/{fileName}";
                var path = $"{_appEnvironment.ContentRootPath}/StaticWords/{user.Id}/temp";
                
                var dirInfo = new DirectoryInfo(path);

                if (!dirInfo.Exists)
                    dirInfo.Create();

                using (var fileStream = new FileStream(fullPath, 
                    FileMode.Create, FileAccess.ReadWrite))
                {
                    await uploadFile.CopyToAsync(fileStream);
                }

                return Ok($"StaticWords/{user.Id}/temp/{fileName}");
            }

            return StatusCode(400);
        }

        [Authorize]
        [HttpGet("/api/errors")]
        public async Task<IActionResult> GetErrors()
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == User.Identity.Name);

            var path = $"{_appEnvironment.ContentRootPath}/StaticWords/{user.Id}/temp/tempFile.docx";

            var dirInfo = new DirectoryInfo($"{_appEnvironment.ContentRootPath}/StaticWords/{user.Id}/temp");

            if (!dirInfo.Exists)
                return StatusCode(400);

            var document = new Document(path, new CourseWork());
            var errors = document.GetErrors();

            return Ok(ErrorsToString(errors));
        }

        private List<string> ErrorsToString(List<Error> errors)
        {
            var errorsInString = new List<string>();

            foreach (var error in errors)
                errorsInString.Add($"{error.Parameter} (Ожидалось: {error.ExpectValue}, Было: {error.Value})");

            return errorsInString;
        }
    }

     public class FormFile
    {
        public IFormFile Work { get; set; }
    }
}