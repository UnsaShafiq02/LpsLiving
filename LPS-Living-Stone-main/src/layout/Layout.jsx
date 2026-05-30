
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import intuitLogo from "../assets/logo/Intuit.png";
import Icaew from "../assets/logo/Icaew.png";
import xero_logo from "../assets/logo/xero_logo.png";
import ATT from "../assets/logo/ATT.png";
import FREEAGENT from "../assets/logo/FREEAGENT.png";
import sageLogo     from '../assets/logo/Sage_logo.png';
// import tasbookLogo  from '../assets/logo/tasbook.png';
import propmanLogo  from '../assets/logo/Propman.png';
import blockmanLogo from '../assets/logo/blockman-logo.png';
// import trampsLogo   from '../assets/logo/tramps.png';
import qubeLogo     from '../assets/logo/Qube_Cinema_logo.png';
// import dwellantLogo from '../assets/logo/dwellant.png';
import docuwareLogo from '../assets/logo/docuware.png';
import clientt from '../assets/clientt.jpg';

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
   const location = useLocation();

  return (
    <div className="bg-white min-h-screen w-full font-['Inter',sans-serif]">

      {/* Main Content */}
      <main className="w-full py-3">
        <div className="bg-white overflow-hidden">
          {children}
        </div>
      </main>

      {/* Services Section */}
      <div
  className={`
    pb-5 space-y-3 px-3 sm:px-4

    ${
      location.pathname === "/"
        ? "block lg:hidden"
        : "hidden"
    }
  `}
>

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
{/* ───────────────── SOFTWARE / ACCREDITATIONS ───────────────── */}
<section className="w-full px-6 lg:px-10 py-14 bg-white border-t border-[#E5E7EB]">
  <div className="max-w-5xl mx-auto">

    {/* Top two-column */}
    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12"> */}
    {/* XERO FEATURE SECTION */}

<div
  className="
    mb-14

    p-[2px]

    rounded-[36px]

    bg-[#0D6E4F]
  "
>

  <div
    className="
      rounded-[32px]

      border border-[#0D6E4F]

      overflow-hidden

      bg-white

      flex flex-col lg:flex-row
      items-center

      min-h-[260px]
    "
  >

    {/* LEFT */}

    <div className="flex-1 px-6 lg:px-14 py-7 lg:py-10">
      <div className="w-10 h-[3px] bg-[#0D6E4F] rounded-full mb-4" />

      <p
        className="
          uppercase

          tracking-[3px]

          text-[#0D6E4F]

          text-[10px] lg:text-[11px]

          font-semibold

          mb-3
        "
      >
        Cloud Accounting · Technology
      </p>

      <h2
        className="
         text-[28px] sm:text-[32px] lg:text-4xl

          font-bold

          text-[#0D2040]

          mb-4

          leading-[1.15]
        "
        style={{ fontFamily: "neogrotesk" }}
      >
        Certified Xero Advisors
      </h2>

      <p
        className="
          text-[#0D2040]/70

          text-[14px] lg:text-[15px]

          leading-7

          max-w-2xl
        "
      >
        LPS Livingstone includes Certified Xero Advisors,
        supporting businesses with efficient cloud accounting,
        financial reporting and modern bookkeeping solutions.
      </p>

      <div
        className="
          inline-flex items-center gap-2

          mt-6

          px-4 py-2.5

          rounded-xl

          bg-[#0D6E4F]/5

          border border-[#0D6E4F]/20
        "
      >
        <div className="w-2 h-2 rounded-full bg-[#0D6E4F]" />

        <span
          className="
            text-xs

            font-semibold

            text-[#0D6E4F]
          "
        >
          Xero Certified Advisor
        </span>
      </div>

      {/* MOBILE XERO */}

      {/* MOBILE CERTIFICATION */}

<div
  className="
    lg:hidden

    mt-7

    bg-[#F8FBFC]

    border border-[#E5E7EB]

    rounded-2xl

    p-5

    text-center
  "
>

  <h3
    className="
      text-[44px]

      leading-none

      font-light

      tracking-tight

      text-[#13B5EA]

      lowercase
    "
    style={{
      fontFamily: "'Segoe UI', sans-serif"
    }}
  >
    xero
  </h3>

  <p
    className="
      mt-2

      text-[10px]

      font-bold

      uppercase

      tracking-[0.22em]

      text-[#0D2040]
    "
  >
    Platinum Partner
  </p>

  <div
    className="
      w-10 h-px

      bg-[#13B5EA]/30

      mx-auto

      my-3
    "
  />

  <div
    className="
      inline-flex items-center gap-2

      px-3 py-1.5

      rounded-full

      bg-[#EBF9FF]

      border border-[#CFEFFC]
    "
  >

    <div className="w-1.5 h-1.5 rounded-full bg-[#13B5EA]" />

    <span
      className="
        text-[10px]

        font-semibold

        text-[#0D2040]
      "
    >
      Certified Advisor
    </span>

  </div>

</div>

    </div>

    {/* DESKTOP RIGHT */}

    <div
      className="
        hidden lg:flex

        w-[420px]

        h-[260px]

        bg-gradient-to-br
        from-[#f8fffe]
        to-white

        items-center justify-center

        relative
      "
    >

      <div className="text-center">

        <h2
          className="
            text-[72px]

            leading-none

            font-light

            tracking-tight

            text-[#13B5EA]

            lowercase
          "
          style={{
            fontFamily: "'Segoe UI', sans-serif"
          }}
        >
          xero
        </h2>

        <div
          className="
            w-16 h-[2px]

            bg-[#13B5EA]/30

            mx-auto

            my-4
          "
        />

        <p
          className="
            text-[#0D2040]

            font-bold

            uppercase

            tracking-[0.25em]

            text-xs
          "
        >
          Platinum Partner
        </p>

        <p
          className="
            mt-3

            text-[#0D2040]/60

            text-[11px]

            uppercase

            tracking-[0.2em]
          "
        >
          Cloud Accounting Experts
        </p>
 
            </div>

    </div>

  </div>
</div>
</div>
</section>
<section className="mb-24">

  <div
    className="
      relative

      overflow-hidden

      rounded-[42px]

      border border-[#DDE7E2]

      bg-gradient-to-br
      from-[#F8FBFC]
      via-white
      to-[#EEF8F2]

      px-5 lg:px-5

      py-5 lg:py-5

       lg:min-h-[400px]
    "
  >

    {/* Decorative Shape */}

   <div
  className="
    absolute

    right-[-120px]
    top-[-80px]

    w-[680px]
    h-[680px]

    rounded-full

    overflow-hidden

    bg-[#EEF8F2]

    hidden lg:block
  "
>

  <img
    src={clientt}
    alt="LPS Livingstone"

    className="
      w-full
      h-full

      object-cover

      object-center
    "
  />

</div>

    {/* <div
      className="
        absolute

        right-[120px]
        bottom-[-120px]

        w-[420px]
        h-[420px]

        rounded-full

        bg-[#0D2040]/4
      "
    /> */}

    {/* CONTENT */}

    <div
      className="
        relative z-20

        lg:w-[58%]
      "
    >

      <div className="w-12 h-[4px] rounded-full bg-[#0D6E4F] mb-5" />

      <p
        className="
          uppercase

          tracking-[0.22em]

          text-[11px]

          font-semibold

          text-[#0D6E4F]

          mb-4
        "
      >
        Platforms We Work With
      </p>

      <h2
        className="
          text-3xl lg:text-5xl

          font-bold

          text-[#0D2040]

          leading-tight

          mb-5
        "
        style={{ fontFamily: "neogrotesk" }}
      >
        Working With The Systems
        <br />
        Our Clients Use
      </h2>

      <p
        className="
          text-[#0D2040]/65

          text-[15px] lg:text-base

          leading-8

          max-w-[620px]

          mb-10
        "
      >
        Our team has experience across a broad range of accounting,
        reporting and property management platforms used by businesses
        and property professionals throughout the UK.
      </p>

      {/* LOGO WALL */}

      {/* <div
        className="
          grid

          grid-cols-2
          md:grid-cols-3

          gap-4

          max-w-[700px]
        "
      >

        {[
          { name: "Sage", src: sageLogo },
          { name: "QuickBooks", src: intuitLogo },
          { name: "PropMan", src: propmanLogo },
          { name: "Blockman", src: blockmanLogo },
          { name: "Qube", src: qubeLogo },
          { name: "Docuware", src: docuwareLogo },
          { name: "FreeAgent", src: FREEAGENT },
        ].map((item) => (

          <div
            key={item.name}

            className="
              bg-white/95

              backdrop-blur-md

              border border-[#E5E7EB]

              rounded-2xl

              h-[82px]

              flex flex-col
              items-center
              justify-center

              shadow-sm

              hover:-translate-y-1
              hover:border-[#0D6E4F]
              hover:shadow-xl

              transition-all duration-300
            "
          >

            <img
              src={item.src}
              alt={item.name}

              className="
                max-h-8

                max-w-[95px]

                object-contain
              "
            />

            <span
              className="
                mt-2

                text-[11px]

                font-semibold

                text-[#0D2040]/55
              "
            >
              {item.name}
            </span>

          </div>

        ))}

      </div> */}
{/* DESKTOP LOGO WALL */}

<div
  className="
    hidden md:grid

    grid-cols-3

    gap-4

    max-w-[700px]
  "
>
  {[
    { name: "Sage", src: sageLogo },
    { name: "QuickBooks", src: intuitLogo },
    { name: "PropMan", src: propmanLogo },
    { name: "Blockman", src: blockmanLogo },
    { name: "Qube", src: qubeLogo },
    { name: "Docuware", src: docuwareLogo },
    { name: "FreeAgent", src: FREEAGENT },
  ].map((item) => (

    <div
      key={item.name}
      className="
        bg-white/95

        backdrop-blur-md

        border border-[#E5E7EB]

        rounded-2xl

        h-[82px]

        flex flex-col
        items-center
        justify-center

        shadow-sm

        hover:-translate-y-1
        hover:border-[#0D6E4F]
        hover:shadow-xl

        transition-all duration-300
      "
    >
      <img
        src={item.src}
        alt={item.name}
        className="
          max-h-8

          max-w-[95px]

          object-contain
        "
      />

      <span
        className="
          mt-2

          text-[11px]

          font-semibold

          text-[#0D2040]/55
        "
      >
        {item.name}
      </span>

    </div>

  ))}
</div>

{/* MOBILE LOGO BELT */}

<div className="md:hidden mt-6 relative overflow-hidden">

  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />

  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />

  <div className="flex gap-3 w-max logo-marquee">

    {[
      { name: "Sage", src: sageLogo },
      { name: "QuickBooks", src: intuitLogo },
      { name: "PropMan", src: propmanLogo },
      { name: "Blockman", src: blockmanLogo },
      { name: "Qube", src: qubeLogo },
      { name: "Docuware", src: docuwareLogo },
      { name: "FreeAgent", src: FREEAGENT },

      { name: "Sage", src: sageLogo },
      { name: "QuickBooks", src: intuitLogo },
      { name: "PropMan", src: propmanLogo },
      { name: "Blockman", src: blockmanLogo },
      { name: "Qube", src: qubeLogo },
      { name: "Docuware", src: docuwareLogo },
      { name: "FreeAgent", src: FREEAGENT },
    ].map((item, i) => (

      <div
        key={i}
        className="
          min-w-[120px]

          h-[70px]

          bg-white

          border border-[#E5E7EB]

          rounded-2xl

          flex items-center justify-center

          shadow-sm
        "
      >
        <img
          src={item.src}
          alt={item.name}
          className="
            max-h-8

            max-w-[80px]

            object-contain
          "
        />
      </div>

    ))}

  </div>

</div>
      <p
        className="
          mt-2

          text-[11px]

          text-[#0D2040]
        "
      >
        Software logos shown for illustrative purposes only.
      </p>
       </div>

    {/* IMAGE */}

    {/* <div
      className="
        absolute

        right-[-80px]

        bottom-[-20px]

        hidden lg:block

        z-10

        pointer-events-none
      "
    >

      <img
        src={client}
        alt="LPS Livingstone"

        className="
          h-[650px]

          object-contain

          opacity-95
        "
      />

    </div> */}

  </div>

</section>

</div>
  );
};

export default Layout;
