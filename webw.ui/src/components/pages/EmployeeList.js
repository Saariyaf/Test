import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  return (
    <div className="center-text">
      <h1>Employee List</h1>
      <ul>
        <li><Link to="/employees/show">Show List of Employees</Link></li>
        <li><Link to="/logindata">Show Login Info</Link></li>
      </ul>
    </div>
  );
};

export default EmployeeList;





