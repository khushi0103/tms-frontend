import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Body from '../components/Body'; // <-- import Body

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto p-6">
          <Body /> {/* This will show the tenant table */}
          {/* If you want to keep Outlet for nested routes, you can keep it, but then both Body and Outlet would render. That might be undesirable. */}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;