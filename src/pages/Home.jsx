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
      <Rationale />
      <Exhibition />
      <Speakers />
      <Involvement />
      <Partners />
    </motion.div>
  );
};

export default Home;
