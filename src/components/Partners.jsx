import React from 'react';
import { motion } from 'framer-motion';
import naptalogo from '../assets/partnerslogo/napta.jpeg';
import idslogo from '../assets/partnerslogo/ids.png';
import drollLogo from '../assets/partnerslogo/droll.png';
import partner1 from '../assets/partnerslogo/partner1.webp';
import partner2 from '../assets/partnerslogo/partner2.webp';
import partner3 from '../assets/partnerslogo/partner3.webp';
import partner4 from '../assets/partnerslogo/partner4.jpg';
import partner5 from '../assets/partnerslogo/partner5.jpg';
import partner6 from '../assets/partnerslogo/partner6.png';
import partner7 from '../assets/partnerslogo/partner7.jpg';
import partner8 from '../assets/partnerslogo/partner8.jpeg';
import partner9 from '../assets/partnerslogo/partner9.jpg';
import partner10 from '../assets/partnerslogo/partner10.png';
import partner11 from '../assets/partnerslogo/partner11.png';
import partner12 from '../assets/partnerslogo/partner12.png';
import partner13 from '../assets/partnerslogo/partner13.png';
import partner14 from '../assets/partnerslogo/partner14.jpeg';
import partner15 from '../assets/partnerslogo/partner15.jpeg';
import partner16 from '../assets/partnerslogo/partner16.png';
import partner17 from '../assets/partnerslogo/partner17.png';
import partner18 from '../assets/partnerslogo/partner18.png';
import partner19 from '../assets/partnerslogo/partner19.png';


const Partners = ({ setPage }) => {
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

  const partnerLogos = [
    partner16, partner19, partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8,
    partner9, partner10, partner11, partner12, partner13, partner14, partner15, partner17, partner18
  ];

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

          {/* Layer 1: Organized By */}
          <motion.div variants={itemVariants} className="mb-16">
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] text-center mb-10">Organized By</p>
            <div className="flex justify-center items-center">
              <div className="group flex flex-col items-center">
                <div className="h-24 w-64 flex items-center justify-center transition-all duration-500 group-hover:scale-105">
                   <img src={naptalogo} alt="NAPTA" className="max-h-full max-w-full object-contain transition-all duration-500" />
                </div>
                <span className="mt-4 text-[8px] font-bold text-slate-400 uppercase tracking-widest">National Alliance</span>
              </div>
            </div>
          </motion.div>

          {/* Layer 2: In Partnership With */}
          <motion.div variants={itemVariants} className="mb-16">
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] text-center mb-10">In Partnership With</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div className="group flex flex-col items-center">
                <div className="h-24 w-64 flex items-center justify-center transition-all duration-500 group-hover:scale-105">
                   <img src={idslogo} alt="IDS UoN" className="max-h-full max-w-full object-contain transition-all duration-500" />
                </div>
                <span className="mt-4 text-[8px] font-bold text-slate-400 uppercase tracking-widest">Academic Partner</span>
              </div>

              <div className="group flex flex-col items-center">
                <div className="h-24 w-64 flex items-center justify-center transition-all duration-500 group-hover:scale-105">
                   <img src={drollLogo} alt="Droll" className="max-h-full max-w-full object-contain transition-all duration-500" />
                </div>
                <span className="mt-4 text-[8px] font-bold text-slate-400 uppercase tracking-widest">Technology Partner</span>
              </div>
            </div>
          </motion.div>

          {/* Layer 3: Our Summit Partners */}
          <motion.div variants={itemVariants} className="pt-12 border-t border-slate-200/60">
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] text-center mb-12">Our Summit Partners</p>
            
            <div className="relative w-full overflow-hidden marquee-container">
              {/* Gradient Overlays for smooth edges */}
              <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
              
              <div className="flex gap-12 items-center marquee-content py-4">
                {/* Render logos twice for seamless loop */}
                {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                  <div key={index} className="h-16 w-44 flex-shrink-0 flex items-center justify-center hover:-translate-y-2 hover:scale-110 transition-all duration-500 cursor-pointer group">
                    <img src={logo} alt={`Partner ${index + 1}`} className="max-h-full max-w-full object-contain transition-all duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <button onClick={() => setPage('Contact')} className="inline-flex items-center gap-3 text-[10px] font-black text-napta-blue uppercase tracking-widest group hover:text-sustainable-green transition-colors">
            Become a Strategic Partner 
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </button>
        </motion.div>

        </motion.div>
      </div>
      
      <style>{`
        .marquee-content {
          display: flex;
          width: max-content;
          animation: scroll 45s linear infinite;
        }

        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;