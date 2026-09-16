import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronRight, ArrowLeft, Building2, BookOpen, Users, Briefcase } from 'lucide-react';

export default function Registration() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    COBJ1CF6: '', // Participant Category
    NAME: '',     // First Name
    COBJ1CF4: '', // Second Name
    Email: '',
    COBJ1CF3: '', // Company
    COBJ1CF5: '', // Title
    COBJ1CF1: '', // Phone
    COBJ1CF2: ''  // Additional Comments
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(window.location.search);
    if (params.get('status') === 'success') {
      setIsSubmitted(true);
      setStep(3);
    }
  }, []);

  const reference = useMemo(() => `KNTS2026-${Math.floor(100000 + Math.random() * 900000)}`, []);

  const categories = [
    { 
      id: 'government', 
      name: 'National / County Government', 
      icon: <Building2 size={20} className="text-napta-blue" />,
      description: 'Public sector officials and policymakers'
    },
    { 
      id: 'operators', 
      name: 'Transport Operator', 
      icon: <Users size={20} className="text-napta-blue" />,
      description: 'Public and private transport service providers'
    },
    { 
      id: 'academia', 
      name: 'Academia / Research', 
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
    // Basic validation before allowing standard POST submission
    const mndFields = ['NAME', 'Email', 'COBJ1CF1', 'COBJ1CF2', 'COBJ1CF4', 'COBJ1CF6'];
    for (let field of mndFields) {
      if (!formData[field] || formData[field].trim() === '' || formData[field] === '-None-') {
        alert('Please fill in all required fields.');
        e.preventDefault();
        return;
      }
    }
    
    setIsLoading(true);
  };

  return (
    <section className="pt-24 md:pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4">
        <div className="glass-card rounded-3xl overflow-hidden">
          {/* Progress Bar */}
          <div className="h-1 bg-slate-100">
            <motion.div 
              className="h-full bg-napta-blue"
              initial={{ width: step === 1 ? '50%' : '100%' }}
              animate={{ width: step === 1 ? '50%' : '100%' }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          <div className="p-8 md:p-12">
            <form 
              id='webform6505276000001458665' 
              action='https://crm.zoho.com/crm/WebForm' 
              method='POST' 
              onSubmit={handleSubmit}
              acceptCharset='UTF-8'
            >
              {/* Zoho Required Hidden Fields */}
              <input type='hidden' name='xnQsjsdp' value='6a5385b4e8a716defd70419f22fa204cb0aab6e4088832bbf35633762c601974' />
              <input type='hidden' name='zc_gad' id='zc_gad' value='' />
              <input type='hidden' name='xmIwtLD' value='114d93c981b94e9117151181e15f109ac80eb69bef95d613f987211f3c7f330782a6105b69572261c9156be9ec8a585f' />
              <input type='hidden' name='actionType' value='Q3VzdG9tTW9kdWxlMQ==' />
              <input type='hidden' name='returnURL' value={`${window.location.origin}${window.location.pathname}?status=success`} />
              <input type='hidden' name='aG9uZXlwb3Q' value='' />
              <input type='hidden' name='COBJ1CF6' value={formData.COBJ1CF6} />

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
                          setFormData(prev => ({ ...prev, COBJ1CF6: category.name }));
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
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">First Name</label>
                        <input
                          type="text"
                          name="NAME"
                          value={formData.NAME}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-napta-blue outline-none"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Second Name</label>
                        <input
                          type="text"
                          name="COBJ1CF4"
                          value={formData.COBJ1CF4}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-napta-blue outline-none"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-600 mb-1">Email</label>
                        <input
                          type="email"
                          name="Email"
                          value={formData.Email}
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
                          name="COBJ1CF1"
                          value={formData.COBJ1CF1}
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
                        name="COBJ1CF3"
                        value={formData.COBJ1CF3}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-napta-blue outline-none"
                        placeholder="Your organization name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-600 mb-1">Position</label>
                      <input
                        type="text"
                        name="COBJ1CF5"
                        value={formData.COBJ1CF5}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-napta-blue outline-none"
                        placeholder="Your position/title"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-600 mb-1">Additional Comments</label>
                      <textarea
                        name="COBJ1CF2"
                        value={formData.COBJ1CF2}
                        onChange={handleInputChange}
                        required
                        rows="3"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 focus:border-napta-blue outline-none"
                        placeholder="Any specific requirements or comments?"
                      />
                    </div>

                    <div className="flex items-start gap-2 mt-6">
                      <input type="checkbox" id="terms" className="mt-1" required />
                      <label htmlFor="terms" className="text-sm text-slate-400">
                        I agree to the <a href="#" className="text-napta-blue hover:underline">Terms & Conditions</a> and 
                        <a href="#" className="text-napta-blue hover:underline"> Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full bg-napta-blue text-white py-4 rounded-xl font-bold hover:bg-napta-navy transition-colors flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isLoading ? 'Processing...' : 'Complete Registration'} <ChevronRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-napta-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-napta-blue w-10 h-10" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Registration Complete!</h2>
                  <p className="text-slate-600 mb-8 max-w-md mx-auto">
                    Thank you for registering for KNTS&E 2026. Our team will review your registration and get back to you shortly with your ticket and event details.
                  </p>
                  <div className="bg-slate-50 p-6 rounded-2xl max-w-md mx-auto mb-8 text-left border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-4">Your Registration</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Name</span>
                        <span className="font-medium text-slate-900">{formData.NAME} {formData.COBJ1CF4}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Pass Type</span>
                        <span className="font-medium text-slate-900">Standard Pass</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Reference</span>
                        <span className="font-mono text-napta-blue">{reference}</span>
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
            </form>

            {step < 3 && (
              <div className="mt-8 pt-6 border-t border-white/5 text-center">
                <p className="text-sm text-slate-500">
                  Need help? <a href="mailto:info@kenyatransportsummit.com" className="text-napta-blue hover:underline">Contact our support team</a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
