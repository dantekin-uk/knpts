import React from 'react';
import { motion } from 'framer-motion';
import speakerimage from '../assets/speaker.png';

const Speakers = () => {
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
    <section id="speakers" className="py-12 md:py-16 bg-white overflow-hidden">
      <motion.div 
        className="max-w-[1400px] mx-auto px-6 md:px-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-10 lg:gap-x-24">
          
          {/* Image - Middle on mobile, Left on desktop */}
          <motion.div 
            variants={itemVariants}
            className="order-2 lg:order-1 lg:row-span-2 relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 md:border-[12px] border-slate-50 group"
            >
              <img 
                src={speakerimage} 
                alt="High-Level Speakers" 
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/40 via-transparent to-transparent opacity-60"></div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-napta-blue rounded-[2.5rem] -z-0 opacity-10"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sustainable-green rounded-full -z-0 opacity-10 blur-2xl"></div>
          </motion.div>

          {/* Text Content - Top on mobile, Right on desktop */}
          <div className="order-1 lg:order-2">
            <div className="max-w-xl mx-auto lg:mx-0">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-napta-blue"></div>
                <span className="text-napta-blue font-bold tracking-[0.3em] text-[9px] uppercase">Leadership & Insights</span>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className="text-2xl md:text-3xl font-extrabold text-napta-navy leading-tight mb-6 tracking-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Discover Our <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">High-Level Speakers.</span>
              </motion.h2>

              <motion.div variants={itemVariants} className="space-y-6">
                <p className="text-slate-600 text-sm md:text-base font-normal leading-relaxed">
                  The KNTS&E 2026 brings together leading voices from across the multimodal transport sector. Discover the first high-level speakers confirmed for Nairobi who will set the tone for this year’s conversations.
                </p>
                
                <p className="text-slate-500 text-sm leading-relaxed">
                  The full speakers list will continue to expand in the coming months as we confirm leaders from government, the University of Nairobi (IDS), and global industry innovators.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Buttons - Bottom on mobile, Right on desktop */}
          <motion.div 
            variants={itemVariants}
            className="order-3 lg:order-2 mt-4 lg:mt-0"
          >
            <div className="max-w-xl mx-auto lg:mx-0 flex flex-col sm:flex-row items-center gap-8 pt-8 border-t border-slate-100">
              <button className="w-full sm:w-auto px-8 py-3 bg-napta-blue text-white font-bold text-[10px] uppercase tracking-widest rounded-full hover:bg-napta-navy transition-all shadow-lg shadow-napta-blue/10">
                Meet the Speakers
              </button>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-napta-blue transition-colors">
                Become a Speaker →
              </a>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Speakers;