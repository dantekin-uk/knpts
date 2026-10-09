import React from 'react';
import { motion } from 'framer-motion';
import {
  Crown,
  Medal,
  Award,
  Star,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const packages = [
  {
    id: 'platinum',
    name: 'Platinum',
    price: '1,300,000',
    priceSuffix: '/-',
    badge: 'Title Sponsor',
    topBand: 'bg-gradient-to-r from-napta-navy via-[#18477e] to-napta-navy',
    accent: 'bg-gradient-to-r from-safety-gold via-[#fde047] to-safety-gold',
    accentText: 'text-safety-gold',
    accentBorder: 'border-safety-gold/40',
    accentGlow: 'shadow-[0_0_60px_-18px_rgba(250,204,21,0.45)]',
    cardBg: 'bg-gradient-to-b from-napta-navy via-[#0f3257] to-napta-navy border-napta-navy/80',
    cardBody: 'text-white/90',
    cardMuted: 'text-white/50',
    cardCheckBg: 'bg-safety-gold',
    cardBtn: 'bg-gradient-to-r from-safety-gold to-[#fde047] text-napta-navy hover:shadow-[0_12px_30px_-10px_rgba(250,204,21,0.55)]',
    icon: Crown,
    iconBg: 'bg-gradient-to-br from-safety-gold to-[#eab308]',
    iconText: 'text-napta-navy',
    highlights: [
      'Event Title Sponsor',
      'Prime Exclusive Brand Visibility',
      'Keynote Introduction / Speech',
      '2 Exhibition Booths (3m × 3m)',
      '5 VVIP Networking Access Slots',
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
    topBand: 'bg-gradient-to-r from-napta-blue via-[#2b78c7] to-napta-blue',
    accent: 'bg-gradient-to-r from-napta-blue to-[#2b78c7]',
    accentText: 'text-napta-blue',
    accentBorder: 'border-napta-blue/30',
    accentGlow: 'shadow-[0_0_50px_-18px_rgba(27,93,165,0.4)]',
    cardBg: 'bg-white border-napta-blue/15',
    cardBody: 'text-napta-navy',
    cardMuted: 'text-slate-500',
    cardCheckBg: 'bg-gradient-to-r from-napta-blue to-[#2b78c7]',
    cardBtn: 'bg-gradient-to-r from-napta-blue to-[#2b78c7] text-white hover:shadow-[0_12px_30px_-12px_rgba(27,93,165,0.45)]',
    icon: Medal,
    iconBg: 'bg-gradient-to-br from-napta-blue to-[#144a84]',
    iconText: 'text-white',
    highlights: [
      'Event Sponsor',
      'Semi-Prime Exclusive Visibility',
      'Keynote Introduction / Speech',
      '1 Exhibition Booth (3m × 3m)',
      '3 VVIP Networking Access Slots',
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
    topBand: 'bg-gradient-to-r from-napta-blue/70 via-napta-blue/50 to-napta-blue/70',
    accent: 'bg-napta-blue/80',
    accentText: 'text-napta-blue',
    accentBorder: 'border-napta-blue/20',
    accentGlow: '',
    cardBg: 'bg-white border border-napta-blue/20',
    cardBody: 'text-napta-navy',
    cardMuted: 'text-slate-500',
    cardCheckBg: 'bg-napta-blue',
    cardBtn: 'bg-napta-blue/5 text-napta-blue border border-napta-blue/20 hover:bg-napta-blue hover:text-white',
    icon: Award,
    iconBg: 'bg-napta-blue/15',
    iconText: 'text-napta-blue',
    highlights: [
      'Brand Visibility on All Marketing',
      '1 Exhibition Booth (3m × 3m)',
      'Regular Networking Access',
      'Panellist Slot',
      'Media Mentions & Releases',
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
    topBand: 'bg-gradient-to-r from-sustainable-green via-[#1a9a4c] to-sustainable-green',
    accent: 'bg-gradient-to-r from-sustainable-green to-[#1a9a4c]',
    accentText: 'text-sustainable-green',
    accentBorder: 'border-sustainable-green/20',
    accentGlow: '',
    cardBg: 'bg-white border-sustainable-green/15',
    cardBody: 'text-napta-navy',
    cardMuted: 'text-slate-500',
    cardCheckBg: 'bg-gradient-to-r from-sustainable-green to-[#1a9a4c]',
    cardBtn: 'bg-sustainable-green/5 text-sustainable-green border border-sustainable-green/20 hover:bg-sustainable-green hover:text-white',
    icon: Star,
    iconBg: 'bg-gradient-to-br from-sustainable-green to-[#105c2b]',
    iconText: 'text-white',
    highlights: [
      'Brand Visibility on All Marketing',
      '1 Exhibition Booth (3m × 3m)',
      'Regular Networking Access',
      'Panellist Slot',
      'Media Mentions & Releases',
      'Summit Catalogue — ¼ Page'
    ],
    cta: 'Secure Bronze'
  }
];

const ExhibitionPackagesHome = ({ setPage }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section id="packages" className="py-12 sm:py-16 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 relative">
        {/* Big Card Backdrop */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-50 rounded-[2.5rem] sm:rounded-[4rem] border border-slate-100 shadow-inner mx-2 sm:mx-4 md:mx-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(135deg, #10b981 0px, #10b981 1px, transparent 1px, transparent 50px)' }}></div>
          <div className="absolute inset-0 flex justify-around opacity-[0.02] pointer-events-none px-10 sm:px-20">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-px h-full bg-sustainable-green"></div>
            ))}
          </div>
          <div className="absolute -bottom-24 sm:-bottom-32 -left-24 sm:-left-32 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] bg-napta-blue/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative z-10 py-10 sm:py-12 px-4 sm:px-6 md:px-14 lg:px-18"
        >
          <motion.div variants={itemVariants} className="mb-8 sm:mb-12 text-center">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold text-napta-navy leading-tight tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Exhibition & Sponsorship <span className="text-transparent bg-clip-text bg-gradient-to-r from-napta-blue to-sustainable-green">Packages.</span>
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed max-w-2xl mx-auto mt-3 sm:mt-4 px-1">
              Four tiered packages designed to position your brand at the centre of Kenya's transport investment agenda.
              Limited slots available — allocated on a first-come, first-served basis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 lg:grid-cols-4">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              const isFeatured = pkg.id === 'platinum';
              return (
                <motion.div
                  key={pkg.id}
                  variants={itemVariants}
                  whileHover={{ y: isFeatured ? -8 : -12, scale: 1.005 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                  className={`relative group ${isFeatured ? 'lg:-mt-2 lg:mb-2' : ''}`}
                >
                  {isFeatured && (
                    <div className="absolute -top-3 sm:-top-3.5 left-1/2 -translate-x-1/2 z-20">
                      <div className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r from-safety-gold via-[#fde047] to-safety-gold shadow-md shadow-safety-gold/30">
                        <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.18em] text-napta-navy flex items-center gap-1 sm:gap-1.5">
                          <Crown size={9} className="sm:w-[10px] sm:h-[10px]" /> Title Sponsor
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
                    <div className={`h-1 w-full ${pkg.topBand}`} />

                    <div className="p-5 sm:p-6 lg:p-7 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
                            <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-xl ${pkg.iconBg} flex items-center justify-center shadow-md flex-shrink-0`}>
                              <Icon size={18} className={`sm:w-[20px] sm:h-[20px] ${pkg.iconText}`} strokeWidth={2.2} />
                            </div>
                            <div>
                              <h3 className={`text-base sm:text-lg font-extrabold tracking-tight ${pkg.cardBody}`}>{pkg.name}</h3>
                              <span className={`inline-block text-[8px] sm:text-[9px] font-bold uppercase tracking-widest ${pkg.cardMuted}`}>
                                {pkg.badge}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-baseline gap-0.5 sm:gap-1">
                            <span className={`text-[9px] sm:text-[10px] font-bold ${pkg.cardMuted}`}>KSh</span>
                            <span className={`text-xl sm:text-2xl font-extrabold tracking-tight tabular-nums ${pkg.cardBody}`}>
                              {pkg.price}
                            </span>
                            <span className={`text-[11px] sm:text-xs font-bold ${pkg.cardMuted}`}>{pkg.priceSuffix}</span>
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className={`h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-10 mb-4 ${pkg.cardBody}`} />

                      {/* Features */}
                      <ul className="space-y-2 mb-5 sm:mb-6 flex-1">
                        {pkg.highlights.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 group/item">
                            <div className={`mt-0.5 flex-shrink-0 w-3.5 h-3.5 rounded-full ${pkg.cardCheckBg} flex items-center justify-center`}>
                              <CheckCircle2 size={10} className="w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] text-white" strokeWidth={3.5} />
                            </div>
                            <span className={`text-[10px] sm:text-[11px] leading-snug font-medium ${pkg.cardBody} opacity-90 group-hover/item:opacity-100 transition-opacity`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <button
                        onClick={() => {
                          sessionStorage.setItem('ktse_selected_package', pkg.id);
                          setPage('ExhibitionPackages');
                        }}
                        className={`relative w-full group/btn py-2.5 sm:py-3 rounded-xl font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.14em] transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 overflow-hidden shadow-sm sm:shadow-md ${pkg.cardBtn}`}
                      >
                        <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                          {pkg.cta}
                          <ArrowRight size={12} className="sm:w-[13px] sm:h-[13px] group-hover/btn:translate-x-0.5 transition-transform" />
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={itemVariants} className="mt-10 sm:mt-12 text-center">
            <button
              onClick={() => setPage('ExhibitionPackages')}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full border border-napta-blue text-napta-blue hover:bg-napta-blue hover:text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all duration-300"
            >
              View Full Package Details
              <ArrowRight size={12} className="sm:w-[13px] sm:h-[13px]" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExhibitionPackagesHome;
