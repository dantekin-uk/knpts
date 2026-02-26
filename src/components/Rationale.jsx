import React from 'react';
import { motion } from 'framer-motion';
import bus from '../assets/pillers/bus.jpg';
import rail from '../assets/pillers/train.jpg';
import air from '../assets/pillers/air.jpg';
import emobility from '../assets/about/emobility.png';
import cago from '../assets/pillers/cago1.jpeg';
import water from '../assets/pillers/water.jpeg';
const Rationale = ({ setPage }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const modes = [
    {
      id: '01',
      title: 'Public Transport',
      desc: 'Transforming the 47-county network through safe, inclusive PSV systems.',
      image: bus,
      tag: 'Urban Mobility',
      color: 'blue'
    },
    {
      id: '02',
      title: 'Railway Transport',
      desc: 'Expanding high-speed commuter rail and regional freight corridors.',
      image: rail,
      tag: 'Heavy Rail',
      color: 'green'
    },
    {
      id: '03',
      title: 'Aviation',
      desc: 'Modernizing regional hubs to bridge the gap in global trade connectivity.',
      image: air,
      tag: 'Air Trade',
      color: 'blue'
    },
    {
      id: '04',
      title: 'Freight & Logistics',
      desc: 'Optimizing supply chains and last-mile delivery for regional competitiveness.',
      image: cago,
      tag: 'Logistics',
      color: 'green'
    },
    {
      id: '05',
      title: 'Maritime & Blue Economy',
      desc: 'Optimizing port infrastructure and sustainable ferry systems.',
      image: water,
      tag: 'Marine Tech',
      color: 'blue'
    },
    {
      id: '06',
      title: 'Green Energy',
      desc: 'Accelerating the transition to low-emission and resilient transport networks.',
      image: emobility,
      tag: 'Sustainability',
      color: 'green'
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
        {/* The "Big Card" backdrop - now stretches to contain the cards */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-50 rounded-[4rem] border border-slate-100 shadow-inner mx-4 md:mx-12 overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          {/* Modern Greenish Stripes and Staffs */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #10b981 0px, #10b981 1px, transparent 1px, transparent 50px)' }}></div>
          <div className="absolute inset-0 flex justify-around opacity-[0.02] pointer-events-none px-20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-px h-full bg-sustainable-green"></div>
            ))}
          </div>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-sustainable-green/5 rounded-full blur-[120px] pointer-events-none"></div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative z-10 py-12 px-8 md:px-18"
        >
          <motion.div 
            variants={itemVariants}
            className="mb-12 text-center"
          >
          
            <h2 className="text-2xl md:text-3xl font-extrabold text-napta-navy leading-tight tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              The Pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">Integration.</span>
            </h2>
          </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modes.map((mode) => (
              <motion.div 
                key={mode.id}
                variants={itemVariants}
                whileHover={{ y: -30, scale: 1.01 }}
                className={`group relative flex flex-col min-h-[460px] rounded-[3rem] bg-white border border-slate-100 p-5 transition-all duration-700 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] ${
                  mode.color === 'blue' 
                    ? 'hover:shadow-[0_40px_100px_-20px_rgba(27,93,165,0.15)] hover:border-napta-blue/20' 
                    : 'hover:shadow-[0_40px_100px_-20px_rgba(16,185,129,0.15)] hover:border-sustainable-green/20'
                }`}
              >
                {/* Top Image Section */}
                <div className="relative h-[180px] w-full rounded-[2rem] overflow-hidden mb-6">
                  <img 
                    src={mode.image} 
                    alt={mode.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
                </div>

                {/* Bottom Text Section */}
                <div className="px-6 pb-6 flex flex-col flex-1">
                  <h4 className={`text-2xl font-bold text-napta-navy mb-4 leading-[1.2] transition-colors duration-500 ${
                    mode.color === 'blue' ? 'group-hover:text-napta-blue' : 'group-hover:text-sustainable-green'
                  }`}>{mode.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-normal opacity-90">{mode.desc}</p>
                  
                  <div className="mt-auto pt-8">
                    <div className={`w-12 h-[2px] bg-slate-100 group-hover:w-full transition-all duration-700 ${
                      mode.color === 'blue' ? 'group-hover:bg-napta-blue/40' : 'group-hover:bg-sustainable-green/40'
                    }`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage('Programme')}
              className="px-10 py-4 bg-napta-blue text-white rounded-2xl font-bold text-base shadow-xl shadow-napta-blue/20 transition-all flex items-center gap-2 mx-auto"
            >
              View Full Programme
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Rationale;