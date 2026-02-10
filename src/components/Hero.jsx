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
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Black overlay for cinematic contrast */}
      <div className="absolute inset-0 z-[1] bg-black/50 backdrop-blur-[1px]"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants} 
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-blue to-sustainable-green">
              Kenya National <br className="hidden md:block" />
              Transport Summit & Expo
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-10 space-y-4">
            <p 
              className="text-lg md:text-xl font-medium text-white max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Building Safe, Sustainable and Inclusive Transport Systems
            </p>
            <p className="text-sm md:text-base font-normal text-slate-300 uppercase tracking-[0.2em]">
              23rd – 25th September 2026 • Nairobi, Kenya
            </p>
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