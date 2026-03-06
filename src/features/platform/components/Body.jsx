import React from 'react';

const tenantsData = [
  { company: 'Demo Transport Co.', code: 'DEMO_TMS', contact: { email: 'admin@demo-tms.com', name: 'Rahul Sharma' }, type: 'LOGISTICS', status: 'ACTIVE', verification: 'VERIFIED', created: '15 Jan 2026' },
  { company: 'Acme Logistics', code: 'ACME_LOG', contact: { email: 'admin@acme-logistics.com', name: 'Priya Verma' }, type: 'TRANSPORT', status: 'ACTIVE', verification: 'VERIFIED', created: '20 Jan 2026' },
  { company: 'Swift Freight', code: 'SWIFT_FRT', contact: { email: 'ops@swift-freight.in', name: 'Amit Patel' }, type: 'FREIGHT', status: 'ACTIVE', verification: 'VERIFIED', created: '01 Feb 2026' },
  { company: 'Blueline Courier', code: 'BLUELINE_COR', contact: { email: 'hello@blueline.in', name: 'Sheha Nair' }, type: 'COURIER', status: 'SUSPENDED', verification: 'VERIFIED', created: '10 Jan 2026' },
  { company: 'Road King Transport', code: 'ROAD_KING', contact: { email: 'admin@roadking.com', name: 'Vikram Singh' }, type: 'TRANSPORT', status: 'ACTIVE', verification: 'VERIFIED', created: '05 Feb 2026' },
  { company: 'Metro Logistics Hub', code: 'METRO_LOG', contact: { email: 'contact@metrolog.in', name: 'Divya Reddy' }, type: 'LOGISTICS', status: 'INACTIVE', verification: 'REJECTED', created: '01 Dec 2025' },
];

const StatusBadge = ({ status }) => {
  const colors = {
    ACTIVE: 'bg-green-100 text-green-800',
    INACTIVE: 'bg-gray-100 text-gray-800',
    SUSPENDED: 'bg-red-100 text-red-800',
  };
  return <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status] || 'bg-gray-100'}`}>{status}</span>;
};

const VerificationBadge = ({ verification }) => {
  const colors = {
    VERIFIED: 'bg-green-100 text-green-800',
    REJECTED: 'bg-red-100 text-red-800',
    PENDING: 'bg-yellow-100 text-yellow-800',
  };
  return <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[verification] || 'bg-gray-100'}`}>{verification}</span>;
};

const Body = () => {
  return (
    <main className="flex-1 bg-gray-50 p-6 overflow-auto">
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-500">TOTAL TENANTS</div>
          <div className="text-2xl font-bold">6</div>
          <div className="text-xs text-gray-400">All registered</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-500">ACTIVE</div>
          <div className="text-2xl font-bold">4</div>
          <div className="text-xs text-gray-400">Currently running</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-500">PENDING VERIFY</div>
          <div className="text-2xl font-bold">2</div>
          <div className="text-xs text-gray-400">Awaiting review</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="text-sm text-gray-500">SUSPENDED</div>
          <div className="text-2xl font-bold">1</div>
          <div className="text-xs text-gray-400">Access blocked</div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search by name, code, email..."
            className="border border-gray-300 rounded-md px-3 py-2 w-64 text-sm"
          />
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Suspended</option>
          </select>
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option>All Verification</option>
            <option>Verified</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
          + New Tenant
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">COMPANY</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TENANT CODE</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CONTACT</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">BUSINESS TYPE</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STATUS</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">VERIFICATION</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CREATED</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tenantsData.map((tenant, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tenant.company}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tenant.code}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div>{tenant.contact.email}</div>
                  <div className="text-xs">{tenant.contact.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tenant.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={tenant.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <VerificationBadge verification={tenant.verification} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tenant.created}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-blue-600 hover:text-blue-800 mr-2">View</button>
                  {tenant.status === 'ACTIVE' && tenant.verification === 'VERIFIED' && (
                    <>
                      <button className="text-yellow-600 hover:text-yellow-800 mr-2">Suspend</button>
                    </>
                  )}
                  {tenant.status === 'ACTIVE' && tenant.verification === 'VERIFIED' && tenant.company === 'Swift Freight' && (
                    <button className="text-green-600 hover:text-green-800 mr-2">Verify</button>
                  )}
                  {tenant.status === 'SUSPENDED' && (
                    <button className="text-green-600 hover:text-green-800">Activate</button>
                  )}
                  {tenant.status === 'INACTIVE' && tenant.verification === 'REJECTED' && (
                    // No extra buttons
                    <></>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Status Bar */}
      <div className="mt-6 flex items-center space-x-4 text-xs text-gray-500 border-t border-gray-200 pt-2">
        <span>Download/PlatformM...</span>
        <span>OBS 30.2.3.1- Profile: ...</span>
        <span>my-app Google Chrome</span>
        <span>Downloads/Traffic Stats</span>
        <span>New Request - tms</span>
      </div>
    </main>
  );
};

export default Body;