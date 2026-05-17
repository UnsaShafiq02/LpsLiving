import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
   <footer className="bg-[#0D6E4F] text-white relative overflow-hidden">

  {/* subtle glow */}
  <div className="absolute top-[-80px] left-[-80px] w-[140px] h-[140px] bg-white/10 blur-3xl rounded-full" />
  <div className="absolute bottom-[-80px] right-[-80px] w-[140px] h-[140px] bg-white/10 blur-3xl rounded-full" />

  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5">

    {/* ================= MAIN CONTENT ================= */}
    <div className="flex flex-wrap justify-between gap-4">

      {/* LINKS */}
      <div className="min-w-[140px]">
        <h3 className="text-[11px] font-semibold uppercase tracking-wide text-white/90 mb-2">
          Links
        </h3>

        <ul className="space-y-1 text-[11px] text-white/70">
          {[
            'Home',
            'About Us',
            'Services',
            'Free Resources',
            'Careers',
            'Contact',
          ].map((item, i) => (
            <li key={i} className="hover:text-white cursor-pointer transition">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* CONTACT */}
      <div className="min-w-[160px]">
        <h3 className="text-[11px] font-semibold uppercase tracking-wide text-white/90 mb-2">
          Contact
        </h3>

        <div className="text-[11px] leading-4 space-y-1 text-white/70">
          <p className="text-white font-medium">LPS Livingstone</p>
          <p>Wenzel House, WD18 9AB</p>
          <p className="text-white">020 7278 0007</p>
        </div>
      </div>

      {/* EXTRA */}
      <div className="min-w-[140px]">
        <h3 className="text-[11px] font-semibold uppercase tracking-wide text-white/90 mb-2">
          Info
        </h3>

        <div className="text-[11px] text-white/70 space-y-1">
          <p>Chartered Accountants</p>
          <p>Business Advisors</p>
        </div>

        {/* SOCIAL */}
        <div className="flex gap-2 mt-2">
          <a className="p-1.5 rounded-full bg-white/10 hover:bg-white hover:text-[#224C26] transition">
            <FaFacebookF size={11} />
          </a>
          <a className="p-1.5 rounded-full bg-white/10 hover:bg-white hover:text-[#224C26] transition">
            <FaTwitter size={11} />
          </a>
          <a className="p-1.5 rounded-full bg-white/10 hover:bg-white hover:text-[#224C26] transition">
            <FaLinkedinIn size={11} />
          </a>
        </div>
      </div>

    </div>

    {/* ================= BOTTOM BAR ================= */}
    <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap justify-between items-center gap-2 text-[10px] text-white/60">

      <p>© 2026 LPS Accountants Limited</p>

      <div className="flex gap-3">
        <span className="hover:text-white cursor-pointer">Privacy</span>
        <span className="hover:text-white cursor-pointer">Terms</span>
      </div>

    </div>

  </div>
</footer>
  );
};

export default Footer;