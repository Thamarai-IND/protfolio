import React, { useState } from 'react';
import arcadeLogo from '../assets/icons/arcade.png';

const menuItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Experience', target: 'experience' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
];


const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = (target: string) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // close menu on click
  };

  return (
    <header className="w-full bg-slate-950 text-white shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between py-3 sm:py-4 px-2 sm:px-6">
        {/* Left: Logo or Name (mobile: logo+hamburger, tablet+: name+menu) */}
        {/* Mobile: arcade logo left, hamburger right, no name */}
        <div className="flex w-full sm:w-auto items-center justify-between sm:justify-start">
          {/* Mobile: Arcade logo */}
          <img
            src={arcadeLogo}
            alt="Arcade Logo"
            className="block sm:hidden h-10 w-10 object-contain"
          />
          {/* Tablet/Desktop: Name */}
          <div
            className="hidden sm:block text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:animate-gradient-move cursor-pointer mb-2 sm:mb-0"
            style={{ display: 'inline-block' }}
          >
            Thamaraiselvan B
          </div>
          {/* Hamburger for mobile only, right side */}
          <button
            className="sm:hidden flex items-center px-3 py-2 border-none bg-sky-300 rounded text-sky-400 border-sky-400 focus:outline-none ml-auto"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {/* <svg className="fill-current h-6 w-6" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="10" y="32.4" width="28" height="3.2" rx="1.6" fill="white"/>
              <rect x="10" y="22.4" width="28" height="3.2" rx="1.6" fill="white"/>
              <rect x="10" y="12.4" width="28" height="3.2" rx="1.6" fill="white"/>
            </svg>
          </button>
        </div>
        {/* Menu: always visible on tablet and up, toggled on mobile */}
        <ul
          className={`
            ${menuOpen ? 'flex' : 'hidden'}
            flex-col absolute top-full left-0 w-full bg-slate-950 border-t border-slate-800 sm:static sm:flex sm:flex-row sm:w-auto sm:bg-transparent sm:border-0
            gap-2 sm:gap-8 rounded-b-xl sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-1 z-40
          `}
        >
          {menuItems.map((item) => (
            <li key={item.target}>
              <button
                className="w-full text-left sm:w-auto hover:text-sky-400 transition-colors duration-200 font-medium text-base py-2 sm:py-0 px-4 sm:px-0"
                onClick={() => handleClick(item.target)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
