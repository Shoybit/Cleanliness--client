import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/imgi_469_cleaning-service-logo-icon-design-illustration_586739-5824-depositphotos-bgremover.png';
import { FaCity, FaEnvelope, FaHome, FaPhone, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiX } from 'react-icons/si'; 

const Footer = () => {
  return (
    <footer className="bg-[#016630] text-white py-12">
      <div className="container max-w-10/12 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-2">
            <Link to={'/'}>
             <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={logo} alt="Cleanliness Logo" />
              </div>
              <span className="text-2xl font-bold text-green-600 cursor-pointer">
                Cleanliness
              </span>
            </div></Link>
            <p className="text-gray-100 leading-relaxed max-w-md">
              Your trusted partner for professional cleaning services. We deliver spotless spaces 
              and fresh environments for homes and businesses.
            </p>

            <div className="flex gap-4 mt-4 text-lg text-white">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                <SiX />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">Our Services</h3>
            <ul className="space-y-3 text-gray-100">
              <li>
                <Link to="/all-issues" className="hover:text-white hover:border-b-2 hover:border-white transition-all duration-200 pb-1">
                  All Issues
                </Link>
              </li>
              <li>
                <Link to="/addissue" className="hover:text-white hover:border-b-2 hover:border-white transition-all duration-200 pb-1">
                 Add Issues
                </Link>
              </li>
              <li>
                <Link to="/my-issues" className="hover:text-white hover:border-b-2 hover:border-white transition-all duration-200 pb-1">
                 My Issues
                </Link>
              </li>
              <li>
                <Link to="/my-contribution" className="hover:text-white hover:border-b-2 hover:border-white transition-all duration-200 pb-1">
                  My Contribution
                </Link>
              </li>
            </ul>
          </div>
         
          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">Contact Us</h3>
            <ul className="space-y-3 text-gray-100">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-green-400" />
                shoyaib105@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-green-400" />
                +8801743870639
              </li>
              <li className="flex items-center gap-2">
                <FaHome className="text-green-400" />
                123 Garden Way
              </li>
              <li className="flex items-center gap-2">
                <FaCity className="text-green-400" />
                Greenville, GT 12345
              </li>
            </ul>
          </div>

        </div>
          <div className="mt-8 pt-8 border-t border-green-700 text-center flex flex-col md:flex-row md:justify-between items-center gap-4">
            <p className="text-sm text-gray-200">
              Professional cleaning services trusted by 1000+ customers
            </p>

            <p className="text-sm text-gray-200">
              &copy; 2025 Cleanliness. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-gray-200">
              <a  href='' className="hover:text-white hover:border-white transition-all duration-200 pb-1">
                Privacy Policy
              </a>
              <a  href='' className="hover:text-white hover:border-white transition-all duration-200 pb-1">
                Terms of Service
              </a>
            </div>
          </div>

      </div>
    </footer>
  );
};

export default Footer;
