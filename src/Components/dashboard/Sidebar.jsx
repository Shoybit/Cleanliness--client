import { NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Sidebar = () => {
  const { role } = useContext(AuthContext);

  const linkClass = ({ isActive }) =>
    `block px-2 py-1 rounded ${
      isActive ? "text-green-400 font-semibold" : "hover:text-green-400"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <NavLink to="/"><h2 className="text-xl font-bold mb-6">Dashboard</h2></NavLink>

      <ul className="space-y-3">
        {/* User menus */}
        <li>
          <NavLink to="/dashboard" className={linkClass}>
            Overview
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/add-issue" className={linkClass}>
            Add Issue
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/my-issues" className={linkClass}>
            My Issues
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/my-contribution" className={linkClass}>
            My Contribution
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/profile" className={linkClass}>
            Profile
          </NavLink>
        </li>

        {/* Admin only */}
        {role === "admin" && (
          <li>
            <NavLink to="/dashboard/manage-users" className={linkClass}>
              Manage Users
            </NavLink>
          </li>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
