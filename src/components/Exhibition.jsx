import React from 'react';
import { motion } from 'framer-motion';
import expoimage1 from '../assets/attend/discover.png';

const Exhibition = ({ setPage }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="exhibition" className="py-20 bg-[#f8faf9] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <motion.div 
        className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
          
          {/* Left Column: Content */}
          <div className="lg:w-1/2 relative z-10">
            <div className="max-w-xl mx-auto lg:mx-0">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-napta-blue"></div>
                <span className="text-napta-blue font-bold tracking-[0.3em] text-[9px] uppercase">The Marketplace</span>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className="text-2xl md:text-3xl font-extrabold text-napta-navy leading-tight mb-6 tracking-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                2026 Exhibitors List <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">coming soon!</span>
              </motion.h2>

              <motion.div variants={itemVariants} className="space-y-6">
                <p className="text-slate-900 text-lg font-bold leading-tight">
                  Meet the companies and organisations exhibiting at the Summit
                </p>
                <p className="text-slate-600 text-sm md:text-base font-normal leading-relaxed">
                  Discover the companies and organisations already confirmed to take part in the exhibition and explore the latest industry leaders shaping the future of public transport.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="mt-8 flex flex-col sm:flex-row items-center gap-8 pt-8 border-t border-slate-200/60"
              >
                <button onClick={() => setPage('TransportExpo')} className="w-full sm:w-auto px-8 py-3 bg-napta-blue text-white font-bold text-[10px] uppercase tracking-widest rounded-full hover:bg-napta-navy transition-all shadow-lg shadow-napta-blue/10">
                  Explore the Expo
                </button>
              </motion.div>
            </div>
          </div>

          {/* Right Column: High-Impact Image */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl group"
            >
              <img 
                src={expoimage1}
                alt="Exhibition Hall" 
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/40 via-transparent to-transparent opacity-60"></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Exhibition;