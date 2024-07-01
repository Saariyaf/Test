import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles.css';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {!isAuthenticated && location.pathname !== '/login' && <Link to="/login">Login</Link>}
      {!isAuthenticated && location.pathname !== '/register' && <Link to="/register">Register Employee</Link>}
      {isAuthenticated && <Link to="/" onClick={handleLogout}>Signout</Link>}
    </nav>
  );
};

export default Navbar;

































