import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, UserPlus, ChevronDown, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Summit', id: 'Summit' },
  { name: 'Programme', id: 'Programme' },
  { name: 'Speakers', id: 'Speakers' },
  { name: 'Expo & Sponsor', id: 'The Expo' },
  
];

const Navbar = ({ activePage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSummitHovered, setIsSummitHovered] = useState(false);
  const [isProgrammeHovered, setIsProgrammeHovered] = useState(false);
  const [isExpoHovered, setIsExpoHovered] = useState(false);
  const [isMobileProgrammeOpen, setIsMobileProgrammeOpen] = useState(false);
  const [isMobileSummitOpen, setIsMobileSummitOpen] = useState(false);
  const [isMobileExpoOpen, setIsMobileExpoOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Reset mobile sub-menu when main menu closes
  useEffect(() => {
    if (!isOpen) {
      setIsMobileSummitOpen(false);
      setIsMobileProgrammeOpen(false);
      setIsMobileExpoOpen(false);
    }
  }, [isOpen]);

  const handleNavClick = (id) => {
    if (id === 'Summit') {
      setPage('About');
    } else if (id === 'Programme') {
      setPage('Programme');
    } else if (id === 'The Expo') {
      setPage('TransportExpo');
    } else {
      setPage(id);
    }
  };

  const isLinkActive = (linkId) => {
    if (activePage === linkId) return true;
    if (linkId === 'Summit' && ['About', 'WhyAttend', 'Partners'].includes(activePage)) return true;
    if (linkId === 'Programme' && ['Programme', 'InnovationTours', 'ExcellenceAwards', 'Networking'].includes(activePage)) return true;
    if (linkId === 'The Expo' && ['TransportExpo', 'The Expo', 'ExhibitWithUs', 'PitchDay', 'Sponsorship'].includes(activePage)) return true;
    return false;
  };

  const isHome = activePage === 'Home';
  const showScrolledStyle = scrolled || !isHome || isMobile;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b h-20 md:h-24 ${
      showScrolledStyle 
        ? 'bg-white/90 backdrop-blur-xl border-slate-200/60 shadow-lg' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 flex justify-between items-center relative h-full">
        {/* Logo */}
        <div className="flex-1 flex justify-start h-full relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center cursor-pointer group z-20"
            onClick={() => setPage('Home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Subtle Glow Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.2 }}
              className={`absolute inset-0 -z-10 blur-3xl rounded-full transition-colors duration-500 ${
                showScrolledStyle ? 'bg-napta-blue/20' : 'bg-white/25'
              }`}
            />
            <img src={logo} alt="NAPTA Logo" className="h-60 md:h-70 w-auto object-contain transition-all duration-500 filter drop-shadow-md group-hover:drop-shadow-xl scale-110 origin-left flex-shrink-0" />
          </motion.div>
        </div>
        
        {/* Desktop Nav - Shifted slightly right */}
        <div className="hidden md:flex items-center gap-1 absolute left-[53%] -translate-x-1/2 z-30 font-medium">
          {navLinks.map((link) => (
            <div 
              key={link.id}
              className="relative"
              onMouseEnter={() => {
                if (link.id === 'Summit') setIsSummitHovered(true);
                if (link.id === 'Programme') setIsProgrammeHovered(true);
                if (link.id === 'The Expo') setIsExpoHovered(true);
              }}
              onMouseLeave={() => {
                if (link.id === 'Summit') setIsSummitHovered(false);
                if (link.id === 'Programme') setIsProgrammeHovered(false);
                if (link.id === 'The Expo') setIsExpoHovered(false);
              }}
            >
              <motion.button 
                onClick={() => handleNavClick(link.id)}
                whileHover="hover"
                initial="initial"
                className={`relative px-5 py-2.5 text-base font-bold transition-colors duration-300 rounded-lg flex items-center gap-1 ${
                  isLinkActive(link.id)
                    ? 'text-napta-blue' 
                    : showScrolledStyle ? 'text-slate-600 hover:text-napta-navy' : 'text-slate-200 hover:text-white'
                }`}
              >
                <motion.span 
                  variants={{ hover: { y: -2 } }}
                  className="relative z-10 block"
                >
                  {link.name}
                </motion.span>
                {(link.id === 'Summit' || link.id === 'Programme' || link.id === 'The Expo') && (
                  <ChevronDown size={14} className={`transition-transform duration-300 ${
                    (link.id === 'Summit' && isSummitHovered) || 
                    (link.id === 'Programme' && isProgrammeHovered) ||
                    (link.id === 'The Expo' && isExpoHovered) ? 'rotate-180' : ''
                  }`} />
                )}

                <motion.div
                  variants={{
                    initial: { opacity: 0, scale: 0.9, y: 0 },
                    hover: { opacity: 1, scale: 1, y: -2 }
                  }}
                  className={`absolute inset-0 rounded-lg -z-0 ${
                    showScrolledStyle ? 'bg-slate-100' : 'bg-white/10'
                  }`}
                />

                {isLinkActive(link.id) && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-napta-blue rounded-full"
                  />
                )}
              </motion.button>

              {/* Dropdown Menu */}
              {link.id === 'Summit' && (
                <AnimatePresence>
                  {isSummitHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-4 w-64 z-50"
                    >
                      <div className="bg-napta-navy backdrop-blur-xl rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-white/10 overflow-hidden p-2">
                      <motion.button
                        onClick={() => {
                          setPage('About');
                          setIsSummitHovered(false);
                        }}
                        whileHover={{ x: 4 }}
                        className="group w-full text-left px-6 py-4 text-base font-bold text-white/90 hover:bg-white/10 hover:text-white rounded-2xl transition-all flex items-center justify-between"
                      >
                        <div className="transition-transform duration-300">
                          About the Summit
                        </div>
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                      </motion.button>
                      <motion.button
                        onClick={() => {
                          setPage('WhyAttend');
                          setIsSummitHovered(false);
                        }}
                        whileHover={{ x: 4 }}
                        className="group w-full text-left px-6 py-4 text-base font-bold text-white/90 hover:bg-white/10 hover:text-white rounded-2xl transition-all flex items-center justify-between"
                      >
                        <div className="transition-transform duration-300">
                          Why Attend
                        </div>
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                      </motion.button>
                      <motion.button
                        onClick={() => {
                          setPage('Partners');
                          setIsSummitHovered(false);
                        }}
                        whileHover={{ x: 4 }}
                        className="group w-full text-left px-6 py-4 text-base font-bold text-white/90 hover:bg-white/10 hover:text-white rounded-2xl transition-all flex items-center justify-between"
                      >
                        <div className="transition-transform duration-300">
                          Partners
                        </div>
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                      </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Programme Dropdown Menu */}
              {link.id === 'Programme' && (
                <AnimatePresence>
                  {isProgrammeHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-4 w-72 z-50"
                    >
                      <div className="bg-napta-navy backdrop-blur-xl rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-white/10 overflow-hidden p-2">
                      {[
                        { name: 'Full Programme', id: 'Programme' },
                        { name: 'Innovation Guided Tours', id: 'InnovationTours' },
                        { name: 'Excellence Awards 2026', id: 'ExcellenceAwards' },
                        { name: 'Networking Opportunities', id: 'Networking' }
                      ].map((subLink) => (
                        <motion.button
                          key={subLink.id}
                          onClick={() => {
                            setPage(subLink.id);
                            setIsProgrammeHovered(false);
                          }}
                          whileHover={{ x: 4 }}
                          className="group w-full text-left px-6 py-4 text-base font-bold text-white/90 hover:bg-white/10 hover:text-white rounded-2xl transition-all flex items-center justify-between"
                        >
                          <div className="transition-transform duration-300">
                            {subLink.name}
                          </div>
                          <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                        </motion.button>
                      ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Expo Dropdown Menu */}
              {link.id === 'The Expo' && (
                <AnimatePresence>
                  {isExpoHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-4 w-80 z-50"
                    >
                      <div className="bg-napta-navy backdrop-blur-xl rounded-[2rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-white/10 overflow-hidden p-2">
                      {[
                        { name: 'The 3-Day Transport Expo', id: 'TransportExpo' },
                        { name: 'Exhibit With Us', id: 'ExhibitWithUs' },
                        { name: 'Summit Pitch Day', id: 'PitchDay' },
                        { name: 'Sponsorship & Strategic Partnerships', id: 'Sponsorship' }
                      ].map((subLink) => (
                        <motion.button
                          key={subLink.id}
                          onClick={() => {
                            setPage(subLink.id);
                            setIsExpoHovered(false);
                          }}
                          whileHover={{ x: 4 }}
                          className="group w-full text-left px-6 py-4 text-base font-bold text-white/90 hover:bg-white/10 hover:text-white rounded-2xl transition-all flex items-center justify-between"
                        >
                          <div className="transition-transform duration-300">
                            {subLink.name}
                          </div>
                          <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                        </motion.button>
                      ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Register Button */}
        <div className="flex-1 hidden md:flex justify-end">
          <div className={`${scrolled ? '' : 'ml-4 pl-4 border-l border-slate-200/20'}`}>
            <motion.button 
              onClick={() => setPage('Registration')} 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-xl font-bold text-base transition-all duration-300 shadow-lg active:scale-95 flex items-center gap-2 ${
                showScrolledStyle 
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
            showScrolledStyle ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
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
            className="absolute top-full left-4 right-4 mt-2 bg-napta-navy rounded-3xl border border-white/10 md:hidden shadow-2xl max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.filter(l => !['Summit', 'Programme', 'The Expo'].includes(l.id)).map((link) => (
                <motion.button 
                  key={link.id} 
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-3 text-lg font-bold text-left rounded-2xl transition-colors ${
                    activePage === link.id ? 'bg-napta-blue text-white' : 'text-white/90 hover:bg-white/10'
                  }`}
                  onClick={() => { 
                    handleNavClick(link.id); 
                    setIsOpen(false); 
                  }}
                >
                  {link.name}
                </motion.button>
              ))}
              
              <div className="h-px bg-white/10 my-2 mx-4" />
              
              <motion.button 
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-3 text-lg font-bold text-left rounded-2xl transition-colors flex items-center justify-between ${
                  ['About', 'WhyAttend', 'Partners'].includes(activePage) ? 'text-white' : 'text-white/90'
                }`}
                onClick={() => setIsMobileSummitOpen(!isMobileSummitOpen)}
              >
                Summit
                <ChevronDown size={20} className={`text-white/50 transition-transform duration-300 ${isMobileSummitOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isMobileSummitOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden flex flex-col pl-4 gap-1"
                  >
                    <button 
                      className={`px-4 py-2 text-base font-bold text-left rounded-xl transition-colors ${activePage === 'About' ? 'text-white bg-napta-blue' : 'text-white/70 hover:bg-white/10'}`}
                      onClick={() => { setPage('About'); setIsOpen(false); }}
                    >
                      About the Summit
                    </button>
                    <button 
                      className={`px-4 py-2 text-base font-bold text-left rounded-xl transition-colors ${activePage === 'WhyAttend' ? 'text-white bg-napta-blue' : 'text-white/70 hover:bg-white/10'}`}
                      onClick={() => { setPage('WhyAttend'); setIsOpen(false); }}
                    >
                      Why Attend?
                    </button>
                    <button 
                      className={`px-4 py-2 text-base font-bold text-left rounded-xl transition-colors ${activePage === 'Partners' ? 'text-white bg-napta-blue' : 'text-white/70 hover:bg-white/10'}`}
                      onClick={() => { setPage('Partners'); setIsOpen(false); }}
                    >
                      Partners
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button 
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-3 text-lg font-bold text-left rounded-2xl transition-colors flex items-center justify-between ${
                  ['Programme', 'InnovationTours', 'ExcellenceAwards', 'Networking'].includes(activePage) ? 'text-white' : 'text-white/90'
                }`}
                onClick={() => setIsMobileProgrammeOpen(!isMobileProgrammeOpen)}
              >
                Programme
                <ChevronDown size={20} className={`text-white/50 transition-transform duration-300 ${isMobileProgrammeOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isMobileProgrammeOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden flex flex-col pl-4 gap-1"
                  >
                    <button 
                      className={`px-4 py-2 text-base font-bold text-left rounded-xl transition-colors ${activePage === 'Programme' ? 'text-white bg-napta-blue' : 'text-white/70 hover:bg-white/10'}`}
                      onClick={() => { setPage('Programme'); setIsOpen(false); }}
                    >
                      Full Programme
                    </button>
                    <button 
                      className={`px-4 py-2 text-base font-bold text-left rounded-xl transition-colors ${activePage === 'InnovationTours' ? 'text-white bg-napta-blue' : 'text-white/70 hover:bg-white/10'}`}
                      onClick={() => { setPage('InnovationTours'); setIsOpen(false); }}
                    >
                      Innovation Guided Tours
                    </button>
                    <button 
                      className={`px-4 py-2 text-base font-bold text-left rounded-xl transition-colors ${activePage === 'ExcellenceAwards' ? 'text-white bg-napta-blue' : 'text-white/70 hover:bg-white/10'}`}
                      onClick={() => { setPage('ExcellenceAwards'); setIsOpen(false); }}
                    >
                      Excellence Awards 2026
                    </button>
                    <button 
                      className={`px-4 py-2 text-base font-bold text-left rounded-xl transition-colors ${activePage === 'Networking' ? 'text-white bg-napta-blue' : 'text-white/70 hover:bg-white/10'}`}
                      onClick={() => { setPage('Networking'); setIsOpen(false); }}
                    >
                      Networking Opportunities
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button 
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-3 text-lg font-bold text-left rounded-2xl transition-colors flex items-center justify-between ${
                  ['TransportExpo', 'The Expo', 'ExhibitWithUs', 'PitchDay', 'Sponsorship'].includes(activePage) ? 'text-white' : 'text-white/90'
                }`}
                onClick={() => setIsMobileExpoOpen(!isMobileExpoOpen)}
              >
                Expo & Sponsor
                <ChevronDown size={20} className={`text-white/50 transition-transform duration-300 ${isMobileExpoOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isMobileExpoOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden flex flex-col pl-4 gap-1"
                  >
                    <button 
                      className={`px-4 py-2 text-base font-bold text-left rounded-xl transition-colors ${activePage === 'TransportExpo' ? 'text-white bg-napta-blue' : 'text-white/70 hover:bg-white/10'}`}
                      onClick={() => { setPage('TransportExpo'); setIsOpen(false); }}
                    >
                      The 3-Day Transport Expo
                    </button>
                    <button 
                      className={`px-4 py-2 text-base font-bold text-left rounded-xl transition-colors ${activePage === 'The Expo' ? 'text-white bg-napta-blue' : 'text-white/70 hover:bg-white/10'}`}
                      onClick={() => { setPage('The Expo'); setIsOpen(false); }}
                    >
                      The 3-Day Transport Expo
                    </button>
                    <button 
                      className={`px-4 py-2 text-base font-bold text-left rounded-xl transition-colors ${activePage === 'ExhibitWithUs' ? 'text-white bg-napta-blue' : 'text-white/70 hover:bg-white/10'}`}
                      onClick={() => { setPage('ExhibitWithUs'); setIsOpen(false); }}
                    >
                      Exhibit With Us
                    </button>
                    <button 
                      className={`px-4 py-2 text-base font-bold text-left rounded-xl transition-colors ${activePage === 'PitchDay' ? 'text-white bg-napta-blue' : 'text-white/70 hover:bg-white/10'}`}
                      onClick={() => { setPage('PitchDay'); setIsOpen(false); }}
                    >
                      Summit Pitch Day
                    </button>
                    <button 
                      className={`px-4 py-2 text-base font-bold text-left rounded-xl transition-colors ${activePage === 'Sponsorship' ? 'text-white bg-napta-blue' : 'text-white/70 hover:bg-white/10'}`}
                      onClick={() => { setPage('Sponsorship'); setIsOpen(false); }}
                    >
                      Sponsorship & Strategic Partnerships
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => { 
                  setPage('Registration');
                  setIsOpen(false); 
                }}
                className="mt-4 w-full py-4 rounded-xl font-bold text-center shadow-xl transition-all flex items-center justify-center gap-2 bg-white text-napta-blue"
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