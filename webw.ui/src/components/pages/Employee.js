// src/components/pages/Employee.js
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import catImage from '../../assets/cate.JPG';
import '../../styles.css';

const Employee = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="employee-container">
      <h1>THIS IS {user.name}</h1>
      <p>Description: {user.description}</p>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <div className="image-container">
        <img src={catImage} alt="Random Cat" className="employee-image" />
      </div>
    </div>
  );
};

export default Employee;
