import { NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Sidebar = () => {
  const { role } = useContext(AuthContext);

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <ul className="space-y-3">
        <li>
          <NavLink to="/dashboard" className="block hover:text-green-400">
            Overview
          </NavLink>
        </li>

        <li>
          <NavLink to="/dashboard/my-issues" className="block hover:text-green-400">
            My Issues
          </NavLink>
        </li>

        {/* Admin Only */}
        {role === "admin" && (
          <li>
            <NavLink
              to="/dashboard/manage-users"
              className="block hover:text-green-400"
            >
              Manage Users
            </NavLink>
          </li>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
