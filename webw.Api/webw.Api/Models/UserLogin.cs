namespace webw.Api.Models
{
    public class UserLogin
    {
        public int UserLoginID { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public DateTime? LoginTime { get; set; }
        public DateTime? LogoutTime { get; set; }
        public int? EmployeeID { get; set; }
        public string Role { get; set; } // Add this line

        // These properties are for join with Employee table
        public string EmployeeName { get; set; }
        public string EmployeeDescription { get; set; }
    }
}



