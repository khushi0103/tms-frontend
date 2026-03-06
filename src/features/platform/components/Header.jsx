import React from 'react';
import { Database, Plus, LogOut } from 'lucide-react';

const Navbar = () => {
  const handleLogout = () => {
    // Clears the session data stored in JSON format
    localStorage.removeItem('user_session'); 
    // Redirects to login page
    window.location.href = '/login'; 
  };

  return (
    <div className="w-full">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-8 py-4 bg-white/50 backdrop-blur-sm border-b border-gray-100">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm font-medium">
          <span className="text-slate-400">Platform</span>
          <span className="mx-2 text-slate-300">/</span>
          <span className="text-slate-900">Tenants</span>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 text-[12px] font-semibold text-amber-600 bg-amber-50 border border-amber-100 rounded-md hover:bg-amber-100 transition-colors">
            <Database size={14} />
            Sample Data
          </button>
          
          <div className="px-3 py-1.5 text-[12px] font-mono font-medium text-slate-400 bg-slate-50 border border-slate-100 rounded-md">
            localhost:8000
          </div>

          {/* New Logout Button */}
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-1.5 text-[12px] font-semibold text-red-600 bg-red-50 border border-red-100 rounded-md hover:bg-red-100 transition-colors ml-2"
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </div>

      {/* Page Title Section */}
      <div className="px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Tenants</h1>
            <p className="text-sm text-slate-500 mt-1">
              Manage all registered tenants on the platform
            </p>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
            <Plus size={18} />
            New Tenant
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;