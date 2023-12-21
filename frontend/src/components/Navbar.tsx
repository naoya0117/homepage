import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-gray-700 p-4 flex justify-between">
      <div className="navbar-brand ml-6">
        <img src="logo.svg" alt="React logo" className="navbar-logo h-6 w-6 mr-2 inline-block" />
      </div>
      <ul className="navbar-nav flex space-x-6 mr-6">
        <li className="nav-item text-white"><a href="/">Home</a></li>
        <li className="nav-item text-white"><a href="/about">About</a></li>
        <li className="nav-item text-white"><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
