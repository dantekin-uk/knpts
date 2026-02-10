import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, UserPlus } from 'lucide-react';

const navLinks = [
  { name: 'Home', id: 'Home' },
  { name: 'Programme', id: 'Programme' },
  { name: 'The Expo', id: 'The Expo' },
  { name: 'About', id: 'About' }
];

const Navbar = ({ activePage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (id === 'About') {
      if (activePage !== 'Home') {
        setPage('Home');
      }
      setTimeout(() => {
        const element = document.getElementById('about');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (id === 'Home') {
      setPage(id);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-lg py-3 border-slate-200/50 shadow-sm' 
        : 'bg-transparent py-6 border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <motion.div 
            className="flex items-center gap-2 md:gap-2.5 cursor-pointer group"
            onClick={() => setPage('Home')}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-8 h-8 md:w-9 md:h-9 bg-napta-navy rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-napta-navy/20 group-hover:scale-110 transition-transform duration-300">
              <Zap className="text-white w-4 h-4 md:w-5 md:h-5 fill-white" />
            </div>
            <span className={`font-bold text-lg md:text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              KTS&E <span className="text-napta-blue">2026</span>
            </span>
          </motion.div>
        </div>
        
        {/* Desktop Nav - Shifted slightly right */}
        <div className="hidden md:flex items-center gap-1 absolute left-[53%] -translate-x-1/2">
          {navLinks.map((link) => (
            <motion.button 
              key={link.id} 
              onClick={() => handleNavClick(link.id)}
              whileHover="hover"
              initial="initial"
              className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-lg ${
                activePage === link.id 
                  ? 'text-napta-blue' 
                  : scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-200 hover:text-white'
              }`}
            >
              <motion.span 
                variants={{ hover: { y: -2 } }}
                className="relative z-10 block"
              >
                {link.name}
              </motion.span>

              <motion.div
                variants={{
                  initial: { opacity: 0, scale: 0.9, y: 0 },
                  hover: { opacity: 1, scale: 1, y: -2 }
                }}
                className={`absolute inset-0 rounded-lg -z-0 ${
                  scrolled ? 'bg-slate-100' : 'bg-white/10'
                }`}
              />

              {activePage === link.id && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-napta-blue rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Register Button */}
        <div className="flex-1 hidden md:flex justify-end">
          <div className={`${scrolled ? '' : 'ml-4 pl-4 border-l border-slate-200/20'}`}>
            <motion.button 
              onClick={() => {}} 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg active:scale-95 flex items-center gap-2 ${
                scrolled 
                  ? 'bg-napta-blue text-white hover:bg-napta-navy shadow-napta-blue/20' 
                  : 'bg-white text-napta-navy hover:bg-napta-blue hover:text-white shadow-white/10'
              }`}
            >
              <UserPlus size={18} />
              Register
            </motion.button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          }`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 md:hidden shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <motion.button 
                  key={link.id} 
                  whileHover={{ x: 10, backgroundColor: "rgba(8, 145, 178, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-3 text-lg font-bold text-left rounded-xl transition-colors ${
                    activePage === link.id ? 'bg-slate-50 text-napta-blue' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                  onClick={() => { handleNavClick(link.id); setIsOpen(false); }}
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { setIsOpen(false); }}
                className={`mt-4 w-full py-4 rounded-xl font-black text-center shadow-xl transition-all flex items-center justify-center gap-2 ${
                  activePage === 'Registration'
                    ? 'bg-napta-navy text-white shadow-napta-navy/20'
                    : 'bg-napta-blue text-white shadow-napta-blue/20'
                }`}
              >
                <UserPlus size={20} />
                Register
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;