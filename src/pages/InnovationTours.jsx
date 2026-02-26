import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Zap, Users, ArrowRight, Building2, Lightbulb, Globe, FileText } from 'lucide-react';
import innovationimage from '../assets/program/innovation1.jpg';
import financeimage from '../assets/program/innovation2.jpg' ;
import statupimage from '../assets/program/innovation3.jpg';
import sectorimage from '../assets/program/innovation4.jpg';
import dealimage from '../assets/attend/discover.png';
const InnovationTours = ({ setPage }) => {
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

  const highlights = [
    {
      id: "01",
      title: "Infrastructure & Finance",
      desc: "Exploring infrastructure solutions, financing instruments, and climate innovations.",
      image: financeimage,
    },
    {
      id: "02",
      title: "Startup Engagement",
      desc: "Direct engagement with startups, SMEs, and global manufacturers.",
      image: statupimage,
    },
    {
      id: "03",
      title: "Deal-Making Platform",
      desc: "Access to a curated deal-making platform where transport startups and SMEs pitch bankable solutions.",
      image: dealimage,
    },
    {
      id: "04",
      title: "Sector Showcases",
      desc: "Dedicated showcases for aviation, rail, marine, public transport, freight, and non-motorized transport.",
      image: sectorimage,
    }
  ];

  const networking = [
    {
      title: "Manufacturers & Tech Providers",
      desc: "Engage with the creators of the latest transport technologies and digital systems.",
      icon: Zap
    },
    {
      title: "Operators & Innovators",
      desc: "Connect with those implementing and scaling mobility solutions on the ground.",
      icon: Users
    },
    {
      title: "Financiers & County Reps",
      desc: "Meet with development partners and government representatives driving delivery.",
      icon: Globe
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
                Innovation <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Guided Tours.</span>
              </motion.h1> 

              <motion.p 
                variants={itemVariants}
                className="text-slate-600 text-sm md:text-base font-normal leading-relaxed max-w-xl mb-10"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Experience a transport ecosystem ripe for investment and innovation. Join our curated Guided Tours through the Transport Expo, a vibrant exhibition running across all three days of the summit.
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
                <img src={innovationimage} className="w-full h-[310px] sm:h-[390px] lg:h-[460px] object-cover" alt="Expo Floor" />
                <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/40 via-transparent to-transparent opacity-60"></div>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                style={{ y: y2 }}
                className="absolute bottom-0 left-0 z-20 rounded-[1.5rem] overflow-hidden shadow-2xl w-[45%] lg:w-[40%]"
              >
                <img src={statupimage} className="w-full h-[100px] sm:h-[150px] lg:h-[190px] object-cover" alt="Innovation" />
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
            {/* Background Patterns */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #10b981 0px, #10b981 1px, transparent 1px, transparent 50px)' }}></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Image */}
              <div className="lg:w-1/3 w-full max-w-sm">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10"
                >
                  <img 
                    src={innovationimage}
                    alt="Innovation Guided Tour" 
                    className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/60 via-transparent to-transparent opacity-60"></div>
                </motion.div>
              </div>

              {/* Right Content */}
              <div className="lg:w-2/3 text-left">
                <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  What is an <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Innovation Guided Tour?</span>
                </h2>
                <div className="space-y-6 text-slate-300 text-sm md:text-base font-normal leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <p>
                    These guided experiences offer a structured journey through our vibrant exhibition. Delegates will get a firsthand look at the latest transport technologies, digital systems, and Intelligent Transport Systems (ITS).
                  </p>
                  <p>
                    The tours are designed to showcase vehicles, rolling stock, vessels, and aviation services directly from the exhibitors, providing a deep dive into the physical and digital infrastructure of the future.
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative background shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-sustainable-green/10 rounded-full blur-3xl -z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect Section */}
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

          <div className="relative z-10 py-12 px-8 md:px-18">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-napta-navy tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                What to <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">Expect on the Tour.</span>
              </h2>
              <p className="text-slate-500 mt-4 text-sm md:text-base font-normal max-w-2xl mx-auto">
                The tours provide a curated experience where you can explore key opportunity areas across the entire transport ecosystem.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
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

      {/* Who Will You Meet Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-napta-navy tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Who Will <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">You Meet?</span>
            </h2>
            <p className="text-slate-500 mt-4 text-sm md:text-base font-normal max-w-2xl mx-auto">
              The Guided Tours are designed to maximize your networking potential. As you walk the floor, you will connect with the stakeholders driving delivery on the ground.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 pb-10 md:pb-0 snap-x snap-mandatory no-scrollbar"
          >
            {networking.map((person, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative p-8 rounded-[3rem] bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group text-center min-w-[280px] md:min-w-0 snap-center overflow-hidden flex flex-col"
              >
                {/* Subtle background accent */}
                <div className="absolute inset-0 opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B5DA5 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 mx-auto group-hover:bg-napta-blue group-hover:text-white transition-all duration-500 shadow-sm">
                  <person.icon size={28} strokeWidth={1.5} className="text-napta-blue group-hover:text-white" />
                </div>
                <h4 className="relative z-10 text-base font-bold text-napta-navy mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>{person.title}</h4>
                <p className="relative z-10 text-slate-500 text-xs leading-relaxed font-normal flex-1">{person.desc}</p>
                
                <div className="mt-6 pt-4 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <span className="text-[10px] font-bold text-napta-blue uppercase tracking-widest">Connect at the Expo</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
                Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Experience.</span>
              </h2>
              <p className="text-slate-600 text-xs md:text-sm font-normal max-w-xl mx-auto mb-10 leading-relaxed">
                Be part of Kenya's journey toward safe, sustainable, and inclusive transport systems. This is where ideas move, investments land, and systems connect.
              </p>
              <div className="flex justify-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('Registration')}
                  className="px-10 py-4 bg-napta-blue text-white rounded-2xl font-bold text-base shadow-xl shadow-napta-blue/20 transition-all flex items-center gap-2 group"
                >
                  Secure Your Delegate Pass to Attend
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

export default InnovationTours;