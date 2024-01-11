import React from "react";
import Sidebar from "./_admin-components/Sidebar.jsx";

const AdminLayout = ({ children }) => {
  return (
    <main className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
      <div className='w-full flex-none md:w-64'>
        <Sidebar />
      </div>
      <div className='grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
    </main>
  );
};

export default AdminLayout;
