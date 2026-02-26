import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, Coffee, MessageSquare, Briefcase, Globe, ArrowRight, Building2, Zap, DollarSign, Smartphone, ShieldCheck } from 'lucide-react';

import discoverimage from '../assets/attend/discover.png';

import inovationimage from '../assets/attend/inovation.png';
import networkingimage from '../assets/program/networking1.jpg';
import dealimage from '../assets/program/networking2.jpg';
import galaimage from '../assets/program/networking3.jpg';

const Networking = ({ setPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Parallax logic for hero images
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 40]);
  const y2 = useTransform(scrollY, [0, 500], [0, -40]);

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

  const stakeholders = [
    { title: "The Policymakers", desc: "Ministry officials, county governors, and regulatory bodies (NTSA, KeNHA, KPA).", icon: Building2 },
    { title: "The Capital", desc: "Global infrastructure funds, DFIs, and private equity investors.", icon: DollarSign },
    { title: "The Innovators", desc: "Silicon Savannah tech founders, E-Mobility OEMs, and digital logistics architects.", icon: Zap },
    { title: "The Operators", desc: "Heavy rail executives, airline directors, and large-scale PSV fleet managers.", icon: Users }
  ];

  const formats = [
    {
      id: "01",
      title: "The B2B Deal Rooms",
      focus: "Investment & Procurement",
      desc: "Move away from the noise of the Expo floor. Our dedicated B2B Deal Rooms offer secure, private spaces for project sponsors to sit directly across the table from institutional investors and government procurement teams.",
      image: dealimage
    },
    {
      id: "02",
      title: "Executive Luncheons & VIP Gala",
      focus: "High-Level Relationship Building",
      desc: "Access exclusive, invitation-only dining experiences. From daily C-Suite luncheons to the prestigious Excellence Awards Gala, these environments are designed for relationship building in a premium setting.",
      image: galaimage
    },
    {
      id: "03",
      title: "The Innovation Expo Floor",
      focus: "Product Discovery & Technical Partnerships",
      desc: "The bustling heart of the summit. Walk the curated Expo floor to engage directly with startups, SMEs, and global manufacturers. This is the space for spontaneous, high-value collisions.",
      image: discoverimage
    },
    {
      id: "04",
      title: "The KTSE Digital Concierge",
      focus: "Curated AI-Driven Networking",
      desc: "Do not leave your networking to chance. Use our AI-driven matchmaking algorithm to filter attendees by sector or capital allocation, and pre-book 1-on-1 meetings directly to your calendar.",
      image: inovationimage
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative pt-44 lg:pt-52 pb-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div 
              className="w-full lg:w-1/2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6">
                
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-4xl font-bold text-napta-navy leading-[1.15] tracking-tight mb-8"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Strategic Connections <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">& Deal-Making.</span>
              </motion.h1> 

              <motion.p 
                variants={itemVariants}
                className="text-slate-600 text-sm md:text-base font-normal leading-relaxed max-w-xl mb-10"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Where Capital Meets Execution in East Africa. We have engineered a highly curated networking environment designed specifically to facilitate high-level bilateral discussions and targeted investment matching.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('Registration')}
                  className="px-8 py-4 bg-napta-blue text-white rounded-2xl font-bold text-sm shadow-xl shadow-napta-blue/20 hover:bg-napta-navy transition-all flex items-center gap-2 group"
                >
                  Secure Delegate Pass
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-1/2 relative mt-12 lg:mt-0 h-[380px] sm:h-[480px] lg:h-[560px]"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div 
                variants={itemVariants}
                style={{ y: y1 }}
                className="absolute top-0 right-0 z-10 rounded-[2rem] overflow-hidden shadow-xl w-[82%] lg:w-[78%]"
              >
                <img src={networkingimage} className="w-full h-[310px] sm:h-[390px] lg:h-[460px] object-cover" alt="Networking" />
                <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/40 via-transparent to-transparent opacity-60"></div>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                style={{ y: y2 }}
                className="absolute bottom-0 left-0 z-20 rounded-[1.5rem] overflow-hidden shadow-2xl w-[45%] lg:w-[40%]"
              >
                <img src={galaimage} className="w-full h-[100px] sm:h-[150px] lg:h-[190px] object-cover" alt="Deal Making" />
              </motion.div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-sustainable-green/10 rounded-full blur-3xl -z-0"></div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Ecosystem Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-napta-navy rounded-[3rem] overflow-hidden p-8 md:p-12 lg:p-16 shadow-2xl shadow-napta-navy/20"
          >
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #10b981 0px, #10b981 1px, transparent 1px, transparent 50px)' }}></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/3 w-full max-w-sm">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10"
                >
                  <img src={dealimage} alt="Who is in the room" className="w-full h-[250px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/60 via-transparent to-transparent opacity-60"></div>
                </motion.div>
              </div>

              <div className="lg:w-2/3 text-left">
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  The Convergence of <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Power and Innovation.</span>
                </h2>
                <p className="text-slate-300 text-sm md:text-base font-normal leading-relaxed mb-8">
                  KTSE 2026 brings together a strictly vetted delegation of the most critical stakeholders in the regional transport ecosystem. Secure your pass for direct access to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {stakeholders.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                        <item.icon size={20} className="text-sustainable-green" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Networking Formats Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
          {/* The "Big Card" backdrop */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-50 rounded-[4rem] border border-slate-100 shadow-inner mx-4 md:mx-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #10b981 0px, #10b981 1px, transparent 1px, transparent 50px)' }}></div>
            <div className="absolute inset-0 flex justify-around opacity-[0.02] pointer-events-none px-20">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-px h-full bg-sustainable-green"></div>
              ))}
            </div>
          </div>

          <div className="relative z-10 py-12 px-8 md:px-18">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-napta-navy tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                How Connections <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">Happen.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {formats.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -15, scale: 1.01 }}
                  className="group relative flex flex-col min-h-[420px] rounded-[2.5rem] bg-white border border-slate-100 p-3 transition-all duration-700 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-20px_rgba(27,93,165,0.15)] hover:border-napta-blue/20"
                >
                  <div className="relative h-[140px] w-full rounded-[2rem] overflow-hidden mb-5">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 opacity-60"></div>
                  </div>
                  
                  <div className="px-3 pb-3 flex flex-col flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-napta-blue/20 font-black text-2xl leading-none group-hover:text-napta-blue transition-colors duration-500">
                        {item.id}
                      </span>
                      <h4 className="text-base font-bold text-napta-navy leading-tight group-hover:text-napta-blue transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    
                    <div className="mb-3">
                      <span className="text-[9px] font-bold text-sustainable-green uppercase tracking-widest bg-sustainable-green/5 px-2 py-1 rounded-md">
                        {item.focus}
                      </span>
                    </div>

                    <p className="text-slate-600 text-xs leading-relaxed font-normal mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.desc}
                    </p>

                    <div className="mt-auto">
                      <div className="w-8 h-[2px] bg-slate-100 group-hover:w-full transition-all duration-700 group-hover:bg-napta-blue/30"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
          {/* The "Big Card" backdrop */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-50 rounded-[4rem] border border-slate-100 shadow-inner mx-4 md:mx-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #10b981 0px, #10b981 1px, transparent 1px, transparent 50px)' }}></div>
          </div>

          <div className="relative z-10 py-16 px-8 md:px-18 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-napta-navy mb-8 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Position Yourself at the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Center of the Mandate.</span>
              </h2>
              <p className="text-slate-600 text-xs md:text-sm font-normal max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                The most important conversations in East African transport will happen at KTSE 2026. Will you be at the table?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('Registration')}
                  className="px-10 py-4 bg-napta-blue text-white rounded-2xl font-bold text-base shadow-xl shadow-napta-blue/20 transition-all flex items-center gap-2 group"
                >
                  Secure Your Delegate Pass
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white border border-slate-200 text-napta-navy rounded-2xl font-bold text-base shadow-sm hover:shadow-md transition-all"
                >
                  Inquire About Sponsorship
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Networking;