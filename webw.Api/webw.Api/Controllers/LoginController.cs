using Microsoft.AspNetCore.Mvc;
using webw.Api.Models;

namespace webw.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        [HttpPost("Login")]
        public IActionResult Login([FromBody] UserLogin userLogin)
        {
            if (userLogin == null || string.IsNullOrEmpty(userLogin.Username) || string.IsNullOrEmpty(userLogin.Password))
            {
                return BadRequest("Invalid client request");
            }

            // This is a dummy check. Replace with actual authentication logic.
            if (userLogin.Username == "admin" && userLogin.Password == "adminpassword")
            {
                return Ok(new { Token = "dummy-token", Message = "Login successful" });
            }

            return Unauthorized(new { Message = "Invalid username or password" });
        }
    }
}




