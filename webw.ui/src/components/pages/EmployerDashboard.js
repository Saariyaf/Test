import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css';

const EmployerDashboard = () => {
  return (
    <div className="center-text">
      <h1>Employer Dashboard</h1>
      <ul>
        <li><Link to="/employer/employees">Show List of Employees</Link></li>
        <li><Link to="/employer/logindata">Show Login Info</Link></li>
      </ul>
    </div>
  );
};

export default EmployerDashboard;

