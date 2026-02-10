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
    <header className="relative h-screen w-full flex items-center justify-center pt-32 pb-20 overflow-hidden">
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

      {/* Gradient overlay for modern look */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-napta-blue/20 to-sustainable-green/10"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="backdrop-blur-sm bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-napta-blue to-sustainable-green text-white text-xs font-bold tracking-widest"
          >
            KTS&E 2026
          </motion.div>
          
          <motion.h1 
            variants={itemVariants} 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight px-4"
            style={{ 
              fontFamily: "'Poppins', sans-serif",
              textShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              Kenya Transport Summit 2026
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-10 space-y-6">
            <p 
              className="text-lg md:text-xl font-medium text-slate-200 max-w-3xl mx-auto leading-relaxed"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              Building Safe, Sustainable and Inclusive Transport Systems
            </p>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-1 bg-gradient-to-r from-napta-blue to-sustainable-green rounded-full"></div>
              <p className="text-sm font-medium text-slate-300 uppercase tracking-[0.3em] mt-2">
                30th Sep - 2nd Oct 2026
              </p>
              <p className="text-napta-blue font-semibold text-sm">KICC, Nairobi</p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 8px 25px rgba(27, 93, 165, 0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="px-6 py-3 bg-napta-blue hover:bg-napta-navy text-white rounded-xl font-bold text-base flex items-center gap-2 transition-all duration-300"
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
              onClick={() => setPage('Programme')}
            >
              View Programme
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