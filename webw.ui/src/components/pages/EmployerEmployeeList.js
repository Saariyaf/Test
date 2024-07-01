import React, { useState, useEffect } from 'react';
import { getAllEmployees } from '../services/api';
import '../../styles.css';

const EmployerEmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getAllEmployees();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="center-text">
      <h1>Employee List</h1>
      <table className="employer-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employeeID}>
              <td>{employee.employeeID}</td>
              <td>{employee.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployerEmployeeList;






