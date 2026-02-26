import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Set the date we're counting down to (September 23, 2026 09:00:00 EAT)
    const countDownDate = new Date("Sep 30, 2026 09:00:00 GMT+0300").getTime();

    const updateCountdown = () => {
      // Get today's date and time
      const now = new Date().getTime();
      
      // Find the distance between now and the count down date
      const distance = countDownDate - now;
      
      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Update the count down immediately and then every 1 second
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="mt-6">
      <div className="flex justify-center gap-2 sm:gap-4">
        <div className="flex flex-col items-center">
          <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-napta-navy">{timeLeft.days}</span>
          </div>
          <span className="text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-widest mt-2">Days</span>
        </div>
        
        <div className="flex items-center text-napta-blue text-xl font-bold">:</div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-napta-navy">{timeLeft.hours.toString().padStart(2, '0')}</span>
          </div>
          <span className="text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-widest mt-2">Hours</span>
        </div>
        
        <div className="flex items-center text-napta-blue text-xl font-bold">:</div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-napta-navy">{timeLeft.minutes.toString().padStart(2, '0')}</span>
          </div>
          <span className="text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-widest mt-2">Minutes</span>
        </div>
        
        <div className="flex items-center text-napta-blue text-xl font-bold">:</div>
        
        <div className="flex flex-col items-center">
          <div className="w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-napta-navy">{timeLeft.seconds.toString().padStart(2, '0')}</span>
          </div>
          <span className="text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-widest mt-2">Seconds</span>
        </div>
      </div>
      
      <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-6 text-center lg:text-right">
        Until the summit begins • September 30, 2026 • Nairobi, Kenya
      </p>
    </div>
  );
};

export default Countdown;
