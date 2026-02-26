import React, { useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Rocket, DollarSign, Lightbulb, Globe, Briefcase, Zap, Cpu, ShieldCheck, Users, Building2, ArrowRight, FileText, CheckCircle2 } from 'lucide-react';
import inovationimage from '../assets/attend/inovation.png';
import discoverimage from '../assets/attend/discover.png';
import whyattendimage from '../assets/attend/whyattend.png';
import aboutimage from '../assets/about/about.png';

const PitchDay = ({ setPage }) => {
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

  const verticals = [
    { 
      title: "E-Mobility & Energy Transition", 
      desc: "EV manufacturing, high-speed charging infrastructure, battery-swapping networks, and localized grid management solutions.", 
      icon: Zap 
    },
    { 
      title: "Digital Logistics & Freight", 
      desc: "AI-driven supply chain optimization, cold-chain agri-logistics, drone delivery, and digital freight-matching platforms.", 
      icon: Cpu 
    },
    { 
      title: "Smart Transit & Fintech", 
      desc: "Cashless ticketing ecosystems, Intelligent Transport Systems (ITS), AI traffic prediction, and mobility-as-a-service (MaaS) applications.", 
      icon: Smartphone 
    }
  ];

  const capitalStakeholders = [
    { title: "Global Venture Capital & Private Equity", desc: "Seeking early and growth-stage mobility tech.", icon: TrendingUp },
    { title: "Development Finance Institutions (DFIs)", desc: "Looking to fund climate-resilient and inclusive transport solutions.", icon: Globe },
    { title: "County Governments & Authorities", desc: "Seeking pilot programs for urban mobility and smart city infrastructure.", icon: Building2 },
    { title: "Major OEMs & Fleet Operators", desc: "Looking for software and hardware integrations to modernize assets.", icon: Truck }
  ];

  const steps = [
    { id: "01", title: "Application", desc: "Submit your executive summary, pitch deck, and proof of concept." },
    { id: "02", title: "The Shortlist", desc: "Our independent jury selects the top 15 most bankable startups." },
    { id: "03", title: "Mentorship", desc: "Shortlisted founders receive dedicated pitch-coaching from partners." },
    { id: "04", title: "Summit Pitch Day", desc: "Take the stage at KICC for a 5-minute pitch and live Q&A." },
    { id: "05", title: "The Deal Rooms", desc: "Move off-stage to negotiate term sheets and pilot contracts." }
  ];

  // Re-importing missing icons for the verticals
  function Smartphone(props) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>; }
  function TrendingUp(props) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 16 8.5 11 2 18"/><polyline points="16 7 22 7 22 13"/></svg>; }
  function Truck(props) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-5l-4-4h-3v10a1 1 0 0 0 1 1h2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>; }

  return (
    <div className="min-h-screen bg-white">
      <header className="relative pt-44 lg:pt-52 pb-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div className="w-full lg:w-1/2" variants={containerVariants} initial="hidden" animate="visible">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sustainable-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sustainable-green"></span>
                </span>
                <span className="text-napta-blue font-bold tracking-[0.3em] text-[10px] uppercase">The Silicon Savannah Secures Capital</span>
              </motion.div>
              <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl lg:text-4xl font-bold text-napta-navy leading-[1.15] tracking-tight mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
                The 2026 <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Summit Pitch Day.</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-slate-600 text-sm md:text-base font-normal leading-relaxed max-w-xl mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
                Where Transport Innovation Meets Institutional Capital. Step into East Africa’s most exclusive deal-making platform connecting agile startups directly with global VCs and government procurement teams.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.button onClick={() => setPage('Registration')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-napta-blue text-white rounded-2xl font-bold text-sm shadow-xl shadow-napta-blue/20 hover:bg-napta-navy transition-all flex items-center gap-2 group">
                  Apply to Pitch
                  <Rocket size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button onClick={() => setPage('Registration')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-white border border-slate-200 text-napta-navy rounded-2xl font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 group">
                  Register as an Investor
                  <Users size={18} className="group-hover:scale-110 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div className="w-full lg:w-1/2 relative mt-12 lg:mt-0 h-[380px] sm:h-[480px] lg:h-[560px]" initial="hidden" animate="visible" variants={containerVariants}>
              <motion.div variants={itemVariants} style={{ y: y1 }} className="absolute top-0 right-0 z-10 rounded-[2rem] overflow-hidden shadow-xl w-[82%] lg:w-[78%]">
                <img src={inovationimage} className="w-full h-[310px] sm:h-[390px] lg:h-[460px] object-cover" alt="Pitch" />
                <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/40 via-transparent to-transparent opacity-60"></div>
              </motion.div>
              <motion.div variants={itemVariants} style={{ y: y2 }} className="absolute bottom-0 left-0 z-20 rounded-[1.5rem] overflow-hidden shadow-2xl w-[45%] lg:w-[40%]">
                <img src={discoverimage} className="w-full h-[100px] sm:h-[150px] lg:h-[190px] object-cover" alt="Investors" />
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
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/3 w-full max-w-sm">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10"
                >
                  <img src={whyattendimage} alt="Accelerating the Ecosystem" className="w-full h-[250px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/60 via-transparent to-transparent opacity-60"></div>
                </motion.div>
              </div>

              <div className="lg:w-2/3 text-left">
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Accelerating the <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Ecosystem.</span>
                </h2>
                <div className="space-y-6 text-slate-300 text-sm md:text-base font-normal leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <p>
                    We are looking for the disruptors. The Summit Pitch Day is designed to fast-track the deployment of high-impact transport technologies across Kenya and the region.
                  </p>
                  <p>
                    We bypass traditional networking and place vetted, market-ready innovators on stage in front of the exact stakeholders who have the capital to scale them.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Verticals Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-50 rounded-[4rem] border border-slate-100 shadow-inner mx-4 md:mx-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #10b981 0px, #10b981 1px, transparent 1px, transparent 50px)' }}></div>
          </div>
          <div className="relative z-10 py-12 px-8 md:px-18">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-napta-navy tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Who Should <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">Apply?</span>
              </h2>
              <p className="text-slate-500 mt-4 text-sm md:text-base font-normal max-w-2xl mx-auto">
                We are currently accepting pitch applications from scalable startups, SMEs, and tech developers operating within the following verticals:
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {verticals.map((item, index) => (
                <motion.div key={index} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -10, scale: 1.01 }} className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:shadow-2xl hover:border-napta-blue/20 transition-all duration-500 group flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-napta-blue transition-all duration-500 shadow-inner">
                    <item.icon size={28} strokeWidth={1.5} className="text-napta-blue group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-napta-navy mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal flex-1">{item.desc}</p>
                  <div className="mt-8 pt-6 border-t border-slate-50">
                    <span className="text-napta-blue text-[10px] font-bold uppercase tracking-widest bg-napta-blue/5 px-4 py-2 rounded-full">Innovation Vertical</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who is in the Room Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-napta-navy tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Pitch to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">Decision-Makers.</span>
            </h2>
            <p className="text-slate-500 mt-4 text-sm md:text-base font-normal max-w-2xl mx-auto">
              Your pitch isn't just a presentation; it is an active procurement and investment dialogue. You will be pitching directly to:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capitalStakeholders.map((item, index) => (
              <motion.div key={index} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6 rounded-[2rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 group-hover:bg-napta-blue transition-all duration-500 shadow-sm">
                  <item.icon size={20} strokeWidth={1.5} className="text-napta-blue group-hover:text-white" />
                </div>
                <h4 className="text-sm font-bold text-napta-navy mb-2">{item.title}</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed font-normal">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Timeline Section */}
      <section className="py-20 bg-slate-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-napta-navy tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              The Process <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">& Timeline.</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, index) => (
                <motion.div key={index} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-napta-blue flex items-center justify-center text-napta-blue font-bold text-sm mb-6 shadow-lg">
                    {step.id}
                  </div>
                  <h4 className="text-sm font-bold text-napta-navy mb-2">{step.title}</h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-normal px-4">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-napta-navy mb-8 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Place on Stage.</span>
            </h2>
            <p className="text-slate-600 text-xs md:text-sm font-normal max-w-xl mx-auto mb-10 leading-relaxed">
              Applications for the 2026 Summit Pitch Day close on August 1st, 2026. Do not miss the opportunity to scale your solution across East Africa’s transport network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button onClick={() => setPage('Registration')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-4 bg-napta-blue text-white rounded-2xl font-bold text-base shadow-xl shadow-napta-blue/20 transition-all flex items-center gap-2 group">
                Submit Your Pitch Deck
                <FileText size={20} />
              </motion.button>
              <motion.button onClick={() => setPage('Contact')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-10 py-4 bg-white border border-slate-200 text-napta-navy rounded-2xl font-bold text-base shadow-sm hover:shadow-md transition-all">
                Inquire About Sponsoring
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PitchDay;