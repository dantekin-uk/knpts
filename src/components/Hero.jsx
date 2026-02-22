import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = ({ setPage }) => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <header className="relative min-h-screen w-full flex items-center justify-center pt-40 md:pt-52 pb-12 md:pb-20 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        <source src={`${import.meta.env.BASE_URL}hero.mp4`} type="video/mp4" />
      </video>

      {/* Subtle top gradient overlay to improve logo visibility when navbar is transparent */}
      <div className="absolute top-0 left-0 right-0 h-30 bg-gradient-to-r from-white/14 to-black/14 z-[0.5] pointer-events-none"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants} 
            whileHover={{ scale: 1.01 }}
            className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-4 md:mb-6 leading-tight tracking-tight px-4 drop-shadow-2xl cursor-default transition-all duration-300"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Kenya Transport <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">
              Summit 2026
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-8 md:mb-12 space-y-4">
            <p 
              className="text-base md:text-lg lg:text-xl font-medium text-slate-200 max-w-3xl mx-auto leading-relaxed px-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Building Safe, Sustainable and Inclusive Transport Systems
            </p>
            <p className="text-xs md:text-base font-normal text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em]">
              30th Sep - 2nd Oct 2026 • KICC, Nairobi
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 8px 25px rgba(27, 93, 165, 0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-napta-blue hover:bg-napta-navy text-white rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300"
              onClick={() => setPage('Registration')}
            >
              Register Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.03,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-white/5 border border-white/20 text-white rounded-xl font-bold text-base transition-all duration-300"
              onClick={() => setPage('WhyAttend')}
            >
              Why Attend the Summit?
            </motion.button>
          </motion.div>

        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce opacity-60">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </header>
  );
};

export default Hero;