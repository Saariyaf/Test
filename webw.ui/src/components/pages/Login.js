import React, { useState } from 'react';
import { Button, TextField, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { loginUser } from '../services/api'; // Adjust the import path if needed
import { useAuth } from '../../context/AuthContext'; // Adjust the import path if needed
import '../../styles.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Add state for role
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await loginUser({ username, password, role });
      console.log('Login successful:', response);
      if (response && response.data) {
        login(response.data); // Update the context with the user data

        // Redirect based on role
        if (response.data.role === 'employee') {
          window.location.href = '/employee';
        } else if (response.data.role === 'employer') {
          window.location.href = '/employer';
        } else if (response.data.role === 'admin') {
          window.location.href = '/admin';
        }
      } else {
        console.error('Login response is invalid:', response);
      }
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="login-box"
    >
      <h1>Login Page</h1>
      <div className="form-fields">
        <TextField
          label="Username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
          required
          className="input-text"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
          required
          className="input-text"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="role-label">Login as</InputLabel>
          <Select
            labelId="role-label"
            id="role"
            value={role}
            label="Login as"
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <MenuItem value="employee">Employee</MenuItem>
            <MenuItem value="employer">Employer</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" className="login-button">
          Login
        </Button>
      </div>
    </Box>
  );
};

export default Login;


























