import axios from 'axios';

const API_URL = 'https://localhost:7217/api'; // Replace with your actual API URL

export const getAllEmployees = async () => {
  const response = await axios.get(`${API_URL}/Employee`);
  return response.data;
};

export const getAllEmployers = async () => {
  const response = await axios.get(`${API_URL}/Employers`);
  return response.data;
};

export const getAllLoginData = async () => {
  const response = await axios.get(`${API_URL}/UserLogin`);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/Account/Login`, userData);
  return response.data;
};

export const registerEmployee = async (employeeData) => {
  const response = await axios.post(`${API_URL}/Employee`, employeeData);
  return response.data;
};
