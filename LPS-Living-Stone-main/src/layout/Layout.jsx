
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import intuitLogo from "../assets/logo/Intuit.png";
import Icaew from "../assets/logo/Icaew.png";
import xero_logo from "../assets/logo/xero_logo.png";
import ATT from "../assets/logo/ATT.png";
import FREEAGENT from "../assets/logo/FREEAGENT.png";

// ─── Slide data ────────────────────────────────────────────────────────────────

const row1Slides = [
  {
    eyebrow: "Service Charge · Specialists",
    title: "Managing Agent Accounting",
    text: "Full transparency and compliance for residential & mixed-use developments.",
    link: "/servicecharge",
    bg: "from-[#0D2040] to-[#0a1830]",
  },
  {
    eyebrow: "Service Charge · Compliance",
    title: "Year-End Reporting",
    text: "Accurate, ICAEW-compliant year-end accounts prepared on time, every time.",
    link: "/servicecharge",
    bg: "from-[#162d52] to-[#0D2040]",
  },
  {
    eyebrow: "Service Charge · Property",
    title: "Property Portfolio Support",
    text: "Scalable accounting for growing property management portfolios across the UK.",
    link: "/servicecharge",
    bg: "from-[#071A2B] to-[#0a1428]",
  },
];

const row2Slides = [
  {
    eyebrow: "Business · Live Updates",
    title: "BBC Business",
    text: "Latest UK economy, inflation, markets and financial updates.",
    link: "https://www.bbc.com/news/business",
    bg: "from-[#224C26] to-[#1a3d1e]",
    isExternal: true,
    liveBadge: true,
  },
];

const row3Slides = [
  {
    eyebrow: "Personal Tax · HMRC",
    title: "HMRC Tax & Compliance",
    text: "Recent guidance, compliance changes and UK regulation updates for individuals.",
    link: "https://www.gov.uk/government/organisations/hm-revenue-customs",
    bg: "from-[#224C26] to-[#0D2040]",
    isExternal: true,
  },
  {
    eyebrow: "Personal Tax · Planning",
    title: "Capital Gains & Rental",
    text: "Expert guidance on capital gains tax, rental income, and property disposals.",
    link: "/services/personal-tax",
    bg: "from-[#0D2040] to-[#071A2B]",
  },
];

// ─── Reusable Slider ───────────────────────────────────────────────────────────

const Slider = ({ slides, pillLabel }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const slide = slides[current];

  const WrapperTag = slide.isExternal ? "a" : Link;

  const wrapperProps = slide.isExternal
    ? {
        href: slide.link,
        target: "_blank",
        rel: "noreferrer",
      }
    : {
        to: slide.link,
      };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">

      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className={`absolute inset-0 bg-gradient-to-br ${slide.bg}`}
        >
          <div className="absolute w-[260px] h-[260px] bg-white/5 blur-3xl rounded-full -top-10 -right-10" />
          <div className="absolute w-[260px] h-[260px] bg-white/5 blur-3xl rounded-full -bottom-10 -left-10" />
        </motion.div>
      </AnimatePresence>

      {/* Click overlay */}
      <WrapperTag
        {...wrapperProps}
        className="absolute inset-0 z-10"
      />

      {/* Content */}
      <div className="relative z-20 w-full h-full px-5 lg:px-6 py-5 lg:py-6 flex flex-col justify-between">

        {/* Top */}
        <div>

          <AnimatePresence mode="wait">
            <motion.p
              key={`eye-${current}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[9px] tracking-[0.24em] uppercase text-white/40 mb-3"
            >
              {slide.eyebrow}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.h2
              key={`title-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-tight max-w-[260px]"
            >
              {slide.title}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`text-${current}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-2 text-[13px] text-white/55 leading-relaxed max-w-[230px]"
            >
              {slide.text}
            </motion.p>
          </AnimatePresence>

        </div>

        {/* Bottom */}
        <div className="flex items-end justify-between">

          <motion.div
            key={`pill-${current}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            {slide.liveBadge ? (
              <span className="inline-flex items-center gap-2 bg-[#bb1c1c]/25 border border-[#bb1c1c]/40 rounded-full px-3 py-[7px] text-[10px] text-white">
                <span className="w-[6px] h-[6px] rounded-full bg-[#e05252] inline-block animate-pulse" />
                {pillLabel || "Live"}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 bg-white/10 border border-white/20 rounded-full px-3 py-[7px] text-[10px] text-white backdrop-blur-sm">
                {pillLabel || "View Service"} →
              </span>
            )}
          </motion.div>

          {/* Dots */}
          {slides.length > 1 && (
            <div className="flex items-center gap-[5px]">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrent(i);
                  }}
                  className={`h-[5px] rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-4 bg-[#0D6E4F]"
                      : "w-[5px] bg-white/25"
                  }`}
                />
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Progress */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10">
        <motion.div
          key={current}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="h-full bg-[#0D6E4F]"
        />
      </div>
    </div>
  );
};

// ─── Info Card ────────────────────────────────────────────────────────────────

const InfoCard = ({ title, subtitle, tags, link }) => (
  <Link
    to={link}
    className="
      group relative overflow-hidden
      rounded-2xl bg-[#ECEEE4]
      flex flex-col h-full
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-[0_20px_50px_-15px_rgba(13,110,79,0.15)]
    "
  >

    {/* Body */}
    <div className="px-5 py-5 flex flex-col h-full">

      <h3 className="text-lg xl:text-xl font-semibold text-[#0D2040] leading-tight font-serif">
        {title}
      </h3>

      {subtitle && (
        <p className="mt-2 text-[13px] text-[#0D2040]/50 leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Tags */}
      <div className="mt-3 space-y-1">
        {tags.map((tag, i) => (
          <div
            key={i}
            className="
              flex items-center justify-between
              px-3 py-[7px]
              rounded-lg
              bg-white/60
              text-[12px] text-[#0D2040]
              transition-all duration-200
              group-hover:bg-white/85 group-hover:pl-4
            "
          >
            <span>{tag}</span>
            <span className="text-[#224C26] text-sm">→</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-[#0D2040]/10 flex items-center justify-between">

        <span className="text-[10px] font-medium text-[#0D6E4F] tracking-wide uppercase">
          Explore Category
        </span>

        <div className="w-8 h-8 rounded-full bg-[#0D6E4F] text-white flex items-center justify-center text-sm transition-transform duration-300 group-hover:rotate-45">
          →
        </div>

      </div>
    </div>
  </Link>
);

// ─── Layout ────────────────────────────────────────────────────────────────────

const Layout = ({ children }) => {
  return (
    <div className="bg-white min-h-screen w-full font-['Inter',sans-serif]">

      {/* Main Content */}
      <main className="w-full py-3">
        <div className="bg-white overflow-hidden">
          {children}
        </div>
      </main>

      {/* Services Section */}
      <div className="px-3 sm:px-4 lg:hidden pb-5 space-y-3">

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 h-auto lg:h-[48vh]">

          <InfoCard
            title="Service Charge Accounts"
            subtitle="Specialist accounting for managing agents & property portfolios."
            tags={[
              "Service Charge Accounting",
              "Property Management Accounts",
              "Year-end Reporting",
            ]}
            link="/servicecharge"
          />

          <div className="hidden lg:block h-full">
            <Slider slides={row1Slides} pillLabel="View Service" />
          </div>

        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 h-auto lg:h-[48vh]">

          <div className="hidden lg:block h-full">
            <Slider slides={row2Slides} />
          </div>

          <InfoCard
            title="Business Services"
            subtitle="Complete support for UK businesses & growth-focused companies."
            tags={[
              "Accounts & Taxation",
              "Payroll & VAT",
              "Business Advisory",
            ]}
            link="/services"
          />

        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 h-auto lg:h-[48vh]">

          <InfoCard
            title="Personal Tax"
            subtitle="Simple, compliant and stress-free personal tax solutions."
            tags={[
              "Self Assessment",
              "Rental Income Tax",
              "Capital Gains",
            ]}
            link="/services/personal-tax"
          />

          <div className="hidden lg:block h-full">
            <Slider slides={row3Slides} pillLabel="Learn More" />
          </div>

        </div>
      </div>
      {/* ───────────────── TRUST / ACCREDITATIONS ───────────────── */}
<section className="w-full px-6 lg:px-10 py-14 bg-white border-t border-[#E5E7EB]">
  <div className="max-w-5xl mx-auto">

    {/* Top: heading + description */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
      <div>
        <div className="w-10 h-[3px] bg-[#0D6E4F] rounded-full mb-4" />
        <p className="uppercase tracking-[3px] text-[#0D6E4F] text-[11px] font-semibold mb-3">
          Accredited. Awarded. Trusted.
        </p>
        <h2 className="text-2xl lg:text-3xl font-bold text-[#0D2040] leading-snug"
          style={{ fontFamily: 'Georgia, serif' }}>
          Recognised by the UK's leading financial institutions.
        </h2>
      </div>
      <p className="text-sm text-[#0D2040] leading-7">
        Accredited by industry leaders and recognised for excellence, we're trusted
        by businesses across the UK for quality, compliance, and professional standards.
      </p>
    </div>

    {/* Logo grid */}
  {/* MOBILE — running belt */}
<div className="md:hidden overflow-hidden">

  <div className="flex marquee-track items-center gap-4 py-2 w-max">

    {[
      { src: intuitLogo, name: 'QuickBooks' },
      { src: ATT, name: 'ATT' },
      { src: Icaew, name: 'ICAEW' },
      { src: xero_logo, name: 'Xero' },
      { src: FREEAGENT, name: 'FreeAgent' },

      // duplicate for infinite loop
      { src: intuitLogo, name: 'QuickBooks' },
      { src: ATT, name: 'ATT' },
      { src: Icaew, name: 'ICAEW' },
      { src: xero_logo, name: 'Xero' },
      { src: FREEAGENT, name: 'FreeAgent' },
    ].map(({ src, name }, i) => (

      <div
        key={i}

        className="
          flex items-center justify-center

          min-w-[150px]
          h-[90px]

          bg-white

          border border-[#E5E7EB]

          rounded-2xl

          px-6

          shadow-sm
        "
      >

        <img
          src={src}
          alt={name}

          className="
            max-h-[34px]
            w-auto
            object-contain
          "
        />

      </div>

    ))}

  </div>

</div>

{/* DESKTOP — grid */}
<div className="hidden md:grid grid-cols-5 border border-[#E5E7EB] rounded-2xl overflow-hidden divide-x divide-[#E5E7EB]">

  {[
    { src: intuitLogo, name: 'QuickBooks', badge: 'Platinum', href: 'https://quickbooks.intuit.com/uk/' },
    { src: ATT,        name: 'ATT',        badge: 'Member',   href: 'https://www.att.org.uk/' },
    { src: Icaew,      name: 'ICAEW',      badge: 'Chartered',href: 'https://www.icaew.com/' },
    { src: xero_logo,  name: 'Xero',       badge: 'Platinum', href: 'https://www.xero.com/uk/' },
    { src: FREEAGENT,  name: 'FreeAgent',  badge: 'Partner',  href: 'https://www.freeagent.com/' },
  ].map(({ src, name, badge, href }) => (

    <a
      key={name}
      href={href}
      target="_blank"
      rel="noopener noreferrer"

      className="
        group

        flex flex-col items-center justify-center

        gap-3

        py-8 px-4

        bg-white

        hover:bg-[#f8fffe]

        transition-colors duration-200
      "
    >

      <img
        src={src}
        alt={name}

        className="
          h-8
          w-auto
          object-contain
        "
      />

      <span
        className="
          text-[11px]
          font-medium

          text-[#0D2040]/70

          tracking-wide
        "
      >
        {name}
      </span>

      <span
        className="
          text-[10px]
          font-semibold

          text-[#0D6E4F]

          bg-[#0D6E4F]/6

          border border-[#0D6E4F]/20

          px-2 py-0.5

          rounded-full
        "
      >
        {badge}
      </span>

    </a>

  ))}

</div>
  </div>
</section>
    </div>
  );
};

export default Layout;

