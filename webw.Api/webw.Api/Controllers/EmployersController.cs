using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace webw.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployersController : ControllerBase
    {
        // Mock data for demonstration purposes
        private readonly List<Employer> _employers = new List<Employer>
        {
            new Employer { EmployerID = 1, EmployerName = "Employer One" },
            new Employer { EmployerID = 2, EmployerName = "Employer Two" }
        };

        [HttpGet]
        public IActionResult GetAllEmployers()
        {
            return Ok(_employers);
        }
    }

    public class Employer
    {
        public int EmployerID { get; set; }
        public string EmployerName { get; set; }
    }
}




