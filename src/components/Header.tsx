import React from 'react';

const menuItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Experience', target: 'experience' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
];

const Header: React.FC = () => {
  const handleClick = (target: string) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-slate-950 text-white shadow-md fixed top-0 left-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
  <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 bg-clip-text text-transparent">Thamaraiselvan B</div>
        <ul className="flex gap-8 rounded-2xl border bg-slate-900 px-6 py-1">
          {menuItems.map((item) => (
            <li key={item.target}>
              <button
                className="hover:text-sky-400 transition-colors duration-200 font-medium"
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
