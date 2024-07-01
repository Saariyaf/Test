import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext'; // Correct path to AuthContext

const Signout = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
    // Redirect to the login page or home page after logout
    window.location.href = '/login';
  }, [logout]);

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', padding: '20px' }}>
      <h1>Signout Page</h1>
      <p>You have been signed out.</p>
    </div>
  );
};

export default Signout;







