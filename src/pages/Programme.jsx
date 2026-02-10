import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Programme() {
  const [activeDay, setActiveDay] = useState(1);
  
  const days = [
    { 
      id: 1, 
      date: "Sept 23", 
      title: "Policy & Strategy",
      events: [
        {
          time: "09:00 - 10:30",
          title: "Opening Ceremony & Keynote",
          description: "Official opening by the Cabinet Secretary for Transport",
          location: "Main Hall"
        },
        {
          time: "11:00 - 12:30",
          title: "Intermodal Integration Panel",
          description: "Bridging road, rail, air and maritime transport",
          location: "Plenary A"
        },
        {
          time: "14:00 - 15:30",
          title: "Funding Sustainable Transport",
          description: "Public-private partnerships and investment opportunities",
          location: "Breakout Room 1"
        }
      ]
    },
    { 
      id: 2, 
      date: "Sept 24", 
      title: "Innovation & Tech",
      events: [
        {
          time: "09:30 - 11:00",
          title: "Smart Mobility Solutions",
          description: "Digital transformation in public transport",
          location: "Tech Pavilion"
        },
        {
          time: "11:30 - 13:00",
          title: "Green Technologies",
          description: "Electric and alternative fuel vehicles",
          location: "Innovation Hub"
        }
      ]
    },
    { 
      id: 3, 
      date: "Sept 25", 
      title: "Expo & Closing",
      events: [
        {
          time: "10:00 - 16:00",
          title: "Transport Expo",
          description: "Showcase of latest transport technologies",
          location: "Exhibition Halls A-D"
        },
        {
          time: "16:30 - 18:00",
          title: "Closing Ceremony",
          description: "Awards and way forward",
          location: "Main Hall"
        }
      ]
    }
  ];

  const activeDayData = days.find(day => day.id === activeDay);

  return (
    <section className="pt-32 pb-20 max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Summit Schedule</h2>
      
      {/* Day Selector Tabs */}
      <div className="flex gap-2 mb-12 glass-card p-2 rounded-2xl">
        {days.map((day) => (
          <button
            key={day.id}
            onClick={() => setActiveDay(day.id)}
            className={`flex-1 py-4 rounded-xl transition-all ${
              activeDay === day.id 
                ? 'bg-napta-blue text-white font-bold' 
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <div className="text-xs uppercase opacity-70">{day.date}</div>
            <div>{day.title}</div>
          </button>
        ))}
      </div>
      
      {/* Events List */}
      <div className="space-y-4">
        {activeDayData.events.map((event, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 rounded-2xl flex gap-6 items-center hover:bg-white transition-colors"
          >
            <div className="text-napta-blue font-mono text-xl">{event.time}</div>
            <div className="flex-1">
              <h4 className="text-slate-900 font-bold text-lg">{event.title}</h4>
              <p className="text-slate-600 text-sm">{event.description}</p>
              <div className="mt-2">
                <span className="text-xs bg-slate-100 text-napta-blue px-2 py-1 rounded-full">
                  {event.location}
                </span>
              </div>
            </div>
            <button className="p-2 text-slate-400 hover:text-napta-blue transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 16 16 12 12 8"></polyline>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </button>
          </motion.div>
        ))}
      </div>
      
      {/* Add to Calendar Button */}
      <div className="mt-10 text-center">
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-napta-blue/10 text-napta-blue rounded-lg font-medium hover:bg-napta-blue/20 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          Add to Calendar
        </button>
      </div>
    </section>
  );
}
