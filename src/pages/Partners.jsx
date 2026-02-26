import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
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
import aboutimage from '../assets/about/about.png';
import discoverimage from '../assets/attend/discover.png';

const Partners = ({ setPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 40]);
  const y2 = useTransform(scrollY, [0, 500], [0, -40]);

  const partnerLogos = [
    partner16, partner19, partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8,
    partner9, partner10, partner11, partner12, partner13, partner14, partner15, partner17, partner18
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative pt-44 lg:pt-52 pb-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div className="w-full lg:w-1/2" variants={containerVariants} initial="hidden" animate="visible">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6">
                
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-4xl font-bold text-napta-navy leading-[1.15] tracking-tight mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Powering National <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Accountability.</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-slate-600 text-sm md:text-base font-normal leading-relaxed max-w-xl mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
                The Kenya Transport Summit 2026 is a collective effort. We partner with the world's most innovative organizations to deliver a world-class experience and shape the national transport agenda.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.button onClick={() => setPage('Contact')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-napta-blue text-white rounded-2xl font-bold text-sm shadow-xl shadow-napta-blue/20 hover:bg-napta-navy transition-all flex items-center gap-2 group">
                  Become a Partner
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div className="w-full lg:w-1/2 relative mt-12 lg:mt-0 h-[380px] sm:h-[480px] lg:h-[560px]" initial="hidden" animate="visible" variants={containerVariants}>
              <motion.div variants={itemVariants} style={{ y: y1 }} className="absolute top-0 right-0 z-10 rounded-[2rem] overflow-hidden shadow-xl w-[82%] lg:w-[78%]">
                <img src={aboutimage} className="w-full h-[310px] sm:h-[390px] lg:h-[460px] object-cover" alt="Partnership" />
                <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/40 via-transparent to-transparent opacity-60"></div>
              </motion.div>
              <motion.div variants={itemVariants} style={{ y: y2 }} className="absolute bottom-0 left-0 z-20 rounded-[1.5rem] overflow-hidden shadow-2xl w-[45%] lg:w-[40%]">
                <img src={discoverimage} className="w-full h-[100px] sm:h-[150px] lg:h-[190px] object-cover" alt="Collaboration" />
              </motion.div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-sustainable-green/10 rounded-full blur-3xl -z-0"></div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Partnership Layers */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Layer 1: Organized By */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] text-center mb-12">Organized By</p>
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
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-24">
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] text-center mb-12">In Partnership With</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
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

          {/* Layer 3: Our Summit Partners Marquee */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pt-16 border-t border-slate-200/60">
            <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em] text-center mb-16">Our Summit Partners</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
              {partnerLogos.map((logo, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="h-32 bg-slate-50/50 rounded-[2rem] border border-slate-100 flex items-center justify-center p-6 transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-napta-blue/5 group cursor-pointer"
                >
                  <img 
                    src={logo} 
                    alt={`Partner ${index + 1}`} 
                    className="max-h-full max-w-full object-contain transition-all duration-500" 
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-50 rounded-[4rem] border border-slate-100 shadow-inner mx-4 md:mx-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #10b981 0px, #10b981 1px, transparent 1px, transparent 50px)' }}></div>
            <div className="absolute inset-0 flex justify-around opacity-[0.02] pointer-events-none px-20">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-px h-full bg-sustainable-green"></div>
              ))}
            </div>
          </div>

          <div className="relative z-10 py-16 px-8 md:px-18 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-napta-navy mb-8 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Ecosystem.</span>
              </h2>
              <p className="text-slate-600 text-xs md:text-sm font-normal max-w-xl mx-auto mb-10 leading-relaxed">
                Partner with the Kenya Transport Summit 2026 to showcase your leadership and connect with the decision-makers shaping the future of mobility.
              </p>
              <div className="flex justify-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('Contact')}
                  className="px-10 py-4 bg-napta-blue text-white rounded-2xl font-bold text-base shadow-xl shadow-napta-blue/20 transition-all flex items-center gap-2 group"
                >
                  Contact Partnership Team
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;