import { motion } from 'framer-motion';
import { ChevronRight, Train, Bus, Plane, Ship, Car, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

export default function TheExpo() {
  const modes = [
    { 
      title: "Road & NMT", 
      icon: Car, 
      desc: "Smart highways and pedestrian-first urban design.",
      stats: [
        { label: "NMT Lanes", value: "450km" },
        { label: "EV Chargers", value: "120+" }
      ]
    },
    { 
      title: "Rail Systems", 
      icon: Train, 
      desc: "Standard Gauge expansion and urban commuter rail.",
      stats: [
        { label: "SGR Phase 3A", value: "273km" },
        { label: "Nairobi Metro", value: "5 Lines" }
      ]
    },
    { 
      title: "Aviation", 
      icon: Plane, 
      desc: "Sustainable fuels and regional hub optimization.",
      stats: [
        { label: "Int'l Airports", value: "4" },
        { label: "Annual Pax", value: "12M+" }
      ]
    },
    { 
      title: "Maritime", 
      icon: Ship, 
      desc: "Blue economy and port automation technologies.",
      stats: [
        { label: "Ports", value: "2" },
        { label: "TEU Capacity", value: "2.1M" }
      ]
    },
  ];

  const highlights = [
    {
      title: "Live Demos",
      description: "Experience next-gen transport solutions",
      icon: <div className="w-10 h-10 rounded-full bg-napta-blue/10 flex items-center justify-center">
        <ArrowRight className="text-napta-blue w-5 h-5" />
      </div>
    },
    {
      title: "Expert Talks",
      description: "Insights from industry leaders",
      icon: <div className="w-10 h-10 rounded-full bg-napta-blue/10 flex items-center justify-center">
        <Users className="text-napta-blue w-5 h-5" />
      </div>
    },
    {
      title: "Networking",
      description: "Connect with transport professionals",
      icon: <div className="w-10 h-10 rounded-full bg-napta-blue/10 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-napta-blue">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      </div>
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            <span className="text-gradient">The Transport Expo</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Experience the future of mobility across Kenya's four key transport pillars. 
            Discover innovations, network with experts, and explore sustainable solutions.
          </p>
        </div>

        {/* Transport Mode Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {modes.map((mode, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <mode.icon size={80} />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-napta-blue/10 flex items-center justify-center mb-6">
                  <mode.icon className="text-napta-blue" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{mode.title}</h3>
                <p className="text-slate-600 text-sm mb-6">{mode.desc}</p>
                <div className="flex gap-4 mb-6">
                  {mode.stats.map((stat, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-lg p-3 flex-1">
                      <div className="text-napta-blue font-bold text-lg">{stat.value}</div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center text-napta-blue font-bold text-sm group-hover:gap-2 transition-all">
                  Explore {mode.title} <ChevronRight size={16} className="mt-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expo Highlights */}
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Expo Highlights</h3>
            <p className="text-slate-600">What to expect at the Transport Expo 2026</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 hover:bg-white transition-colors border border-slate-100"
              >
                <div className="flex items-start gap-4">
                  {item.icon}
                  <div>
                    <h4 className="text-slate-900 font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100 text-center">
            <div className="inline-flex items-center gap-2 bg-napta-blue/10 text-napta-blue px-6 py-3 rounded-full text-sm font-medium">
              <Clock size={16} />
              <span>Open: 9:00 AM - 6:00 PM Daily</span>
            </div>
            <p className="mt-4 text-slate-600 text-sm">
              <span className="text-slate-900 font-medium">Location:</span> KICC, Nairobi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
