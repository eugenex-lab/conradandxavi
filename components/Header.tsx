
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Practice', path: '/practice' },
    { name: 'Story', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Insights', path: '/blog' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass border-b border-navy/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col group">
            <span className={`text-xl font-bold tracking-tighter transition-colors ${scrolled || isDarkMode ? 'text-navy dark:text-white' : 'text-navy'}`}>
              <span className="text-gold">CONRAD</span> & XAVI
            </span>
            <div className="overflow-hidden">
               <span className="block text-[8px] tracking-[0.4em] font-bold text-gold uppercase transition-transform group-hover:translate-x-full duration-500">Legal Practice</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-gold ${location.pathname === link.path ? 'text-gold' : 'text-navy dark:text-gray-300'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="w-[1px] h-4 bg-navy/10 dark:bg-white/10 mx-2"></div>
            <button
              onClick={toggleDarkMode}
              className="p-1 text-navy/40 dark:text-white/40 hover:text-gold transition-colors"
            >
              {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <Link
              to="/contact"
              className="border-b-2 border-gold text-navy dark:text-white pb-1 text-[10px] font-bold tracking-widest transition-all hover:border-navy dark:hover:border-white uppercase"
            >
              Consult
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-6">
            <button
              onClick={toggleDarkMode}
              className="p-1 text-navy/40 dark:text-white/40"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy dark:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass-dark fixed inset-0 z-50 flex flex-col items-center justify-center space-y-8 p-12 animate-in fade-in duration-300">
           <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white"><X size={32}/></button>
           {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-serif italic text-white hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-12 text-gold font-bold text-[10px] tracking-[0.4em] uppercase border-b border-gold pb-2"
            >
              Book Consultation
            </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
