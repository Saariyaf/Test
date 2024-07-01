import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import RegisterEmployee from './components/pages/RegisterEmployee';
import EmployeeList from './components/pages/EmployeeList';
import ShowEmployeeList from './components/pages/ShowEmployeeList';
import LoginData from './components/pages/LoginData';
import AdminView from './components/pages/AdminView';
import Signout from './components/pages/Signout';
import EmployeeScreen from './components/pages/EmployeeScreen';
import EmployerDashboard from './components/pages/EmployerDashboard';
import EmployerEmployeeList from './components/pages/EmployerEmployeeList';
import EmployerLoginData from './components/pages/EmployerLoginData';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/show" element={<ShowEmployeeList />} />
        <Route path="/logindata" element={<LoginData />} />
        <Route path="/admin" element={<AdminView />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/employee" element={<EmployeeScreen />} />
        <Route path="/employer" element={<EmployerDashboard />} />
        <Route path="/employer/employees" element={<EmployerEmployeeList />} />
        <Route path="/employer/logindata" element={<EmployerLoginData />} />
      </Routes>
    </div>
  );
}

export default App;





















