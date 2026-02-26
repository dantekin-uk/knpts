import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact = ({ setPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formStatus, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen bg-white pt-44 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-napta-navy mb-6">
                Contact Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">Team.</span>
              </h1>
              <p className="text-slate-500 text-lg mb-12 leading-relaxed">
                Thank you for your interest in the Kenya Transport Summit & Expo 2026. 
                Whether you are looking to exhibit, sponsor, or speak, our team is ready to assist you in positioning your organization at the center of the national mandate.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-napta-blue shadow-inner">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-napta-navy">Email Us</h4>
                    <p className="text-slate-500">partnerships@kenyatransportsummit.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-sustainable-green shadow-inner">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-napta-navy">Call Us</h4>
                    <p className="text-slate-500">+254 700 000 000</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-xl"
            >
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-sustainable-green/10 rounded-full flex items-center justify-center mx-auto mb-6 text-sustainable-green">
                    <Send size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-napta-navy mb-4">Message Sent!</h2>
                  <p className="text-slate-600 mb-8">Our team will get back to you within 24-48 hours.</p>
                  <button 
                    onClick={() => setPage('Home')}
                    className="px-8 py-3 bg-napta-blue text-white rounded-xl font-bold transition-all"
                  >
                    Back to Home
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-napta-blue outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-napta-blue outline-none transition-all" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Inquiry Type</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-napta-blue outline-none transition-all bg-white">
                      <option>Exhibition Space</option>
                      <option>Strategic Sponsorship</option>
                      <option>Speaking Opportunity</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea required rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-napta-blue outline-none transition-all" placeholder="Tell us about your requirements..."></textarea>
                  </div>
                  <button 
                    disabled={formStatus === 'sending'}
                    type="submit" 
                    className="w-full py-4 bg-napta-blue text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-napta-navy transition-all disabled:opacity-50"
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Send Inquiry'}
                    <ArrowRight size={20} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;