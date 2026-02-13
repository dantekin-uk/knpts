import React from 'react';
import { motion } from 'framer-motion';
import expoimage from '../assets/expo1.png';
import delegate from '../assets/delegate.png';
import partnersimage from '../assets/partnerso.png';

const Involvement = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const options = [
    {
      id: '01',
      title: 'Become a Delegate',
      focus: 'Strategic Participation',
      desc: 'Join national and county government leaders, regulators, and development partners in high-level plenaries. Engage in mode-specific technical sessions and research dialogues led by the University of Nairobi (IDS) to shape the national transport accountability statement.',
      action: 'Register as Delegate',
      image: delegate,
      color: 'blue'
    },
    {
      id: '02',
      title: 'Showcase at the Expo',
      focus: 'Innovation & Market Presence',
      desc: 'Position your brand at the center of Kenya’s mobility marketplace. Showcase the latest in electric PSVs, rolling stock, aviation services, and Intelligent Transport Systems (ITS) to a concentrated audience of operators, investors, and policy makers.',
      action: 'Book Exhibition Space',
      image: expoimage,
      color: 'green'
    },
    {
      id: '03',
      title: 'Partner & Sponsor',
      focus: 'Leadership & Visibility',
      desc: 'Align your organization with the national agenda for safe, sustainable, and inclusive transport. Support the intermodal mission through strategic sponsorship and gain exclusive access to investor roundtables and the 2026 progress review sessions.',
      action: 'View Partnership Tiers',
      image: partnersimage,
    }
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
        {/* The "Big Card" backdrop */}
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
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-napta-navy leading-tight tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Ways to <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">Get Involved.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {options.map((option) => (
              <motion.div 
                key={option.id}
                variants={itemVariants}
                whileHover={{ y: -30, scale: 1.01 }}
                className={`group relative flex flex-col min-h-[520px] rounded-[3rem] bg-white border border-slate-100 p-5 transition-all duration-700 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] ${
                  option.color === 'blue' 
                    ? 'hover:shadow-[0_40px_100px_-20px_rgba(27,93,165,0.15)] hover:border-napta-blue/20' 
                    : 'hover:shadow-[0_40px_100px_-20px_rgba(16,185,129,0.15)] hover:border-sustainable-green/20'
                }`}
              >
                {/* Top Image Section */}
                <div className="relative h-[180px] w-full rounded-[2rem] overflow-hidden mb-6">
                  <img src={option.image} alt={option.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
                </div>

                {/* Bottom Text Section */}
                <div className="px-6 pb-6 flex flex-col flex-1">
                  <h4 className={`text-2xl font-bold text-napta-navy mb-4 leading-[1.2] transition-colors duration-500 ${
                    option.color === 'blue' ? 'group-hover:text-napta-blue' : 'group-hover:text-sustainable-green'
                  }`}>{option.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-normal opacity-90">{option.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Involvement;