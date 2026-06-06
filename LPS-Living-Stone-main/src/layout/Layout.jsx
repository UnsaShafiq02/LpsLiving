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
import clientt from '../assets/Clientt.jpg';
import Approach from '../assets/Approach.jpeg';
import Landlord from '../assets/Landlord.png';

import ICAEWBG from '../assets/ICAEW-BG.png';
import HMRCbg from '../assets/HMRC-bg.png';
import ICObg from '../assets/ICO-bg.png';
import ACSP from '../assets/ACSP.png';
import XeroLatest from '../assets/XeroLatest.png';
import DwellantLogo from "../assets/DwellantLogo.png";
import MoneyLogo from "../assets/MoneyLogo.png";
import IRISLogo from "../assets/IRISLogo.png";

// ─── Slide data ────────────────────────────────────────────────────────────────

const row1Slides = [
  {
    eyebrow: "Service Charge · Specialists",
    title: "Managing Agent Accounting",
    text: "Full transparency and compliance for residential & mixed-use developments.",
    link: "/servicecharge",
    bg: "from-[#0E6E4F] to-[#0A5A3E]",
  },
  {
    eyebrow: "Service Charge · Compliance",
    title: "Year-End Reporting",
    text: "Accurate, ICAEW-compliant year-end accounts prepared on time, every time.",
    link: "/servicecharge",
    // FIX 1: #084C35 → replaced with approved palette colour
    bg: "from-[#0A5A3E] to-[#0E6E4F]",
  },
  {
    eyebrow: "Service Charge · Property",
    title: "Property Portfolio Support",
    text: "Scalable accounting for growing property management portfolios across the UK.",
    link: "/servicecharge",
    // FIX 1: #084C35 → replaced with approved palette colour
    bg: "from-[#0E6E4F] to-[#0A5A3E]",
  },
];

const row2Slides = [
  {
    eyebrow: "Business · Live Updates",
    title: "BBC Business",
    text: "Latest UK economy, inflation, markets and financial updates.",
    link: "https://www.bbc.com/news/business",
    bg: "from-[#0E6E4F] to-[#0A5A3E]",
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
    // FIX 2: #224C26 / #0D2040 → approved palette
    bg: "from-[#0E6E4F] to-[#0A5A3E]",
    isExternal: true,
  },
  {
    eyebrow: "Personal Tax · Planning",
    title: "Capital Gains & Rental",
    text: "Expert guidance on capital gains tax, rental income, and property disposals.",
    link: "/services/personal-tax",
    // FIX 2: #0D2040 / #071A2B → approved palette
    bg: "from-[#0A5A3E] to-[#0E6E4F]",
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
                      ? "w-4 bg-[#C49A4A]"
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
          className="h-full bg-[#C49A4A]"
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
      rounded-2xl bg-[#F8F8F5]
      flex flex-col h-full
      transition-all duration-300
      hover:-translate-y-1
      hover:shadow-[0_20px_50px_-15px_rgba(14,110,79,0.15)]
    "
  >
    {/* FIX 6: rgba(13,110,79) → rgba(14,110,79) to match #0E6E4F */}

    {/* Body */}
    <div className="px-5 py-5 flex flex-col h-full">

<h3 className="text-lg xl:text-xl font-semibold text-[#2D3436] leading-tight">        {title}
      </h3>

      {subtitle && (
        <p className="mt-2 text-[13px] text-[#5F6B6D] leading-relaxed">
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
              text-[12px] text-[#2D3436]
              transition-all duration-200
              group-hover:bg-white/85 group-hover:pl-4
            "
          >
            <span>{tag}</span>

            <span className="text-[#C49A4A] text-sm">→</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-[#D9DDDE] flex items-center justify-between">

        <span className="text-[10px] font-medium text-[#0E6E4F] tracking-wide uppercase">
          Explore Category
        </span>

        <div className="w-8 h-8 rounded-full bg-[#C49A4A] text-white flex items-center justify-center text-sm transition-transform duration-300 group-hover:rotate-45">
          →
        </div>

      </div>
    </div>
  </Link>
);

// ─── Layout ────────────────────────────────────────────────────────────────────
const testimonialGroups = [
  {
    category: "Self Employed",
   image: Landlord,
    description: "Supporting self-employed professionals across the UK.",
    testimonials: [
      {
        name: "A Hussain",
        role: "Self Employed - Luton",
        text: "I have been delighted with the service. Mr Shahbaz was easy to understand and very knowledgeable. Very highly recommend.",
      },
      {
        name: "Waheed Hassan",
        role: "Sole Trader - Derby",
        text: "I have been with LPS for quite some time now, very professional and friendly people - always prepared to help. Highly recommend for accounting related services.",
      },
      {
        name: "Dr Asad",
        role: "Locum Doctor - London",
        text: "For the past 5 years, LPS has handled my tax affairs quickly, efficiently and professionally.",
      },
      {
        name: "Sophie B Walker",
        role: "Childcare Business Co Owner",
        text: "The service I receive is second to none and I know everything is done properly.",
      },
    ],
  },

  {
    category: "Directors",
   image: Landlord,
    description: "Helping company directors stay compliant and grow confidently.",
    testimonials: [
      {
        name: "Mr. Chaudhary",
        role: "Director - Metro Local",
        text: "Excellent service. Very swift, friendly and extremely professional.",
      },
      {
        name: "MN Mahmood",
        role: "Director - Metro Mart Retail",
        text: "Shahbaz's knowledge of small business accountancy and tax affairs has really helped me.",
      },
      {
        name: "S Khan",
        role: "Project Manager - Lloyds Bank",
        text: "They never fail to impress me with their diligent, detail-oriented and customer-focused approach.",
      },
    ],
  },
];
const Layout = ({ children }) => {
   const location = useLocation();
   const [groupIndex, setGroupIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  useEffect(() => {
  const timer = setInterval(() => {
    const currentGroup = testimonialGroups[groupIndex];

    if (
      testimonialIndex <
      currentGroup.testimonials.length - 1
    ) {
      setTestimonialIndex((prev) => prev + 1);
    } else {
      setTestimonialIndex(0);

      setGroupIndex((prev) =>
        prev === testimonialGroups.length - 1
          ? 0
          : prev + 1
      );
    }
  }, 5000);

  return () => clearInterval(timer);
}, [groupIndex, testimonialIndex]);
const currentGroup =
  testimonialGroups[groupIndex];

const currentTestimonial =
  currentGroup.testimonials[testimonialIndex];

  return (
<div className="bg-white min-h-screen w-full">
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

      {/* ───────────────── OUR APPROACH ───────────────── */}

<section className="px-0 lg:px-0 py-16 bg-white">
  <div className="w-full mx-auto">
    <div
      className="
        relative overflow-hidden
        rounded-[22px]
        border border-[#D9DDDE]
        bg-gradient-to-br
        from-[#F8F8F5]
        via-white
        to-[#F8F8F5]
        p-6 lg:p-10
      "
    >
      {/* Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-[320px] h-[350px] rounded-full bg-[#C8A15A]/10 blur-3xl" />

      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">

        {/* CONTENT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-12 h-[4px] rounded-full bg-[#C8A15A] mb-5" />

          <p
            className="
              uppercase
              tracking-[0.22em]
              text-[11px]
              font-semibold
              text-[#0F6B4B]
              mb-4
            "
          >
            Our Approach
          </p>

          <h2
            className="
              text-3xl lg:text-5xl
              font-black
              text-[#2F3437]
              leading-tight
              mb-6
            "
          >
            Trusted Relationships.
            <br />
            Practical Advice.
            <br />
            Real Value.
          </h2>

          <p
            className="
              text-[#5F6B6D]
              text-[15px] lg:text-base
              leading-8
              max-w-[620px]
              mb-8
            "
          >
            Building lasting relationships is at the heart of what we do.
            We take the time to understand our clients' businesses,
            providing reliable support, practical solutions and proactive
            advice that helps them grow with confidence.
          </p>

          {/* TRUST LIST */}
          {/* <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Long-term Relationships",
              "Reliable Support",
              "Practical Solutions",
              "Proactive Advice",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex items-center gap-3
                  bg-white
                  border border-[#D9DDDE]
                  rounded-2xl
                  px-4 py-3
                  shadow-sm
                "
              >
                <div className="w-2 h-2 rounded-full bg-[#C8A15A]" />

                <span className="text-[#2F3437] text-sm font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div> */}

          <button
            className="
              inline-flex items-center gap-2
              px-6 py-3
              rounded-xl
              bg-[#0F6B4B]
              text-white
              font-medium
              transition-all duration-300
              hover:bg-[#0A5A3E]
              hover:-translate-y-1
            "
          >
            Discover Our Approach →
          </button>
        </motion.div>

    
       {/* IMAGE SIDE */}
 <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="relative"
>
  <div
    className="
      overflow-hidden
      rounded-[26px]
      border-[2px]
      border-[#C8A15A]
      relative
      z-10
      shadow-[0_30px_80px_-20px_rgba(15,107,75,0.15)]
    "
  >
    <img
      src={Approach}
      alt="Trusted Relationships"
      className="
        w-full
        h-auto
        object-contain
      "
    />
  </div>
</motion.div>

      </div>
    </div>
  </div>
</section>
<section className="py-16 bg-white">
  <div className="w-full mx-auto">

    {/* Heading */}

    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B4B]">
        What Our Clients Say
      </h2>

      <div className="w-20 h-[3px] bg-[#C8A15A] mx-auto mt-4 rounded-full" />

      <p className="mt-6 text-[#5F6B6D] max-w-3xl mx-auto text-lg">
        Trusted by self-employed professionals, directors and business owners
        across the UK.
      </p>
    </div>

    <div
      className="
        relative overflow-hidden
        rounded-[22px]
        border border-[#D9DDDE]
        bg-gradient-to-br
        from-[#F8F8F5]
        via-white
        to-[#F8F8F5]
        p-6 lg:p-10
      "
    >
      <div className="absolute -top-24 -right-24 w-[320px] h-[350px] rounded-full bg-[#C8A15A]/10 blur-3xl" />

      <div className="grid lg:grid-cols-[1fr_0.85fr] gap-8 items-stretch">

        {/* TESTIMONIAL CARD */}

        <AnimatePresence mode="wait">

          <motion.div
            key={`${groupIndex}-${testimonialIndex}`}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.5 }}
            className="
              bg-white
              border border-[#D9DDDE]
              rounded-[24px]
              p-8
              shadow-sm
              flex
              flex-col
              justify-center
            "
          >
            <div className="flex gap-1 text-[#C8A15A] text-xl mb-6">
              ★★★★★
            </div>

            <p
              className="
                text-[#2F3437]
                text-lg
                leading-9
                italic
                mb-8
              "
            >
              "{currentTestimonial.text}"
            </p>

            <div>
              <h4 className="font-bold text-[#0F6B4B] text-xl">
                {currentTestimonial.name}
              </h4>

              <p className="text-[#5F6B6D] mt-1">
                {currentTestimonial.role}
              </p>
            </div>
          </motion.div>

        </AnimatePresence>

        {/* CATEGORY CARD */}

        {/* CATEGORY IMAGE */}

<AnimatePresence mode="wait">
  <motion.div
    key={currentGroup.category}
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -60 }}
    transition={{ duration: 0.5 }}
    className="
      relative
      overflow-hidden
      rounded-[24px]
      border border-[#C8A15A]
      bg-white
      shadow-sm
      h-full
    "
  >
    <img
      src={currentGroup.image}
      alt={currentGroup.category}
      className="
        w-full
        h-full
        object-cover
      "
    />

    {/* Overlay */}

    <div
      className="
        absolute
        inset-0
        bg-gradient-to-t
        from-[#084C35]/80
        via-transparent
        to-transparent
      "
    />

    {/* Text */}

    <div
      className="
        absolute
        bottom-0
        left-0
        right-0
        p-6
        text-white
      "
    >
      <h3 className="text-3xl font-bold">
        {currentGroup.category}
      </h3>

      <div className="w-12 h-[3px] bg-[#C8A15A] mt-3 mb-3 rounded-full" />

      <p className="text-white/90 leading-7">
        {currentGroup.description}
      </p>
    </div>
  </motion.div>
</AnimatePresence>

      </div>
    </div>

  </div>
</section>
      {/* ───────────────── TRUST / ACCREDITATIONS ───────────────── */}
{/* ───────────────── SOFTWARE / ACCREDITATIONS ───────────────── */}
<section className="py-16 bg-white border-t border-[#D9DDDE]">
  <div className="w-full px-2 lg:px-4">

    <div className="text-center mb-14">
      <h2 className="text-3xl lg:text-5xl font-bold text-[#0F6B4B]">
        Accreditations & Partnerships
      </h2>
      <div className="w-20 h-[3px] bg-[#C8A15A] mx-auto mt-4 rounded-full" />
      <p className="mt-5 text-[#5F6B6D] max-w-2xl mx-auto">
        Working with trusted industry bodies, regulators and technology partners.
      </p>
    </div>

    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-2
        xl:grid-cols-5
        2xl:grid-cols-5
        gap-3 lg:gap-4
        items-center
        px-3 lg:px-0
      "
    >
      {[
        { name: "ICAEW",       src: ICAEWBG    },
        { name: "HMRC",        src: HMRCbg     },
        { name: "ACSP",        src: ACSP       },
        { name: "ICO",         src: ICObg      },
        { name: "Xero Latest",src:  XeroLatest },
       
      ].map((item) => (
        <div
          key={item.name}
          className="
            flex flex-col items-center justify-center gap-2
            bg-[#F8F8F5]
            border border-[#E5E7EB]
            rounded-2xl
            p-3 lg:p-0
            lg:bg-transparent
            lg:border-none
            lg:rounded-none
            transition-all duration-300
            hover:scale-105
          "
        >
          <img
            src={item.src}
            alt={item.name}
            className="
              h-14 lg:h-[390px]
              w-full
              object-contain
              transition-transform duration-300
            "
          />
          <span className="lg:hidden text-[10px] font-semibold text-[#5F6B6D] text-center">
            {item.name}
          </span>
        </div>
      ))}
    </div>

  </div>
</section>
{/* <section className="py-16 bg-white border-t border-[#D9DDDE]">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-5xl font-bold text-[#0F6B4B]">
        Accreditations & Partnerships
      </h2>

      <div className="w-20 h-[3px] bg-[#C8A15A] mx-auto mt-4 rounded-full" />

      <p className="mt-5 text-[#5F6B6D] max-w-2xl mx-auto">
        Working with trusted industry bodies, regulators and technology partners.
      </p>
    </div>

    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-14
        items-center
      "
    >
      {[
        { name: "ICAEW", src: ICAEWBG },
        { name: "HMRC", src: HMRCbg },
        { name: "ACSP", src: ACSP },
        { name: "ICO", src: ICObg },
        { name: "Xero", src: L1xero },
        { name: "Xero Advisor", src: L2xero },
        { name: "Xero Bronze", src: XeroBronze },
      ].map((item) => (
        <div
          key={item.name}
          className="
            flex
            items-center
            justify-center
          "
        >
          <img
            src={item.src}
            alt={item.name}
            className="
              h-[220px]
              w-auto
              object-contain
              transition-transform
              duration-300
              hover:scale-105
            "
          />
        </div>
      ))}
    </div>

  </div>
</section> */}
<section className="mb-8 lg:mb-24">

  <div
    className="
      relative
      overflow-hidden
      rounded-[42px]
      border border-[#D9DDDE]
      bg-gradient-to-br
      from-[#F8F8F5]
      via-white
      to-[#F8F8F5]
      px-6 lg:px-10
      py-8 lg:py-10
    "
  >

    <div
      className="
        relative z-20
        max-w-[1200px]
      "
    >

      <div className="w-12 h-[4px] rounded-full bg-[#C49A4A] mb-5" />

      <p
        className="
          uppercase
          tracking-[0.22em]
          text-[11px]
          font-semibold
          text-[#0E6E4F]
          mb-4
        "
      >
        Platforms We Work With
      </p>

      <h2
        className="
          text-3xl lg:text-5xl
          font-bold
          text-[#2D3436]
          leading-tight
          mb-5
        "
      >
        Working With The Systems
        <br />
        Our Clients Use
      </h2>

      <p
        className="
          text-[#5F6B6D]
          text-[15px] lg:text-base
          leading-8
          max-w-[800px]
          mb-10
        "
      >
        Our team has experience across a broad range of accounting,
        reporting and property management platforms used by businesses
        and property professionals throughout the UK.
      </p>

      {/* DESKTOP LOGO WALL */}

     {/* DESKTOP LOGO WALL */}

<div
  className="
    hidden md:grid
    grid-cols-5
    gap-4
    max-w-[1100px]
  "
>
  {[
    {
      name: "Sage",
      src: sageLogo,
      website: "https://www.sage.com",
    },
    {
      name: "QuickBooks",
      src: intuitLogo,
      website: "https://quickbooks.intuit.com",
    },
    {
      name: "PropMan",
      src: propmanLogo,
      website: "https://www.propman.co.uk",
    },
    {
      name: "Blockman",
      src: blockmanLogo,
      website: "https://www.blockman.co.uk",
    },
    {
      name: "Qube",
      src: qubeLogo,
      website: "https://www.qubeglobal.com",
    },
    {
      name: "DocuWare",
      src: docuwareLogo,
      website: "https://start.docuware.com",
    },
    {
      name: "FreeAgent",
      src: FREEAGENT,
      website: "https://www.freeagent.com",
    },
    {
      name: "Dwellant",
      src: DwellantLogo,
      website: "https://www.dwellant.com",
    },
    {
      name: "Moneysoft",
      src: MoneyLogo,
      website: "https://www.moneysoft.co.uk",
    },
    {
      name: "IRIS",
      src: IRISLogo,
      website: "https://www.iris.co.uk",
    },
  ].map((item) => (

    <a
      key={item.name}
      href={item.website}
      target="_blank"
      rel="noopener noreferrer"
      className="
        bg-white
        border border-[#D9DDDE]
        rounded-2xl
        h-[90px]
        flex flex-col
        items-center
        justify-center
        shadow-sm
        hover:-translate-y-1
        hover:border-[#C49A4A]
        hover:shadow-xl
        transition-all duration-300
        cursor-pointer
      "
    >
      <img
        src={item.src}
        alt={item.name}
        className="
          max-h-10
          max-w-[110px]
          object-contain
        "
      />

      <span
        className="
          mt-2
          text-[11px]
          font-semibold
          text-[#5F6B6D]
        "
      >
        {item.name}
      </span>

    </a>

  ))}
</div>

      {/* MOBILE LOGO BELT */}

      <div className="md:hidden mt-6 relative overflow-hidden">

        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10" />

        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex gap-3 w-max logo-marquee">

          {[
  {
    name: "Sage",
    src: sageLogo,
    website: "https://www.sage.com",
  },
  {
    name: "QuickBooks",
    src: intuitLogo,
    website: "https://quickbooks.intuit.com",
  },
  {
    name: "PropMan",
    src: propmanLogo,
    website: "https://www.propman.co.uk",
  },
  {
    name: "Blockman",
    src: blockmanLogo,
    website: "https://www.blockman.co.uk",
  },
  {
    name: "Qube",
    src: qubeLogo,
    website: "https://www.qubeglobal.com",
  },
  {
    name: "DocuWare",
    src: docuwareLogo,
    website: "https://start.docuware.com",
  },
  {
    name: "FreeAgent",
    src: FREEAGENT,
    website: "https://www.freeagent.com",
  },
  {
    name: "Dwellant",
    src: DwellantLogo,
    website: "https://www.dwellant.com",
  },
  {
    name: "Moneysoft",
    src: MoneyLogo,
    website: "https://www.moneysoft.co.uk",
  },
  {
    name: "IRIS",
    src: IRISLogo,
    website: "https://www.iris.co.uk",
  },

  // duplicate for marquee
  {
    name: "Sage",
    src: sageLogo,
    website: "https://www.sage.com",
  },
  {
    name: "QuickBooks",
    src: intuitLogo,
    website: "https://quickbooks.intuit.com",
  },
  {
    name: "PropMan",
    src: propmanLogo,
    website: "https://www.propman.co.uk",
  },
  {
    name: "Blockman",
    src: blockmanLogo,
    website: "https://www.blockman.co.uk",
  },
  {
    name: "Qube",
    src: qubeLogo,
    website: "https://www.qubeglobal.com",
  },
  {
    name: "DocuWare",
    src: docuwareLogo,
    website: "https://start.docuware.com",
  },
  {
    name: "FreeAgent",
    src: FREEAGENT,
    website: "https://www.freeagent.com",
  },
  {
    name: "Dwellant",
    src: DwellantLogo,
    website: "https://www.dwellant.com",
  },
  {
    name: "Moneysoft",
    src: MoneyLogo,
    website: "https://www.moneysoft.co.uk",
  },
  {
    name: "IRIS",
    src: IRISLogo,
    website: "https://www.iris.co.uk",
  },
].map((item, i) => (

  <a
    key={i}
    href={item.website}
    target="_blank"
    rel="noopener noreferrer"
    className="
      min-w-[120px]
      h-[80px]
      bg-white
      border border-[#D9DDDE]
      rounded-2xl
      flex items-center justify-center
      shadow-sm
      hover:border-[#C49A4A]
      transition-all duration-300
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
            </a>

          ))}

        </div>

      </div>

      <p
        className="
          mt-4
          text-[11px]
          text-[#5F6B6D]
        "
      >
        Software logos shown for illustrative purposes only.
      </p>

    </div>

  </div>

</section>
<section className="py-20 bg-white">

  <div className="max-w-6xl mx-auto px-6 lg:px-10">

    {/* Gold Outer Border */}
    <div
      className="
        p-[2px]
        rounded-[38px]
        bg-[#B58B3C]
      "
    >

      <div
        className="
          relative
          overflow-hidden
          rounded-[36px]
          border border-[#D9DDDE]
          bg-gradient-to-br
          from-[#F8F8F5]
          via-white
          to-[#F8F8F5]
          p-8
          lg:p-14
          shadow-[0_30px_80px_-20px_rgba(15,107,75,0.08)]
        "
      >

        {/* Gold Glow */}
        <div className="absolute -top-20 -right-20 w-[280px] h-[280px] rounded-full bg-[#C8A15A]/10 blur-3xl" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">

          <div className="w-14 h-[4px] rounded-full bg-[#C8A15A] mx-auto mb-6" />

          <p
            className="
              uppercase
              tracking-[0.22em]
              text-[11px]
              font-semibold
              text-[#0F6B4B]
              mb-4
            "
          >
            Contact Us
          </p>

          <h2
            className="
              text-3xl
              lg:text-5xl
              font-black
              text-[#2F3437]
              leading-tight
              mb-6
            "
          >
            Ready to Discuss
            <br />
            Your Requirements?
          </h2>

          <p
            className="
              text-[#5F6B6D]
              text-base
              lg:text-lg
              leading-8
              max-w-2xl
              mx-auto
              mb-10
            "
          >
            Whether you're a business owner, property professional or
            individual, our team is here to provide practical advice,
            responsive support and tailored accounting, taxation and
            advisory services.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-8
                py-3.5
                rounded-xl
                bg-[#0F6B4B]
                text-white
                font-semibold
                hover:bg-[#0A5A3E]
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              Get in Touch →
            </Link>

            <Link
              to="/services"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-8
                py-3.5
                rounded-xl
                bg-white
                border border-[#C8A15A]
                text-[#2F3437]
                font-semibold
                hover:bg-[#F7F7F4]
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              Explore Our Services →
            </Link>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

</div>
  );
};

export default Layout;