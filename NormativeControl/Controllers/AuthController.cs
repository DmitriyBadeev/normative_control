using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting.Internal;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NormativeControl.Config;
using NormativeControl.Models;

namespace NormativeControl.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly Context _context;

        public AuthController(Context context)
        {
            _context = context;
        }

        [HttpGet("/api/auth/user")]
        [Authorize]
        public async Task<IActionResult> GetUserInfo()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == User.Identity.Name);

            if (user == null)
                return StatusCode(404);

            var works = _context.Works.Where(w => w.StudentId == user.Id);
            var hasImportantWorks = works.Any(w => w.Status == Status.PENDING_CORRECTION);

            var userInfo = new
            {
                id = user.Id,
                email = user.Email,
                name = user.Name,
                lastName = user.LastName,
                group = user.Group,
                role = user.Role,
                hasImportantWorks
            };

            return Ok(userInfo);
        }

        [HttpGet("/api/auth/token")]
        public async Task<IActionResult> Authorization([FromQuery] string login = "", [FromQuery] string password = "")
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (login == "" || password == "")
                return StatusCode(404);
            

            var user = GetUser(login, password);

            if (user == null)
            {
                return StatusCode(401);
            }

            var encodedJwt = AuthOptions.GetJWT(user);

            var response = new
            {
                accses_token = encodedJwt,
            };

            return Ok(response);
        }

        private User GetUser(string login, string password)
        {
            var potentialUser = _context.Users
                .FirstOrDefault(user => user.Email == login);
            if (potentialUser == null)
                return null;

            if (potentialUser.Password == AuthOptions.ComputeHash(password))
                return potentialUser;

            return null;
        }
    }
}