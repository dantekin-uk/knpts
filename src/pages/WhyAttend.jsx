import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, UserCheck, Building2, TrendingUp, BookOpen, Truck, ShieldCheck, Zap, Lightbulb, FileText } from 'lucide-react';
import inovationimage from '../assets/attend/inovation.png';
import connectimage from '../assets/attend/link.png';
import shapingimage from '../assets/attend/shape.png';
import meetimage from '../assets/attend/meet.png';
import discoverimage from '../assets/attend/discover.png';
import whyattendimage from '../assets/attend/whyattend.png';

const WhyAttend = ({ setPage }) => {
  // Ensure page starts at the top when navigated to
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

  const benefits = [
    {
      id: "01",
      image: shapingimage,
      title: "Shape National Policy",
      desc: "Participate in the high-level review of the 2025 mandates. This is the only forum where you can directly influence the Accountability Statement that guides all 47 counties in transport reform.",
      color: "blue"
    },
    {
      id: "02",
      image: connectimage,
      title: "Connect All Transport",
      desc: "Unlike 2025's focus on PSVs, 2026 brings together Road, Rail, Aviation, and the Blue Economy. Gain insights into how SGR expansion and Port optimization link to local county logistics.",
      color: "blue"
    },
    {
      id: "03",
      image: meetimage,
      title: "Meet Industry Leaders",
      desc: "Engage with the University of Nairobi (IDS). This isn't just talk it's about applying research to real-world infrastructure challenges alongside the country's top technical minds.",
      color: "blue"
    },
    {
      id: "04",
      image: inovationimage,
      title: "See Innovation in Action",
      desc: "Witness the rollout of Electric PSVs and Intelligent Transport Systems (ITS). Discover the tools that are currently reducing operational costs and increasing safety across the region.",
      color: "blue"
    }
  ];

  const targetAudience = [
    {
      icon: Building2,
      title: "National & County Governments",
      desc: "Align national mandates with county-level delivery. Review progress on the 2025 reforms and strengthen inter-agency coordination for the 47-county rollout.",
      highlight: false
    },
    {
      icon: ShieldCheck,
      title: "Authorities & Regulators",
      desc: "Shape the standards for safety and efficiency. Engage in technical sessions that directly inform the National Transport Accountability Statement and future legislation.",
      highlight: false
    },
    {
      icon: UserCheck,
      title: "Transport Operators",
      desc: "Connect with leaders across road, rail, air, and water. Share operational insights and discover how intermodal integration can optimize service delivery and reduce costs.",
      highlight: false
    },
    {
      icon: Truck,
      title: "Logistics & Freight",
      desc: "Engage with the backbone of regional commerce. Explore how port optimization and SGR expansion are creating new opportunities for freight efficiency and global connectivity.",
      highlight: false
    },
    {
      icon: TrendingUp,
      title: "Investors & Finance",
      desc: "Access a pipeline of bankable infrastructure projects. Meet with government officials and private sector leaders to discuss funding models for sustainable transport.",
      highlight: true
    },
    {
      icon: Zap,
      title: "Tech & Manufacturing",
      desc: "Showcase the future of mobility. From electric PSVs to Intelligent Transport Systems (ITS), connect with the decision-makers ready to implement your solutions.",
      highlight: false
    },
    {
      icon: Lightbulb,
      title: "Startups & Entrepreneurs",
      desc: "Disrupt the status quo. Pitch your solutions to investors and regulators looking for the next generation of transport technology and business models.",
      highlight: false
    },
    {
      icon: BookOpen,
      title: "Academia & Partners",
      desc: "Bridge the gap between research and implementation. Collaborate with the University of Nairobi (IDS) and civil society to drive evidence-based, inclusive policy.",
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="relative pt-44 lg:pt-52 pb-2 lg:pb-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

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
                The Center of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Transformation.</span>
              </motion.h1> 

              <motion.p 
                variants={itemVariants}
                className="text-slate-600 text-sm md:text-base font-normal max-w-xl leading-relaxed mb-12"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Join the national platform where vision meets implementation. The 2026 Summit brings together the leaders shaping Kenya’s integrated mobility, offering a unique space to drive accountability, <span className="text-napta-blue font-medium">discover world-class innovation at the Transport Expo</span>, and define the next chapter of regional connectivity.
              </motion.p>

              <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 md:gap-8 border-t border-slate-100 pt-6 mt-6">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={14} className="text-napta-blue" />
                    <p className="text-lg md:text-xl font-bold text-napta-navy">3 Days</p>
                  </div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">High-Level Policy</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin size={14} className="text-sustainable-green" />
                    <p className="text-lg md:text-xl font-bold text-napta-navy">47</p>
                  </div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Counties Joined</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <UserCheck size={14} className="text-napta-blue" />
                    <p className="text-lg md:text-xl font-bold text-napta-navy">2,000+</p>
                  </div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Delegates</p>
                </div>
              </motion.div>
            </motion.div>

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
                  src={whyattendimage}
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
                  src={discoverimage}
                  alt="Summit Dialogue" 
                  className="w-full h-[100px] sm:h-[150px] lg:h-[190px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              {/* Decorative background shapes */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-sustainable-green/10 rounded-full blur-3xl -z-0"></div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Benefits Grid Section - The 2026 Mandate */}
      <section className="pt-12 pb-24 bg-white border-b border-slate-50 overflow-hidden">
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-12 text-center mx-auto"
          >
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-napta-navy leading-[1.15] tracking-tight mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green ">Benefits.</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -20, scale: 1.01 }}
                className="group relative flex flex-col min-h-[500px] rounded-[2.5rem] bg-white border border-slate-100 p-4 transition-all duration-700 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-20px_rgba(27,93,165,0.1)] hover:border-napta-blue/20"
              >
                <div className="relative h-[160px] w-full rounded-[2rem] overflow-hidden mb-6">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 opacity-60"></div>
                </div>
                
                <div className="px-4 pb-4 flex flex-col flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-napta-blue/20 font-black text-3xl leading-none group-hover:text-napta-blue transition-colors duration-500">
                      {benefit.id}
                    </span>
                    <h4 className="text-lg font-bold text-napta-navy leading-tight group-hover:text-napta-blue transition-colors">
                      {benefit.title}
                    </h4>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed font-normal mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {benefit.desc}
                  </p>

                  <div className="mt-auto">
                    <div className="w-8 h-[2px] bg-slate-100 group-hover:w-full transition-all duration-700 group-hover:bg-napta-blue/30"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          </div>
        </div>
      </section>

      {/* Discover KTS&E Summit Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-napta-navy rounded-[3rem] overflow-hidden p-8 md:p-12 lg:p-16 shadow-2xl shadow-napta-navy/20"
          >
            {/* Background Patterns */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #10b981 0px, #10b981 1px, transparent 1px, transparent 50px)' }}></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Content */}
              <div className="lg:w-2/3 text-left">
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Discover KTS&E Summit 2026.
                </h2>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-10 font-normal max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Experience high-level policy plenaries, strategic intermodal networking, the Transport Expo, and the latest innovations in regional mobility.
                </p>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 px-8 py-4 bg-sustainable-green text-white rounded-2xl font-bold text-sm shadow-xl shadow-sustainable-green/20 transition-all hover:bg-white hover:text-napta-navy"
                >
                  <FileText size={18} className="group-hover:scale-110 transition-transform duration-300" />
                  Download Brochure
                </motion.button>
              </div>

              {/* Right Image */}
              <div className="lg:w-1/3 w-full max-w-sm">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10"
                >
                  <img 
                    src={discoverimage}
                    alt="Summit Experience" 
                    className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/60 via-transparent to-transparent opacity-60"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who You'll Meet Section */}
      <section className="py-16 lg:py-24 bg-slate-50/50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B5DA5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 lg:mb-16 gap-6 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl lg:max-w-2xl"
            >
              <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-napta-navy tracking-tight leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Who You'll <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green ">Meet.</span>
              </h3>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-slate-600 text-sm md:text-base max-w-md border-l-2 md:border-l border-napta-blue/20 md:border-slate-200 pl-5 md:pl-8 leading-relaxed font-normal"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              The summit brings together the entire ecosystem to move from fragmented planning to national delivery.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pb-10 md:pb-0 snap-x snap-mandatory no-scrollbar"
          >
            {targetAudience.map((audience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 group overflow-hidden flex flex-col min-w-[280px] md:min-w-0 snap-center ${
                  audience.highlight 
                    ? 'bg-napta-navy text-white border-transparent shadow-xl shadow-napta-navy/10' 
                    : 'bg-white border-slate-100 text-slate-600 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Background Accents */}
                {audience.highlight ? (
                  <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #10b981 0px, #10b981 1px, transparent 1px, transparent 30px)' }}></div>
                ) : (
                  <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B5DA5 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                )}

                <div className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${
                  audience.highlight 
                    ? 'bg-white/10 text-white' 
                    : 'bg-slate-50 text-napta-blue group-hover:bg-napta-blue group-hover:text-white shadow-inner'
                }`}>
                  <audience.icon size={20} strokeWidth={1.5} />
                </div>

                <h4 className={`relative z-10 text-base font-bold mb-2 tracking-tight leading-tight ${audience.highlight ? 'text-white' : 'text-napta-navy'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {audience.title}
                </h4>
                
                <p className={`relative z-10 text-xs leading-relaxed font-normal ${audience.highlight ? 'text-slate-300' : 'text-slate-600'}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                  {audience.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-napta-navy mb-8 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Ready to shape the future of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green ">Kenya's transport?</span>
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('Registration')}
                  className="px-10 py-4 bg-napta-blue text-white rounded-2xl font-bold text-base shadow-xl shadow-napta-blue/20 transition-all flex items-center gap-2 group"
                >
                  Register as a Delegate
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white border border-slate-200 text-napta-navy rounded-2xl font-bold text-base shadow-sm hover:shadow-md transition-all"
                >
                  Download Prospectus
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyAttend;