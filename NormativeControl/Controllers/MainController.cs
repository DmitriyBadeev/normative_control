using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace NormativeControl.Controllers
{
    public class MainController : Controller
    {

        [HttpGet]
        public IActionResult Index()
        {


            return Ok("Ok");
        }
    }
}