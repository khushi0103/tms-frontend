// src/App.jsx
import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom';
import AdminDashboard from './features/platform/pages/AdminDashboard';
import Login from './features/platform/pages/Login'; // Import your login page
import Router from './app/router/Router'; // Import the router


function App() {
  return (
    <Router/>
  );
}

export default App;