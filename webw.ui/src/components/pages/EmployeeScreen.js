import React from 'react';
import { useAuth } from '../../context/AuthContext'; // Correct path to AuthContext
import catImage from '../../assets/citty.JPG'; // Adjust the path as necessary
import '../../styles.css';

const EmployeeScreen = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="employee-screen">
      <div className="employee-details">
        <h1>THIS IS {user.name}</h1>
        <p>Description: {user.description}</p>
        <p>Age: {user.age}</p>
        <p>Gender: {user.gender}</p>
      </div>
      <div className="employee-image">
        <img src={catImage} alt="Cat" />
      </div>
    </div>
  );
};

export default EmployeeScreen;
















