import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Rationale from '../components/Rationale';
import FloatingDock from '../components/FloatingDock';
import AboutSection from '../components/AboutSection';
import Exhibition from '../components/Exhibition';
import Involvement from '../components/Involvement';
import Speakers from '../components/Speakers';
import Partners from '../components/Partners';
import SummitCountdown from '../components/SummitCountdown';

const Home = ({ setPage }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero setPage={setPage} />
      <FloatingDock />
      <AboutSection setPage={setPage} />
      <Rationale setPage={setPage} />
      <Exhibition setPage={setPage} />
      <SummitCountdown />
      <Speakers setPage={setPage} />
      <Involvement setPage={setPage} />
      <Partners setPage={setPage} />
    </motion.div>
  );
};

export default Home;
