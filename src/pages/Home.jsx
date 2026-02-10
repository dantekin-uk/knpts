import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Strategic from '../components/Strategic';
import Rationale from '../components/Rationale';
import FloatingDock from '../components/FloatingDock';
import AboutSection from '../components/AboutSection';

const Home = ({ setPage }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero setPage={setPage} />
      <FloatingDock />
      <AboutSection />
      <Strategic />
      <Rationale />
    </motion.div>
  );
};

export default Home;
