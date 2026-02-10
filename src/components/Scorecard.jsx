import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { MapPin, TrendingUp, ShieldCheck, Activity } from 'lucide-react';

const Counter = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    // Handle decimals for the budget value
    return latest % 1 === 0 ? Math.round(latest) : latest.toFixed(2);
  });
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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

const Scorecard = () => {
  const stats = [
    { label: "Counties Integrated", value: "47", suffix: "", icon: MapPin, color: "text-napta-navy", size: "col-span-1" },
    { label: "Budget Allocated", value: "4.99", suffix: "M", icon: TrendingUp, color: "text-napta-blue", size: "col-span-1" },
    { label: "Safety Compliance", value: "89", suffix: "%", icon: ShieldCheck, color: "text-safety-gold", size: "col-span-1 md:col-span-2" },
    { label: "NMT Infrastructure", value: "1200", suffix: "km", icon: Activity, color: "text-sustainable-green", size: "col-span-1" },
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">Accountability Scorecard</h2>
            <p className="text-slate-600 text-sm">Real-time progress tracking of national transport objectives since the 2025 Summit.</p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-slate-200 mx-8 mb-4" />
          <div className="flex items-center gap-2 text-napta-blue font-mono text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-napta-blue animate-pulse" />
            LIVE_DATA_FEED
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass-card p-8 rounded-3xl ${stat.size || ''} flex flex-col justify-between group transition-all duration-300`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`p-3 rounded-2xl bg-white shadow-sm group-hover:bg-slate-50 transition-colors`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-widest">REF_2026_V1</span>
              </div>
              <div>
                <div className="text-4xl font-black text-napta-navy mb-1 tracking-tighter">
                  {stat.label === "Budget Allocated" && <span className="text-2xl mr-1">$</span>}
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scorecard;