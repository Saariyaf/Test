using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using webw.Api.Models;

namespace webw.Api.Data
{
    public class EmployeeRepository
    {
        private readonly string _connectionString;

        public EmployeeRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public IEnumerable<Employee> GetAllEmployees()
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                return db.Query<Employee>("SELECT * FROM Employees").ToList();
            }
        }

        public void AddEmployee(Employee employee)
        {
            using (IDbConnection db = new SqlConnection(_connectionString))
            {
                var sqlQuery = "INSERT INTO Employees (Name, Description, Age, Gender) VALUES(@Name, @Description, @Age, @Gender)";
                db.Execute(sqlQuery, employee);
            }
        }

        // Additional methods for updating and deleting employees can be added here.
    }
}
