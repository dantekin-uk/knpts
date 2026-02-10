import React from 'react';
import { motion } from 'framer-motion';

const Strategic = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0D2D50 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column: High-Impact Visual */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-5/12 relative"
          >
            <motion.div variants={itemVariants} className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
              <img 
                src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=1000" 
                alt="Kenya Transport Infrastructure" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg">
                <p className="text-napta-blue font-black text-3xl mb-1">2026</p>
                <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">Year of National Delivery</p>
              </div>
            </motion.div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-napta-navy rounded-[2rem] -z-0 opacity-10"></div>
          </motion.div>

          {/* Right Column: Strategic Narrative */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-7/12"
          >
            <div className="max-w-xl">
              <motion.h2 variants={itemVariants} className="text-napta-blue font-bold tracking-[0.2em] text-[10px] uppercase mb-4">
                Official Rationale
              </motion.h2>
              
              <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-extrabold text-napta-navy leading-tight mb-8 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Moving from Dialogue <br/>
                <span className="text-sustainable-green">to National Delivery.</span>
              </motion.h3>
              
              <motion.p variants={itemVariants} className="text-slate-600 text-sm md:text-base font-normal leading-relaxed mb-8 max-w-xl" style={{ fontFamily: "'Inter', sans-serif" }}>
                Building on the 2025 foundation, the 2026 Summit shifts focus to the entire intermodal ecosystem. We are addressing fragmented planning to create a unified system for all 47 counties.
              </motion.p>

              <div className="space-y-6">
                <motion.div variants={itemVariants} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                  <div className="w-10 h-10 bg-napta-blue/10 rounded-xl flex items-center justify-center text-napta-blue font-bold group-hover:bg-napta-blue group-hover:text-white transition-colors">01</div>
                  <div>
                    <h4 className="font-bold text-napta-navy">Safe Systems First</h4>
                    <p className="text-sm text-slate-500">Infrastructure and policies that prioritize the safety of every road user.</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                  <div className="w-10 h-10 bg-sustainable-green/10 rounded-xl flex items-center justify-center text-sustainable-green font-bold group-hover:bg-sustainable-green group-hover:text-white transition-colors">02</div>
                  <div>
                    <h4 className="font-bold text-napta-navy">Sustainable Mobility</h4>
                    <p className="text-sm text-slate-500">Accelerating the transition to low-emission and resilient transport networks.</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                  <div className="w-10 h-10 bg-safety-gold/20 rounded-xl flex items-center justify-center text-amber-800 font-bold group-hover:bg-safety-gold group-hover:text-amber-900 transition-colors">03</div>
                  <div>
                    <h4 className="font-bold text-napta-navy">Intermodal Integration</h4>
                    <p className="text-sm text-slate-500">A seamless connect between Road, Rail, Air, and Maritime services.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Strategic;