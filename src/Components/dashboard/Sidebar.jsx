import { NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Sidebar = () => {
  const { role } = useContext(AuthContext); 

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow hidden md:block">
      <div className="p-5 text-xl font-bold">Dashboard</div>

      <nav className="flex flex-col gap-2 px-4">
        <NavLink to="/dashboard" className="dashboard-link">
          Overview
        </NavLink>

        {/* User Menu */}
        {role === "user" && (
          <>
            <NavLink to="/dashboard/my-issues" className="dashboard-link">
              My Issues
            </NavLink>
            <NavLink to="/dashboard/profile" className="dashboard-link">
              Profile
            </NavLink>
          </>
        )}

        {/* Admin Menu */}
        {role === "admin" && (
          <>
            <NavLink to="/dashboard/manage-issues" className="dashboard-link">
              Manage Issues
            </NavLink>
            <NavLink to="/dashboard/manage-users" className="dashboard-link">
              Manage Users
            </NavLink>
            <NavLink to="/dashboard/stats" className="dashboard-link">
              Statistics
            </NavLink>
          </>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
