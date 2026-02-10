import { motion } from 'framer-motion';
import { Shield, Globe, Users, Target, MapPin, Clock, Calendar, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { value: "3", label: "Days", icon: Calendar },
    { value: "5,000+", label: "Participants", icon: Users },
    { value: "100+", label: "Speakers", icon: Users },
    { value: "50+", label: "Exhibitors", icon: MapPin },
  ];

  const pillars = [
    {
      title: "Safety",
      description: "Implementing world-class safety standards across all transport modes",
      icon: Shield,
      color: "text-blue-400"
    },
    {
      title: "Sustainability",
      description: "Promoting green technologies and reducing carbon footprint",
      icon: Globe,
      color: "text-emerald-400"
    },
    {
      title: "Inclusivity",
      description: "Ensuring accessible and equitable transport solutions for all",
      icon: Users,
      color: "text-purple-400"
    }
  ];

  const partners = [
    { name: "Ministry of Transport", logo: "/logos/mot.png", width: 180 },
    { name: "NAPTA", logo: "/logos/napta.png", width: 120 },
    { name: "University of Nairobi", logo: "/logos/uon.png", width: 180 },
    { name: "KNTC", logo: "/logos/kntc.png", width: 120 },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Shaping the Future of <span className="text-gradient">African Mobility</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12">
              The Kenya National Transport Summit & Expo (KNTS&E) is East Africa's premier platform for transport and infrastructure development, bringing together policymakers, industry leaders, and innovators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-napta-blue/10 flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="text-napta-blue w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Pillars */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Strategic Pillars</h2>
            <div className="w-20 h-1 bg-napta-blue mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl hover:bg-white transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${pillar.color} bg-opacity-10 flex items-center justify-center mb-6`}>
                  <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                <p className="text-slate-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Event Details</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-napta-blue/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="text-napta-blue w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Date</h3>
                  <p className="text-slate-600">September 23-25, 2026</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-napta-blue/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-napta-blue w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Time</h3>
                  <p className="text-slate-600">8:00 AM - 6:00 PM EAT Daily</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-napta-blue/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-napta-blue w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Venue</h3>
                  <p className="text-slate-600">Kenyatta International Convention Centre (KICC)</p>
                  <p className="text-slate-500 text-sm">Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-napta-blue/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="text-napta-blue w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Theme</h3>
                  <p className="text-slate-600">Building Safe, Sustainable and Inclusive Transport Systems</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-napta-blue text-white px-6 py-3 rounded-full font-bold hover:bg-napta-navy transition-colors"
              >
                Download Event Brochure
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Partners</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We're proud to collaborate with leading organizations in the transport sector</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-xl hover:shadow-md transition-all border border-slate-100"
              >
                <div className="h-16 flex items-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-10 mx-auto opacity-60 hover:opacity-100 transition-opacity"
                    style={{ width: partner.width }}
                  />
                </div>
                <p className="text-center text-sm text-slate-500 mt-2">{partner.name}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">Interested in becoming a partner or sponsor?</p>
            <a
              href="mailto:partnerships@knts2026.ke"
              className="inline-flex items-center gap-2 border border-napta-blue text-napta-blue px-6 py-3 rounded-full font-medium hover:bg-napta-blue hover:text-white transition-colors"
            >
              Partner With Us
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
