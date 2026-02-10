import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar, Twitter, Linkedin, Facebook, Instagram, ArrowRight } from 'lucide-react';

const Footer = ({ setPage, scrollToAbout }) => {
  const linkHover = { x: 5, color: "#ffffff" };

  return (
    <footer className="bg-napta-navy border-t border-white/10 pt-16 md:pt-20 pb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          <div className="md:col-span-4">
            <motion.div 
              className="flex items-center gap-3 mb-6 cursor-pointer group w-fit"
              onClick={() => setPage('Home')}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 bg-napta-blue rounded-xl flex items-center justify-center text-white font-black text-xs shadow-lg shadow-napta-blue/20">
                KNTS
              </div>
              <span className="text-white font-black text-xl tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>KNTS&E 2026</span>
            </motion.div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              The national accountability and delivery platform for Kenya's transport sector reform. Building safe, sustainable, and inclusive systems for all.
            </p>
            
            <div className="flex gap-4 mb-8">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, backgroundColor: "#1B5DA5", borderColor: "#1B5DA5" }}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all border border-white/10"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>

            <div className="space-y-2">
              <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">A Collaboration Between</p>
              <div className="flex items-center gap-4">
                <span className="text-xs font-black text-napta-blue">NAPTA KENYA</span>
                <div className="h-3 w-[1px] bg-white/20"></div>
                <span className="text-xs font-black text-slate-500">IDS, UNIVERSITY OF NAIROBI</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Summit</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {[
                { label: 'About the Summit', action: scrollToAbout },
                { label: 'Thematic Areas', action: () => {} },
                { label: 'Transport Expo', action: () => {} },
                { label: 'Programme', action: () => {} }
              ].map((link, i) => (
                <li key={i}>
                  <motion.button 
                    onClick={link.action} 
                    whileHover={linkHover}
                    className="hover:text-white transition-colors text-left flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-napta-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Participation</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {[
                { label: 'Register Delegate', action: () => {} },
                { label: 'Exhibitor Portal', href: '#' },
                { label: 'Media Center', href: '#' },
                { label: 'Contact Us', href: '#' }
              ].map((link, i) => (
                <li key={i}>
                  {link.action ? (
                    <motion.button 
                      onClick={link.action} 
                      whileHover={linkHover}
                      className="hover:text-white transition-colors text-left flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-napta-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </motion.button>
                  ) : (
                    <motion.a 
                      href={link.href} 
                      whileHover={linkHover}
                      className="hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-napta-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </motion.a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Stay Updated</h4>
            <div className="flex gap-2 mb-8">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-napta-blue flex-1 transition-colors"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-napta-blue hover:bg-napta-blue/80 text-white p-2 rounded-lg transition-colors"
              >
                <ArrowRight size={20} />
              </motion.button>
            </div>

            <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-wider">Event Details</h4>
            <div className="space-y-4">
              {[
                { icon: Calendar, text: '23rd – 25th Sept 2026' },
                { icon: MapPin, text: 'Nairobi, Kenya' },
                { icon: Mail, text: 'info@napta.or.ke' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 group cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-napta-blue/20 transition-colors">
                    <item.icon className="text-napta-blue w-4 h-4 shrink-0" />
                  </div>
                  <p className="text-sm text-slate-400 font-medium group-hover:text-white transition-colors pt-1.5">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-slate-600">
              © 2026 Kenya National Transport Summit & Expo. All Rights Reserved. 
              <span className="block md:inline mt-1 md:mt-0 md:ml-2">National Public Transport Alliance (NAPTA).</span>
            </p>
            
            <div className="flex items-center gap-8">
              <motion.a href="#" whileHover={{ color: '#fff' }} className="text-xs font-bold text-slate-600 transition-colors uppercase tracking-widest">Privacy Policy</motion.a>
              <motion.a href="#" whileHover={{ color: '#fff' }} className="text-xs font-bold text-slate-600 transition-colors uppercase tracking-widest">Terms of Use</motion.a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;