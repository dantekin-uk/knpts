import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { MapPin, Layers, Users, Calendar } from 'lucide-react';

const Counter = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return latest % 1 === 0 ? Math.round(latest) : latest.toFixed(2);
  });
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, ''));
      const controls = animate(count, numericValue, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const FloatingDock = () => {
  const stats = [
    { label: "Counties Integrated", value: "47", suffix: "", icon: MapPin, color: "text-napta-navy" },
    { label: "Thematic Areas", value: "11", suffix: "", icon: Layers, color: "text-napta-blue" },
    { label: "Strategic Partners", value: "20", suffix: "+", icon: Users, color: "text-sustainable-green" },
    { label: "Summit Days", value: "3", suffix: "", icon: Calendar, color: "text-safety-gold" },
  ];

  return (
    <div className="relative z-20 -mt-10 md:-mt-16 px-4">
      <div className="max-w-6xl mx-auto relative">
       

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/95 md:bg-white/90 backdrop-blur-3xl border border-white/40 shadow-[0_32px_64px_-16px_rgba(13,45,80,0.12)] rounded-3xl md:rounded-[2.5rem] p-2 md:p-4 relative overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                whileHover={{ backgroundColor: "rgba(248, 250, 252, 0.8)", transition: { duration: 0.2 } }}
                className="p-4 md:p-6 flex flex-col md:flex-row items-center md:items-start lg:items-center gap-3 md:gap-5 group text-center md:text-left transition-colors duration-300 first:rounded-tl-3xl last:rounded-br-3xl lg:first:rounded-l-[2.5rem] lg:last:rounded-r-[2.5rem] relative"
              >
                <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-slate-50 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-napta-blue/10 group-hover:-translate-y-1.5 transition-all duration-500 shrink-0 border border-transparent group-hover:border-slate-100`}>
                  <stat.icon className={`w-5 h-5 md:w-6 md:h-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-xl md:text-3xl font-black text-napta-navy tracking-tighter flex items-baseline justify-center md:justify-start">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-[0.1em] md:tracking-[0.2em] mt-1">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FloatingDock;