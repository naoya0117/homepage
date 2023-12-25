import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false); // Added state for managing dropdown

  const handleMouseEnter = (link: string) => {
    setActiveLink(link);
  };

  const handleMouseLeave = () => {
    setActiveLink(null);
  };

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <nav className="navbar 700 p-4 flex justify-between sticky top-0 z-50">
      <div className="navbar-brand ml-6">
        <Link to="/"><img src="logo.png" alt="logo" className="navbar-logo h-10 w-10 mr-2 inline-block" />naoya's portfolio</Link>
      </div>
      <ul className="navbar-nav flex space-x-6 mr-6">
        {navItems.map(item => (
          <li className="nav-item" key={item.link}>
            <Link 
              to={`${item.link}`} 
              onMouseEnter={() => handleMouseEnter(item.link)}
              onMouseLeave={handleMouseLeave}
              className={activeLink === item.link ? 'underline' : ''}
            >
              {item.name}
            </Link>
          </li>
        ))}
        <li className="relative group"> {/* Added dropdown menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="inline-block text-left">
            ▼
          </button>
          {isOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">ログイン</Link>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
