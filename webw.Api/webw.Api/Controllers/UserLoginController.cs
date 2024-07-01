using Microsoft.AspNetCore.Mvc;
using webw.Api.Data;
using webw.Api.Models;

namespace webw.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserLoginController : ControllerBase
    {
        private readonly UserLoginRepository _repository;

        public UserLoginController(UserLoginRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] UserLogin userLogin)
        {
            if (userLogin == null)
            {
                return BadRequest("Invalid client request");
            }

            var loginUser = _repository.Login(userLogin);
            if (loginUser != null)
            {
                return Ok(new { Username = loginUser.Username, Role = loginUser.Role });
            }
            else
            {
                return Unauthorized(new { message = "Invalid username or password" });
            }
        }

        [HttpGet]
        public IActionResult GetAllLogins()
        {
            var logins = _repository.GetAllLogins();
            return Ok(logins);
        }

        [HttpPost]
        public IActionResult AddLogin([FromBody] UserLogin userLogin)
        {
            if (userLogin == null)
            {
                return BadRequest("Invalid client request");
            }

            _repository.AddLogin(userLogin);
            return Ok(new { message = "User login added successfully" });
        }
    }
}









