import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Users, Crown, Star, Gem, Award, Target, Trophy, Rocket, Coffee, CreditCard, FileText, Globe, Zap, Building2, Briefcase } from 'lucide-react';
import aboutimage from '../assets/about/about.png';
import discoverimage from '../assets/attend/discover.png';
import whyattendimage from '../assets/attend/whyattend.png';
import inovationimage from '../assets/attend/inovation.png';

const Sponsorship = ({ setPage }) => {
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

  const valueProps = [
    { 
      title: "Unprecedented Access & Procurement", 
      desc: "Gain direct, VIP access to the Ministry of Roads and Transport, state regulatory agencies, and county governors actively seeking infrastructure and technology solutions.", 
      icon: Building2 
    },
    { 
      title: "Thought Leadership & Influence", 
      desc: "Secure main-stage keynote speaking slots or moderate strategic plenary panels. Position your executives as the definitive voices in multi-modal transport.", 
      icon: Crown 
    },
    { 
      title: "High-Probability Deal Flow", 
      desc: "Utilize our B2B deal rooms and VIP networking events to engage in closed-door negotiations with DFIs, global infrastructure funds, and major fleet operators.", 
      icon: Briefcase 
    }
  ];

  const tiers = [
    {
      title: "Diamond & Headline Partner",
      limit: "Strictly Limited to 2 Organizations",
      desc: "The ultimate institutional alignment. Sit alongside the host ministries as the driving force behind KTSE 2026. Includes premium main-stage keynotes and maximum branding.",
      icon: Gem,
      color: "blue"
    },
    {
      title: "Platinum Strategic Partners",
      limit: "High-Visibility Branding",
      desc: "Positioned for maximum industry authority. Includes guaranteed participation in a Strategic Plenary Panel, premium Expo floor placement, and dedicated meeting rooms.",
      icon: Award,
      color: "green"
    },
    {
      title: "Sector Spotlight Partners",
      limit: "Industry Vertical Dominance",
      desc: "Become the exclusive presenting partner for one of our 6 core mandates: Aviation, Heavy Rail, Marine Logistics, E-Mobility, Digital Freight, or NMT.",
      icon: Target,
      color: "blue"
    }
  ];

  const experiential = [
    { title: "VIP Excellence Awards Gala", desc: "Host the most exclusive networking evening. Address the room and brand the ultimate black-tie experience.", icon: Trophy },
    { title: "Summit Pitch Day Sponsor", desc: "Align with the Silicon Savannah. Sponsor the startup pitch stage and position as a champion of tech innovation.", icon: Rocket },
    { title: "VIP Executive Lounge & Deal Rooms", desc: "Brand the secure, closed-door environments where critical investment and procurement conversations take place.", icon: Coffee },
    { title: "Official Lanyard & Badge Sponsor", desc: "Guarantee that every minister, investor, and CEO wears your brand for all three days of the summit.", icon: CreditCard }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="relative pt-44 lg:pt-52 pb-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div className="w-full lg:w-1/2" variants={containerVariants} initial="hidden" animate="visible">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6">
                
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-4xl font-bold text-napta-navy leading-[1.15] tracking-tight mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Strategic Sponsorships <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">& Partnerships.</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-slate-600 text-sm md:text-base font-normal leading-relaxed max-w-xl mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
                Align Your Brand with the Future of African Mobility. The Kenya Transport Summit & Expo (KTSE) 2026 is the ultimate convergence of public policy and private capital.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-napta-blue text-white rounded-2xl font-bold text-sm shadow-xl shadow-napta-blue/20 hover:bg-napta-navy transition-all flex items-center gap-2 group">
                  Download Sponsorship Deck
                  <FileText size={18} className="group-hover:scale-110 transition-transform" />
                </motion.button>
                <motion.button onClick={() => setPage('Contact')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-white border border-slate-200 text-napta-navy rounded-2xl font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 group">
                  Contact Our Team
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
                <img src={discoverimage} className="w-full h-[100px] sm:h-[150px] lg:h-[190px] object-cover" alt="Visibility" />
              </motion.div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-sustainable-green/10 rounded-full blur-3xl -z-0"></div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Value Proposition Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-napta-navy tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Beyond Visibility. <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">A Platform for Execution.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueProps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.01 }}
                className="p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-xl transition-all duration-500 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-napta-blue transition-all duration-500 shadow-inner">
                  <item.icon size={24} strokeWidth={1.5} className="text-napta-blue group-hover:text-white" />
                </div>
                <h4 className="text-base font-bold text-napta-navy mb-3">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-normal">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnership Tiers Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
          {/* The "Big Card" backdrop consistent with other pages */}
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
                The Architecture of <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">Partnership.</span>
              </h2>
              <p className="text-slate-500 mt-4 text-sm md:text-base font-normal max-w-2xl mx-auto">
                We offer a strictly limited number of strategic partnership tiers to ensure maximum ROI, exclusivity, and share of voice.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -15, scale: 1.01 }}
                  className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:shadow-2xl hover:border-napta-blue/20 transition-all duration-700 group flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-napta-blue transition-all duration-500 shadow-inner">
                    <tier.icon size={28} strokeWidth={1.5} className="text-napta-blue group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-napta-navy mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{tier.title}</h4>
                  <p className="text-sustainable-green text-[10px] font-bold uppercase tracking-widest mb-4">{tier.limit}</p>
                  <p className="text-slate-500 text-xs leading-relaxed mb-8 font-normal flex-1">{tier.desc}</p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-napta-blue group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke & Experiential Sponsorships Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-napta-navy tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Own the <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">Experience.</span>
            </h2>
            <p className="text-slate-500 mt-4 text-sm md:text-base font-normal max-w-2xl mx-auto">
              Looking for a highly targeted brand activation? KTSE 2026 offers exclusive experiential sponsorships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiential.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 group flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 group-hover:bg-napta-blue transition-all duration-500 shadow-sm">
                  <item.icon size={24} strokeWidth={1.5} className="text-napta-blue group-hover:text-white" />
                </div>
                <h4 className="text-base font-bold text-napta-navy mb-3 leading-tight">{item.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed font-normal">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-50 rounded-[4rem] border border-slate-100 shadow-inner mx-4 md:mx-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #10b981 0px, #10b981 1px, transparent 1px, transparent 50px)' }}></div>
          </div>

          <div className="relative z-10 py-16 px-8 md:px-18 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-napta-navy mb-8 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Strategic Advantage.</span>
              </h2>
              <p className="text-slate-600 text-xs md:text-sm font-normal max-w-xl mx-auto mb-10 leading-relaxed">
                Partnership opportunities for KTSE 2026 are highly competitive. Let us build a bespoke package that aligns with your objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-napta-blue text-white rounded-2xl font-bold text-base shadow-xl shadow-napta-blue/20 transition-all flex items-center gap-2 group"
                >
                  Request Sponsorship Prospectus
                  <FileText size={20} />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('Registration')}
                  className="px-10 py-4 bg-white border border-slate-200 text-napta-navy rounded-2xl font-bold text-base shadow-sm hover:shadow-md transition-all"
                >
                  Register Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsorship;