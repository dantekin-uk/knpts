import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';
import Home from './pages/Home';
import Programme from './pages/Programme';
import TheExpo from './pages/Expo';
import Registration from './pages/Registration';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import WhyAttend from './pages/WhyAttend';
import ExcellenceAwards from './pages/ExcellenceAwards';
import InnovationTours from './pages/InnovationTours';
import Networking from './pages/Networking';
import ExhibitWithUs from './pages/ExhibitWithUs';
import PitchDay from './pages/PitchDay';
import Sponsorship from './pages/Sponsorship';
import TransportExpo from './pages/TransportExpo';
import Contact from './pages/Contact';
import PartnersPage from './pages/Partners';
import Speakers from './pages/Speakers';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch(currentPage) {
      case 'Home':
        return <Home setPage={setCurrentPage} />;
      case 'Programme': 
        return <Programme setPage={setCurrentPage} />;
      case 'TransportExpo':
        return <TransportExpo setPage={setCurrentPage} />;
      case 'The Expo': 
        return <TheExpo />;
      case 'ExhibitWithUs':
        return <ExhibitWithUs setPage={setCurrentPage} />;
      case 'PitchDay':
        return <PitchDay setPage={setCurrentPage} />;
      case 'Sponsorship':
        return <Sponsorship setPage={setCurrentPage} />;
      case 'Contact':
        return <Contact setPage={setCurrentPage} />;
      case 'Speakers':
        return <Speakers setPage={setCurrentPage} />;
      case 'Registration': 
        return <Registration />;
      case 'About':
        return <About setPage={setCurrentPage} />;
      case 'Partners':
        return <PartnersPage setPage={setCurrentPage} />;
      case 'WhyAttend':
        return <WhyAttend setPage={setCurrentPage} />;
      case 'InnovationTours':
        return <InnovationTours setPage={setCurrentPage} />;
      case 'ExcellenceAwards':
        return <ExcellenceAwards setPage={setCurrentPage} />;
      case 'Networking':
        return <Networking setPage={setCurrentPage} />;
      default: 
        return <Home setPage={setCurrentPage} />;
    }
  };

  const scrollToAbout = () => {
    if (currentPage !== 'Home') setCurrentPage('Home');
    setTimeout(() => {
      const element = document.getElementById('about');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-napta-blue/20">
      <Navbar activePage={currentPage} setPage={setCurrentPage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setCurrentPage} scrollToAbout={scrollToAbout} />
    </div>
  )
}

export default App
