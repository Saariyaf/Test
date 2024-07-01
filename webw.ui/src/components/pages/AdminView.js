import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getAllEmployers } from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../../styles.css';

const AdminView = () => {
  const [employers, setEmployers] = useState([]);
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployers = async () => {
      try {
        const data = await getAllEmployers();
        setEmployers(data);
      } catch (error) {
        console.error('Error fetching employers:', error);
      }
    };

    fetchEmployers();
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="admin-view">
      <h1>Admin View</h1>
      <button onClick={handleLogout}>Signout</button>
      <div className="table-container">
        <h2>List of Employers</h2>
        <table className="employer-table">
          <thead>
            <tr>
              <th>Employer ID</th>
              <th>Employer Name</th>
            </tr>
          </thead>
          <tbody>
            {employers.map((employer) => (
              <tr key={employer.id}>
                <td>{employer.id}</td>
                <td>{employer.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminView;






