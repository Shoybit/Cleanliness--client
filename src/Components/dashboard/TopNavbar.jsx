import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const TopNavbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // Get user initials for fallback avatar
  const getUserInitials = () => {
    if (!user?.displayName) return "U";
    return user.displayName
      .split(" ")
      .map(n => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6">
      <h2 className="font-bold text-xl text-gray-800 dark:text-white">
        Dashboard
      </h2>

      {/* Profile Dropdown */}
      <div className="relative group">
        {/* Profile Picture with fallback */}
        <div className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-300 dark:border-gray-700 group-hover:border-blue-500 transition-colors overflow-hidden">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt={user?.displayName || "Profile"}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
              {getUserInitials()}
            </div>
          )}
        </div>

        {/* Dropdown Menu */}
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
          
          {/* User Info Section */}
          <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
            <p className="font-semibold text-gray-900 dark:text-white text-sm truncate">
              {user?.displayName || "User"}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {user?.email || "No email"}
            </p>
          </div>

          {/* Menu Items */}
          <div className="py-1">
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${isActive ? "bg-gray-50 dark:bg-gray-700/50" : ""
                }`
              }
            >
              <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profile
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${isActive ? "bg-gray-50 dark:bg-gray-700/50" : ""
                }`
              }
            >
              <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Dashboard Home
            </NavLink>

            <button
              onClick={logOut}
              className="w-full flex items-center px-4 py-3 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors mt-1"
            >
              <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;