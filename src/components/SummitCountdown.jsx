import React from 'react';
import { motion } from 'framer-motion';
import Countdown from './Countdown';

const SummitCountdown = () => {
  return (
    <section className="py-8 bg-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
        {/* The "Big Card" backdrop */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-napta-navy rounded-[3rem] shadow-2xl mx-4 md:mx-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 50px)' }}></div>
          <div className="absolute inset-0 flex justify-around opacity-[0.03] pointer-events-none px-20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-px h-full bg-white"></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 py-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
          {/* Left: Logo & Branding */}
          <div className="text-center lg:text-left">
            <h3 className="text-white font-bold text-xl tracking-[0.2em] uppercase mb-1">The Countdown</h3>
            <p className="text-sustainable-green text-[10px] font-black uppercase tracking-[0.4em]">To National Delivery</p>
          </div>

          {/* Right: Countdown Timer */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="scale-90 md:scale-100">
              <Countdown />
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default SummitCountdown;