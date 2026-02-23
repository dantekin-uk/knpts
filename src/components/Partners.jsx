import React from 'react';
import { motion } from 'framer-motion';
import naptalogo from '../assets/partnerslogo/napta.jpeg';
import idslogo from '../assets/partnerslogo/ids.png';
import drollLogo from '../assets/partnerslogo/droll.png';

const Partners = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="partners" className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
        {/* The "Big Card" backdrop */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-50 rounded-[4rem] border border-slate-100 shadow-inner mx-4 md:mx-12 overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          {/* Modern Greenish Stripes and Staffs */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #10b981 0px, #10b981 1px, transparent 1px, transparent 50px)' }}></div>
          <div className="absolute inset-0 flex justify-around opacity-[0.02] pointer-events-none px-20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-px h-full bg-sustainable-green"></div>
            ))}
          </div>
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-sustainable-green/5 rounded-full blur-[120px] pointer-events-none"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative z-10 py-12 px-8 md:px-18"
        >
        
          <div className="text-center mb-16">
            <motion.h2 variants={itemVariants} className="text-napta-blue font-bold tracking-[0.4em] text-[9px] uppercase mb-4">Strategic Alliances</motion.h2>
            <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-extrabold text-napta-navy leading-tight tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Powering National <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">Accountability.</span>
            </motion.h3>
          </div>

          <motion.div variants={itemVariants} className="mb-20">
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] text-center mb-10">Convened & Co-Hosted By</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div className="group flex flex-col items-center">
                <div className="h-28 w-64 bg-white rounded-2xl flex items-center justify-center p-6 transition-all duration-500 border border-slate-100 shadow-sm group-hover:border-napta-blue/20 group-hover:shadow-xl group-hover:shadow-napta-blue/5">
                   <img src={naptalogo} alt="NAPTA" className="max-h-full max-w-full object-contain transition-all duration-500" />
                </div>
                <span className="mt-4 text-[8px] font-bold text-slate-400 uppercase tracking-widest">National Alliance</span>
              </div>
              
              <div className="group flex flex-col items-center">
                <div className="h-28 w-64 bg-white rounded-2xl flex items-center justify-center p-6 transition-all duration-500 border border-slate-100 shadow-sm group-hover:border-napta-blue/20 group-hover:shadow-xl group-hover:shadow-napta-blue/5">
                   <img src={idslogo} alt="IDS UoN" className="max-h-full max-w-full object-contain transition-all duration-500" />
                </div>
                <span className="mt-4 text-[8px] font-bold text-slate-400 uppercase tracking-widest">Academic Partner</span>
              </div>
            </div>
          </motion.div>

        <motion.div variants={itemVariants} className="pt-12 border-t border-slate-200/60">
          <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] text-center mb-12">In Partnership With</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center">
            <div className="h-24 flex items-center justify-center transition-all duration-500 cursor-pointer">
               <img src={drollLogo} alt="Droll" className="h-16 md:h-24 w-auto object-contain" />
            </div>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-24 flex items-center justify-center transition-all duration-500 cursor-pointer">
                {/* Placeholder for actual logos */}
                <div className="w-44 h-12 bg-slate-100 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <a href="#" className="inline-flex items-center gap-3 text-[10px] font-black text-napta-blue uppercase tracking-widest group hover:text-sustainable-green transition-colors">
            Become a Strategic Partner 
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </motion.div>

        </motion.div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;