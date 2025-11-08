import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/imgi_469_cleaning-service-logo-icon-design-illustration_586739-5824-depositphotos-bgremover.png';

const Footer = () => {
  return (
    <footer className="bg-[#016630] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="md:col-span-2">
            <Link to={'/'}>
             <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={logo} alt="" />
              </div>
              <span className="text-2xl font-bold text-green-600 cursor-pointer">
                Cleanliness
              </span>
            </div></Link>
            <p className="text-gray-100 leading-relaxed max-w-md">
              Your trusted partner for professional cleaning services. We deliver spotless spaces 
              and fresh environments for homes and businesses.
            </p>
            <div className="mt-6 text-sm text-gray-200">
              <p>&copy; {new Date().getFullYear()} Cleanliness. All rights reserved.</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white text-lg">Our Services</h3>
            <ul className="space-y-3 text-gray-100">
              <li>
                <Link to="/residential-cleaning" className="hover:text-white hover:border-b-2 hover:border-white transition-all duration-200 pb-1">
                  All Issues
                </Link>
              </li>
              <li>
                <Link to="/commercial-cleaning" className="hover:text-white hover:border-b-2 hover:border-white transition-all duration-200 pb-1">
                 Add Issues
                </Link>
              </li>
              <li>
                <Link to="/deep-cleaning" className="hover:text-white hover:border-b-2 hover:border-white transition-all duration-200 pb-1">
                 My Issues
                </Link>
              </li>
              <li>
                <Link to="/move-in-out" className="hover:text-white hover:border-b-2 hover:border-white transition-all duration-200 pb-1">
                  My Contribution
                </Link>
              </li>
            </ul>
          </div>
         

            <div>
            <h3 className="font-semibold mb-4 text-white text-lg">Useful Links</h3>
            <ul className="space-y-3 text-gray-100">
                <li>
                <a className="inline-block hover:text-white hover:border-b-2 hover:border-white transition-all duration-200 pb-1">
                    About Us
                </a>
                </li>
                <li>
                <a  className="inline-block hover:text-white hover:border-b-2 hover:border-white transition-all duration-200 pb-1">
                    Contact
                </a>
                </li>
                <li>
                <a  className="inline-block hover:text-white hover:border-b-2 hover:border-white transition-all duration-200 pb-1">
                    Pricing
                </a>
                </li>
                <li>
                <a className="inline-block hover:text-white hover:border-b-2 hover:border-white transition-all duration-200 pb-1">
                    FAQ
                </a>
                </li>
            </ul>
            </div>

        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-green-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
            <p>Professional cleaning services trusted by 1000+ customers</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white hover:border-white transition-all duration-200 pb-1">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white  hover:border-white transition-all duration-200 pb-1">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;