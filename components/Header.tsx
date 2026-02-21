import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Practice", path: "/practice" },
    { name: "Story", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Insights", path: "/blog" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          scrolled
            ? "py-4 bg-white/80 dark:bg-navy/80 backdrop-blur-xl border-b border-navy/5 dark:border-white/5"
            : "py-4 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            {/* Logo area */}
            <Link to="/" className="flex flex-col group z-50 relative">
              <span
                className={`text-xl md:text-2xl font-serif font-medium tracking-tight transition-colors duration-500 ${
                  scrolled || isDarkMode || isOpen
                    ? "text-navy dark:text-white"
                    : "text-navy"
                } ${isOpen && !isDarkMode ? "!text-white" : ""}`}
              >
                <span className="text-gold italic pr-1">Conrad</span>& Xavi
              </span>
              <div className="overflow-hidden mt-1">
                <motion.span
                  className={`block text-[9px] tracking-[0.3em] uppercase font-light transition-colors duration-500 ${
                    scrolled || isDarkMode || isOpen
                      ? "text-navy/60 dark:text-gray-400"
                      : "text-navy/60"
                  } ${isOpen && !isDarkMode ? "!text-white/60" : ""}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Legal Practice
                </motion.span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-10">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group relative flex flex-col items-center"
                >
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-500 ${
                      location.pathname === link.path
                        ? "text-gold"
                        : scrolled
                          ? "text-navy dark:text-white/80"
                          : "text-navy dark:text-white/80"
                    } hover:text-gold dark:hover:text-gold`}
                  >
                    {link.name}
                  </span>
                  {/* Underline indicator */}
                  <span
                    className={`absolute -bottom-2 w-full h-[1px] bg-gold origin-left transition-transform duration-500 ${
                      location.pathname === link.path
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}

              <div className="w-[1px] h-4 bg-navy/20 dark:bg-white/20 mx-2"></div>

              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors duration-500 ${
                  scrolled || isDarkMode
                    ? "text-navy/40 dark:text-white/40 hover:text-gold dark:hover:text-gold focus:bg-navy/5 dark:focus:bg-white/5"
                    : "text-navy/40 hover:text-gold focus:bg-navy/5"
                }`}
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? (
                  <Sun size={14} className="stroke-[1.5]" />
                ) : (
                  <Moon size={14} className="stroke-[1.5]" />
                )}
              </button>

              <Link
                to="/contact"
                className="group relative flex items-center justify-center space-x-3 px-8 py-3.5 bg-gold text-navy transition-all duration-500 overflow-hidden shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.4)] hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 bg-navy dark:bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0"></div>
                <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.3em] group-hover:text-white dark:group-hover:text-navy transition-colors duration-500">
                  Book Consult
                </span>
                <ArrowRight
                  size={14}
                  className="relative z-10 transition-all duration-500 group-hover:text-white dark:group-hover:text-navy group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-6 z-50 relative">
              <button
                onClick={toggleDarkMode}
                className={`p-1 transition-colors duration-500 ${
                  isOpen
                    ? "!text-white/60 hover:!text-white"
                    : isDarkMode
                      ? "text-white/40 hover:text-white"
                      : "text-navy/40 hover:text-navy"
                }`}
              >
                {isDarkMode ? (
                  <Sun size={18} strokeWidth={1.5} />
                ) : (
                  <Moon size={18} strokeWidth={1.5} />
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 -mr-2 transition-colors duration-500 ${
                  isOpen
                    ? "!text-white"
                    : isDarkMode
                      ? "text-white"
                      : "text-navy"
                }`}
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <X size={28} strokeWidth={1} />
                ) : (
                  <Menu size={28} strokeWidth={1} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="md:hidden fixed inset-0 z-40 bg-navy flex flex-col justify-center px-8 sm:px-12"
          >
            {/* Decorative background element */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent opacity-50"></div>
            </div>

            <nav className="relative z-10 flex flex-col space-y-6 mt-16">
              {navLinks.map((link, idx) => (
                <div key={link.path} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{
                      duration: 0.8,
                      ease: [0.76, 0, 0.24, 1],
                      delay: 0.1 + idx * 0.05,
                    }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="group inline-block"
                    >
                      <span className="text-4xl sm:text-5xl font-serif text-white/50 group-hover:text-white transition-colors duration-500">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                </div>
              ))}

              <div className="overflow-hidden pt-8 mt-4 border-t border-white/10">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.4,
                  }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center space-x-4 group"
                  >
                    <span className="text-gold font-bold text-[11px] tracking-[0.3em] uppercase">
                      Book Consultation
                    </span>
                    <span className="w-12 h-[1px] bg-gold/30 group-hover:w-24 group-hover:bg-gold transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"></span>
                  </Link>
                </motion.div>
              </div>
            </nav>

            {/* Footer details in menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute bottom-12 left-8 right-8 flex justify-between items-end text-white/30 text-[9px] uppercase tracking-[0.2em] font-medium"
            >
              <div>
                Lagos HQ
                <br />
                Global Reach
              </div>
              <div className="text-right">Est. 2014</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
