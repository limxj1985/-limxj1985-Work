import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // 1. Close menu when route changes (good practice)
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // 2. Close menu on window resize (if screen becomes large)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // 768px is the default 'md' breakpoint
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 3. Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    // Added ref to the main nav element
    <nav ref={menuRef} className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-lime-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                P
             </div>
             <div className="flex flex-col">
                <span className="font-bold text-slate-800 text-lg leading-tight">PRC 2026</span>
                <span className="text-xs text-slate-500 font-medium tracking-wide">PERAK ANNUAL MEDICAL RESEARCH</span>
             </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-lime-100 text-lime-800 shadow-inner'
                      : 'text-slate-600 hover:text-lime-600 hover:bg-lime-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-lime-600 focus:outline-none p-2 rounded-md hover:bg-lime-50 transition-colors"
              aria-label="Toggle mobile menu" // Added for accessibility
              aria-expanded={isOpen} // Added for accessibility
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                // onClick={() => setIsOpen(false)} // Removed because the useEffect with useLocation handles this now
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-lg text-base font-medium ${
                    isActive
                      ? 'bg-lime-50 text-lime-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-lime-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
