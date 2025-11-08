import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/imgi_469_cleaning-service-logo-icon-design-illustration_586739-5824-depositphotos-bgremover.png';
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/20 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src={logo} alt="Cleanliness Logo" className="w-10 h-10 object-contain" />
            <h1 className="text-2xl font-bold text-green-600 cursor-pointer">
              Cleanliness
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-gray-700 hover:text-green-600 transition">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition">
              Issues
            </a>
            <Link to={'/login'}
              
              className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
            >
              Login
            </Link>
            <a
              href="#"
              className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 rounded hover:bg-green-50">
              Home
            </a>
            <a href="#" className="block px-3 py-2 rounded hover:bg-green-50">
              Issues
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
            >
              Login
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
