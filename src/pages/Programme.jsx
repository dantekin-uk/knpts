import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight, FileText, Building2, Zap, DollarSign, ChevronRight, Printer, Users } from 'lucide-react';
import programimage from '../assets/program/program.jpg';
import heroimage from '../assets/program/innovation1.jpg';

export default function Programme({ setPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Parallax logic for hero images
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 40]);
  const y2 = useTransform(scrollY, [0, 500], [0, -40]);

  const [activeDay, setActiveDay] = useState(1);
  
  const days = [
    {
      id: 1,
      date: "Sep 30, 2026",
      title: "Day 01: The Policy Mandate",
      events: [
        { time: "09:00 AM", title: "The Opening Ceremony & Presidential Plenary", description: "Setting the National & Regional Transport Agenda: High-level keynote addresses from government leadership and international bodies. A unified look at Kenya's integrated multi-modal masterplan.", location: "Grand Hall" },
        { time: "11:30 AM", title: "Strategic Plenary Panel", description: "Transport Governance, Regulation, and Delivery: Streamlining national policy with county-level implementation. How to harmonize regulations to accelerate project approvals and infrastructure delivery.", location: "Main Stage" },
        { time: "14:00 PM", title: "Side Event & Dialogues", description: "County and City Dialogues: A dedicated session for governors, mayors, and urban planners to align local transit networks with the national highway and rail corridors.", location: "Dialogue Room" },
        { time: "16:00 PM", title: "Academia & Research Symposium", description: "Evidence-Based Policy: Highlighting cutting-edge research from top universities and urban mobility institutes to guide future transport planning.", location: "Research Hub" }
      ]
    },
    {
      id: 2,
      date: "Oct 01, 2026",
      title: "Day 02: The Ecosystem & Innovation",
      events: [
        { time: "09:00 AM", title: "Main Stage Plenary", description: "Digitalization, Data, and ITS: The integration of Intelligent Transport Systems (ITS), AI, and digital ticketing to create a seamless, cashless, and highly efficient national network.", location: "Main Stage" },
        { time: "11:00 AM", title: "Technical & Concurrent Sessions", description: "Mode-Specific Deep Dives: Concurrent breakout rooms dedicated to specialized sectors including Aviation, Rail, Ports, and Next-Gen Public Transport.", location: "Breakout Rooms" },
        { time: "14:00 PM", title: "Masterclass & Exhibition", description: "Climate Resilience & Low-Emission Transport: Scaling E-Mobility, expanding charging infrastructure, and future-proofing physical assets against extreme weather.", location: "Expo Zone" },
        { time: "15:30 PM", title: "Technical Session", description: "Freight and Logistics Optimization: Leveraging technology to reduce dwell times at ports, improve first-and-last-mile delivery, and lower the cost of cargo transport.", location: "Tech Stage" }
      ]
    },
    {
      id: 3,
      date: "Oct 02, 2026",
      title: "Day 03: Capital & Investment",
      events: [
        { time: "09:00 AM", title: "Strategic Plenary Panel", description: "Financing Sustainable Transport: A high-stakes discussion on structuring Public-Private Partnerships (PPPs), attracting foreign direct investment (FDI), and accessing global green/climate funds.", location: "Grand Hall" },
        { time: "11:00 AM", title: "The Integration Symposium", description: "Integrated Transport Systems & Intermodal Connectivity: Funding the 'missing links.' How capital is being deployed to seamlessly connect ports to rail, and rail to last-mile road networks.", location: "Main Stage" },
        { time: "13:00 PM", title: "Closed-Door VIP Sessions", description: "Investor and Operator Roundtables: Exclusive, invite-only deal rooms connecting vetted, bankable Kenyan infrastructure projects directly with global institutional investors and DFIs.", location: "VIP Deal Room" },
        { time: "15:00 PM", title: "The Expo Floor", description: "Partner-Led Workshops and Launches: Official unveilings of new transport technologies, software platforms, and vehicle models by our headline sponsors.", location: "Expo Floor" }
      ]
    }
  ];

  // Helper to format time display if needed, though we'll use the strings directly
  const formatTime = (timeStr) => {
    return timeStr;
  };

  const activeDayData = days.find(day => day.id === activeDay);

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

  const focusAreas = [
    {
      icon: Building2,
      title: "The Policy & Governance Mandate",
      desc: "Aligning the National Blueprint. The foundation of a unified transport network. Day 1 focuses on harmonizing national and regional transport agendas, establishing investor-friendly regulatory frameworks across all 47 counties, and laying the groundwork for seamless intermodal connectivity between road, rail, air, and marine networks.",
      day: "Day 01",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Innovation, Tech & Ecosystem Execution",
      desc: "The Digital & Operational Transformation. The application of technology to physical infrastructure. Day 2 features mode-specific deep dives (aviation, rail, ports, public transport), the integration of Intelligent Transport Systems (ITS) for freight optimization, and the rapid scaling of climate-resilient, low-emission E-Mobility solutions.",
      day: "Day 02",
      color: "green"
    },
    {
      icon: DollarSign,
      title: "Capital, Bankability & Deal-Making",
      desc: "Unlocking Global Investment. Where vision meets funding. Day 3 is dedicated to financing sustainable transport through Public-Private Partnerships (PPPs) and green climate funds. Featuring closed-door investor and operator roundtables designed to turn infrastructure proposals into signed, bankable contracts.",
      day: "Day 03",
      color: "blue"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Print-specific Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          nav, footer, .no-print, button, .cta-section, .day-selector-tabs { display: none !important; }
          .min-h-screen { min-height: auto !important; padding-top: 0 !important; }
          header { padding-top: 2rem !important; padding-bottom: 2rem !important; }
          .max-w-7xl, .max-w-5xl { max-width: 100% !important; width: 100% !important; margin: 0 !important; padding: 0 !important; }
          .shadow-xl, .shadow-2xl, .shadow-sm, .shadow-inner { box-shadow: none !important; border: 1px solid #eee !important; }
          .bg-slate-50\/50, .bg-slate-50 { background-color: white !important; }
          .rounded-[3rem], .rounded-[2.5rem], .rounded-2xl { border-radius: 0.5rem !important; }
          body { background: white !important; color: black !important; }
          .print-only { display: block !important; }
        }
      `}} />

      {/* Header Section */}
      <header className="relative pt-44 lg:pt-52 pb-12 bg-white overflow-hidden no-print">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div 
              className="w-full lg:w-1/2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6">
                
                
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-4xl font-bold text-napta-navy leading-[1.15] tracking-tight mb-8"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Three Days of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green  font-light">Delivery.</span>
              </motion.h1> 

              <motion.p 
                variants={itemVariants}
                className="text-slate-600 text-sm md:text-base font-normal leading-relaxed max-w-xl mb-10"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Explore the sessions, keynotes, and closed-door deal rooms where Kenya’s multi-modal future is being negotiated, designed, and funded.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('Registration')}
                  className="px-8 py-4 bg-napta-blue text-white rounded-2xl font-bold text-sm shadow-xl shadow-napta-blue/20 hover:bg-napta-navy transition-all flex items-center gap-2 group"
                >
                  Register Now
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('Home')}
                  className="px-8 py-4 bg-white border border-slate-200 text-napta-navy rounded-2xl font-bold text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2 group"
                >
                  View Speakers
                  <Users size={18} className="group-hover:scale-110 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-1/2 relative mt-12 lg:mt-0 h-[380px] sm:h-[480px] lg:h-[560px]"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div 
                variants={itemVariants}
                style={{ y: y1 }}
                className="absolute top-0 right-0 z-10 rounded-[2rem] overflow-hidden shadow-xl w-[82%] lg:w-[78%]"
              >
                <img src={programimage} className="w-full h-[310px] sm:h-[390px] lg:h-[460px] object-cover" alt="Summit" />
                <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/40 via-transparent to-transparent opacity-60"></div>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                style={{ y: y2 }}
                className="absolute bottom-0 left-0 z-20 rounded-[1.5rem] overflow-hidden shadow-2xl w-[45%] lg:w-[40%]"
              >
                <img src={heroimage} className="w-full h-[100px] sm:h-[150px] lg:h-[190px] object-cover" alt="Dialogue" />
              </motion.div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-sustainable-green/10 rounded-full blur-3xl -z-0"></div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Focus Areas Section */}
      <section className="py-20 bg-white overflow-hidden no-print">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
          {/* The "Big Card" backdrop */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-50 rounded-[4rem] border border-slate-100 shadow-inner mx-4 md:mx-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #10b981 0px, #10b981 1px, transparent 1px, transparent 50px)' }}></div>
            <div className="absolute inset-0 flex justify-around opacity-[0.02] pointer-events-none px-20">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-px h-full bg-sustainable-green"></div>
              ))}
            </div>
          </div>

          <div className="relative z-10 py-12 px-8 md:px-18">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-napta-navy tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">Focus Tracks.</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -15, scale: 1.01 }}
                  className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:shadow-2xl hover:border-napta-blue/20 transition-all duration-700 group flex flex-col"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-napta-blue group-hover:text-white transition-all duration-500 shadow-inner">
                    <area.icon size={28} strokeWidth={1.5} className={area.color === 'blue' ? 'text-napta-blue group-hover:text-white' : 'text-sustainable-green group-hover:text-white'} />
                  </div>
                  <h4 className="text-lg font-bold text-napta-navy mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>{area.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mb-8 font-normal flex-1">{area.desc}</p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-napta-blue text-[10px] font-bold uppercase tracking-widest bg-napta-blue/5 px-4 py-2 rounded-full">{area.day} Focus</span>
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-napta-blue group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programme Schedule Section */}
      <section className="py-24 bg-white print:hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6"
          >
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-napta-navy mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Summit Schedule</h2>
              <p className="text-slate-500 max-w-2xl">Select a day to explore the high-level plenaries and technical sessions.</p>
            </div>
            
            <button 
              onClick={() => window.print()}
              className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 text-napta-navy rounded-xl font-bold text-sm hover:bg-napta-blue hover:text-white transition-all duration-300 border border-slate-100 shadow-sm no-print group"
            >
              <Printer size={16} className="group-hover:scale-110 transition-transform" />
              Print Schedule
            </button>
          </motion.div>
          
          {/* Day Selector Tabs */}
          <div className="flex gap-2 mb-12 bg-slate-50 p-2 rounded-[2rem] overflow-x-auto no-scrollbar border border-slate-100 shadow-inner day-selector-tabs">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`flex-1 min-w-[140px] py-5 rounded-[1.5rem] transition-all duration-500 ${
                  activeDay === day.id 
                    ? 'bg-white text-napta-blue font-bold shadow-lg shadow-napta-blue/5 border border-slate-100' 
                    : 'text-slate-400 hover:text-napta-navy'
                }`}
              >
                <div className="text-[10px] uppercase tracking-widest opacity-60 mb-1">{day.date}</div>
                <div className="text-sm">{day.title}</div>
              </button>
            ))}
          </div>
          
          {/* Events List */}
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {activeDayData.events.map((event, index) => (
                  <motion.div 
                    key={index}
                    className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row gap-8 items-start md:items-center hover:shadow-xl hover:border-napta-blue/10 transition-all duration-500"
                  >
                    <div className="flex flex-col items-start md:items-center min-w-[140px]">
                      <div className="flex items-center gap-2 text-napta-blue font-bold text-lg mb-1">
                        <Clock size={16} />
                        {event.time}
                      </div>
                      <div className="text-slate-400 text-xs font-medium">Scheduled</div>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-napta-navy font-bold text-lg mb-2 group-hover:text-napta-blue transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>{event.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4 font-normal">{event.description}</p>
                      <div className="flex items-center gap-4">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold bg-slate-50 text-slate-500 px-3 py-1.5 rounded-full uppercase tracking-wider border border-slate-100">
                          <MapPin size={12} className="text-napta-blue" />
                          {event.location}
                        </span>
                      </div>
                    </div>

                    <button className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-napta-blue group-hover:text-white transition-all duration-500 shadow-inner">
                      <ChevronRight size={20} />
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Full Schedule for Printing (Hidden on Screen) */}
      <div className="hidden print-only px-12 py-8">
        <div className="mb-12 border-b-2 border-napta-blue pb-6">
          <h1 className="text-3xl font-bold text-napta-navy">Kenya Transport Summit 2026</h1>
          <p className="text-slate-500 uppercase tracking-widest font-bold text-sm">Official Three-Day Agenda</p>
        </div>
        
        {days.map((day) => (
          <div key={day.id} className="mb-12 break-inside-avoid">
            <h2 className="text-xl font-bold text-napta-blue mb-4 border-l-4 border-napta-blue pl-4 bg-slate-50 py-2">
              {day.title} — {day.date}
            </h2>
            <div className="space-y-6">
              {day.events.map((event, idx) => (
                <div key={idx} className="border-b border-slate-100 pb-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-bold text-napta-navy">{event.title}</span>
                    <span className="text-sm font-mono text-slate-500">{event.time}</span>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">{event.description}</p>
                  <div className="text-xs font-bold text-napta-blue/70 uppercase tracking-tight">Location: {event.location}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-white overflow-hidden cta-section no-print">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
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
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-napta-navy mb-8 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Ready to Join the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green  font-light">Conversation?</span>
              </h2>
              <p className="text-slate-600 text-xs md:text-sm font-normal max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Delegate passes are strictly limited to ensure high-level networking and deal-flow. Secure your spot or download the full prospectus for your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPage('Registration')}
                  className="px-10 py-4 bg-napta-blue text-white rounded-2xl font-bold text-base shadow-xl shadow-napta-blue/20 transition-all flex items-center gap-2 group"
                >
                  Secure Delegate Pass
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.print()}
                  className="px-10 py-4 bg-white border border-slate-200 text-napta-navy rounded-2xl font-bold text-base shadow-sm hover:shadow-md transition-all"
                >
                  Download PDF Programme
                  <FileText size={18} className="ml-2" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
