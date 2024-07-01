import React, { useState, useEffect } from 'react';
import { getAllLoginData } from '../services/api';
import '../../styles.css';

const EmployerLoginData = () => {
  const [loginData, setLoginData] = useState([]);

  useEffect(() => {
    const fetchLoginData = async () => {
      try {
        const data = await getAllLoginData();
        setLoginData(data);
      } catch (error) {
        console.error('Error fetching login data:', error);
      }
    };

    fetchLoginData();
  }, []);

  return (
    <div className="center-text">
      <h1>Login Data</h1>
      <table className="employer-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Login Date</th>
            <th>Logout Date</th>
            <th>Employee Name</th>
            <th>Employee Description</th>
          </tr>
        </thead>
        <tbody>
          {loginData.map((data) => (
            <tr key={data.id}>
              <td>{data.employeeID}</td>
              <td>{new Date(data.loginTime).toLocaleString()}</td>
              <td>{data.logoutTime ? new Date(data.logoutTime).toLocaleString() : 'N/A'}</td>
              <td>{data.employeeName}</td>
              <td>{data.employeeDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployerLoginData;









