import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

const Contact = ({ setPage }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Us | Kenya Transport Summit 2026";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Connect with the Kenya Transport Summit team for inquiries regarding exhibition space, sponsorship, speaking opportunities, or general information.");
    }
    
    // Check if we just returned from a successful Zoho submission
    const params = new URLSearchParams(window.location.search);
    if (params.get('status') === 'success') {
      setIsSubmitted(true);
    }
  }, []);

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

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header Section */}
      <header className="relative pt-44 lg:pt-52 pb-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Content: Contact Info */}
            <motion.div 
              className="w-full lg:w-1/2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-napta-navy leading-[1.15] tracking-tight mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Connect with the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Summit Team.</span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-slate-600 text-sm md:text-base font-normal leading-relaxed max-w-xl mb-10"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Thank you for your interest in the Kenya Transport Summit & Expo 2026. 
                Whether you are looking to exhibit, sponsor, or speak, our team is ready to assist you in positioning your organization at the center of the national mandate.
              </motion.p>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div 
                  variants={itemVariants}
                  className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-500 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-napta-blue/10 flex items-center justify-center text-napta-blue mb-4 group-hover:bg-napta-blue group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <h4 className="font-bold text-napta-navy text-sm mb-1">Email Us</h4>
                  <p className="text-slate-500 text-xs">info@kenyatransportsummit.com</p>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-lg transition-all duration-500 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sustainable-green/10 flex items-center justify-center text-sustainable-green mb-4 group-hover:bg-sustainable-green group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <h4 className="font-bold text-napta-navy text-sm mb-1">Call Us</h4>
                  <p className="text-slate-500 text-xs">+254 719 282 866</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Form Section */}
            <motion.div 
              className="w-full lg:w-1/2 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-[3rem] p-8 md:p-10 border border-slate-100 shadow-2xl relative z-10">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-sustainable-green/10 rounded-full flex items-center justify-center mx-auto mb-6 text-sustainable-green">
                      <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-2xl font-bold text-napta-navy mb-4">Message Received!</h2>
                    <p className="text-slate-600 mb-8">Thank you for reaching out. Our team will review your inquiry and get back to you shortly.</p>
                    <button 
                      onClick={() => {
                        window.history.replaceState({}, document.title, window.location.pathname);
                        setIsSubmitted(false);
                      }}
                      className="px-8 py-3 bg-napta-blue text-white rounded-xl font-bold hover:bg-napta-navy transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form 
                    action='https://crm.zoho.com/crm/WebToLeadForm' 
                    name='WebToLeads6505276000001376995' 
                    method='POST' 
                    acceptCharset='UTF-8'
                    onSubmit={() => setIsLoading(true)}
                    className="space-y-5"
                  >
                    {/* Zoho Required Hidden Fields */}
                    <input type='hidden' name='xnQsjsdp' value='baf59c59ce1a1a9bd9c225fc63581101560a24816fe9dcc1acaf2b89ae4cc5a5' />
                    <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                    <input type='hidden' name='xmIwtLD' value='63eb7e3579de69020feca3d351370b8ea1e1bafe9d391c8d38f8c7a192b595813e514efc8b76353a622f25d3be405e53' />
                    <input type='hidden' name='actionType' value='TGVhZHM=' />
                    <input type='hidden' name='returnURL' value={`${window.location.origin}${window.location.pathname}?status=success`} />
                    <input type='hidden' name='aG9uZXlwb3Q' value='' />

                    <div className="grid grid-cols-1 gap-5">
                      <motion.div variants={itemVariants}>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 ml-1">Company <span className="text-red-500">*</span></label>
                        <input required type="text" name="Company" className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-napta-blue focus:bg-white outline-none transition-all text-sm" placeholder="Organization Name" />
                      </motion.div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <motion.div variants={itemVariants}>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 ml-1">First Name <span className="text-red-500">*</span></label>
                          <input required type="text" name="Last Name" className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-napta-blue focus:bg-white outline-none transition-all text-sm" placeholder="John" />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 ml-1">Second Name <span className="text-red-500">*</span></label>
                          <input required type="text" name="First Name" className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-napta-blue focus:bg-white outline-none transition-all text-sm" placeholder="Doe" />
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <motion.div variants={itemVariants}>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 ml-1">Phone Number <span className="text-red-500">*</span></label>
                          <input required type="tel" name="Mobile" className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-napta-blue focus:bg-white outline-none transition-all text-sm" placeholder="+254..." />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 ml-1">Email <span className="text-red-500">*</span></label>
                          <input required type="email" name="Email" className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-napta-blue focus:bg-white outline-none transition-all text-sm" placeholder="john@example.com" />
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <motion.div variants={itemVariants}>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 ml-1">Inquiry Type <span className="text-red-500">*</span></label>
                          <select required name="LEADCF1" className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-napta-blue focus:bg-white outline-none transition-all text-sm cursor-pointer">
                            <option value="">- Select Option -</option>
                            <option value="Exhibition Space">Exhibition Space</option>
                            <option value="Sponsorship">Sponsorship</option>
                            <option value="Delegate inquiry">Delegate inquiry</option>
                            <option value="General inquiry">General inquiry</option>
                          </select>
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <motion.div variants={itemVariants}>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 ml-1">Country <span className="text-red-500">*</span></label>
                          <input required type="text" name="Country" className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-napta-blue focus:bg-white outline-none transition-all text-sm" placeholder="Kenya" />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 ml-1">How did you find us?</label>
                          <select name="Lead Source" className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-napta-blue focus:bg-white outline-none transition-all text-sm cursor-pointer">
                            <option value="">- Select Option -</option>
                            <option value="Advertisement">Advertisement</option>
                            <option value="Cold Call">Cold Call</option>
                            <option value="Employee Referral">Employee Referral</option>
                            <option value="External Referral">External Referral</option>
                            <option value="OnlineStore">OnlineStore</option>
                            <option value="X (Twitter)">X (Twitter)</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Partner">Partner</option>
                            <option value="Public Relations">Public Relations</option>
                            <option value="Sales Mail Alias">Sales Mail Alias</option>
                            <option value="Seminar Partner">Seminar Partner</option>
                            <option value="Seminar-Internal">Seminar-Internal</option>
                            <option value="Trade Show">Trade Show</option>
                            <option value="Web Download">Web Download</option>
                            <option value="Web Research">Web Research</option>
                            <option value="Chat">Chat</option>
                          </select>
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants}>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 ml-1">Description <span className="text-red-500">*</span></label>
                        <textarea required name="Description" rows="4" className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 focus:border-napta-blue focus:bg-white outline-none transition-all text-sm resize-none" placeholder="How can we assist you?"></textarea>
                      </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="pt-4">
                      <button 
                        type="submit" 
                        disabled={isLoading}
                        className={`w-full py-4 bg-napta-blue text-white rounded-2xl font-bold text-sm shadow-xl shadow-napta-blue/20 hover:bg-napta-navy transition-all flex items-center justify-center gap-3 group ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isLoading ? 'Processing...' : 'Send Message'}
                        {!isLoading && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                      </button>
                    </motion.div>
                  </form>
                )}
              </div>
              
              {/* Decorative background shapes */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-sustainable-green/10 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-napta-blue/10 rounded-full blur-3xl -z-0"></div>
            </motion.div>

          </div>
        </div>
      </header>

      {/* Secretariat Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-50 rounded-[4rem] border border-slate-100 shadow-inner mx-4 md:mx-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #10b981 0px, #10b981 1px, transparent 1px, transparent 50px)' }}></div>
          </div>

          <div className="relative z-10 py-16 px-8 md:px-18 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-napta-navy mb-6 tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Visit Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green font-light">Secretariat.</span>
              </h2>
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-6 text-slate-600">
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-napta-blue" />
                    <p className="text-sm md:text-base font-medium">Nairobi, Kenya</p>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-sustainable-green" />
                    <p className="text-sm md:text-base font-medium">Mon - Fri, 8:00 AM - 5:00 PM EAT</p>
                  </div>
                </div>
                <p className="text-slate-500 text-xs max-w-md mx-auto leading-relaxed">
                  Our team is available to discuss your participation in the 2026 Summit. We recommend scheduling an appointment via email for in-person consultations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;