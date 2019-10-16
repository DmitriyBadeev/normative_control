using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NormativeControl.Models;

namespace NormativeControl.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistrationController : ControllerBase
    {
        private readonly Context _context;

        public RegistrationController(Context context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> RegistrationUser([FromBody] User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var equalUser = _context.Users.FirstOrDefaultAsync(u => u.Email == user.Email);

            if (equalUser.Result != null)
                return StatusCode(409);

            user.Password = AuthOptions.ComputeHash(user.Password);
            var jwt = AuthOptions.GetJWT(user);

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            var response = new
            {
                token = jwt
            };

            return Ok(response);
        }
    }
}