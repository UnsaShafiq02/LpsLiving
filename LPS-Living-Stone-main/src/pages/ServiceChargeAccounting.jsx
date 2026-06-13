import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  CheckCircle2,
  ChevronRight,
  FileText,
  Building2,
  RefreshCcw,
  BriefcaseBusiness,
  Users,
  Handshake,
  ClipboardCheck,
  Layers3,
  PieChart,
  FileSearch,
  CalendarDays,
   House,
  ListChecks,
  UserRound,
  Clock3,
  Laptop,
} from "lucide-react";

import serviceChargeVideo from "../assets/serviceChargeVideo.mp4";
import { motion } from "framer-motion";

// ─── DATA ────────────────────────────────────────────────────────────────────

const whyItems = [
  'Sector experience dating back to 1995',
  'Over 100 years of combined team experience',
  'Experience across 1,000+ properties',
  'Partner-led and responsive service',
  'Flexible turnaround for urgent deadlines',
  'Practical understanding of handovers, backlog accounts and operational issues',
  'Experience with residential, mixed-use and commercial portfolios',
  'Familiarity with leading property management systems',
];

const practicalItems = [
  'Changes of managing agent', 'Developer handovers', 'Opening balance reviews',
  'Backlog accounts', 'Historic accounting issues', 'Balancing differences',
  'Leaseholder reporting', 'AGM deadlines', 'Urgent flat sale requirements',
  'Multi-schedule developments', 'Post enfranchisement accounting',
];

const clientTypes = [
  'Managing Agents',
  'RTMs & RMCs',
  'Freehold Companies',
  'Self-Managed Blocks',
  'Residential Developments',
  'Mixed-Use Developments',
  'Commercial Developments',
  'Large Multi-Schedule',
];

const regulatoryItems = [
  'Landlord & Tenant legislation',
  'Leasehold and Freehold Reform legislation',
  'ICAEW TECH 03/11 and TECH 09/14 guidance',
  'RICS Professional Standards',
  'Building Safety legislation',
  'Statutory trust and client money requirements',
  'Companies Act and UK accounting standards',
  'HMRC trust and taxation guidance',
  'Relevant tribunal decisions and case law developments',
];

const managingAgentSystems = ['Qube', 'Tramps', 'Propman', 'Blockman', 'Dwellant', 'TASBooks', 'Sage', 'Xero'];

const managingAgentHandover = [
  'Changes of managing agent', 'Developer handovers',
  'Opening balance reviews', 'Handover balance reconciliations',
  'Historic accounting issues', 'Backlog accounts',
];

const managingAgentAdditional = [
  'Freehold company matters', 'Ground rent income',
  'Lease extension premiums', 'Corporation tax matters',
  'Company secretarial obligations', 'Regulatory body compliance (TPI)',
];

const selfManagedTransition = [
  'Newly formed RTM or RMC setup', 'Moving away from a managing agent',
  'Taking over financial control', 'Dealing with historic accounting issues',
  'Opening balances & reconciliations', 'Establishing reporting procedures',
];

const selfManagedCompany = [
  'Director changes', 'Confirmation statements',
  'Share transfers following flat sales', 'Ongoing Companies House obligations',
];

const selfManagedUrgent = ['AGMs', 'Flat sales', 'Mortgage enquiries', 'Year-end deadlines'];
const CountUp = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);

  const ref = React.useRef(null);
  const started = React.useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {

          started.current = true;

          let start = 0;

          const duration = 1500;

          const increment = target / (duration / 16);

          const timer = setInterval(() => {

            start += increment;

            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }

          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();

  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};
const services = [
  {
   
    title: 'Service Charge Accounting & Reporting',
    items: [
      'Service Charge Accounts', 'Independent Examinations', 'Service Charge Audits',
      'Reports of Factual Findings', 'Section 21 Cost Summaries & Reporting',
      'Year-End Surplus & Deficit Apportionment Calculations',
      'Section 20 Major Works Reconciliations to Cost Estimates',
    ],
  },
  {
   
    title: 'Tax & Company Services',
    items: [
      'Dormant Company Accounts', 'Freehold Company Accounts',
      'Ground Rent Income Reporting', 'Corporation Tax Returns for RMCs, RTMs & Freehold Companies',
      'VAT Advice for Mixed-Use and Commercial Developments',
      'Capital Gains Tax Computations on Lease Extension Premiums',
      'Trust Tax Registration, Computations & Return Filing with HMRC',
    ],
  },
  {
   
    title: 'Reconciliations & Historic Issues',
    items: [
      'Bank Reconciliations', 'Client Money Reconciliations', 'Balancing Differences',
      'Backlog Final Accounts', 'Historic Accounting Corrections',
    ],
  },
  {
   
    title: 'New Developments & Handover Support',
    items: [
      'Developer Handover Reviews', 'Opening Balance Reviews',
      'First-Year Service Charge Setup', 'Apportionment Reviews',
    ],
  },
  {
   
    title: 'Bookkeeping & Payroll Support',
    items: [
      'Service Charge Bookkeeping', 'Payroll Services',
      'Supplier & Creditor Reconciliations',
    ],
  },
  {
    
    title: 'Company Secretarial & Statutory Support',
    items: [
      'Appointment & Resignation of Directors',
      'Share Transfers Following Change of Flat Ownership',
      'Annual Confirmation Statement Filings',
      'Drafting Minutes of Meetings',
      'Assistance with Statutory Company Matters',
    ],
  },
];

// ─── SUB-COMPONENTS ──────────────────────────────────────────────────────────

const SectionTitle = ({ children }) => (
  <div className="flex items-center gap-3 mb-6">
   <div className="w-1 h-8 bg-[#C49A4A] rounded-full flex-shrink-0" />
    <h2 className="text-3xl xl:text-4xl md:text-4xl xl:text-5xl font-black text-[#0E6E4F]">{children}</h2>
  </div>
);

const Tag = ({ label }) => (
  <span className="bg-[#0E6E4F]/10 border border-[#0E6E4F]/20 text-[#0E6E4F] text-xs font-semibold px-4 py-2 rounded-full">
    {label}
  </span>
);

const ExpandItem = ({ label }) => (
  <div className="flex items-start gap-3 p-4 bg-white border border-[#D9DDDE] rounded-xl hover:border-[#0E6E4F] hover:bg-[#0E6E4F]/5 transition-all">

    <span className="text-[#0E6E4F] font-bold flex-shrink-0 mt-1">
      •
    </span>

    <span className="text-base md:text-lg xl:text-xl leading-8">
      {label}
    </span>

  </div>
);

const ExpandSubTitle = ({ children }) => (
  <h4 className="text-sm font-bold text-[#2D3436] mt-5 mb-3">{children}</h4>
);

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

const ServiceChargeAccounting = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white overflow-hidden text-[#2D3436] font-['Neogrotesk']">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
    <section
  className="relative overflow-hidden"
  style={{
    background:
      "linear-gradient(135deg,#fafaf8 0%,#ffffff 45%,#f8f8f5 100%)",
  }}
>
  <div className="grid lg:grid-cols-[56%_44%] min-h-[580px]">

    {/* LEFT CONTENT */}
    <div
      className="
        relative
        flex items-center
        px-8 sm:px-12 lg:px-16 xl:px-24
        py-14 lg:py-16
      "
    >

      {/* Soft luxury glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#C49A4A]/6 blur-[100px]" />

      <div className="relative z-20 max-w-[680px]">

        {/* Accent */}
        <div className="w-12 h-[3px] rounded-full bg-[#C49A4A] mb-6" />

        {/* Heading */}
        <h1
          className="
            text-[42px]
            sm:text-[52px]
            lg:text-[62px]
            xl:text-[72px]

            font-black
            tracking-[-0.04em]
            leading-[1.02]

            text-[#0B5D47]
          "
        >
          Service Charge
          <br />
          Accounting
        </h1>

        {/* Description */}
        <p
          className="
            mt-7

            text-[19px]
            lg:text-[22px]

            leading-[1.9]

            text-[#556063]

            max-w-[620px]
          "
        >
          Specialist service charge accountants providing
          independent examinations, audits, service charge
          accounts and financial reporting for residential,
          mixed-use and commercial properties throughout
          London and the UK.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 mt-10">

          <div
            className="
              px-5 py-4

              rounded-2xl

              bg-white/90

              border border-[#ECE7DE]

              shadow-[0_10px_30px_rgba(0,0,0,0.04)]
            "
          >
            <div className="text-[36px] font-black text-[#0B5D47] leading-none">
              <CountUp target={1995} />
            </div>

            <p className="mt-2 text-[18] text-[#6A7375]">
              Sector experience since
            </p>
          </div>

          <div
            className="
              px-5 py-4

              rounded-2xl

              bg-white/90

              border border-[#ECE7DE]

              shadow-[0_10px_30px_rgba(0,0,0,0.04)]
            "
          >
            <div className="text-[36px] font-black text-[#0B5D47] leading-none">
              <CountUp target={1000} suffix="+" />
            </div>

            <p className="mt-2 text-[18] text-[#6A7375]">
              Properties supported
            </p>
          </div>

          <div
            className="
              px-5 py-4

              rounded-2xl

              bg-white/90

              border border-[#ECE7DE]

              shadow-[0_10px_30px_rgba(0,0,0,0.04)]
            "
          >
            <div className="text-[36px] font-black text-[#0B5D47] leading-none">
              <CountUp target={100} suffix="+" />
            </div>

            <p className="mt-2 text-[18] text-[#6A7375]">
              Years combined experience
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12">

          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              gap-2
              text-[18]
              px-8
              py-4

              rounded-xl

              bg-[#0B5D47]

              text-white
              font-semibold

              shadow-xl
              shadow-[#0B5D47]/20

              hover:bg-[#094d3b]
              hover:-translate-y-1

              transition-all
              duration-300
            "
          >
            Book a Consultation
            <ChevronRight size={18} />
          </Link>

        </div>

      </div>

    </div>

    {/* VIDEO SIDE */}
    <div
      className="
        relative
        min-h-[420px]
        lg:min-h-full

        -ml-12

        overflow-hidden
      "
    >


      {/* VIDEO */}
      <video
        src={serviceChargeVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          absolute
          inset-0

          w-full
          h-full

          object-cover

          scale-[1.01]
        "
        
      />
{/* <div
  className="
    relative
    min-h-[420px]
    lg:min-h-full
    -ml-12
    overflow-hidden
  "
></div> */}
      {/* SOFT BLEND INTO CONTENT */}
      {/* <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to right,
              rgba(250,250,248,1) 0%,
              rgba(250,250,248,0.75) 8%,
              rgba(250,250,248,0.35) 15%,
              rgba(250,250,248,0.08) 22%,
              transparent 30%
            )
          `,
        }}
      /> */}
    

      {/* LIGHT DEPTH OVERLAY */}
      {/* <div
        className="
          absolute
          inset-0
          z-[5]

          bg-gradient-to-t
          from-black/[0.08]
          via-transparent
          to-transparent
        "
      /> */}

      {/* TRUST CARD */}
      <div
        className="
          absolute

          bottom-10
          right-10

          z-20

          max-w-[320px]

          bg-white/90
          backdrop-blur-lg

          border border-white/60

          rounded-3xl

          px-6
          py-5

          shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        "
      >

        <div className="w-8 h-[2px] bg-[#C49A4A] mb-3" />

        <p
          className="
            text-[#2D3436]

            text-[18]
            leading-7

            font-medium
          "
        >
          Trusted by managing agents,
          RTMs, RMCs, freehold companies
          and self-managed developments
          throughout the UK.
        </p>

      </div>

    </div>

  </div>
</section>

      {/* ── INTRO ────────────────────────────────────────────────────────── */}

 <section className="relative py-8 lg:py-12 overflow-hidden bg-[#FAFAF8] border-b border-[#E7E2D8]">

{/* Premium Background Glow */}

  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C49A4A]/8 blur-[160px]" />

  <div className="relative max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">


{/* Accent Line */}
<div className="w-16 h-[3px] rounded-full bg-[#C49A4A] mb-8" />

{/* Main Heading */}
<h2
  className="
    w-full

    text-[24px]
    sm:text-[28px]
    lg:text-[32px]
    xl:text-[36px]

    font-medium

    leading-[1.45]

    tracking-[-0.015em]

    text-[#2D3436]

    text-justify
  "
 
>
  LPS Livingstone provides specialist service charge accounting,
  independent examinations, audits, reports of factual findings and
  financial reporting services for residential, mixed-use and
  commercial properties throughout the United Kingdom.
</h2>

{/* Supporting Content */}
<div className="mt-10">

  <p
    className="
      w-full

      text-[18px]
      lg:text-[22px]

      leading-[1.9]

      text-[#5F6B6D]

      text-justify
    "
  >
    With sector experience dating back to
    <span className="font-semibold text-[#0B5D47]"> 1995</span>
    {" "}and
    <span className="font-semibold text-[#0B5D47]">
      {" "}over 100 years of combined team experience
    </span>,
    we support managing agents, RTM companies, resident management
    companies, freehold companies and self-managed developments across
    more than
    <span className="font-semibold text-[#0B5D47]">
      {" "}1,000 properties
    </span>
    throughout the United Kingdom.
  </p>

</div>

{/* CTA */}
<div className="mt-14">

  <Link
    to="/contact"
    className="
      inline-flex
      items-center
      gap-3

      px-8
      py-4

      rounded-xl

      bg-[#0B5D47]
      text-white

      font-semibold
      text-[18]
      shadow-xl
      shadow-[#0B5D47]/20

      hover:bg-[#094d3b]
      hover:-translate-y-1

      transition-all duration-300
    "
  >
    Book a Consultation
    <ChevronRight size={18} />
  </Link>

</div>

  </div>

</section>




<section className="relative py-0 lg:py-2 overflow-hidden bg-[#F7F7F4] border-y border-[#D9DDDE]">

  {/* Ambient glows */}
  <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
    style={{ background: "radial-gradient(circle, rgba(200,161,90,0.07) 0%, transparent 70%)" }} />
  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
    style={{ background: "radial-gradient(circle, rgba(15,107,75,0.05) 0%, transparent 70%)" }} />

<div className="relative max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-10">
    {/* ── Heading ── */}
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-3 mb-5">
        <div className="w-8 h-px bg-[#C8A15A]" />
        <span className="text-[13px] uppercase tracking-[0.25em] font-semibold text-[#B58B3C]">
          Sector Experience
        </span>
        <div className="w-8 h-px bg-[#C8A15A]" />
      </div>
      <h2
        className="text-[30px] md:text-[40px] lg:text-[46px] font-medium tracking-[-0.02em] text-[#0F6B4B]"
        
      >
        Who We Work With
      </h2>
      <p className="mt-4 text-[#5F6B6D] text-[20px] max-w-2xl mx-auto">
        We work with a diverse range of organisations and properties across the UK.
      </p>
    </div>

    {/* ── Card Grid ── */}
  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch"> 
      {/* ── CARD 1: Client Types ── */}
      <div
        className="
          group
          relative
          rounded-[20px]
          p-7
          flex
          flex-col
          h-full
          transition-all
          duration-500
          hover:-translate-y-1
        "
        style={{
          background: "#FFFFFF",
          border: "1px solid #C8A15A",
          boxShadow: "0 2px 16px rgba(15,107,75,0.05)",
        }}
      >
        <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-[#0F6B4B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div
          className="
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            mx-auto
            mb-6
            shrink-0
          "
          style={{
            background: "#EBF3EF",
            border: "1px solid rgba(15,107,75,0.15)",
          }}
        >
          <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
            <circle cx="9" cy="8" r="3" stroke="#0F6B4B" strokeWidth="1.7"/>
            <circle cx="16" cy="8" r="3" stroke="#0F6B4B" strokeWidth="1.7"/>
            <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" stroke="#0F6B4B" strokeWidth="1.7" strokeLinecap="round"/>
            <path d="M17 15c1.5 0 3.5 1 3.8 5" stroke="#0F6B4B" strokeWidth="1.7" strokeLinecap="round"/>
          </svg>
        </div>

        <h3 className="text-[25px] font-semibold text-[#2F3437] text-center mb-1">
          Client Types
        </h3>
        <p className="text-[15px] text-[#B58B3C] mb-5 uppercase tracking-[0.18em] font-medium text-center">
          Who we serve
        </p>

        <div className="w-full h-px bg-[#D9DDDE] mb-5" />

        <div className="flex-grow">
          <ul className="space-y-3">
            {[
              "Managing Agents",
              "RTM Companies",
              "Resident Management Companies",
              "Freehold Companies",
              "Self-Managed Blocks",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[18px] text-[#5F6B6D]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A15A] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── CARD 2: Property Types ── */}
      <div
        className="
          group
          relative
          rounded-[20px]
          p-7
          flex
          flex-col
          h-full
          transition-all
          duration-500
          hover:-translate-y-1
        "
        style={{
          background: "#FFFFFF",
          border: "1px solid #C8A15A",
          boxShadow: "0 2px 16px rgba(15,107,75,0.05)",
        }}
      >
        <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-[#0F6B4B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div
          className="
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            mx-auto
            mb-6
            shrink-0
          "
          style={{
            background: "#EBF3EF",
            border: "1px solid rgba(15,107,75,0.15)",
          }}
        >
          <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
            <path d="M3 21h18M5 21V8.5l7-5 7 5V21" stroke="#0F6B4B" strokeWidth="1.7" strokeLinejoin="round"/>
            <rect x="9" y="14" width="6" height="7" rx="0.8" stroke="#0F6B4B" strokeWidth="1.5"/>
            <rect x="7" y="10" width="3" height="2.5" rx="0.5" stroke="#0F6B4B" strokeWidth="1.3"/>
            <rect x="14" y="10" width="3" height="2.5" rx="0.5" stroke="#0F6B4B" strokeWidth="1.3"/>
          </svg>
        </div>

        <h3 className="text-[25px] font-semibold text-[#2F3437] text-center mb-1">
          Property Types
        </h3>
        <p className="text-[15px] text-[#B58B3C] mb-5 uppercase tracking-[0.18em] font-medium text-center">
          What we cover
        </p>

        <div className="w-full h-px bg-[#D9DDDE] mb-5" />

        <div className="flex-grow">
          <ul className="space-y-3">
            {[
              "Residential Blocks",
              "Mixed-Use Developments",
              "Commercial Properties",
              "Large Multi-Schedule Estates",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[18px] text-[#5F6B6D]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A15A] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── CARD 3: Scale & Complexity ── */}
      <div
        className="
          group
          relative
          rounded-[20px]
          p-7
          flex
          flex-col
          h-full
          transition-all
          duration-500
          hover:-translate-y-1
        "
        style={{
          background: "#FFFFFF",
          border: "1px solid #C8A15A",
          boxShadow: "0 2px 16px rgba(15,107,75,0.05)",
        }}
      >
        <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-[#0F6B4B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div
          className="
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            mx-auto
            mb-6
            shrink-0
          "
          style={{
            background: "#EBF3EF",
            border: "1px solid rgba(15,107,75,0.15)",
          }}
        >
          <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
            <path d="M3 3v18h18" stroke="#0F6B4B" strokeWidth="1.7" strokeLinecap="round"/>
            <path d="M7 16l4-4.5 4 2.5 4.5-6" stroke="#0F6B4B" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h3 className="text-[25px] font-semibold text-[#2F3437] text-center mb-1">
          Scale & Complexity
        </h3>
        <p className="text-[15px] text-[#B58B3C] mb-5 uppercase tracking-[0.18em] font-medium text-center">
          Our range
        </p>

        <div className="w-full h-px bg-[#D9DDDE] mb-5" />

        <div className="flex-grow">
          <ul className="space-y-3">
            {[
              "Single-schedule schemes",
              "Multi-schedule estates",
              "Resident-managed blocks",
              "Mixed-use properties",
              "Commercial portfolios",
              "Complex estate structures",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[18px] text-[#5F6B6D]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A15A] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── CARD 4: Our Experience ── */}
      <div
        className="
          group
          relative
          rounded-[20px]
          p-7
          flex
          flex-col
          h-full
          transition-all
          duration-500
          hover:-translate-y-1
        "
        style={{
          background: "#FFFFFF",
          border: "1px solid #C8A15A",
          boxShadow: "0 2px 16px rgba(15,107,75,0.05)",
        }}
      >
        <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-[#0F6B4B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div
          className="
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            mx-auto
            mb-6
            shrink-0
          "
          style={{
            background: "#EBF3EF",
            border: "1px solid rgba(15,107,75,0.15)",
          }}
        >
          <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
            <path
              d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z"
              stroke="#0F6B4B" strokeWidth="1.7" strokeLinejoin="round"
            />
            <path d="M9 12l2 2 4-4" stroke="#0F6B4B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h3 className="text-[25px] font-semibold text-[#2F3437] text-center mb-1">
          Our Experience
        </h3>
        <p className="text-[15px] text-[#B58B3C] mb-5 uppercase tracking-[0.18em] font-medium text-center">
          Depth of expertise
        </p>

        <div className="w-full h-px bg-[#D9DDDE] mb-5" />

        <div className="flex-grow">
          <p className="text-[18px] text-[#5F6B6D] leading-7">
            Our experience ranges from small blocks of three flats through to large
            residential, commercial and mixed-use estates comprising several hundred
            units and multiple service charge schedules.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

{/* ── SERVICES ───────────────────────────────────────────────────── */}
<section className="bg-white px-4 sm:px-6 lg:px-10 py-10">
  <div className="max-w-[1900px] mx-auto">

    {/* Heading */}
    <div className="text-center mb-8">
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E6E4F]/8 text-[#0E6E4F] text-[13px] font-semibold tracking-[0.15em] uppercase">
        Our Expertise
      </span>

      <h2 className="mt-6 text-[30px] md:text-5xl font-light text-[#1A1A1A] leading-tight">
        Comprehensive Service Charge
        <span className="block  text-[30px] text-[#0E6E4F] font-medium mt-2">
          Accounting & Compliance Solutions
        </span>
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-[20px] text-[#5F6B6D] leading-8">
        Supporting managing agents, RTMs, RMCs, freehold companies and
        self-managed developments with specialist accounting,
        compliance and reporting services.
      </p>
    </div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* CARD 1 */}
      <details className="group bg-white rounded-3xl border border-[#E7E2D8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<summary className="list-none cursor-pointer p-8 h-[490px] flex flex-col">          
<div
  className="
    w-20
    h-20
    rounded-3xl
    flex
    items-center
    justify-center
    mb-7
    mx-auto
    shrink-0
  "
  style={{
    background: "#EBF3EF",
    border: "1px solid rgba(15,107,75,0.15)",
  }}
>    <FileText className="w-11 h-11 text-[#0E6E4F]" />
          </div>

          <h3 className="text-3xl text-center font-semibold text-[#1A1A1A] mb-4">
            Accounting & Reporting
          </h3>

          <ul className="space-y-3 text-[19px] leading-8 font-medium text-[#5F6B6D] flex-grow">
            <li>• Service Charge Accounts</li>
            <li>• Independent Examinations</li>
            <li>• Service Charge Audits</li>
            <li>• Reports of Factual Findings</li>
            <li>• Section 21 Reporting</li>
          </ul>

          <div className="mt-6 text-[#C49A4A] font-medium text-[20px]">
            View Services →
          </div>
        </summary>

        <div className="px-7 pb-7 border-t border-[#F0ECE4]">
<ul className="space-y-3 text-[19px] leading-8 font-medium text-[#5F6B6D] pt-5">       
            <li>• Year-End Surplus & Deficit Apportionment</li>
            <li>• Section 20 Major Works Reconciliations</li>
            <li>• Reserve Fund Reconciliations</li>
            <li>• Sinking Fund Analysis</li>
            <li>• Designated Fund Reporting</li>
          </ul>
        </div>
      </details>

      {/* CARD 2 */}
      <details className="group bg-white rounded-3xl border border-[#E7E2D8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<summary className="list-none cursor-pointer p-8 h-[490px] flex flex-col">
<div
  className="
    w-20
    h-20
    rounded-3xl
    flex
    items-center
    justify-center
    mb-7
    mx-auto
    shrink-0
  "
  style={{
    background: "#EBF3EF",
    border: "1px solid rgba(15,107,75,0.15)",
  }}
>  <Building2 className="w-11 h-11 text-[#0E6E4F]" />
          </div>

          <h3 className="text-3xl text-center font-semibold text-[#1A1A1A] mb-4">
            Tax & Company Services
          </h3>

<ul className="space-y-3 text-[19px] leading-8 font-medium text-[#5F6B6D] flex-grow">            <li>• Dormant Company Accounts</li>
            <li>• Freehold Company Accounts</li>
            <li>• Ground Rent Reporting</li>
            <li>• Corporation Tax Returns</li>
            <li>• VAT Advice</li>
          </ul>

          <div className="mt-6 text-[#C49A4A] font-medium text-[20px]">
            View Services →
          </div>
        </summary>

        <div className="px-7 pb-7 border-t border-[#F0ECE4]">
<ul className="space-y-3 text-[19px] leading-8 font-medium text-[#5F6B6D] pt-5">            <li>• Capital Gains Tax Computations</li>
            <li>• Trust Tax Registration</li>
            <li>• HMRC Filing Support</li>
          </ul>
        </div>
      </details>

      {/* CARD 3 */}
      <details className="group bg-white rounded-3xl border border-[#E7E2D8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<summary className="list-none cursor-pointer p-8 h-[490px] flex flex-col">
<div
  className="
    w-20
    h-20
    rounded-3xl
    flex
    items-center
    justify-center
    mb-7
    mx-auto
    shrink-0
  "
  style={{
    background: "#EBF3EF",
    border: "1px solid rgba(15,107,75,0.15)",
  }}
>      <RefreshCcw className="w-11 h-11 text-[#0E6E4F]" />
          </div>

          <h3 className="text-3xl text-center font-semibold text-[#1A1A1A] mb-4">
            Reconciliations & Historic Issues
          </h3>

<ul className="space-y-3 text-[19px] leading-8 font-medium text-[#5F6B6D] flex-grow">            <li>• Bank Reconciliations</li>
            <li>• Client Money Reconciliations</li>
            <li>• Balancing Differences</li>
            <li>• Historic Corrections</li>
            <li>• Backlog Accounts</li>
          </ul>

          <div className="mt-6 text-[#C49A4A] font-medium text-[20px]">
            View Services →
          </div>
        </summary>
      </details>

      {/* CARD 4 */}
      <details className="group bg-white rounded-3xl border border-[#E7E2D8] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
<summary className="list-none cursor-pointer p-8 h-[490px] flex flex-col">
<div
  className="
    w-20
    h-20
    rounded-3xl
    flex
    items-center
    justify-center
    mb-7
    mx-auto
    shrink-0
  "
  style={{
    background: "#EBF3EF",
    border: "1px solid rgba(15,107,75,0.15)",
  }}
>  <BriefcaseBusiness className="w-11 h-11 text-[#0E6E4F]"/>
          </div>

          <h3 className="text-3xl text-center font-semibold text-[#1A1A1A] mb-4">
            Additional Support
          </h3>

<ul className="space-y-3 text-[19px] leading-8 font-medium text-[#5F6B6D] flex-grow">            <li>• Managing Agent Handovers</li>
            <li>• Developer Handovers</li>
            <li>• Opening Balance Reviews</li>
            <li>• First-Year Set-Up</li>
            <li>• Multi-Schedule Estates</li>
          </ul>

          <div className="mt-6 text-[#C49A4A] font-medium text-[20px]">
            View Services →
          </div>
        </summary>

        <div className="px-7 pb-7 border-t border-[#F0ECE4]">
<ul className="space-y-3 text-[19px] leading-8 font-medium text-[#5F6B6D] pt-5">            <li>• Portfolio Accounting Support</li>
            <li>• Urgent Flat Sale Requirements</li>
          </ul>
        </div>
      </details>

    </div>
  </div>
</section>

{/* ── ADDITIONAL SUPPORT FOR MANAGING AGENTS ───────────────────────── */}
<section
  className="relative overflow-hidden"
  style={{
    background:
      "linear-gradient(135deg, #003D2D 0%, #00543F 45%, #003D2D 100%)",
  }}
>
  {/* Luxury Glow */}
  <div className="absolute inset-0">
    <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-[#C49A4A]/10 blur-[120px]" />
    <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#0E6E4F]/20 blur-[120px]" />
  </div>

<div className="relative max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-10 py-10">
    <div className="grid lg:grid-cols-[420px_1fr] gap-12 items-center">

      {/* LEFT CONTENT */}
      <div className="flex gap-5">

        <div
          className="
           w-20 h-20
            rounded-full
            bg-[#DDE9C8]
            flex items-center justify-center
            flex-shrink-0
          "
        >
          <Users className="w-8 h-8 text-[#0B5D47]" />
        </div>

        <div>

          <h2
            className="
              text-white
              text-4xl
              lg:text-4xl
              font-semibold
              leading-tight
              mb-4
            "
            
          >
            Additional Support for
            <br />
            Managing Agents
          </h2>

          <p
            className="
              text-white/90
              text-[20px]
              leading-7
              max-w-md
            "
          >
            Alongside our core accounting and reporting services,
            we provide practical support to managing agents dealing
            with portfolio changes, operational challenges and
            complex service charge arrangements.
          </p>

        </div>

      </div>

      {/* RIGHT SERVICES GRID */}
      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-x-10
          gap-y-8
          lg:pl-12
          lg:border-l
          border-white/15
        "
      >

        <div className="text-center">
          <Handshake className="w-12 h-12 text-[#DDE9C8] mx-auto mb-3" />
          <p className="text-white text-[19px] leading-5">
            Managing Agent
            <br />
            Handovers
          </p>
        </div>

        <div className="text-center">
          <Building2 className="w-12 h-12 text-[#DDE9C8] mx-auto mb-3" />
          <p className="text-white text-[19px] leading-5">
            Developer
            <br />
            Handovers
          </p>
        </div>

        <div className="text-center">
          <ClipboardCheck className="w-12 h-12 text-[#DDE9C8] mx-auto mb-3" />
          <p className="text-white text-[19px] leading-5">
            Opening Balance
            <br />
            Reviews
          </p>
        </div>

        <div className="text-center">
          <FileSearch className="w-12 h-12 text-[#DDE9C8] mx-auto mb-3" />
          <p className="text-white text-[19px] leading-5">
            First-Year Service
            <br />
            Charge Set-Up
          </p>
        </div>

        <div className="text-center">
          <Layers3 className="w-12 h-12 text-[#DDE9C8] mx-auto mb-3" />
          <p className="text-white text-[19px] leading-5">
            Multi-Schedule
            <br />
            Estates
          </p>
        </div>

        <div className="text-center">
          <PieChart className="w-12 h-12 text-[#DDE9C8] mx-auto mb-3" />
          <p className="text-white text-[19px] leading-5">
            Portfolio Accounting
            <br />
            Support
          </p>
        </div>

        <div className="text-center">
          <FileSearch className="w-12 h-12 text-[#DDE9C8] mx-auto mb-3" />
          <p className="text-white text-[19px] leading-5">
            Urgent Flat Sale
            <br />
            Requirements
          </p>
        </div>

      </div>

    </div>

  </div>
</section>
      {/* ── WHY US ───────────────────────────────────────────────────────── */}
    {/* ── WHY CLIENTS WORK WITH US ───────────────────────────────────── */}
<section className="py-10 bg-white border-b border-[#E7E2D8]">

<div className="max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-10">
    {/* Heading */}
    <div className="text-center mb-8">

      <h2
        className="
          text-[36px]
          md:text-[42px]
          font-medium
          text-[#0B5D47]
        "
       
      >
        Why Clients Work With Us
      </h2>

    </div>

    {/* Feature Grid */}
<div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 gap-2 w-full">
      {[
        {
          icon: CalendarDays,
          text: "Sector experience dating back to 1995",
        },
        {
          icon: Users,
          text: "Over 100 years of combined team experience",
        },
        {
          icon: Building2,
          text: "Experience across more than 1,000 properties",
        },
        {
          icon: House,
          text: "Experience with blocks ranging from 3 flats to several hundred units",
        },
        {
          icon: ListChecks,
          text: "Experience with single-schedule and complex multi-schedule estates",
        },
        {
          icon: UserRound,
          text: "Partner-led and responsive service",
        },
        {
          icon: Clock3,
          text: "Flexible turnaround for urgent deadlines",
        },
        {
          icon: Laptop,
          text: "Familiarity with leading property management systems",
        },
      ].map((item, i) => {
        const Icon = item.icon;

        return (
          <div
            key={i}
            className="
              relative
              text-center
              px-3
              py-6
            "
          >

            {/* Divider */}
            {i !== 0 && (
              <div
                className="
                  hidden xl:block
                  absolute
                  left-0
                  top-8
                  bottom-8
                  w-px
                  bg-[#C8A15A]
                "
              />
            )}

            {/* Icon */}
            <div
              className="
               w-22 h-22
                mx-auto mb-5

                rounded-full

                bg-[#EEF5E8]

                flex items-center justify-center
              "
            >
              <Icon
                size={38}
                className="text-[#0B5D47]"
                strokeWidth={1.8}
              />
            </div>

            {/* Text */}
            <p
              className="
               text-[19px]
leading-8
font-medium
                text-[#5F6B6D]
              "
            >
              {item.text}
            </p>

          </div>
        );
      })}

    </div>

  </div>

</section>

{/* ── REGULATORY & PROFESSIONAL FRAMEWORK + FAQ ───────────────────── */}
<section className="py-16 bg-[#FAFAF8] border-b border-[#E7E2D8]">

  <div className="max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-20">

      {/* LEFT COLUMN */}
      <div>

        <div className="w-12 h-[3px] bg-[#C49A4A] rounded-full mb-6" />

        <h2
          className="
            text-[36px]
            md:text-[42px]
            font-medium
            text-[#0B5D47]
            leading-tight
            mb-6
          "
         
        >
          Regulatory &amp; Professional Framework
        </h2>

        <p
          className="
            text-[#5F6B6D]
            text-[22px]
leading-9
            mb-10
          "
        >
          Our work is performed with reference to relevant legislation,
          professional guidance and industry standards, including:
        </p>

        <div className="space-y-5">

          {[
            "Landlord & Tenant legislation",
            "Leasehold and Freehold Reform legislation",
            "ICAEW TECH 03/11 and TECH 09/14 guidance",
            "RICS Professional Standards",
            "Building Safety legislation",
            "Statutory trust and client money requirements",
            "Companies Act and UK Accounting Standards",
            "HMRC trust and taxation guidance",
            "Relevant tribunal decisions and case law developments",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4"
            >
              <div
                className="
                  w-7 h-7
                  rounded-full
                  bg-[#EEF5E8]

                  flex items-center justify-center
                  flex-shrink-0
                  mt-0.5
                "
              >
                <span className="text-[#C8A15A] text-xs font-bold">
                  ✓
                </span>
              </div>

              <span
                className="text-[20px] text-[#5F6B6D] leading-8">
              
                {item}
              </span>
            </div>
          ))}

        </div>

      </div>

      {/* RIGHT COLUMN */}
      <div className="lg:border-l border-[#E3E3E3] lg:pl-16">

        <div className="w-12 h-[3px] bg-[#C49A4A] rounded-full mb-6" />

        <h2
          className="
            text-[36px]
            md:text-[42px]
            font-medium
            text-[#0B5D47]
            leading-tight
            mb-10
          "
          
        >
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-[#E5E5E5]">

          {/* FAQ 1 */}
          <details className="group py-6">

            <summary
              className="
                flex
                justify-between
                items-start
                cursor-pointer
                list-none
                gap-6
              "
            >
              <span
                className="
                  text-[#2D3436]
                 font-semibold
text-[20px]
leading-8
                "
              >
                Do we require a service charge audit or an independent examination?
              </span>

              <span
                className="
                  text-[#C8A15A]
                  text-2xl
                  font-light
                  transition-transform
                  duration-300
                  group-open:rotate-45
                "
              >
                +
              </span>
            </summary>

            <p
              className="
                mt-5
                text-[20px]
text-[#5F6B6D]
leading-9
                pr-8
              "
            >
              The answer depends on the lease, governing documents and reporting requirements applicable to the property.
            </p>

          </details>

          {/* FAQ 2 */}
          <details className="group py-6">

            <summary
              className="
                flex
                justify-between
                items-start
                cursor-pointer
                list-none
                gap-6
              "
            >
              <span
                className="
                  text-[#2D3436]
                  font-semibold
text-[20px]
leading-8
                "
              >
                Can you assist with backlog service charge accounts?
              </span>

              <span
                className="
                  text-[#C8A15A]
                  text-2xl
                  font-light
                  transition-transform
                  duration-300
                  group-open:rotate-45
                "
              >
                +
              </span>
            </summary>

            <p
              className="
                mt-5
               text-[20px]
text-[#5F6B6D]
leading-9
                pr-8
              "
            >
              Yes. We regularly assist clients with overdue accounts, historic accounting issues and balancing differences.
            </p>

          </details>

          {/* FAQ 3 */}
          <details className="group py-6">

            <summary
              className="
                flex
                justify-between
                items-start
                cursor-pointer
                list-none
                gap-6
              "
            >
              <span
                className="
                  text-[#2D3436]
                  font-semibold
text-[20px]
leading-8
                "
              >
                Can you review reserve funds and sinking funds?
              </span>

              <span
                className="
                  text-[#C8A15A]
                  text-2xl
                  font-light
                  transition-transform
                  duration-300
                  group-open:rotate-45
                "
              >
                +
              </span>
            </summary>

            <p
              className="
                mt-5
                text-[20px]
text-[#5F6B6D]
leading-9
                pr-8
              "
            >
              Yes. We regularly assist with reserve fund reconciliations, designated fund analysis and historic fund reviews.
            </p>

          </details>

          {/* FAQ 4 */}
          <details className="group py-6">

            <summary
              className="
                flex
                justify-between
                items-start
                cursor-pointer
                list-none
                gap-6
              "
            >
              <span
                className="
                  text-[#2D3436]
                 font-semibold
text-[20px]
leading-8
                "
              >
                Do you work with self-managed blocks?
              </span>

              <span
                className="
                  text-[#C8A15A]
                  text-2xl
                  font-light
                  transition-transform
                  duration-300
                  group-open:rotate-45
                "
              >
                +
              </span>
            </summary>

            <p
              className="
                mt-5
               text-[20px]
text-[#5F6B6D]
leading-9
                pr-8
              "
            >
              Yes. We support RTMs, RMCs, freehold companies and resident-managed properties throughout the UK.
            </p>

          </details>

          {/* FAQ 5 */}
          <details className="group py-6">

            <summary
              className="
                flex
                justify-between
                items-start
                cursor-pointer
                list-none
                gap-6
              "
            >
              <span
                className="
                  text-[#2D3436]
                  font-semibold
text-[20px]
leading-8
                "
              >
                Can you assist when a new managing agent takes over?
              </span>

              <span
                className="
                  text-[#C8A15A]
                  text-2xl
                  font-light
                  transition-transform
                  duration-300
                  group-open:rotate-45
                "
              >
                +
              </span>
            </summary>

            <p
              className="
                mt-5
               text-[20px]
text-[#5F6B6D]
leading-9
                pr-8
              "
            >
              Yes. We regularly assist with managing agent handovers, opening balance reviews and developer handovers.
            </p>

          </details>

          {/* FAQ 6 */}
          <details className="group py-6">

            <summary
              className="
                flex
                justify-between
                items-start
                cursor-pointer
                list-none
                gap-6
              "
            >
              <span
                className="
                  text-[#2D3436]
                 font-semibold
text-[20px]
leading-8
                "
              >
                Do you work with commercial and mixed-use properties?
              </span>

              <span
                className="
                  text-[#C8A15A]
                  text-2xl
                  font-light
                  transition-transform
                  duration-300
                  group-open:rotate-45
                "
              >
                +
              </span>
            </summary>

            <p
              className="
                mt-5
                text-[20px]
text-[#5F6B6D]
leading-9
                pr-8
              "
            >
              Yes. Our experience includes residential, mixed-use and commercial properties of varying sizes and complexity.
            </p>

          </details>

          {/* FAQ 7 */}
          <details className="group py-6">

            <summary
              className="
                flex
                justify-between
                items-start
                cursor-pointer
                list-none
                gap-6
              "
            >
              <span
                className="
                  text-[#2D3436]
                 font-semibold
text-[20px]
leading-8
                "
              >
                Do you work outside London?
              </span>

              <span
                className="
                  text-[#C8A15A]
                  text-2xl
                  font-light
                  transition-transform
                  duration-300
                  group-open:rotate-45
                "
              >
                +
              </span>
            </summary>

            <p
              className="
                mt-5
               text-[20px]
text-[#5F6B6D]
leading-9
                pr-8
              "
            >
              Yes. We support clients throughout London and across the UK.
            </p>

          </details>

        </div>

      </div>

    </div>

  </div>

</section>

     
   

    

    </div>
  );
};

export default ServiceChargeAccounting;