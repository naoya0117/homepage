import React from 'react';
import { Link } from 'react-scroll';

const Sidemenu: React.FC = () => {
  const menuItems = [
    { name: 'About', link: 'about' },
    { name: 'Skill', link: 'skill' },
    { name: 'History', link: 'history' },
  ];

  return (
    <div className="sidemenu flex items-center justify-center h-3/4-screen fixed top-60 right-20 bg-gray-800 text-white rounded-lg shadow-lg">
      <ul className="p-4">
        {menuItems.map(item => (
          <li key={item.link} className="mb-2">
            <Link to={item.link} smooth={true} duration={500} className='cursor-pointer hover:text-blue-500 transition-colors'>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidemenu;

