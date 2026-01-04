import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const TopNavbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <header className="h-16 bg-white dark:bg-gray-800 shadow flex items-center justify-between px-6">
      <h2 className="font-semibold text-lg">Dashboard</h2>

      {/* Profile Dropdown */}
      <div className="relative group">
        <img
          src={user?.photoURL}
          alt="profile"
          className="w-10 h-10 rounded-full cursor-pointer"
        />

        <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-700 rounded shadow-lg
          opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
          
          <NavLink
            to="/dashboard/profile"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            Profile
          </NavLink>

          <NavLink
            to="/dashboard"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            Dashboard Home
          </NavLink>

          <button
            onClick={logOut}
            className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-100"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
