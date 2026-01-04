import { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../Components/dashboard/Sidebar";
import { FaBars } from "react-icons/fa";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      
      {/* ===== Sidebar ===== */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-gray-900 transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0`}
      >
        <Sidebar />
      </div>

      {/* Overlay (mobile only) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ===== Main Content ===== */}
      <div className="flex-1 flex flex-col">
        
        {/* Top bar (mobile) */}
        <div className="md:hidden flex items-center gap-4 bg-white dark:bg-gray-800 px-4 py-3 shadow">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-xl text-gray-700 dark:text-white"
          >
            <FaBars />
          </button>
          <h2 className="font-semibold">Dashboard</h2>
        </div>

        {/* Page Content */}
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
