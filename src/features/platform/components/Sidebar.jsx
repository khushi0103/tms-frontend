import React from 'react';
import { LayoutGrid, Users, Globe, ShieldCheck, ChevronRight } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    {
      group: "MAIN",
      items: [
        { name: 'Tenants', icon: <LayoutGrid size={18} />, active: true, count: 2 },
        { name: 'Admins', icon: <Users size={18} />, active: false },
        { name: 'Domains', icon: <Globe size={18} />, active: false },
      ]
    },
  ];

  return (
    <div className="flex flex-col w-64 h-screen bg-white border-r border-gray-100 p-4 font-sans">
      {/* Branding */}
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
          <LayoutGrid size={24} fill="currentColor" />
        </div>
        <div>
          <h1 className="text-[15px] font-bold text-slate-800 leading-tight">Platform Admin</h1>
          <p className="text-[11px] text-slate-400 font-medium">Management Console</p>
        </div>
      </div>

      {/* Navigation Groups */}
      <div className="flex-1 space-y-8">
        {menuItems.map((section, idx) => (
          <div key={idx}>
            <p className="px-3 mb-3 text-[10px] font-bold tracking-widest text-slate-400">
              {section.group}
            </p>
            <nav className="space-y-1">
              {section.items.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                    item.active 
                    ? 'bg-blue-50 text-blue-600 shadow-sm' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={item.active ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}>
                      {item.icon}
                    </span>
                    <span className="text-sm font-semibold">{item.name}</span>
                  </div>
                  {item.count && (
                    <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {item.count}
                    </span>
                  )}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>

      {/* Profile Card */}
      <div className="mt-auto pt-6 border-t border-gray-50">
        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 font-bold text-sm">
            PA
          </div>
          <div className="flex-1 overflow-hidden">
            <h3 className="text-sm font-bold text-slate-800 truncate">Platform Admin</h3>
            <p className="text-[11px] text-slate-500 truncate">Super Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;