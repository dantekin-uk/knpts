import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, ArrowLeft, Building2, BookOpen, Users, Briefcase } from 'lucide-react';

export default function Registration() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    email: '',
    organization: '',
    position: '',
    phone: '',
    requirements: ''
  });

  const categories = [
    { 
      id: 'government', 
      name: 'National/County Government', 
      icon: <Building2 size={20} className="text-napta-blue" />,
      description: 'Public sector officials and policymakers'
    },
    { 
      id: 'operators', 
      name: 'Transport Operators', 
      icon: <Users size={20} className="text-napta-blue" />,
      description: 'Public and private transport service providers'
    },
    { 
      id: 'academia', 
      name: 'Academia & Research', 
      icon: <BookOpen size={20} className="text-napta-blue" />,
      description: 'Researchers, educators, and students'
    },
    { 
      id: 'private', 
      name: 'Private Sector', 
      icon: <Briefcase size={20} className="text-napta-blue" />,
      description: 'Businesses and industry stakeholders'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit form
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
      setStep(4); // Success step
    }
  };

  return (
    <section className="pt-24 md:pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="glass-card rounded-3xl overflow-hidden">
          {/* Progress Bar */}
          <div className="h-1 bg-slate-100">
            <motion.div 
              className="h-full bg-napta-blue"
              initial={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}
              animate={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Participant Category</h2>
                    <p className="text-slate-600">Select your primary affiliation for the summit</p>
                  </div>
                  
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <motion.button
                        key={category.id}
                        whileHover={{ y: -4, scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => {
                          setFormData(prev => ({ ...prev, category: category.name }));
                          setStep(2);
                        }}
                        className="w-full p-4 rounded-xl border border-slate-100 text-left text-slate-600 bg-white/50 hover:bg-white hover:shadow-xl hover:border-napta-blue/30 transition-all flex items-start gap-4 group"
                      >
                        <div className="p-2 bg-napta-blue/10 rounded-lg">
                          {category.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-slate-900">{category.name}</div>
                          <div className="text-sm text-slate-500">{category.description}</div>
                        </div>
                        <ChevronRight className="w-5 h-5 mt-1 text-slate-500 group-hover:text-napta-blue group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.form
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-6 transition-colors"
                    >
                      <ArrowLeft size={16} /> Back
                    </button>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Your Information</h2>
                    <p className="text-slate-600">Please provide your details to complete registration</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-600 mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-napta-blue outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-napta-blue outline-none"
                          placeholder="you@organization.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-napta-blue outline-none"
                          placeholder="+254 700 000000"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-600 mb-1">Organization</label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-napta-blue outline-none"
                        placeholder="Your organization name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-600 mb-1">Position</label>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-napta-blue outline-none"
                        placeholder="Your position/title"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-600 mb-1">Special Requirements</label>
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-napta-blue outline-none"
                        placeholder="Accessibility needs, dietary restrictions, etc."
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-napta-blue text-white py-4 rounded-xl font-bold hover:bg-napta-navy transition-colors flex items-center justify-center gap-2"
                    >
                      Continue to Payment <ChevronRight size={18} />
                    </button>
                  </div>
                </motion.form>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-6 transition-colors"
                    >
                      <ArrowLeft size={16} /> Back
                    </button>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Payment Information</h2>
                    <p className="text-slate-600">Complete your registration with a secure payment</p>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-2xl mb-6 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-4">Registration Fee</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Standard Pass</span>
                        <span className="font-medium text-slate-900">$199</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">VAT (16%)</span>
                        <span className="font-medium text-slate-900">$31.84</span>
                      </div>
                      <div className="border-t border-slate-200 pt-3 mt-3">
                        <div className="flex justify-between">
                          <span className="font-bold text-slate-900">Total</span>
                          <span className="font-bold text-napta-blue">$230.84</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-600 mb-1">Card Number</label>
                      <input
                        type="text"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-napta-blue outline-none font-mono"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Expiry Date</label>
                        <input
                          type="text"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-napta-blue outline-none"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">CVC</label>
                        <input
                          type="text"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-napta-blue outline-none"
                          placeholder="123"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2 mt-6">
                      <input type="checkbox" id="terms" className="mt-1" required />
                      <label htmlFor="terms" className="text-sm text-slate-400">
                        I agree to the <a href="#" className="text-napta-blue hover:underline">Terms & Conditions</a> and 
                        <a href="#" className="text-napta-blue hover:underline"> Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                  
                  <div className="pt-4 space-y-3">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="w-full bg-napta-blue text-white py-4 rounded-xl font-bold hover:bg-napta-navy transition-colors"
                    >
                      Complete Registration
                    </button>
                    <div className="flex items-center gap-2 text-xs text-slate-500 justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                      Payments are secure and encrypted
                    </div>
                  </div>
                </motion.div>
              )}
              
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-napta-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-napta-blue w-10 h-10" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Registration Complete!</h2>
                  <p className="text-slate-600 mb-8 max-w-md mx-auto">
                    Thank you for registering for KNTS&E 2026. We've sent a confirmation email to <span className="text-slate-900 font-medium">{formData.email}</span> with your ticket and event details.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-2xl max-w-md mx-auto mb-8 text-left border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-4">Your Registration</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Name</span>
                        <span className="font-medium text-slate-900">{formData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Pass Type</span>
                        <span className="font-medium text-slate-900">Standard Pass</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Reference</span>
                        <span className="font-mono text-napta-blue">KNTS2026-{Math.floor(100000 + Math.random() * 900000)}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <button
                      onClick={() => window.print()}
                      className="w-full bg-napta-blue/10 text-napta-blue py-3 rounded-xl font-medium hover:bg-napta-blue/20 transition-colors"
                    >
                      Download Ticket
                    </button>
                    <button
                      onClick={() => window.location.reload()}
                      className="w-full bg-slate-100 text-slate-900 py-3 rounded-xl font-medium hover:bg-slate-200 transition-colors"
                    >
                      Back to Home
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {step < 4 && (
              <div className="mt-8 pt-6 border-t border-white/5 text-center">
                <p className="text-sm text-slate-500">
                  Need help? <a href="mailto:registration@knts2026.ke" className="text-napta-blue hover:underline">Contact our support team</a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
