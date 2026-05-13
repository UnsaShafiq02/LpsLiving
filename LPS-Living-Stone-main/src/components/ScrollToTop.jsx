import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);

      setVisible(scrollTop > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`
        fixed right-5 bottom-5 z-[999]
        transition-all duration-500
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
    >
      <button
        onClick={scrollTop}
        className="
          relative group
          w-14 h-14 sm:w-16 sm:h-16
          rounded-full
          flex items-center justify-center

          bg-white/95
          backdrop-blur-xl

          border border-[#D9D9D9]
          shadow-lg

          hover:shadow-[0_15px_40px_rgba(13,110,79,0.25)]
          hover:scale-110 active:scale-95

          transition-all duration-300
          overflow-hidden
        "
      >

        {/* soft green glow (brand identity) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(13,110,79,0.18),transparent_70%)] opacity-80" />

        {/* hover glow ring */}
        <div className="absolute inset-0 rounded-full bg-[#224C26]/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-300" />

        {/* Progress Ring */}
        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="24"
            stroke="#E5E7EB"
            strokeWidth="3"
            fill="none"
          />

          <circle
            cx="50%"
            cy="50%"
            r="24"
            stroke="#224C26"
            strokeWidth="3"
            fill="none"
            strokeDasharray="150"
            strokeDashoffset={150 - (150 * progress) / 100}
            strokeLinecap="round"
            className="transition-all duration-150 ease-out"
          />
        </svg>

        {/* Icon */}
        <ArrowUp
          size={20}
          className="
            text-[#0D2040]
            group-hover:text-[#224C26]
            transition-all duration-300
            relative z-10
          "
        />

      </button>
    </div>
  );
};

export default ScrollToTop;