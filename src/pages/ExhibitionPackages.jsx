import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Crown,
  Medal,
  Award,
  Star,
  CheckCircle2,
  X,
  ArrowRight,
  Sparkles,
  Send,
  Building2,
  User,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  Zap,
  Check,
  AlertCircle,
  Globe
} from 'lucide-react';

const packages = [
  {
    id: 'platinum',
    name: 'Platinum',
    price: '1,300,000',
    priceSuffix: '/-',
    badge: 'Title Sponsor',
    scheme: 'navy',
    topBand: 'bg-gradient-to-r from-napta-navy via-[#18477e] to-napta-navy',
    accent: 'bg-gradient-to-r from-safety-gold via-[#fde047] to-safety-gold',
    accentText: 'text-safety-gold',
    accentSoft: 'bg-safety-gold/10',
    accentBorder: 'border-safety-gold/40',
    accentGlow: 'shadow-[0_0_70px_-18px_rgba(250,204,21,0.45)]',
    cardBg: 'bg-gradient-to-b from-napta-navy via-[#0f3257] to-napta-navy border-napta-navy/80',
    cardBody: 'text-white/90',
    cardMuted: 'text-white/50',
    cardSubtleBorder: 'border-white/10',
    cardCheckBg: 'bg-safety-gold',
    cardBtn: 'bg-gradient-to-r from-safety-gold to-[#fde047] text-napta-navy hover:shadow-[0_14px_40px_-12px_rgba(250,204,21,0.6)]',
    cardBtnOutline: '',
    icon: Crown,
    iconBg: 'bg-gradient-to-br from-safety-gold to-[#eab308]',
    iconText: 'text-napta-navy',
    highlights: [
      'Event Title Sponsor',
      'Prime Exclusive Brand Visibility (with Logo on all marketing materials)',
      'Keynote Introduction / Speech',
      '2 Exhibition Booths (3m × 3m)',
      '5 VVIP Networking Access Slots',
      'Sector Panellist Slot',
      'Media Mentions & Press Releases',
      'Stage & Side Branding at Event',
      'Unlimited Indoor / Outdoor Branding',
      'Summit Catalogue — 2 Full Pages'
    ],
    cta: 'Secure Platinum'
  },
  {
    id: 'gold',
    name: 'Gold',
    price: '1,000,000',
    priceSuffix: '/-',
    badge: 'Event Sponsor',
    scheme: 'blue',
    topBand: 'bg-gradient-to-r from-napta-blue via-[#2b78c7] to-napta-blue',
    accent: 'bg-gradient-to-r from-napta-blue to-[#2b78c7]',
    accentText: 'text-napta-blue',
    accentSoft: 'bg-napta-blue/10',
    accentBorder: 'border-napta-blue/30',
    accentGlow: 'shadow-[0_0_60px_-20px_rgba(27,93,165,0.45)]',
    cardBg: 'bg-white border-napta-blue/15',
    cardBody: 'text-napta-navy',
    cardMuted: 'text-slate-500',
    cardSubtleBorder: 'border-slate-200',
    cardCheckBg: 'bg-gradient-to-r from-napta-blue to-[#2b78c7]',
    cardBtn: 'bg-gradient-to-r from-napta-blue to-[#2b78c7] text-white hover:shadow-[0_14px_40px_-14px_rgba(27,93,165,0.5)]',
    cardBtnOutline: '',
    icon: Medal,
    iconBg: 'bg-gradient-to-br from-napta-blue to-[#144a84]',
    iconText: 'text-white',
    highlights: [
      'Event Sponsor',
      'Semi-Prime Exclusive Brand Visibility (with Logo on all marketing materials)',
      'Keynote Introduction / Speech',
      '1 Exhibition Booth (3m × 3m)',
      '3 VVIP Networking Access Slots',
      'Sector Panellist Slot',
      'Media Mentions & Press Releases',
      'Stage & Side Branding at Event',
      'Unlimited Indoor / Outdoor Branding',
      'Summit Catalogue — 1 Full Page'
    ],
    cta: 'Secure Gold'
  },
  {
    id: 'silver',
    name: 'Silver',
    price: '750,000',
    priceSuffix: '/-',
    badge: 'Premium',
    scheme: 'blueOutline',
    topBand: 'bg-gradient-to-r from-napta-blue/70 via-napta-blue/50 to-napta-blue/70',
    accent: 'bg-napta-blue/80',
    accentText: 'text-napta-blue',
    accentSoft: 'bg-napta-blue/5',
    accentBorder: 'border-napta-blue/20',
    accentGlow: '',
    cardBg: 'bg-white border border-napta-blue/20',
    cardBody: 'text-napta-navy',
    cardMuted: 'text-slate-500',
    cardSubtleBorder: 'border-slate-200',
    cardCheckBg: 'bg-napta-blue',
    cardBtn: '',
    cardBtnOutline: 'bg-napta-blue/5 text-napta-blue border border-napta-blue/20 hover:bg-napta-blue hover:text-white',
    icon: Award,
    iconBg: 'bg-napta-blue/15',
    iconText: 'text-napta-blue',
    highlights: [
      'Brand Visibility (with Logo on all marketing materials)',
      '1 Exhibition Booth (3m × 3m)',
      'Regular Networking Access',
      'Panellist Slot',
      'Media Mentions & Press Releases',
      'Branding at Exhibition Area',
      'Summit Catalogue — 1/2 Page'
    ],
    cta: 'Secure Silver'
  },
  {
    id: 'bronze',
    name: 'Bronze',
    price: '500,000',
    priceSuffix: '/-',
    badge: 'Standard',
    scheme: 'green',
    topBand: 'bg-gradient-to-r from-sustainable-green via-[#1a9a4c] to-sustainable-green',
    accent: 'bg-gradient-to-r from-sustainable-green to-[#1a9a4c]',
    accentText: 'text-sustainable-green',
    accentSoft: 'bg-sustainable-green/10',
    accentBorder: 'border-sustainable-green/20',
    accentGlow: '',
    cardBg: 'bg-white border-sustainable-green/15',
    cardBody: 'text-napta-navy',
    cardMuted: 'text-slate-500',
    cardSubtleBorder: 'border-slate-200',
    cardCheckBg: 'bg-gradient-to-r from-sustainable-green to-[#1a9a4c]',
    cardBtn: '',
    cardBtnOutline: 'bg-sustainable-green/5 text-sustainable-green border border-sustainable-green/20 hover:bg-sustainable-green hover:text-white',
    icon: Star,
    iconBg: 'bg-gradient-to-br from-sustainable-green to-[#105c2b]',
    iconText: 'text-white',
    highlights: [
      'Brand Visibility (with Logo on all marketing materials)',
      '1 Exhibition Booth (3m × 3m)',
      'Regular Networking Access',
      'Panellist Slot',
      'Media Mentions & Press Releases',
      'Branding at Exhibition Area',
      'Summit Catalogue — ¼ Page'
    ],
    cta: 'Secure Bronze'
  }
];

const NAPTA_EMAIL = 'info@napta.or.ke';

const FORM_SUBMIT_ACTION = `https://formsubmit.co/ajax/${NAPTA_EMAIL}`;

const ExhibitionPackages = ({ setPage }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    position: '',
    email: '',
    phone: '',
    country: '',
    comments: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(window.location.search);
    let pkgId = null;
    try { pkgId = sessionStorage.getItem('ktse_selected_package') || localStorage.getItem('ktse_selected_package'); } catch (_) {}
    if (params.get('status') === 'success' && params.get('form') === 'exhibition') {
      setIsSubmitted(true);
      try {
        window.history.replaceState({}, document.title, window.location.pathname);
      } catch (_) {}
      if (pkgId) {
        const match = packages.find(p => p.id === pkgId);
        if (match) {
          setTimeout(() => {
            setSelectedPackage(match);
            setIsModalOpen(true);
            document.body.style.overflow = 'hidden';
          }, 400);
        }
      }
    } else if (pkgId && !isModalOpen) {
      const match = packages.find(p => p.id === pkgId);
      if (match) {
        setTimeout(() => openModal(match), 350);
      }
      try { sessionStorage.removeItem('ktse_selected_package'); localStorage.removeItem('ktse_selected_package'); } catch (_) {}
    }
  }, []);

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
    setIsSubmitted(false);
    setIsLoading(false);
    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      position: '',
      email: '',
      phone: '',
      country: 'Kenya',
      comments: ''
    });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
    setIsSubmitted(false);
    setIsLoading(false);
    document.body.style.overflow = '';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const buildDescription = (pkg, includeCommentsLive = true) => {
    const commentsValue = includeCommentsLive && formData.comments ? formData.comments : 'None.';
    return [
      `KTSE 2026 EXHIBITION & SPONSORSHIP INQUIRY`,
      ``,
      `Selected Package: ${pkg.name} (${pkg.badge})`,
      `Investment: KSh ${pkg.price}${pkg.priceSuffix}`,
      `Event: Kenya Transport Summit & Expo 2026 — Nov 4-6, KICC Nairobi`,
      ``,
      `--- Exhibitor Details ---`,
      `Full Name: ${formData.firstName} ${formData.lastName}`,
      `Position: ${formData.position || '—'}`,
      `Organization: ${formData.company}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Country: ${formData.country || '—'}`,
      ``,
      `--- Package Highlights ---`,
      pkg.highlights.map((h, i) => `  ${i + 1}. ${h}`).join('\n'),
      ``,
      `--- Additional Requirements ---`,
      commentsValue,
      ``,
      `Sent via Kenya Transport Summit & Expo 2026 Website Exhibition Packages form.`
    ].join('\n');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const pkg = selectedPackage;
    if (!pkg) return;
    setIsLoading(true);
    try {
      const formPayload = new FormData();
      formPayload.append('_subject', `KTSE 2026 Exhibition Inquiry — ${pkg.name.toUpperCase()} PACKAGE — ${formData.company || 'Company'}`);
      formPayload.append('_template', 'table');
      formPayload.append('_captcha', 'false');
      formPayload.append('Package', `${pkg.name} — ${pkg.badge}`);
      formPayload.append('Investment', `KSh ${pkg.price}${pkg.priceSuffix}`);
      formPayload.append('First Name', formData.firstName);
      formPayload.append('Second Name', formData.lastName);
      formPayload.append('Position', formData.position || '—');
      formPayload.append('Organization', formData.company);
      formPayload.append('Email', formData.email);
      formPayload.append('Phone', formData.phone);
      formPayload.append('Country', formData.country || '—');
      formPayload.append('Package Highlights', pkg.highlights.map((h, i) => `${i + 1}. ${h}`).join('; '));
      formPayload.append('Additional Requirements', formData.comments || 'None.');
      formPayload.append('Event', 'Kenya Transport Summit & Expo 2026 · Nov 4-6 · KICC Nairobi');
      formPayload.append('Message', buildDescription(pkg, true));

      // Persist package id across the success state
      try { sessionStorage.setItem('ktse_selected_package', pkg.id); } catch (_) {}

      const res = await fetch(FORM_SUBMIT_ACTION, {
        method: 'POST',
        body: formPayload,
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        setIsSubmitted(true);
        setIsLoading(false);
        try { sessionStorage.removeItem('ktse_selected_package'); localStorage.removeItem('ktse_selected_package'); } catch (_) {}
      } else {
        throw new Error(`FormSubmit responded with status ${res.status}`);
      }
    } catch (err) {
      console.warn('FormSubmit AJAX failed:', err);
      // Fallback: native mailto with full content as last resort
      try {
        const subject = `KTSE 2026 Exhibition Inquiry — ${pkg.name.toUpperCase()} PACKAGE — ${formData.company || 'Company'}`;
        const body = buildDescription(pkg, true);
        window.location.href = `mailto:${NAPTA_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      } catch (_) {}
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
      }, 600);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[520px] h-[520px] sm:w-[600px] sm:h-[600px] bg-napta-blue/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute top-[35%] left-0 w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] bg-sustainable-green/5 rounded-full blur-3xl -translate-x-1/3 pointer-events-none" />

      {/* Header */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-4 sm:pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-napta-navy leading-[1.1] tracking-tight mb-3 sm:mb-4"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Sponsor & Exhibit at{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue via-napta-blue to-sustainable-green">
                East Africa's Transport Mandate
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-[11px] sm:text-xs md:text-sm font-normal leading-relaxed max-w-2xl mx-auto mb-3 sm:mb-4 px-1"
            >
              Choose from four tiered sponsorship packages designed to position your brand at the centre of Kenya's transport
              investment agenda. Each package bundles exhibition floor space, branding, speaking access, and VIP networking.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-row items-stretch justify-center gap-1.5 sm:gap-3 mb-1 mx-auto">
              <div className="px-2 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-slate-50 border border-slate-100 flex-1">
                <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400">Event Dates</p>
                <p className="text-[10px] sm:text-sm font-bold text-napta-navy leading-tight">Nov 4 – 6, 2026</p>
              </div>
              <div className="px-2 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-slate-50 border border-slate-100 flex-1">
                <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400">Venue</p>
                <p className="text-[10px] sm:text-sm font-bold text-napta-navy leading-tight">KICC, Nairobi</p>
              </div>
              <div className="px-2 sm:px-3.5 py-1.5 sm:py-2 rounded-lg bg-sustainable-green/5 border border-sustainable-green/20 flex-1">
                <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-sustainable-green">Status</p>
                <p className="text-[10px] sm:text-sm font-bold text-sustainable-green leading-tight">Limited Slots</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="relative py-4 sm:py-6 lg:py-10 pb-20 sm:pb-24 lg:pb-28">
        <div className="max-w-[1500px] mx-auto px-3 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 lg:grid-cols-4"
          >
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              const isFeatured = pkg.id === 'platinum';
              return (
                <motion.div
                  key={pkg.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.005 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                  className={`relative group ${isFeatured ? 'sm:col-span-2 lg:col-span-1 lg:-mt-0' : ''}`}
                >
                  {isFeatured && (
                    <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-safety-gold via-[#fde047] to-safety-gold shadow-lg shadow-safety-gold/30">
                        <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.18em] sm:tracking-[0.2em] text-napta-navy flex items-center gap-1 sm:gap-1.5">
                          <Crown size={10} className="sm:w-[11px] sm:h-[11px] -mt-0.5" /> Title Sponsor
                        </span>
                      </div>
                    </div>
                  )}

                  <div
                    className={`relative rounded-2xl sm:rounded-[2rem] overflow-hidden h-full transition-all duration-500 border ${
                      isFeatured
                        ? `${pkg.accentBorder} ${pkg.accentGlow}`
                        : `${pkg.cardBg} hover:shadow-xl hover:shadow-slate-900/5`
                    } ${pkg.cardBg}`}
                  >
                    <div className={`h-1 sm:h-1.5 w-full ${pkg.topBand}`} />

                    <div className="p-5 sm:p-6 lg:p-7 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4 sm:mb-5">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 sm:gap-2.5 mb-2 sm:mb-3">
                            <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl ${pkg.iconBg} flex items-center justify-center shadow-lg flex-shrink-0`}>
                              <Icon size={18} className={`sm:w-[20px] sm:h-[20px] sm:stroke-[2.2px] ${pkg.iconText}`} />
                            </div>
                            <div>
                              <h3 className={`text-lg sm:text-xl font-black tracking-tight ${pkg.cardBody}`}>{pkg.name}</h3>
                              <span className={`inline-block text-[9px] sm:text-[10px] font-bold uppercase tracking-widest ${pkg.cardMuted}`}>
                                {pkg.badge}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-baseline gap-0.5 sm:gap-1">
                            <span className={`text-[10px] sm:text-[11px] font-bold ${pkg.cardMuted}`}>KSh</span>
                            <span className={`text-2xl sm:text-3xl font-black tracking-tight tabular-nums ${pkg.cardBody}`}>
                              {pkg.price}
                            </span>
                            <span className={`text-xs sm:text-sm font-bold ${pkg.cardMuted}`}>{pkg.priceSuffix}</span>
                          </div>
                          <p className={`text-[9px] sm:text-[10px] font-medium mt-0.5 ${pkg.cardMuted}`}>Excl. VAT · 3-Day Summit Access</p>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className={`h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-10 mb-4 sm:mb-5 ${pkg.cardBody}`} />

                      {/* Features */}
                      <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-7 flex-1">
                        {pkg.highlights.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 sm:gap-2.5 group/item">
                            <div className={`mt-0.5 flex-shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full ${pkg.cardCheckBg} flex items-center justify-center`}>
                              <CheckCircle2 size={10} className={`sm:w-[12px] sm:h-[12px] sm:stroke-[3.5px] text-white`} />
                            </div>
                            <span className={`text-[10px] sm:text-xs leading-snug font-medium ${pkg.cardBody} opacity-90 group-hover/item:opacity-100 transition-opacity`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <button
                        onClick={() => openModal(pkg)}
                        className={`relative w-full group/btn py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-[10px] sm:text-xs uppercase tracking-[0.14em] transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 overflow-hidden shadow-md sm:shadow-lg ${
                          pkg.cardBtn || pkg.cardBtnOutline
                        }`}
                      >
                        <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                          {pkg.cta}
                          <ArrowRight size={13} className="sm:w-[15px] sm:h-[15px] group-hover/btn:translate-x-0.5 sm:group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-14 text-center px-4"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-2xl bg-slate-50 border border-slate-100 max-w-2xl">
              <Zap size={14} className="text-napta-blue flex-shrink-0" />
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium text-center sm:text-left leading-relaxed">
                Need a custom package?{' '}
                <button
                  onClick={() => setPage('Contact')}
                  className="text-napta-blue font-bold hover:underline whitespace-nowrap"
                >
                  Contact us for bespoke sponsorship →
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPackage && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[80] bg-napta-navy/50 backdrop-blur-md"
              onClick={closeModal}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[90] flex items-center justify-center p-3 sm:p-4 md:p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full max-w-[32rem] sm:max-w-lg bg-white rounded-[1.1rem] sm:rounded-[1.6rem] shadow-2xl shadow-black/30 border border-white overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 sm:h-1.5 ${selectedPackage.topBand}`} />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-50 hover:bg-slate-100 flex items-center justify-center transition-colors z-20"
                >
                  <X size={16} className="sm:w-[18px] sm:h-[18px] text-slate-500" strokeWidth={2} />
                </button>

                {isSubmitted ? (
                  /* ─────────── SUCCESS STATE ─────────── */
                  <div className="relative px-3.5 py-5 sm:px-5 sm:py-6 md:px-6 md:py-7 text-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                      <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-[1rem] bg-sustainable-green/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-inner">
                        <CheckCircle2 size={26} className="sm:w-[30px] sm:h-[30px] text-sustainable-green" strokeWidth={2.4} />
                      </div>
                      <h2 className="text-lg sm:text-2xl font-black text-napta-navy mb-1 sm:mb-1.5 tracking-tight leading-tight">
                        Inquiry Sent.
                      </h2>
                      <p className="text-slate-500 text-[10.5px] sm:text-xs leading-relaxed max-w-sm mx-auto mb-3.5 sm:mb-4 px-1">
                        Your {selectedPackage.name} inquiry is on its way to{' '}
                        <span className="font-bold text-napta-navy font-mono">{NAPTA_EMAIL}</span>.
                      </p>

                      {/* Confirmation summary */}
                      <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 max-w-xs sm:max-w-sm mx-auto mb-3.5 sm:mb-4 border border-slate-100 text-left shadow-sm">
                        <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100/70">
                          <span className="text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-[0.18em] text-slate-400">Summary</span>
                          <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg sm:rounded-xl ${selectedPackage.iconBg} shadow-sm`}>
                            <selectedPackage.icon size={10} className={selectedPackage.iconText} strokeWidth={2.5} />
                            <span className={`text-[8px] sm:text-[9px] font-black uppercase tracking-[0.15em] ${selectedPackage.iconText}`}>
                              {selectedPackage.name}
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-y-1.5 sm:gap-y-2 gap-x-2 sm:gap-x-3 text-[10.5px] sm:text-[11px]">
                          <div className="text-slate-400 flex items-center gap-1"><Star size={10} /> Tier</div>
                          <div className="font-bold text-napta-navy text-right">{selectedPackage.badge}</div>
                          <div className="text-slate-400 flex items-center gap-1"><Medal size={10} /> Investment</div>
                          <div className="font-bold text-napta-navy tabular-nums text-right">KSh {selectedPackage.price}</div>
                          <div className="text-slate-400 flex items-center gap-1"><Building2 size={10} /> Company</div>
                          <div className="font-bold text-napta-navy text-right truncate">{formData.company || '—'}</div>
                          <div className="text-slate-400 flex items-center gap-1"><Globe size={10} /> Event</div>
                          <div className="font-bold text-napta-navy text-right text-[9.5px] sm:text-[10px]">Nov 4–6 · KICC</div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-2.5 justify-center max-w-xs sm:max-w-sm mx-auto">
                        <button
                          onClick={closeModal}
                          className="flex-1 py-2.5 rounded-xl bg-napta-blue text-white font-bold text-[10px] sm:text-[10.5px] uppercase tracking-[0.15em] hover:bg-napta-navy transition-colors shadow-md shadow-napta-blue/15 flex items-center justify-center gap-1.5"
                        >
                          <Check size={13} /> Done
                        </button>
                        <a
                          href={`mailto:${NAPTA_EMAIL}?subject=${encodeURIComponent(`Follow-up: KTSE 2026 ${selectedPackage.name} Inquiry — ${formData.company || 'Company'}`)}`}
                          className="flex-1 py-2.5 rounded-xl bg-slate-100 text-napta-navy font-bold text-[10px] sm:text-[10.5px] uppercase tracking-[0.15em] hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Mail size={13} /> Follow-up
                        </a>
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  /* ─────────── FORM STATE ─────────── */
                  <form
                    onSubmit={handleFormSubmit}
                    className="relative px-3.5 sm:px-5 md:px-6 pt-3.5 sm:pt-5 pb-3.5 sm:pb-5"
                  >
                    {/* Package header chip */}
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-slate-100">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl ${selectedPackage.iconBg} flex items-center justify-center shadow-md flex-shrink-0`}>
                        <selectedPackage.icon size={16} className={`sm:w-[18px] sm:h-[18px] sm:stroke-[2.2px] ${selectedPackage.iconText}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <h3 className="text-[14px] sm:text-[15px] font-black text-napta-navy tracking-tight leading-none truncate">
                            {selectedPackage.name} Sponsorship
                          </h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
                          <span className={`inline-flex items-center text-[8.5px] sm:text-[9px] font-extrabold uppercase tracking-[0.16em] px-1.5 sm:px-2 py-[2px] rounded-full ${selectedPackage.accent} text-white shadow-sm`}>
                            {selectedPackage.badge}
                          </span>
                          <span className="text-[10.5px] sm:text-[11.5px] font-extrabold text-napta-navy tabular-nums">
                            KSh {selectedPackage.price}
                          </span>
                          <span className="text-[9px] sm:text-[9.5px] font-medium text-slate-400">· KICC · Nov 4–6</span>
                        </div>
                      </div>
                    </div>

                    {/* Name row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-2 sm:mb-2.5">
                      <div>
                        <label className="block text-[9px] sm:text-[9.5px] font-extrabold uppercase tracking-[0.16em] text-slate-500 mb-[3px] sm:mb-1">
                          First Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-slate-200 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-2 text-[12px] sm:text-[13px] text-napta-navy placeholder:text-slate-300 focus:border-napta-blue focus:ring-2 focus:ring-napta-blue/15 focus:bg-white outline-none transition-all"
                          placeholder="Jane"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] sm:text-[9.5px] font-extrabold uppercase tracking-[0.16em] text-slate-500 mb-[3px] sm:mb-1">
                          Last Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-slate-200 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-2 text-[12px] sm:text-[13px] text-napta-navy placeholder:text-slate-300 focus:border-napta-blue focus:ring-2 focus:ring-napta-blue/15 outline-none transition-all"
                          placeholder="Wanjiru"
                        />
                      </div>
                    </div>

                    {/* Company + Position */}
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-2.5 mb-2 sm:mb-2.5">
                      <div className="sm:col-span-3">
                        <label className="block text-[9px] sm:text-[9.5px] font-extrabold uppercase tracking-[0.16em] text-slate-500 mb-[3px] sm:mb-1">
                          Company <span className="text-red-400">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-slate-200 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-2 text-[12px] sm:text-[13px] text-napta-navy placeholder:text-slate-300 focus:border-napta-blue focus:ring-2 focus:ring-napta-blue/15 outline-none transition-all"
                          placeholder="Acme Transport Ltd."
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[9px] sm:text-[9.5px] font-extrabold uppercase tracking-[0.16em] text-slate-500 mb-[3px] sm:mb-1">
                          Position
                        </label>
                        <input
                          type="text"
                          name="position"
                          value={formData.position}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-slate-200 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-2 text-[12px] sm:text-[13px] text-napta-navy placeholder:text-slate-300 focus:border-napta-blue focus:ring-2 focus:ring-napta-blue/15 outline-none transition-all"
                          placeholder="CMO"
                        />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-2 sm:mb-2.5">
                      <div>
                        <label className="block text-[9px] sm:text-[9.5px] font-extrabold uppercase tracking-[0.16em] text-slate-500 mb-[3px] sm:mb-1">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-slate-200 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-2 text-[12px] sm:text-[13px] text-napta-navy placeholder:text-slate-300 focus:border-napta-blue focus:ring-2 focus:ring-napta-blue/15 outline-none transition-all"
                          placeholder="jane@co.co.ke"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] sm:text-[9.5px] font-extrabold uppercase tracking-[0.16em] text-slate-500 mb-[3px] sm:mb-1">
                          Phone <span className="text-red-400">*</span>
                        </label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-white border border-slate-200 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-2 text-[12px] sm:text-[13px] text-napta-navy placeholder:text-slate-300 focus:border-napta-blue focus:ring-2 focus:ring-napta-blue/15 outline-none transition-all"
                          placeholder="+254 700 000 000"
                        />
                      </div>
                    </div>

                    {/* Country single line */}
                    <div className="mb-2.5 sm:mb-3">
                      <label className="block text-[9px] sm:text-[9.5px] font-extrabold uppercase tracking-[0.16em] text-slate-500 mb-[3px] sm:mb-1">
                        Country <span className="text-red-400">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-2 text-[12px] sm:text-[13px] text-napta-navy placeholder:text-slate-300 focus:border-napta-blue focus:ring-2 focus:ring-napta-blue/15 outline-none transition-all"
                        placeholder="Kenya"
                      />
                    </div>

                    {/* Comments / requirements */}
                    <div className="mb-3 sm:mb-4">
                      <label className="block text-[9px] sm:text-[9.5px] font-extrabold uppercase tracking-[0.16em] text-slate-500 mb-[3px] sm:mb-1">
                        Additional Requirements
                      </label>
                      <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleInputChange}
                        rows={1}
                        className="w-full bg-white border border-slate-200 rounded-lg sm:rounded-xl px-2.5 sm:px-3 py-2 text-[12px] sm:text-[13px] text-napta-navy placeholder:text-slate-300 focus:border-napta-blue focus:ring-2 focus:ring-napta-blue/15 outline-none transition-all resize-none"
                        placeholder="Booth location, AV needs, delegates… (optional)"
                      />
                    </div>

                    {/* Action row */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-2.5">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="sm:w-auto sm:px-4 sm:py-2 py-2 rounded-lg sm:rounded-xl bg-slate-100 text-napta-navy font-bold text-[10px] sm:text-[11px] uppercase tracking-[0.15em] hover:bg-slate-200 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`flex-1 py-2.5 sm:py-2.5 rounded-lg sm:rounded-xl font-extrabold text-[10.5px] sm:text-[11.5px] uppercase tracking-[0.16em] text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg ${selectedPackage.accent} ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.005]'}`}
                      >
                        {isLoading ? (
                          <span className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Sending…
                          </span>
                        ) : (
                          <>
                            <Send size={13} /> Send Inquiry
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExhibitionPackages;
