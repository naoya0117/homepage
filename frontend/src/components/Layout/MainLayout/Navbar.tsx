import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { LoginForm } from '@/features/auth'

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isDropopen, setIsDropOpen] = useState(false); // Added state for managing dropdown
  const [isModalOpen, setIsModalOpen] = useState(false); // Added state for managing modal

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
    <>
    <nav className="navbar 700 p-4 flex justify-between sticky top-0">
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
        <li className="relative group" > {/* Added dropdown menu */}
          <button onClick={() => setIsDropOpen(!isDropopen)} className="inline-block text-left">
            ▼
          </button>
          {isDropopen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" onMouseLeave={() => setIsDropOpen(false)}>
              <div className="py-1 hover:bg-gray-300" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <button onClick={() => {
                  setIsModalOpen(true);
                  setIsDropOpen(false);
                }} className="block px-4 py-2 text-sm text-gray-700 w-full text-left" role="menuitem">Login</button>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
    <Modal isOpen={isModalOpen} style={{ content: { width: '600px', height: '500px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } }}>
      <button onClick={() => setIsModalOpen(false)} className="float-right hover:underline">閉じる</button>
      <LoginForm/>
    </Modal>
  </>
  );
};

export default Navbar;
