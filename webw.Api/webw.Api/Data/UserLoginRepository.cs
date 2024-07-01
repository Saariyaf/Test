using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using webw.Api.Models;

namespace webw.Api.Data
{
    public class UserLoginRepository
    {
        private readonly string _connectionString;

        public UserLoginRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public IEnumerable<UserLogin> GetAllLogins()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var query = @"
                    SELECT ul.*, e.EmployeeID as EmployeeID, e.Name as EmployeeName, e.Description as EmployeeDescription 
                    FROM UserLogins ul
                    LEFT JOIN Employees e ON ul.EmployeeID = e.EmployeeID";
                return connection.Query<UserLogin, Employee, UserLogin>(
                    query,
                    (userLogin, employee) =>
                    {
                        if (employee != null)
                        {
                            userLogin.EmployeeID = employee.EmployeeID;
                            userLogin.EmployeeName = employee.Name;
                            userLogin.EmployeeDescription = employee.Description;
                        }
                        return userLogin;
                    },
                    splitOn: "EmployeeID"
                ).ToList();
            }
        }

        public void AddLogin(UserLogin userLogin)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var query = "INSERT INTO UserLogins (Username, Password, LoginTime, LogoutTime, EmployeeID, Role) VALUES (@Username, @Password, @LoginTime, @LogoutTime, @EmployeeID, @Role)";
                connection.Execute(query, userLogin);
            }
        }

        public UserLogin Login(UserLogin userLogin)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var query = "SELECT * FROM UserLogins WHERE Username = @Username AND Password = @Password";
                return connection.QuerySingleOrDefault<UserLogin>(query, new { userLogin.Username, userLogin.Password });
            }
        }
    }
}













