import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mic2, Building2, DollarSign, Zap, BookOpen, ArrowRight, Users } from 'lucide-react';
import speakerimage from '../assets/speaker.png';
import aboutimage from '../assets/about/about.png';

const Speakers = ({ setPage }) => {
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

  const expertiseCards = [
    {
      title: "The Policymakers & Regents",
      desc: "Ministry leaders, county governors, and regulatory directors setting the national masterplan for infrastructure and intermodal connectivity.",
      icon: Building2,
      color: "blue"
    },
    {
      title: "The Infrastructure Funders & VCs",
      desc: "Global development finance institutions (DFIs), private equity directors, and venture capitalists unlocking capital for multi-modal and low-emission solutions.",
      icon: DollarSign,
      color: "green"
    },
    {
      title: "The Operational Titans",
      desc: "C-suite executives guiding the integration of airlines, heavy rail networks, marine logistics, and national port authorities.",
      icon: Users,
      color: "blue"
    },
    {
      title: "The Technological Disruptors",
      desc: "Founders of the Silicon Savannah's most agile mobility startups and directors of global transport OEMs applying AI and ITS to logistics and passenger transit.",
      icon: Zap,
      color: "green"
    },
    {
      title: "The Research & Sustainability Pioneers",
      desc: "Leading transport economists and climate-resilience scholars providing evidence-based policy for future-proofing our networks.",
      icon: BookOpen,
      color: "blue"
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
                The Defining Minds <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">of KTSE 2026.</span>
              </motion.h1> 

              <motion.p 
                variants={itemVariants}
                className="text-slate-600 text-sm md:text-base font-normal leading-relaxed max-w-xl mb-10"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Shaping East Africa's Multi-Modal Transport Mandate. KTSE 2026 brings together the global icons and regional experts who are actively shaping the next era of integrated, safe, and sustainable transit.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('Contact')}
                  className="px-8 py-4 bg-napta-blue text-white rounded-2xl font-bold text-sm shadow-xl shadow-napta-blue/20 hover:bg-napta-navy transition-all flex items-center gap-2 group"
                >
                  Submit a Speaker Nomination
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
                <img src={speakerimage} className="w-full h-[310px] sm:h-[390px] lg:h-[460px] object-cover" alt="Speakers" />
                <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/40 via-transparent to-transparent opacity-60"></div>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                style={{ y: y2 }}
                className="absolute bottom-0 left-0 z-20 rounded-[1.5rem] overflow-hidden shadow-2xl w-[45%] lg:w-[40%]"
              >
                <img src={aboutimage} className="w-full h-[100px] sm:h-[150px] lg:h-[190px] object-cover" alt="Dialogue" />
              </motion.div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-sustainable-green/10 rounded-full blur-3xl -z-0"></div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Expertise Section */}
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
                Speakers Selected for <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">Impact & Execution.</span>
              </h2>
              <p className="text-slate-500 mt-4 text-sm md:text-base font-normal max-w-2xl mx-auto">
                KTSE 2026 Speakers are not observers; they are drivers of national delivery. Curated from the 6 sector pillars of the summit mandate.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseCards.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -15, scale: 1.01 }}
                  className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:shadow-2xl hover:border-napta-blue/20 transition-all duration-700 group flex flex-col"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 shadow-inner ${
                    item.color === 'blue' ? 'bg-napta-blue/5 text-napta-blue group-hover:bg-napta-blue' : 'bg-sustainable-green/5 text-sustainable-green group-hover:bg-sustainable-green'
                  } group-hover:text-white`}>
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-bold text-napta-navy mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mb-8 font-normal flex-1">{item.desc}</p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-napta-blue text-[10px] font-bold uppercase tracking-widest bg-napta-blue/5 px-4 py-2 rounded-full">Strategic Voice</span>
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-napta-blue group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call for Speakers Section */}
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

          <div className="relative z-10 py-16 px-8 md:px-18 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-napta-navy mb-8 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Share Your Perspective. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Drive the Dialogue.</span>
              </h2>
              <p className="text-slate-600 text-xs md:text-sm font-normal max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Are you a visionary voice shaping Kenya’s transport future? We are seeking contributions that move the needle on execution across the entire multi-modal ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('Contact')}
                  className="px-10 py-4 bg-napta-blue text-white rounded-2xl font-bold text-base shadow-xl shadow-napta-blue/20 transition-all flex items-center gap-2 group"
                >
                  Apply to Speak
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('Contact')}
                  className="px-10 py-4 bg-white border border-slate-200 text-napta-navy rounded-2xl font-bold text-base shadow-sm hover:shadow-md transition-all"
                >
                  Inquire About Moderating
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speakers;