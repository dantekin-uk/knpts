import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Star, ShieldCheck, Zap, Users, Building2, ArrowRight, Award, Gavel, Crown, Briefcase, Globe, FileText } from 'lucide-react';
import aboutimage from '../assets/about/about.png';
import whyattendimage from '../assets/attend/whyattend.png';
import excelenceimage from '../assets/program/excelence.jpg';
import excelenceimage2 from '../assets/program/excelence1.jpg';


const ExcellenceAwards = ({ setPage }) => {
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

  const categories = [
    { 
      id: "01",
      title: "The Infrastructure Project of the Year", 
      icon: Building2, 
      desc: "Recognizing the most impactful physical infrastructure development spanning aviation, rail, marine, or road networks that has successfully bridged the 'missing links' and drastically improved intermodal connectivity." 
    },
    { 
      id: "02",
      title: "The Vision Zero Safety Initiative", 
      icon: ShieldCheck, 
      desc: "Awarded to the organization, county, or technology provider that has implemented the most effective solutions to protect vulnerable road users and eliminate fatalities on our transport corridors." 
    },
    { 
      id: "03",
      title: "The Green Mobility & Climate Champion", 
      icon: Zap, 
      desc: "Celebrating the absolute pioneers of the energy transition. This honors the most scalable innovations in E-Mobility, EV charging networks, and low-emission fleet management." 
    },
    { 
      id: "04",
      title: "The Digital Transformation & ITS Award", 
      icon: Globe, 
      desc: "Highlighting the 'Silicon Savannah' at work. Awarded for the best deployment of Intelligent Transport Systems (ITS), AI, digital freight platforms, or cashless ticketing to optimize logistics and passenger transit." 
    },
    { 
      id: "05",
      title: "The Deal of the Year (Financing & PPPs)", 
      icon: Briefcase, 
      desc: "Recognizing the financial institutions, DFIs, or government bodies that have successfully structured the most innovative Public-Private Partnership (PPP) or unlocked significant capital for a major transport project." 
    },
    { 
      id: "06",
      title: "Public Transport Operator of the Year", 
      icon: Users, 
      desc: "Honoring the PSV operator, rail network, or aviation service that sets the gold standard for fleet reliability, passenger experience, and operational governance." 
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
                The KTSE Transport <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Excellence Awards 2026.</span>
              </motion.h1> 

              <motion.p 
                variants={itemVariants}
                className="text-slate-600 text-sm md:text-base font-normal leading-relaxed max-w-xl mb-10"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Honoring the Visionaries Driving Africa’s Multi-Modal Future. The crowning event of the Kenya Transport Summit & Expo recognizing the leaders transforming the ecosystem.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('Registration')}
                  className="px-8 py-4 bg-napta-blue text-white rounded-2xl font-bold text-sm shadow-xl shadow-napta-blue/20 hover:bg-napta-navy transition-all flex items-center gap-2 group"
                >
                  Register Now
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
                <img src={excelenceimage} className="w-full h-[310px] sm:h-[390px] lg:h-[460px] object-cover" alt="Gala Dinner" />
                <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/40 via-transparent to-transparent opacity-60"></div>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                style={{ y: y2 }}
                className="absolute bottom-0 left-0 z-20 rounded-[1.5rem] overflow-hidden shadow-2xl w-[45%] lg:w-[40%]"
              >
                <img src={aboutimage} className="w-full h-[100px] sm:h-[150px] lg:h-[190px] object-cover" alt="Award Trophy" />
              </motion.div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-sustainable-green/10 rounded-full blur-3xl -z-0"></div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* The Mandate Section */}
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
                  <img src={excelenceimage2} alt="Celebrating Delivery" className="w-full h-[250px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/60 via-transparent to-transparent opacity-60"></div>
                </motion.div>
              </div>

              <div className="lg:w-2/3 text-left">
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Celebrating <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Delivery & Innovation.</span>
                </h2>
                <div className="space-y-6 text-slate-300 text-sm md:text-base font-normal leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <p>
                    At KTSE 2026, we believe that true progress is measured by impact. The Excellence Awards do not just celebrate ideas; they recognize bankable projects, breakthrough technologies, and visionary leadership that have demonstrably improved safety, sustainability, and efficiency across our national networks.
                  </p>
                  <p>
                    Winning a KTSE Award is a testament to operational superiority and institutional excellence. This is where execution is celebrated, and industry standards are set.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Award Categories Section */}
      <section className="py-12 bg-white overflow-hidden">
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

          <div className="relative z-10 py-10 px-8 md:px-18">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-napta-navy tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                The 2026 <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">Award Categories.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.01 }}
                  className="p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-xl hover:border-napta-blue/20 transition-all duration-500 group flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-napta-blue transition-all duration-500 shadow-inner">
                    <cat.icon size={24} strokeWidth={1.5} className="text-napta-blue group-hover:text-white" />
                  </div>
                  <h4 className="text-base font-bold text-napta-navy mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>{cat.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6 font-normal flex-1">{cat.desc}</p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-napta-blue text-[9px] font-bold uppercase tracking-widest bg-napta-blue/5 px-3 py-1.5 rounded-full">Category {cat.id}</span>
                    <ArrowRight size={14} className="text-slate-300 group-hover:text-napta-blue group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VIP Gala Experience Section - Styled like Exhibition component */}
      <section className="py-20 bg-[#f8faf9] relative overflow-hidden">
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
                  <span className="text-napta-blue font-bold tracking-[0.3em] text-[9px] uppercase">The Official VIP Gala Dinner</span>
                </motion.div>

                <motion.h2 
                  variants={itemVariants}
                  className="text-2xl md:text-3xl font-extrabold text-napta-navy leading-tight mb-6 tracking-tight"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  October 2nd, 2026 | <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">The KICC Grand Ballroom.</span>
                </motion.h2>

                <motion.div variants={itemVariants} className="space-y-6">
                  <p className="text-slate-900 text-lg font-bold leading-tight">
                    East Africa's most exclusive networking environment.
                  </p>
                  <p className="text-slate-600 text-sm md:text-base font-normal leading-relaxed">
                    Ditch the boardroom and join government ministers, global institutional investors, and industry titans for a black-tie evening of celebration. Expect red-carpet arrivals, world-class culinary experiences, and high-profile keynote addresses.
                  </p>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="mt-8 flex flex-col sm:flex-row items-center gap-8 pt-8 border-t border-slate-200/60"
                >
                  <button onClick={() => setPage('Registration')} className="w-full sm:w-auto px-8 py-3 bg-napta-blue text-white font-bold text-[10px] uppercase tracking-widest rounded-full hover:bg-napta-navy transition-all shadow-lg shadow-napta-blue/10">
                    Register Now
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
                  src={whyattendimage}
                  alt="VIP Gala Dinner" 
                  className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/40 via-transparent to-transparent opacity-60"></div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      
      {/* CTA Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-50 rounded-[4rem] border border-slate-100 shadow-inner mx-4 md:mx-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #10b981 0px, #10b981 1px, transparent 1px, transparent 50px)' }}></div>
          </div>

          <div className="relative z-10 py-16 px-8 md:px-18 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-napta-navy mb-8 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Take Your Place <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Among the Elite.</span>
              </h2>
              <p className="text-slate-600 text-xs md:text-sm font-normal max-w-xl mx-auto mb-10 leading-relaxed">
                Do you have a project, technology, or leadership team that deserves national recognition? Nominations are now open for the 2026 cycle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('Registration')}
                  className="px-10 py-4 bg-napta-blue text-white rounded-2xl font-bold text-base shadow-xl shadow-napta-blue/20 transition-all flex items-center gap-2 group"
                >
                  Submit a Nomination
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('Registration')}
                  className="px-10 py-4 bg-white border border-slate-200 text-napta-navy rounded-2xl font-bold text-base shadow-sm hover:shadow-md transition-all"
                >
                  Reserve a VIP Table
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExcellenceAwards;