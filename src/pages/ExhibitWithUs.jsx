import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Target, Zap, Users, FileText, Layout, Briefcase, Rocket, Building2, ShieldCheck, Crown, Plane } from 'lucide-react';
import whyattendimage from '../assets/attend/whyattend.png';
import discoverimage from '../assets/attend/discover.png';
import aboutimage from '../assets/about/about.png';
import inovationimage from '../assets/attend/inovation.png';

const ExhibitWithUs = ({ setPage }) => {
  const [activeTab, setActiveTab] = useState('headline');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const whyExhibit = [
    { 
      title: "Direct Procurement Access", 
      desc: "Engage face-to-face with national and county governments, transport authorities, and regulators actively seeking infrastructure and tech solutions.", 
      icon: Building2 
    },
    { 
      title: "B2B Deal-Making", 
      desc: "Participate in closed-door investor and operator matchmaking focused on fleet renewal, systems integration, and E-Mobility.", 
      icon: Briefcase 
    },
    { 
      title: "Multi-Modal Reach", 
      desc: "Showcase your brand across our dedicated sector zones, including Aviation, Heavy Rail, Maritime, Public Transit, and Digital Freight.", 
      icon: Globe 
    }
  ];

  const directoryTabs = [
    { id: 'headline', name: 'Headline Sponsors & OEMs', count: 4, icon: Crown },
    { id: 'aviation', name: 'Aviation, Rail & Marine', count: 8, icon: Plane },
    { id: 'emobility', name: 'E-Mobility & Public Transit', count: 8, icon: Zap },
    { id: 'startups', name: 'Startups & Digital Logistics', count: 12, icon: Rocket }
  ];

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
                Showcase Your Brand to <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">East Africa’s Transport Leaders.</span>
              </motion.h1>

              <motion.div variants={itemVariants} className="mb-8">
                <p className="text-napta-blue font-bold text-sm uppercase tracking-widest mb-2">September 30th — October 2nd, 2026 | KICC, Nairobi</p>
                <p className="text-slate-600 text-sm md:text-base font-normal leading-relaxed max-w-xl">
                  Position your physical assets and digital solutions directly in front of the government decision-makers, operators, and institutional investors funding Kenya’s transport future. Premium floor space is strictly limited.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.button onClick={() => setPage('Contact')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-napta-blue text-white rounded-2xl font-bold text-sm shadow-xl shadow-napta-blue/20 hover:bg-napta-navy transition-all flex items-center gap-2 group">
                  Join as an Exhibitor
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-white border border-slate-200 text-napta-navy rounded-2xl font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 group">
                  Download Exhibitor Prospectus
                  <FileText size={18} className="group-hover:scale-110 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div className="w-full lg:w-1/2 relative mt-12 lg:mt-0 h-[380px] sm:h-[480px] lg:h-[560px]" initial="hidden" animate="visible" variants={containerVariants}>
              <motion.div variants={itemVariants} style={{ y: y1 }} className="absolute top-0 right-0 z-10 rounded-[2rem] overflow-hidden shadow-xl w-[82%] lg:w-[78%]">
                <img src={whyattendimage} className="w-full h-[310px] sm:h-[390px] lg:h-[460px] object-cover" alt="Exhibition Hall" />
                <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/40 via-transparent to-transparent opacity-60"></div>
              </motion.div>
              <motion.div variants={itemVariants} style={{ y: y2 }} className="absolute bottom-0 left-0 z-20 rounded-[1.5rem] overflow-hidden shadow-2xl w-[45%] lg:w-[40%]">
                <img src={inovationimage} className="w-full h-[100px] sm:h-[150px] lg:h-[190px] object-cover" alt="Innovation" />
              </motion.div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-sustainable-green/10 rounded-full blur-3xl -z-0"></div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Why Exhibit Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-napta-navy tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Why Exhibit at <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">KTSE 2026?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyExhibit.map((item, index) => (
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
                  <item.icon size={24} strokeWidth={1.5} className="text-napta-blue group-hover:text-white" />
                </div>
                <h4 className="text-base font-bold text-napta-navy mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-normal flex-1">{item.desc}</p>
                
                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                  <ArrowRight size={14} className="text-slate-300 group-hover:text-napta-blue group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitor Directory Section */}
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
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-napta-navy tracking-tight mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Join the Industry Leaders <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">on the Floor.</span>
              </h2>
              <p className="text-slate-500 text-sm max-w-2xl mx-auto">Explore the organizations already confirmed for the KTSE 2026 Transport Expo.</p>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-sustainable-green/10 rounded-full border border-sustainable-green/20">
                <div className="w-1.5 h-1.5 rounded-full bg-sustainable-green animate-pulse" />
                <span className="text-[9px] font-bold text-sustainable-green uppercase tracking-widest">List Updated Weekly</span>
              </div>
            </motion.div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {directoryTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-napta-blue text-white shadow-lg shadow-napta-blue/20' 
                      : 'bg-white text-slate-400 border border-slate-100 hover:text-napta-navy'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {/* Logo Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className={`grid gap-6 ${
                  activeTab === 'headline' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' :
                  activeTab === 'startups' ? 'grid-cols-2 sm:grid-cols-4 lg:grid-cols-6' :
                  'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
                }`}
              >
                {[...Array(directoryTabs.find(t => t.id === activeTab).count)].map((_, i) => {
                  const tab = directoryTabs.find(t => t.id === activeTab);
                  const TabIcon = tab.icon;
                  const isLast = i === tab.count - 1;
                  return (
                    <div 
                      key={i} 
                      className={`bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center p-6 group hover:border-napta-blue/20 transition-all duration-500 ${
                        activeTab === 'headline' ? 'h-56' : activeTab === 'startups' ? 'h-32' : 'h-40'
                      }`}
                    >
                      <div className={`w-full h-full rounded-xl relative overflow-hidden flex flex-col items-center justify-center border border-dashed ${isLast ? 'bg-napta-blue/5 border-napta-blue/20' : 'bg-slate-50/50 border-slate-200'}`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                        <TabIcon size={activeTab === 'headline' ? 40 : 24} className={`${isLast ? 'text-napta-blue' : 'text-slate-300'} mb-2 opacity-40 group-hover:scale-110 transition-transform duration-500`} />
                        <span className={`text-[8px] font-bold uppercase tracking-widest ${isLast ? 'text-napta-blue' : 'text-slate-400'}`}>
                          {isLast ? 'Your Brand Here' : 'Reserved'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
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
                Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Premium Floor Space.</span>
              </h2>
              <p className="text-slate-600 text-xs md:text-sm font-normal max-w-xl mx-auto mb-10 leading-relaxed">
                Do not miss the opportunity to position your brand at the center of Kenya’s transport mandate. Booths and innovation pavilions are allocated on a first-come, first-served basis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('Registration')}
                  className="px-10 py-4 bg-napta-blue text-white rounded-2xl font-bold text-base shadow-xl shadow-napta-blue/20 transition-all flex items-center gap-2 group"
                >
                  Register Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default ExhibitWithUs;