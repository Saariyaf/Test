using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webw.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        // Mock user data
        private readonly List<User> _users = new List<User>
        {
            new User { Username = "city", Password = "password123", Name = "Citty", Description = "Hobbies: Eat, Food: Tuna, Movie: The pet life", Age = 6, Gender = "Female", Role = "employee" },
            new User { Username = "king", Password = "password123", Name = "King", Description = "Hobbies: Sleep, Food: Whiskas, Movie: Stuart little", Age = 8, Gender = "Male", Role = "employee" },
            new User { Username = "saariya", Password = "password123", Name = "Saariya", Description = "Hobbies: Annoy Citty & King, Food: Mandi, Movie: Kung fu panda", Age = 22, Gender = "Female", Role = "employee" },
            new User { Username = "employer", Password = "password123", Name = "Employer", Description = "Manager", Age = 35, Gender = "Male", Role = "employer" }
        };

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var user = await ValidateUserAsync(request.Username, request.Password);
            if (user == null)
            {
                return Unauthorized();
            }

            return Ok(new { data = user });
        }

        private Task<User> ValidateUserAsync(string username, string password)
        {
            var user = _users.FirstOrDefault(u => u.Username == username && u.Password == password);
            return Task.FromResult(user);
        }
    }

    public class User
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Age { get; set; }
        public string Gender { get; set; }
        public string Role { get; set; }
    }

    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}




