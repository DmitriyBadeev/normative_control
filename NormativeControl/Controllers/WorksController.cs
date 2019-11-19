using System;
using System.Collections;
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
        public async Task<IActionResult> PostWork([FromForm] WorkDataPost work)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == User.Identity.Name);
            
            var uploadFile = work.File;
            var fileName = $"{uploadFile.GetHashCode()}.docx";
            var path = $"{_appEnvironment.ContentRootPath}\\StaticWords\\{user.Id}\\{fileName}";

            var webPath = $"\\StaticWords\\{user.Id}\\{fileName}";

            using (var fileStream = new FileStream(path,
                FileMode.Create, FileAccess.ReadWrite))
            {
                await uploadFile.CopyToAsync(fileStream);
            }

            var template = await _context.Templates.FindAsync(work.TemplateId);

            var newWork = new Work()
            {
                NameFile = fileName,
                Path = webPath,
                Student = user,
                StudentId = user.Id,
                IsEmailNotification = work.IsEmailNotification,
                TemplateId = work.TemplateId,
                Template = template.Name,
                DateSend = DateTime.Now,
                Status = Status.CHECK 
            };

            _context.Works.Add(newWork);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [Authorize]
        [HttpGet("/api/works")]
        public async Task<IActionResult> GetWorks()
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == User.Identity.Name);

            var userWorks = _context.Works.Where(w => w.StudentId == user.Id);

            var result = new List<WorkDataGet>();

            foreach (var work in userWorks)
            {
                var errors = _context.Errors.Where(e => e.WorkId == work.Id).Select(e =>
                    new
                    {
                        id = e.Id,
                        desc = e.Description,
                        numberElement = e.NumberElement
                    }
                ).ToList();

                var dataWork = new WorkDataGet()
                {
                    Id = work.Id,
                    Errors = errors,
                    NameFile = work.NameFile,
                    Path = work.Path,
                    Status = work.Status,
                    Template = work.Template,
                    Date = work.DateSend
                };

                result.Add(dataWork);
            }

            return Ok(result.OrderByDescending(w => w.Status == Status.PENDING_CORRECTION).ThenByDescending(w => w.Date));
        }

        [Authorize]
        [HttpGet("/api/all-works")]
        public async Task<IActionResult> GetAllWorks()
        {
            if (!User.IsInRole(Role.NORMCONTROL))
            {
                return StatusCode(403);
            }

            var allWorks = new Dictionary<string, List<WorkDataGet>>();
            foreach (var work in _context.Works)
            {
                var errors = _context.Errors.Where(e => e.WorkId == work.Id).Select(e =>
                    new
                    {
                        id = e.Id,
                        desc = e.Description,
                        numberElement = e.NumberElement
                    }
                ).ToList();

                var student = await _context.Users.FindAsync(work.StudentId);

                var dataWork = new WorkDataGet()
                {
                    Id = work.Id,
                    Errors = errors,
                    NameFile = $"{student.LastName} {student.Name}",
                    Path = work.Path,
                    Status = work.Status,
                    Template = work.Template,
                    Date = work.DateSend
                };

                if (!allWorks.ContainsKey(student.Group))
                {
                    allWorks.Add(student.Group, new List<WorkDataGet>());
                }

                allWorks[student.Group].Add(dataWork);
            }

            var result = allWorks.OrderBy(w => w.Key).ToDictionary(k => k.Key, v => v.Value);

            return Ok(result);
        }

        [Authorize]
        [HttpDelete("/api/work")]
        public async Task<IActionResult> DeleteWork([FromQuery] int idWork)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var work = await _context.Works.FindAsync(idWork);

            if (work == null)
                return StatusCode(404);

            var path = _appEnvironment.ContentRootPath + work.Path;

            System.IO.File.Delete(path);

            _context.Remove(work);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [Authorize]
        [Consumes("multipart/form-data")]
        [HttpPost("/api/upload-file-work")]
        public async Task<IActionResult> UploadFileWork([FromForm] UploadWorkData workData)
        {
            var file = workData.File;
            var work = await _context.Works.FindAsync(workData.WorkId);
            var path = _appEnvironment.ContentRootPath + work.Path;

            using (var fileStream = new FileStream(path,
                FileMode.Create, FileAccess.ReadWrite))
            {
                await file.CopyToAsync(fileStream);
            }

            if (workData.Status == Status.PENDING_CORRECTION)
                work.Status = Status.PENDING_CORRECTION;


            if (workData.Status == Status.PENDING_RECHECK)
                work.Status = Status.PENDING_RECHECK;

            work.DateSend = DateTime.Now;

            await _context.SaveChangesAsync();

            return Ok();
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
        [HttpPost("/api/accept-work/{idWork}")]
        public async Task<IActionResult> AcceptWork([FromRoute] int idWork)
        {
            if (!User.IsInRole(Role.NORMCONTROL))
            {
                return StatusCode(403);
            }

            var work = await _context.Works.FindAsync(idWork);

            var errors = _context.Errors.Where(e => e.WorkId == idWork);
            _context.Errors.RemoveRange(errors);

            work.Status = Status.ACCEPTED;
            work.DateSend = DateTime.Now;

            await _context.SaveChangesAsync();

            return Ok();
        }
    }

    public class WorkDataPost
    {
        public IFormFile File { get; set; }

        public int TemplateId { get; set; }

        public bool IsEmailNotification { get; set; }
    }

    public class FormFile
    {
        public IFormFile Work { get; set; }
    }

    public class UploadWorkData
    {
        public IFormFile File { get; set; }

        public int WorkId { get; set; }
        
        public string Status { get; set; }
    }

    public class WorkDataGet
    {
        public int Id { get; set; }

        public IEnumerable Errors { get; set; }

        public string NameFile { get; set; }
        
        public string Path { get; set; }

        public string Status { get; set; }

        public string Template { get; set; }

        public DateTime Date { get; set; }
    }
}