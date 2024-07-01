using Microsoft.AspNetCore.Mvc;
using webw.Api.Data;
using webw.Api.Models;

namespace webw.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeRepository _repository;

        public EmployeeController(EmployeeRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public IActionResult GetAllEmployees()
        {
            var employees = _repository.GetAllEmployees();
            return Ok(employees);
        }

        [HttpPost]
        public IActionResult AddEmployee([FromBody] Employee employee)
        {
            if (employee == null)
            {
                return BadRequest();
            }

            _repository.AddEmployee(employee);
            return CreatedAtAction(nameof(GetAllEmployees), new { id = employee.EmployeeID }, employee);
        }
    }
}
