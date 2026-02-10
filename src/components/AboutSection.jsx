import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-28 bg-white overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <motion.div 
        className="container mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        <div className="flex flex-col lg:flex-row gap-16 mb-24 items-start">
          <motion.div variants={itemVariants} className="lg:w-7/12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-napta-navy leading-tight mb-8 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              From Vision <br/>
              <span className="text-sustainable-green">to National Delivery.</span>
            </h2>
            
            <p className="text-slate-600 text-sm md:text-base font-normal leading-relaxed max-w-2xl" style={{ fontFamily: "'Inter', sans-serif" }}>
              The <span className="text-napta-blue font-semibold">Kenya National Transport Summit & Expo (KNTS&E) 2026</span> is the successor to the 2025 Inaugural Summit. It serves as a unified national forum to move from fragmented planning to <span className="text-napta-navy font-bold">integrated national delivery</span> across all transport modes.
            </p>

            {/* Moved Mandate Card to Left Column */}
            <motion.div 
              variants={itemVariants}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="mt-12 p-8 md:p-10 rounded-[2.5rem] bg-napta-navy text-white relative group shadow-2xl shadow-napta-navy/30 max-w-xl cursor-default border border-white/5"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-sustainable-green rounded-2xl flex items-center justify-center text-white shadow-lg shadow-sustainable-green/40 group-hover:scale-110 transition-transform duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-sustainable-green font-bold text-xs uppercase tracking-widest mb-4">The 2026 Mandate</h4>
              <p className="text-slate-200 leading-relaxed italic text-sm">
                "To review progress, strengthen coordination, and accelerate implementation connecting people and goods through integrated, efficient, and resilient systems across road, rail, air, and water."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: High-Impact Image */}
          <motion.div 
            variants={itemVariants} 
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="lg:w-5/12 relative"
          >
            <motion.div 
              whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white group"
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                alt="Summit Official" 
                className="w-full h-[550px] object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            </motion.div>
            
            {/* Decorative element to match the theme */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.15, 0.1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-sustainable-green rounded-[2.5rem] -z-10 opacity-10"
            ></motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-slate-100">
          
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="w-8 h-[2px] bg-napta-blue"></div>
            <h4 className="text-slate-900 font-black text-sm uppercase tracking-tight">The Foundation</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Building on the 2025 foundation that established the first national platform for dialogue on public transport reform and stakeholder coordination.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <div className="w-8 h-[2px] bg-napta-blue"></div>
            <h4 className="text-slate-900 font-black text-sm uppercase tracking-tight">Multimodal Evolution</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              The 2026 scope expands to cover the entire ecosystem: Road-based public transport, NMT, Freight, Railway, Aviation, and Water transport.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <div className="w-8 h-[2px] bg-napta-blue"></div>
            <h4 className="text-slate-900 font-black text-sm uppercase tracking-tight">Strategic Collaboration</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              A partnership between <span className="text-napta-blue font-bold">NAPTA</span> and the <span className="text-napta-blue font-bold">University of Nairobi (IDS)</span> ensuring evidence-based policy and accountability.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-napta-blue text-white shadow-xl shadow-napta-blue/10"
        >
           <p className="text-sm font-bold opacity-90 uppercase tracking-widest">Official Summit of the National Public Transport Alliance</p>
           <div className="h-[1px] md:h-4 w-full md:w-[1px] bg-white/20"></div>
           <p className="text-sm font-medium">In Partnership with IDS, University of Nairobi</p>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default AboutSection;