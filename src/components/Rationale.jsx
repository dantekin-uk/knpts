import React from 'react';
import { motion } from 'framer-motion';
import { Bus, Train, Plane, Ship, Package } from 'lucide-react';

const Rationale = () => {
  const containerVariants = {
    hidden: { opacity: 1 }, // Ensures layout is established immediately
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-napta-blue font-bold tracking-[0.2em] text-[10px] uppercase mb-3 text-center md:text-left" style={{ fontFamily: "'Inter', sans-serif" }}>Scope of Integration</h2>
          <h3 className="text-2xl md:text-3xl font-extrabold text-napta-navy text-center md:text-left tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
            The Multimodal <span className="text-sustainable-green">Ecosystem.</span>
          </h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          
          {/* Road & Public Transport */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="md:col-span-2 p-7 rounded-[2rem] bg-white border border-slate-200 shadow-sm hover:border-napta-blue/30 transition-all group relative overflow-hidden"
          >
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 bg-safety-gold/20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Bus className="text-amber-700 w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-napta-navy mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Road & Public Transport</h4>
                <p className="text-slate-500 text-sm leading-relaxed max-w-md" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Rollout of <span className="font-semibold text-napta-blue">Safe and Inclusive</span> PSV systems and NMT infrastructure across all 47 counties.
                </p>
              </div>
              <div className="mt-6">
                <span className="px-3 py-1 bg-slate-100 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-widest">Priority 01</span>
              </div>
            </div>
            <Bus className="absolute -bottom-6 -right-6 w-32 h-32 opacity-[0.03] -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          </motion.div>

          {/* Railway Transport */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="p-7 rounded-[2rem] bg-sustainable-green text-white shadow-lg hover:shadow-sustainable-green/20 transition-all relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-5">
                <Train className="text-white w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Railway</h4>
              <p className="text-green-50/80 text-xs leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Progress on commuter rail and regional freight to lower logistics costs.
              </p>
            </div>
            <Train className="absolute -bottom-8 -right-8 w-32 h-32 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          </motion.div>

          {/* Aviation */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="p-7 rounded-[2rem] bg-white border border-slate-200 shadow-sm hover:border-napta-blue/30 transition-all group"
          >
            <div className="w-11 h-11 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-napta-blue/10 transition-colors">
              <Plane className="text-napta-navy group-hover:text-napta-blue w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-napta-navy mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Aviation</h4>
            <p className="text-slate-500 text-xs leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Strengthening airport-linked mobility and regional trade connectivity.
            </p>
          </motion.div>

          {/* Maritime */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="p-7 rounded-[2rem] bg-white border border-slate-200 shadow-sm hover:border-napta-blue/30 transition-all group"
          >
            <div className="w-11 h-11 bg-slate-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-napta-blue/10 transition-colors">
              <Ship className="text-napta-navy group-hover:text-napta-blue w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-napta-navy mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Maritime</h4>
            <p className="text-slate-500 text-xs leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Optimizing port infrastructure and ferries for a resilient blue economy.
            </p>
          </motion.div>

          {/* Freight & Logistics */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="p-7 rounded-[2rem] bg-napta-navy text-white shadow-lg hover:bg-slate-900 transition-all group relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center mb-5">
                <Package className="text-safety-gold w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Logistics</h4>
              <p className="text-slate-400 text-xs leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Integrating cross-border and regional cargo movement.
              </p>
            </div>
            <Package className="absolute -bottom-6 -right-6 w-24 h-24 opacity-[0.05] -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Rationale;