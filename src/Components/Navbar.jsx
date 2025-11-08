import React, { useState,  } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
   <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-green-600 cursor-pointer">
              Cleanliness
            </h1>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            
              <>
                <a className="text-gray-700 hover:text-green-600">
                  Home
                </a>
                <a  className="text-gray-700 hover:text-green-600">
                  Issues
                </a>
                <a  className="text-gray-700 hover:text-green-600">
                  Login
                </a>
                <a  className="text-gray-700 hover:text-green-600">
                  Register
                </a>
              </>
            
          </div>

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



      {menuOpen && 
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
             
              <>
                <a className="block px-3 py-2 rounded hover:bg-green-50">
                  Home
                </a>
                <a className="block px-3 py-2 rounded hover:bg-green-50">
                  Issues
                </a>
                <a className="block px-3 py-2 rounded hover:bg-green-50">
                  Login
                </a>
                <a className="block px-3 py-2 rounded hover:bg-green-50">
                  Register
                </a>
              </>
      
           
          </div>
        </div>
}
    </nav>
  );
};

export default Navbar;
