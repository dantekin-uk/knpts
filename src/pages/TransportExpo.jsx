import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Truck, Train, Plane, Ship, Cpu, ShieldCheck, Lightbulb, Footprints, Users, Building2, Briefcase, Globe } from 'lucide-react';
import discoverimage from '../assets/attend/discover.png';
import inovationimage from '../assets/attend/inovation.png';
import whyattendimage from '../assets/attend/whyattend.png';
import aboutimage from '../assets/about/about.png';

const TransportExpo = ({ setPage }) => {
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

  const floorFeatures = [
    { title: "Physical Mobility Assets", desc: "First-hand displays of vehicles, rolling stock, vessels, and aviation services.", icon: Truck },
    { title: "Next-Generation Tech", desc: "Breakthrough transport technologies, digital systems, and Intelligent Transport Systems (ITS).", icon: Cpu },
    { title: "Future-Proofing Solutions", desc: "Innovative infrastructure solutions, financing instruments, and climate innovations.", icon: ShieldCheck },
    { title: "The Ecosystem Drivers", desc: "Direct access to startups, SMEs, and major global manufacturers.", icon: Lightbulb }
  ];

  const sectors = [
    {
      id: "01",
      title: "Aviation & Aerospace",
      desc: "Showcasing solutions for airport expansion, air cargo handling, and digital aviation systems.",
      image: aboutimage,
    },
    {
      id: "02",
      title: "Rail, Freight & Logistics",
      desc: "Highlighting heavy rolling stock, logistics parks, and digital freight platforms.",
      image: whyattendimage,
    },
    {
      id: "03",
      title: "Public Transport & E-Mobility",
      desc: "Featuring BRT systems, digital fare collection, and fleet electrification hardware.",
      image: inovationimage,
    },
    {
      id: "04",
      title: "Marine & Inland Waterways",
      desc: "Technologies driving port efficiency, ferry services, and maritime safety.",
      image: discoverimage,
    },
    {
      id: "05",
      title: "NMT & Urban Design",
      desc: "Walking and cycling infrastructure, safe streets, and urban regeneration projects.",
      image: aboutimage,
    }
  ];

  const exhibitorTypes = [
    { title: "Manufacturers & Operators", icon: Building2 },
    { title: "Financiers & Tech Providers", icon: Briefcase },
    { title: "County Representatives", icon: Globe },
    { title: "Disruptive Innovators", icon: Lightbulb }
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
                The 3-Day <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Transport Expo.</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-slate-600 text-sm md:text-base font-normal leading-relaxed max-w-xl mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
                Building Safe, Sustainable, and Inclusive Transport Systems for Kenya. The Expo provides a national accountability and delivery platform to align policy, investment, and implementation.
              </motion.p>
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('Registration')}
                  className="px-8 py-4 bg-napta-blue text-white rounded-2xl font-bold text-sm shadow-xl shadow-napta-blue/20 hover:bg-napta-navy transition-all flex items-center gap-2 group"
                >
                  Secure Attendee Pass
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('Contact')}
                  className="px-8 py-4 bg-white border border-slate-200 text-napta-navy rounded-2xl font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 group"
                >
                  Join as an Exhibitor
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div className="w-full lg:w-1/2 relative mt-12 lg:mt-0 h-[380px] sm:h-[480px] lg:h-[560px]" initial="hidden" animate="visible" variants={containerVariants}>
              <motion.div variants={itemVariants} style={{ y: y1 }} className="absolute top-0 right-0 z-10 rounded-[2rem] overflow-hidden shadow-xl w-[82%] lg:w-[78%]">
                <img src={discoverimage} className="w-full h-[310px] sm:h-[390px] lg:h-[460px] object-cover" alt="Expo Floor" />
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

      {/* Introduction Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-napta-navy rounded-[3rem] overflow-hidden p-8 md:p-12 lg:p-16 shadow-2xl shadow-napta-navy/20"
          >
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
                This is where the future of East African mobility is physically showcased, connecting Kenyan stakeholders driving delivery on the ground with international investors seeking high-impact opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floor Features Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-50 rounded-[4rem] border border-slate-100 shadow-inner mx-4 md:mx-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          </div>
          <div className="relative z-10 py-12 px-8 md:px-18">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-napta-navy tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                What is on the <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">Expo Floor?</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {floorFeatures.map((item, index) => (
                <motion.div key={index} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ y: -10 }} className="p-6 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-xl transition-all duration-500 group">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-5 group-hover:bg-napta-blue transition-all duration-500 shadow-inner">
                    <item.icon size={20} strokeWidth={1.5} className="text-napta-blue group-hover:text-white" />
                  </div>
                  <h4 className="text-base font-bold text-napta-navy mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sector Innovation Zones */}
      <section className="py-20 bg-white border-b border-slate-50 overflow-hidden">
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

          <div className="relative z-10 pt-6 pb-12 px-8 md:px-18">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-napta-navy tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                The Sector <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">Innovation Zones.</span>
              </h2>
              <p className="text-slate-500 mt-4 text-sm md:text-base font-normal max-w-2xl mx-auto">
                Categorized into distinct sector spotlights representing Kenya's multi-modal mandate.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.01 }}
                  className="group relative flex flex-col min-h-[360px] rounded-[2.5rem] bg-white border border-slate-100 p-3 transition-all duration-700 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_70px_-20px_rgba(27,93,165,0.15)] hover:border-napta-blue/20"
                >
                  <div className="relative h-[120px] w-full rounded-[2rem] overflow-hidden mb-4">
                    <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 opacity-60"></div>
                  </div>
                  <div className="px-3 pb-3 flex flex-col flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <span className="text-napta-blue/20 font-black text-xl leading-none group-hover:text-napta-blue transition-colors duration-500">{item.id}</span>
                      <h4 className="text-base font-bold text-napta-navy leading-tight group-hover:text-napta-blue transition-colors">{item.title}</h4>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed font-normal mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>{item.desc}</p>
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

      {/* Who is Exhibiting Section */}
      <section className="py-20 bg-[#f8faf9] relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-napta-navy mb-6 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Who is <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">Exhibiting?</span>
              </h2>
              <p className="text-slate-600 text-sm md:text-base font-normal leading-relaxed mb-8">
                The Expo floor represents the convergence of power and innovation. Engage directly with leading manufacturers, operators, financiers, and technology providers driving the national mandate.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {exhibitorTypes.map((type, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                    <type.icon size={18} className="text-napta-blue" />
                    <span className="text-xs font-bold text-napta-navy">{type.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <img src={discoverimage} alt="Exhibitors" className="w-full h-[350px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

          <div className="relative z-10 py-16 px-8 md:px-18 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-napta-navy mb-8 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Take Your Place <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">on the Floor.</span>
            </h2>
            <p className="text-slate-600 text-xs md:text-sm font-normal max-w-xl mx-auto mb-10 leading-relaxed">
              Be part of Kenya's journey toward safe, sustainable, and inclusive transport systems. This is where ideas move, investments land, and systems connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setPage('ExhibitWithUs')}
                className="px-10 py-4 bg-napta-blue text-white rounded-2xl font-bold text-base shadow-xl shadow-napta-blue/20 transition-all flex items-center gap-2 group"
              >
                Exhibit With Us
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={() => setPage('Registration')}
                className="px-10 py-4 bg-white border border-slate-200 text-napta-navy rounded-2xl font-bold text-base shadow-sm hover:shadow-md transition-all"
              >
                Secure an Attendee Pass
              </motion.button>
            </div>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransportExpo;