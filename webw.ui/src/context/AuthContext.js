import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser && storedUser !== 'undefined') {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser) {
          setIsAuthenticated(true);
          setUser(parsedUser);
        }
      } catch (error) {
        console.error('Failed to parse user data from localStorage:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = (user) => {
    setIsAuthenticated(true);
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;
















