import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, FileText, Mail, Handshake, Globe, Shield, Zap } from 'lucide-react';
import naptalogo from '../assets/partnerslogo/napta.jpeg';
import idslogo from '../assets/partnerslogo/ids.png';
import drollLogo from '../assets/partnerslogo/droll.png';
import aboutimage from '../assets/about/about.png';
import mobilityimage from '../assets/about/mobility.png';

const Partners = ({ setPage }) => {
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

  const partnerTiers = [
    {
      name: "Strategic Partners",
      description: "Core organizations shaping the summit's vision and national policy alignment.",
      partners: [
        { name: "NAPTA Kenya", logo: naptalogo, role: "Primary Convener", bio: "The National Public Transport Alliance is the primary convener, driving the national agenda for safe, sustainable, and integrated transport systems." },
        { name: "IDS, University of Nairobi", logo: idslogo, role: "Academic Partner", bio: "The Institute for Development Studies provides the academic and research foundation, ensuring evidence-based policy recommendations." }
      ]
    },
    {
      name: "Industry & Tech Partners",
      description: "Innovators and service providers delivering the future of mobility.",
      partners: [
        { name: "Droll", logo: drollLogo, role: "Technology Partner", bio: "Leading the digital transformation in transport logistics and smart mobility solutions." }
      ]
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
                Strategic <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Collaborations.</span>
              </motion.h1>

              <div className="max-w-xl space-y-6">
                <motion.p 
                  variants={itemVariants}
                  className="text-slate-600 text-sm md:text-base font-normal leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  The Kenya Transport Summit 2026 is a collective effort. We partner with the world's most innovative organizations to deliver a 
                  <span className="text-napta-blue font-medium ml-2">world-class experience</span>.
                </motion.p>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-slate-500 text-sm md:text-base leading-relaxed border-l-2 border-napta-blue pl-6 font-normal"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Our partners represent the pinnacle of transport policy, infrastructure development, and technological innovation across the continent.
                </motion.p>
              </div>

              <motion.div variants={itemVariants} className="mt-10 flex flex-wrap gap-4">
                <button className="px-8 py-3.5 bg-napta-blue text-white rounded-2xl font-bold text-sm shadow-xl shadow-napta-blue/20 hover:bg-napta-navy transition-all flex items-center gap-2 group">
                  Become a Partner
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div 
              className="w-full lg:w-1/2 relative mt-12 lg:mt-0 h-[380px] sm:h-[480px] lg:h-[560px] lg:-translate-y-6"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div 
                variants={itemVariants}
                style={{ y: y1 }}
                className="absolute top-0 right-0 z-10 rounded-[2rem] overflow-hidden shadow-xl w-[82%] lg:w-[78%]"
              >
                <img 
                  src={aboutimage} 
                  alt="Partnership" 
                  className="w-full h-[310px] sm:h-[390px] lg:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/40 via-transparent to-transparent opacity-60"></div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                style={{ y: y2 }}
                className="absolute bottom-0 left-0 z-20 rounded-[1.5rem] overflow-hidden shadow-2xl w-[45%] lg:w-[40%]"
              >
                <img 
                  src={mobilityimage} 
                  alt="Collaboration" 
                  className="w-full h-[100px] sm:h-[150px] lg:h-[190px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>

              <div className="absolute -top-10 -left-10 w-32 h-32 bg-sustainable-green/10 rounded-full blur-3xl -z-0"></div>
            </motion.div>

          </div>
        </div>
      </header>

      {/* Partners Tiers */}
      {partnerTiers.map((tier, index) => (
        <section key={index} className={`py-16 lg:py-24 ${index % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'} relative overflow-hidden`}>
          {index % 2 === 0 && (
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1B5DA5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          )}
          
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-napta-navy tracking-tight mb-4">{tier.name}</h2>
              <p className="text-slate-500 max-w-2xl mx-auto font-normal">{tier.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tier.partners.map((partner, pIndex) => (
                <motion.div
                  key={pIndex}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center group"
                >
                  <div className="h-32 w-full flex items-center justify-center mb-8 transition-all duration-500">
                    <img src={partner.logo} alt={partner.name} className="h-24 md:h-32 w-auto object-contain" />
                  </div>
                  <h4 className="text-lg font-bold text-napta-navy mb-2">{partner.name}</h4>
                  <p className="text-xs text-napta-blue font-bold uppercase tracking-widest mb-4">{partner.role}</p>
                  <p className="text-slate-600 text-xs leading-relaxed font-normal">{partner.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
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
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-napta-navy mb-8 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Ecosystem.</span>
              </h2>
              <p className="text-slate-600 text-xs md:text-sm font-normal max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Partner with the Kenya Transport Summit 2026 to showcase your leadership and connect with the decision-makers shaping the future of mobility.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-napta-blue text-white rounded-2xl font-bold text-base shadow-xl shadow-napta-blue/20 transition-all flex items-center gap-2 group"
                >
                  Contact Partnership Team
                  <Mail size={20} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;