import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`
        fixed right-5 bottom-5 z-[999]
        transition-all duration-500
        ${
          visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10 pointer-events-none'
        }
      `}
    >
      <button
        onClick={handleScrollTop}
        className="
          relative group
          w-14 h-14 sm:w-16 sm:h-16
          rounded-full
          flex items-center justify-center

          bg-white/95
          backdrop-blur-xl

          border border-[#D9DDDE]
          shadow-lg

          hover:shadow-[0_15px_40px_rgba(14,110,79,0.25)]
          hover:scale-110 active:scale-95

          transition-all duration-300
          overflow-hidden
        "
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,110,79,0.18),transparent_70%)] opacity-80" />

        <div className="absolute inset-0 rounded-full bg-[#C49A4A]/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-300" />

        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="24"
            stroke="#D9DDDE"
            strokeWidth="3"
            fill="none"
          />

          <circle
            cx="50%"
            cy="50%"
            r="24"
            stroke="#C49A4A"
            strokeWidth="3"
            fill="none"
            strokeDasharray="150"
            strokeDashoffset={150 - (150 * progress) / 100}
            strokeLinecap="round"
            className="transition-all duration-150 ease-out"
          />
        </svg>

        <ArrowUp
          size={20}
          className="
            text-[#2D3436]
            group-hover:text-[#C49A4A]
            transition-all duration-300
            relative z-10
          "
        />
      </button>
    </div>
  );
};

export default ScrollToTop;