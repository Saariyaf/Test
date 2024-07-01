import React, { useState, useEffect } from 'react';
import { getAllLoginData } from '../services/api';

const LoginData = () => {
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
    <div className="table-container">
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
              <td>{data.loginTime}</td>
              <td>{data.logoutTime}</td>
              <td>{data.username}</td>
              <td>{data.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoginData;


