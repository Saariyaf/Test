import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { registerEmployee } from '../services/api'; // Adjust the import path if needed
import '../../styles.css';

const RegisterEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    password: '', // Add password field
    description: '',
    age: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerEmployee(employeeData);
      console.log('Employee registered:', response);
      // Clear the form
      setEmployeeData({
        name: '',
        password: '', // Reset password field
        description: '',
        age: '',
        gender: ''
      });
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleClear = () => {
    setEmployeeData({
      name: '',
      password: '', // Reset password field
      description: '',
      age: '',
      gender: ''
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="register-form"
    >
      <h1>Register Employee</h1>
      <TextField
        label="Name"
        name="name"
        value={employeeData.name}
        onChange={handleChange}
        margin="normal"
        required
        className="input-text"
      />
      <TextField
        label="Password" // Add password field
        name="password"
        type="password"
        value={employeeData.password}
        onChange={handleChange}
        margin="normal"
        required
        className="input-text"
      />
      <TextField
        label="Description"
        name="description"
        value={employeeData.description}
        onChange={handleChange}
        margin="normal"
        required
        className="input-text"
      />
      <TextField
        label="Age"
        name="age"
        value={employeeData.age}
        onChange={handleChange}
        margin="normal"
        required
        className="input-text"
      />
      <TextField
        label="Gender"
        name="gender"
        value={employeeData.gender}
        onChange={handleChange}
        margin="normal"
        required
        className="input-text"
      />
      <div className="form-buttons">
        <Button type="button" variant="outlined" onClick={handleClear} className="clear-button">
          Clear
        </Button>
        <Button type="submit" variant="contained" color="primary" className="save-button">
          Save
        </Button>
      </div>
    </Box>
  );
};

export default RegisterEmployee;


