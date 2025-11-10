import React, { useState, useContext, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/imgi_469_cleaning-service-logo-icon-design-illustration_586739-5824-depositphotos-bgremover.png';
import { Link, useNavigate, useLocation } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation(); 
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logged out successfully!", {
        position: "top-center",
        autoClose: 2000,
      });
      setMenuOpen(false);
      setProfileDropdown(false);
      
      setTimeout(() => {
        navigate("/");
      }, 1500);
      
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Failed to logout", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Check if current path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <nav className="sticky top-0 z-50 bg-white/20 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-[83.333%] mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex justify-between h-16 items-center">

              <Link to="/">
              <div className="shrink-0 flex items-center gap-2">
              <img src={logo} alt="Cleanliness Logo" className="w-10 h-10 object-contain" />
              <span  className="text-2xl font-bold text-green-600 cursor-pointer">
                Cleanliness
              </span>
            </div>
            </Link>

            {user ? (
              <div className="hidden md:flex space-x-6 items-center">
                <Link 
                  to="/" 
                  className={`transition ${isActive("/") ? "text-green-600 font-semibold" : "text-black hover:text-green-600"}`}
                >
                  Home
                </Link>
                <Link 
                  to="/all-issues" 
                  className={`transition ${isActive("/all-issues") ? "text-green-600 font-semibold" : "text-black hover:text-green-600"}`}
                >
                  All Issues
                </Link>
                <Link 
                  to="/addissue" 
                  className={`transition ${isActive("/addissue") ? "text-green-600 font-semibold" : "text-black hover:text-green-600"}`}
                >
                  Add Issues
                </Link>
                <Link 
                  to="/my-issues" 
                  className={`transition ${isActive("/my-issues") ? "text-green-600 font-semibold" : "text-black hover:text-green-600"}`}
                >
                  My Issues
                </Link>
                <Link 
                  to="/my-contribution" 
                  className={`transition ${isActive("/my-contribution") ? "text-green-600 font-semibold" : "text-black hover:text-green-600"}`}
                >
                  My Contribution
                </Link>
                
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setProfileDropdown(!profileDropdown)}
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition"
                  >
                    {user?.photoURL ? (
                      <img 
                        src={user.photoURL} 
                        alt="Profile" 
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-sm font-semibold">
                        {user?.displayName ? user.displayName.charAt(0).toUpperCase() : 'U'}
                      </div>
                    )}
                    <FaChevronDown className={`w-3 h-3 text-gray-500 transition-transform ${profileDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {profileDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{user?.displayName || 'User'}</p>
                      </div>
                      <button 
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="hidden md:flex space-x-6 items-center">
                <Link 
                  to="/" 
                  className={`transition ${isActive("/") ? "text-green-600 font-semibold" : "text-black hover:text-green-600"}`}
                >
                  Home
                </Link>
                <Link 
                  to="/all-issues" 
                  className={`transition ${isActive("/all-issues") ? "text-green-600 font-semibold" : "text-black hover:text-green-600"}`}
                >
                  Issues
                </Link>
                <Link to="/login" className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition">
                  Login
                </Link>
                <Link to="/register" className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition">
                  Register
                </Link>
              </div>
            )}

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-black focus:outline-none"
              >
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-sm shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {user ? (
                <>
                  <Link 
                    to="/" 
                    className={`block px-3 py-2 rounded transition ${isActive("/") ? "bg-green-50 text-green-600 font-semibold" : "hover:bg-green-50"}`} 
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/all-issues" 
                    className={`block px-3 py-2 rounded transition ${isActive("/all-issues") ? "bg-green-50 text-green-600 font-semibold" : "hover:bg-green-50"}`} 
                    onClick={() => setMenuOpen(false)}
                  >
                    All Issues
                  </Link>
                  <Link 
                    to="/addissue" 
                    className={`block px-3 py-2 rounded transition ${isActive("/addissue") ? "bg-green-50 text-green-600 font-semibold" : "hover:bg-green-50"}`} 
                    onClick={() => setMenuOpen(false)}
                  >
                    Add Issues
                  </Link>
                  <Link 
                    to="/my-issues" 
                    className={`block px-3 py-2 rounded transition ${isActive("/my-issues") ? "bg-green-50 text-green-600 font-semibold" : "hover:bg-green-50"}`} 
                    onClick={() => setMenuOpen(false)}
                  >
                    My Issues
                  </Link>
                  <Link 
                    to="/my-contribution" 
                    className={`block px-3 py-2 rounded transition ${isActive("/my-contribution") ? "bg-green-50 text-green-600 font-semibold" : "hover:bg-green-50"}`} 
                    onClick={() => setMenuOpen(false)}
                  >
                    My Contribution
                  </Link>
                  <div className="border-t border-gray-200 pt-2">
                    <div className="px-3 py-2">
                      <p className="text-black font-medium">{user?.displayName || 'User'}</p>
                    </div>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-3 py-2 rounded text-red-600 hover:bg-red-50 transition"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link 
                    to="/" 
                    className={`block px-3 py-2 rounded transition ${isActive("/") ? "bg-green-50 text-green-600 font-semibold" : "hover:bg-green-50"}`} 
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/all-issues" 
                    className={`block px-3 py-2 rounded transition ${isActive("/all-issues") ? "bg-green-50 text-green-600 font-semibold" : "hover:bg-green-50"}`} 
                    onClick={() => setMenuOpen(false)}
                  >
                    Issues
                  </Link>
                  <Link to="/login" className="block px-3 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition" onClick={() => setMenuOpen(false)}>
                    Login
                  </Link>
                  <Link to="/register" className="block px-3 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition" onClick={() => setMenuOpen(false)}>
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;