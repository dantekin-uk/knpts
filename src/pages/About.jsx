import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plane, Train, Ship, Bus, Package, Footprints, FileText, ArrowRight, MapPin, Layers, Calendar } from 'lucide-react';
import naptalogo from '../assets/partnerslogo/napta.jpeg';
import idslogo from '../assets/partnerslogo/ids.png';
import emobility from '../assets/about/emobility.png';
import equality from '../assets/about/equality.png';
import safety from '../assets/about/safety.png';
import whyimage from '../assets/about/mobility.png';
import aboutimage from '../assets/about/about.png' ;
const About = ({ setPage }) => {
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

  const ecosystem = [
    {
      icon: Plane,
      title: "Aviation",
      desc: "Airport expansion, modernization, and airport-linked urban mobility. Kenya serves as a regional hub for passenger and cargo markets.",
      color: "blue"
    },
    {
      icon: Train,
      title: "Rail Transport",
      desc: "Commuter, regional, and freight rail development offering scalable solutions for road decongestion and intermodal logistics.",
      color: "green"
    },
    {
      icon: Ship,
      title: "Marine & Water",
      desc: "Unlocking the Blue Economy through port digitalization, inland water transport, and shipbuilding services.",
      color: "blue"
    },
    {
      icon: Bus,
      title: "Public Transport",
      desc: "Reforming city systems through BRT, fleet electrification, and digital fare collection systems.",
      color: "green"
    },
    {
      icon: Package,
      title: "Freight & Logistics",
      desc: "Logistics parks, dry ports, and last-mile delivery solutions essential for regional competitiveness.",
      color: "blue"
    },
    {
      icon: Footprints,
      title: "Non-Motorised",
      desc: "Inclusive walking and cycling infrastructure designed for safety and climate-resilient mobility.",
      color: "green"
    }
  ];

  const globalMandate = [
    {
      id: "01",
      title: "Safe Systems",
      desc: "Advancing the 'Vision Zero' agenda. We are integrating world-class safety protocols and smart traffic management to ensure that Kenya’s transport network protects its most valuable asset: its people.",
      image: safety,
      tag: "Zero Harm Goal"
    },
    {
      id: "02",
      title: "Sustainable Growth",
      desc: "Transitioning to a low-carbon future. From E-Mobility infrastructure to green freight corridors, we are designing a transport ecosystem that respects the environment while fueling the economy.",
      image: emobility,
      tag: "Net-Zero Pathway"
    },
    {
      id: "03",
      title: "Inclusive Access",
      desc: "Transport for all. Our focus is on ensuring that modern mobility serves everyone—vulnerable road users, marginalized communities, and every citizen across all 47 counties.",
      image: equality,
      tag: "Equitable Mobility"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative pt-44 lg:pt-52 pb-2 lg:pb-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Content */}
            <motion.div 
              className="w-full lg:w-1/2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-4xl font-bold text-napta-navy leading-[1.15] tracking-tight mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                From Planning <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">to Delivery.</span>
              </motion.h1>

              <div className="max-w-xl space-y-6">
                <motion.p 
                  variants={itemVariants}
                  className="text-slate-600 text-sm md:text-base font-normal leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  The Kenya Transport Summit & Expo 2026 is the nation’s premier 
                  <span className="text-napta-blue font-medium  ml-2">multi-modal convening</span>.
                </motion.p>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-slate-500 text-sm md:text-base leading-relaxed border-l-2 border-napta-blue pl-6 font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Building on the landmark success of 2025, we are moving beyond fragmented planning to create a unified national accountability platform that aligns policy, investment, and implementation across all 47 counties.
                </motion.p>
              </div>

              {/* Stats Row */}
              <motion.div variants={containerVariants} className="grid grid-cols-3 gap-4 md:gap-8 border-t border-slate-100 pt-6 mt-6">
                <motion.div variants={itemVariants} className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={14} className="text-napta-blue" />
                    <p className="text-lg md:text-xl font-bold text-napta-navy">47</p>
                  </div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Counties</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <Layers size={14} className="text-sustainable-green" />
                    <p className="text-lg md:text-xl font-bold text-napta-navy">06</p>
                  </div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Sectors</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={14} className="text-napta-blue" />
                    <p className="text-lg md:text-xl font-bold text-napta-navy">03</p>
                  </div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Days</p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div 
              className="w-full lg:w-1/2 relative mt-12 lg:mt-0 h-[380px] sm:h-[480px] lg:h-[560px] lg:-translate-y-6"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Base Image (Bigger one, reduced size) */}
              <motion.div 
                variants={itemVariants}
                style={{ y: y1 }}
                className="absolute top-0 right-0 z-10 rounded-[2rem] overflow-hidden shadow-xl w-[82%] lg:w-[78%]"
              >
                <img 
                  src={aboutimage} 
                  alt="Kenya Transport Infrastructure" 
                  className="w-full h-[310px] sm:h-[390px] lg:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/40 via-transparent to-transparent opacity-60"></div>
              </motion.div>
              
              {/* Overlay Image (Bottom Left) */}
              <motion.div 
                variants={itemVariants}
                style={{ y: y2 }}
                className="absolute bottom-0 left-0 z-20 rounded-[1.5rem] overflow-hidden shadow-2xl w-[45%] lg:w-[40%]"
              >
                <img 
                  src={emobility} 
                  alt="Nairobi Mobility" 
                  className="w-full h-[100px] sm:h-[150px] lg:h-[190px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              

              {/* Decorative background shapes */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-sustainable-green/10 rounded-full blur-3xl -z-0"></div>
            </motion.div>

          </div>
        </div>
      </header>

      {/* Our Evolution Section */}
      <section className="pt-6 lg:pt-10 pb-16 lg:pb-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <motion.div 
              className="lg:w-3/5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >

              <motion.h3 
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-3xl font-bold text-napta-navy leading-tight tracking-tighter mb-8"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Expanding the Horizon from <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green  font-light">Public Transport to the Entire Ecosystem.</span>
              </motion.h3>
              
              <div className="space-y-6 text-slate-600 text-sm md:text-base font-normal leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                <motion.p variants={itemVariants}>
                  Building on the landmark success of the <span className="text-napta-blue font-semibold">Kenya National Public Transport Summit 2025</span>, the 2026 edition (KTSE) represents a significant leap forward.
                </motion.p>
                <motion.p variants={itemVariants}>
                  We have expanded the conversation beyond just city buses to cover the entire transport landscape: <span className="text-napta-navy font-medium ">aviation, rail, marine, freight, and non-motorized transport.</span>
                </motion.p>
                <motion.p variants={itemVariants}>
                  KTSE 2026 serves as a <span className="text-napta-blue font-bold">national accountability and delivery platform</span>—a single space where policy meets projects, and projects meet capital.
                </motion.p>
              </div>
            </motion.div>

            {/* Right Mandate Card */}
            <motion.div 
              className="lg:w-2/5 w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 relative border border-slate-100 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-napta-blue/5 rounded-full blur-3xl"></div>
                
                <h4 className="text-napta-navy font-bold text-xl md:text-2xl mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>The 2026 Mandate</h4>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 bg-napta-blue rounded-full mt-2 shrink-0"></span>
                    <p className="text-sm text-slate-600 font-normal"><span className="text-napta-navy font-bold">Accountability:</span> Aligning policy with implementation.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 bg-sustainable-green rounded-full mt-2 shrink-0"></span>
                    <p className="text-sm text-slate-600 font-normal"><span className="text-napta-navy font-bold">Integration:</span> Connecting all 47 counties through intermodal links.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 bg-napta-blue rounded-full mt-2 shrink-0"></span>
                    <p className="text-sm text-slate-600 font-normal"><span className="text-napta-navy font-bold">Positioning:</span> Establishing Kenya as the regional logistics hub.</p>
                  </li>
                </ul>

                <div className="mt-10 pt-10 border-t border-slate-200">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Convened By</p>
                  <p className="text-sm font-bold text-napta-navy">National Public Transport Alliance (NAPTA)</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* The Multi-Modal Ecosystem Section */}
      <section className="py-16 lg:py-24 bg-slate-50/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B5DA5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-napta-navy tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              The Multi-Modal <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green  font-light">Ecosystem.</span>
            </h3>
            <p className="text-slate-500 mt-4 text-sm md:text-base font-normal max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Explore the diverse sectors at the heart of Kenya's mobility transformation, each offering unique opportunities for investment and innovation.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-8 md:pb-0 snap-x snap-mandatory no-scrollbar"
          >
            {ecosystem.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all duration-500 group min-w-[280px] md:min-w-0 snap-center flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                  item.color === 'blue' ? 'bg-napta-blue/5 text-napta-blue group-hover:bg-napta-blue' : 'bg-sustainable-green/5 text-sustainable-green group-hover:bg-sustainable-green'
                } group-hover:text-white shadow-inner`}>
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-base font-bold text-napta-navy mb-3 group-hover:text-napta-blue transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>{item.title}</h4>
                <p className="text-slate-600 text-xs leading-relaxed mb-6 font-normal flex-1" style={{ fontFamily: "'Inter', sans-serif" }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Kenya Section */}
      <section className="py-10 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-napta-navy rounded-[3rem] overflow-hidden p-8 md:p-12 lg:p-14 shadow-2xl shadow-napta-navy/20"
          >
            {/* Background Patterns */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #10b981 0px, #10b981 1px, transparent 1px, transparent 50px)' }}></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              {/* Left Content */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="lg:w-3/5 text-left"
              >
                <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  The Future of  Mobility is in Nairobi.
                </motion.h2>
                <motion.p variants={itemVariants} className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 font-normal max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Kenya stands as the definitive gateway to East Africa’s logistics network. With a rapidly evolving ecosystem backed by unified national policies and a robust pipeline of ready-to-implement projects, Nairobi is where global capital meets local innovation to redefine the continent's transport future. KTSE 2026 is the single space where policy meets projects, and projects meet capital.
                </motion.p>
                
                <motion.button 
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 px-8 py-3.5 bg-sustainable-green text-white rounded-2xl font-bold text-sm shadow-xl shadow-sustainable-green/20 transition-all hover:bg-white hover:text-napta-navy"
                >
                  <FileText size={18} className="group-hover:scale-110 transition-transform duration-300" />
                  View Opportunities
                </motion.button>
              </motion.div>

              {/* Right Image */}
              <div className="lg:w-2/5 w-full max-w-md">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10"
                >
                  <img 
                    src={whyimage}
                    alt="Kenya Logistics" 
                    className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/60 via-transparent to-transparent opacity-60"></div>
                </motion.div>
              </div>
              {/* Decorative background shapes */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-sustainable-green/10 rounded-full blur-3xl -z-0"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Global Mandate Section */}
      <section className="py-12 lg:py-16 bg-white overflow-hidden">
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

          <div className="relative z-10 pt-8 pb-12 px-8 md:px-18">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mb-10 text-center mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-napta-navy leading-[1.15] tracking-tight mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Building Systems for <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green  font-light">The Next Century.</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {globalMandate.map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -15 }}
                className="group relative flex flex-col min-h-[420px] bg-white rounded-[2.5rem] p-3 border border-slate-50 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_70px_-20px_rgba(27,93,165,0.15)] transition-all duration-700"
              >
                {/* Image Section */}
                <div className="relative h-[150px] w-full rounded-[2rem] overflow-hidden mb-6">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/60 via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating ID Overlay */}
                  <div className="absolute bottom-6 left-6 flex items-baseline gap-1">
                    <span className="text-white/40 font-black text-3xl leading-none">#</span>
                    <span className="text-white font-black text-4xl leading-none tracking-tighter">{pillar.id}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="px-5 pb-6 flex flex-col flex-1">
                  <h4 className="text-lg font-bold text-napta-navy mb-3 group-hover:text-napta-blue transition-colors duration-300 leading-tight">
                    {pillar.title}.
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-normal mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {pillar.desc}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sustainable-green"></div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{pillar.tag}</span>
                    </div>
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-napta-blue group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-napta-navy mb-8 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Be Part of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green  font-light">Transformation.</span>
              </h2>
              <p className="text-slate-600 text-xs md:text-sm font-normal max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Join the national platform where vision meets implementation. Secure your place at the 2026 Summit and help define the next chapter of regional connectivity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage && setPage('Registration')}
                  className="px-10 py-4 bg-napta-blue text-white rounded-2xl font-bold text-base shadow-xl shadow-napta-blue/20 transition-all flex items-center gap-2 group"
                >
                  Register Now
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white border border-slate-200 text-napta-navy rounded-2xl font-bold text-base shadow-sm hover:shadow-md transition-all"
                >
                  Download Brochure
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Leadership Section */}
      <section className="py-12 lg:py-16 bg-slate-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
          
            <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-napta-navy tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Convened & <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Co-Hosted By.</span>
            </h3>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
            {/* NAPTA Card */}
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex-1 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="h-24 w-full flex items-center justify-center mb-8">
                <img src={naptalogo} alt="NAPTA" className="max-h-full max-w-[200px] object-contain" />
              </div>
              <h4 className="text-lg font-bold text-napta-navy mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>NAPTA Kenya</h4>
              <p className="text-slate-600 text-xs leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>
                The National Public Transport Alliance is the primary convener, driving the national agenda for safe, sustainable, and integrated transport systems.
              </p>
              <div className="mt-auto pt-6">
                <span className="text-[9px] font-bold text-napta-blue uppercase tracking-widest">Primary Convener</span>
              </div>
            </motion.div>

            {/* IDS Card */}
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex-1 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="h-24 w-full flex items-center justify-center mb-8">
                <img src={idslogo} alt="IDS UoN" className="max-h-full max-w-[200px] object-contain" />
              </div>
              <h4 className="text-lg font-bold text-napta-navy mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>IDS, University of Nairobi</h4>
              <p className="text-slate-600 text-xs leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>
                The Institute for Development Studies provides the academic and research foundation, ensuring evidence-based policy recommendations and technical excellence.
              </p>
              <div className="mt-auto pt-6">
                <span className="text-[9px] font-bold text-sustainable-green uppercase tracking-widest">Academic Partner</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
