import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/" className="text-2xl font-bold text-gray-800">LOGO</Link>

        {/* Hamburger Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 font-medium">
            <li><Link to="/" className="block py-2 px-4 text-gray-700 hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="block py-2 px-4 text-gray-700 hover:text-blue-600">About Us</Link></li>
            <li><Link to="/services" className="block py-2 px-4 text-gray-700 hover:text-blue-600">Our Services</Link></li>
            <li><Link to="/pricing" className="block py-2 px-4 text-gray-700 hover:text-blue-600">Pricing</Link></li>
            <li><Link to="/resources" className="block py-2 px-4 text-gray-700 hover:text-blue-600">Resources</Link></li>
            <li><Link to="/contact" className="block py-2 px-4 text-gray-700 hover:text-blue-600">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
