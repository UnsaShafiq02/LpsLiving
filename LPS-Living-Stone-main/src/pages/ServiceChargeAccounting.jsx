// import React from 'react';
// import { motion } from 'framer-motion';
// import { CheckCircle2 } from 'lucide-react';

// import img from '../assets/flat.png';

// const services = [
//   'Preparation & certification of service charge accounts',
//   'Financial statements for RMCs & RTMCos',
//   'Corporation tax services',
//   'Statutory & company secretarial services',
//   'Trust tax returns',
//   'Registered office & mail forwarding',
//   'Accounting system implementation',
//   'Assistance in management handovers',
//   'Training for in-house accountants/bookkeepers',
//   'Lease-based service charge advisory',
// ];

// const ServiceChargeAccounting = () => {
//   return (
//     <div className="bg-white overflow-hidden">

//       {/* ================= HERO ================= */}
//       <section className="relative py-28 overflow-hidden bg-white">

//         <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#F9FAFB]" />

//         {/* soft glow */}
//         <div className="absolute -top-40 left-[-120px] w-[520px] h-[520px] bg-[#0D6E4F]/5 blur-3xl rounded-full" />
//         <div className="absolute bottom-[-180px] right-[-120px] w-[520px] h-[520px] bg-[#0D2040]/5 blur-3xl rounded-full" />

//         <div className="relative max-w-5xl mx-auto px-6 text-center">

//           <h1 className="text-4xl md:text-6xl font-black leading-tight text-[#0D2040]">
//             Service Charge Accounting
//           </h1>

//           <p className="mt-6 text-[#0D6E4F] text-lg md:text-xl leading-8 max-w-3xl mx-auto">
//             Leading specialists in service charge accounting for residential and
//             commercial properties across London and the UK.
//           </p>

//         </div>
//       </section>

//       {/* ================= INTRO ================= */}
//       <section className="py-14 bg-white">

//         <div className="max-w-5xl mx-auto px-6 text-[#0D2040] text-base leading-8">

//           <p>
//             We are recognised specialists in service charge accounting, supporting
//             residential and commercial property portfolios — from small self-managed
//             blocks to large managing agents.
//           </p>

//           <p className="mt-5 text-[#0D6E4F] font-medium">
//             We currently support over <b className="text-[#0D2040]">600+ service charge clients</b>
//             nationwide with accuracy, compliance, and transparent reporting.
//           </p>

//         </div>
//       </section>

//       {/* ================= IMAGE + SERVICES ================= */}
//       <section className="py-20 md:py-28 bg-white">

//         <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

//           {/* IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <img
//               src={img}
//               alt="Service charge accounting illustration"
//               className="rounded-3xl shadow-lg w-full object-cover h-[440px]"
//             />
//           </motion.div>

//           {/* SERVICES */}
//           <motion.div
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >

//             <h2 className="text-3xl md:text-4xl font-black text-[#0D2040]">
//               Complete Service Charge Solutions
//             </h2>

//             <p className="mt-4 text-[#0D6E4F] leading-7">
//               End-to-end accounting solutions designed for landlords, managing agents,
//               and property professionals.
//             </p>

//             <div className="mt-8 space-y-4">

//               {services.map((item, i) => (
//                 <div
//                   key={i}
//                   className="
//                     flex items-start gap-3
//                     bg-white
//                     border border-[#E5E7EB]
//                     p-5 rounded-2xl
//                     hover:bg-[#0D6E4F]/5
//                     hover:border-[#0D6E4F]
//                     hover:shadow-md
//                     transition-all duration-300
//                     cursor-pointer
//                   "
//                 >
//                   <CheckCircle2 className="text-[#0D6E4F] mt-1" size={18} />

//                   <span className="text-[#0D2040] text-base leading-7 font-medium group-hover:text-[#0D6E4F]">
//                     {item}
//                   </span>

//                 </div>
//               ))}

//             </div>

//           </motion.div>

//         </div>
//       </section>

//       {/* ================= GUIDANCE ================= */}
//       <section className="py-20 bg-white border-t border-[#E5E7EB]">

//         <div className="max-w-5xl mx-auto px-6 space-y-12 text-[#0D2040] text-base leading-8">

//           <div>
//             <h3 className="text-2xl font-black text-[#0D2040] mb-3">
//               Guidance & Standards
//             </h3>
//             <p className="text-[#0D6E4F]">
//               Accounting and reporting is prepared in line with industry standards issued by
//               ACCA, ICAEW, ICAS, ARMA, and RICS.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-2xl font-black text-[#0D2040] mb-3">
//               Legal Framework
//             </h3>
//             <ul className="list-disc pl-6 space-y-2 text-[#0D2040]">
//               <li className="hover:text-[#0D6E4F] transition">Landlord and Tenant Act 1985</li>
//               <li className="hover:text-[#0D6E4F] transition">Landlord and Tenant Act 1987</li>
//               <li className="hover:text-[#0D6E4F] transition">Commonhold and Leasehold Reform Act 2002</li>
//               <li className="hover:text-[#0D6E4F] transition">Service Charge Management Code (2009)</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-2xl font-black text-[#0D2040] mb-3">
//               Tribunal Support
//             </h3>
//             <p className="text-[#0D6E4F]">
//               We assist landlords and managing agents in interpreting tribunal decisions
//               and ensuring compliance with lease obligations.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="relative py-24 overflow-hidden bg-white">

//         <div className="absolute inset-0 bg-gradient-to-r from-[#0D2040] to-[#0D6E4F]" />

//         <div className="relative max-w-3xl mx-auto px-6 text-center text-white">

//           <h2 className="text-3xl md:text-5xl font-black">
//             Need Expert Service Charge Support?
//           </h2>

//           <p className="mt-6 text-white/80 text-lg leading-7">
//             Speak to our specialists for accurate, compliant and efficient reporting.
//           </p>

//           <button
//             className="
//               mt-10
//               px-10 py-4
//               rounded-2xl
//               bg-[#0D6E4F]
//               hover:bg-[#0b5c42]
//               font-bold
//               shadow-md
//               transition
//             "
//           >
//             Book Consultation
//           </button>

//         </div>
//       </section>

//     </div>
//   );
// };

// export default ServiceChargeAccounting;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronRight } from 'lucide-react';

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
    <div className="w-1 h-8 bg-[#0D6E4F] rounded-full flex-shrink-0" />
    <h2 className="text-2xl md:text-3xl font-black text-[#0D6E4F]">{children}</h2>
  </div>
);

const Tag = ({ label }) => (
  <span className="bg-[#0D6E4F]/10 border border-[#0D6E4F]/20 text-[#0D6E4F] text-xs font-semibold px-4 py-2 rounded-full">
    {label}
  </span>
);

const ExpandItem = ({ label }) => (
  <div className="flex items-start gap-3 p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#0D6E4F] hover:bg-[#0D6E4F]/5 transition-all">

    <span className="text-[#0D6E4F] font-bold flex-shrink-0 mt-1">
      •
    </span>

    <span className="text-[15px] md:text-base leading-8">
      {label}
    </span>

  </div>
);

const ExpandSubTitle = ({ children }) => (
  <h4 className="text-sm font-bold text-[#0D2040] mt-5 mb-3">{children}</h4>
);

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

const ServiceChargeAccounting = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white overflow-hidden text-[#0D2040] font-['Neogrotesk']">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0D2040 0%, #0D6E4F 100%)' }}>
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/5" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-white/5" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block bg-white/10 border border-white/25 text-white text-xs tracking-widest uppercase px-5 py-2 rounded-full mb-6 font-medium">
            Specialist Accountants Since 1995
          </div>

          <h1 className="font-black text-4xl md:text-6xl text-white leading-tight"
            style={{ fontFamily: 'Georgia, serif' }}>
            Service Charge Accounting
          </h1>

          <p className="mt-5 text-white/80 text-base md:text-lg leading-8 max-w-2xl mx-auto">
            Specialist service charge accounting, independent examinations, audits, and financial
            reporting for residential, mixed-use, and commercial developments across London and the UK.
          </p>

 <div className="mt-10 border-t border-white/20 pt-6 sm:pt-8">

  <div className="grid grid-cols-3 gap-2 sm:gap-0 text-center">

    {[
      { target: 1995, suffix: "", label: "Est. year" },
      { target: 1000, suffix: "+", label: "Properties" },
      { target: 100, suffix: "+", label: "Years combined experience" },
    ].map(({ target, suffix, label }, index) => (

      <div
        key={label}
        className={`
          px-2 sm:px-8
          ${index !== 2 ? "border-r border-white/20" : ""}
        `}
      >

        <div
          className="
            text-xl sm:text-3xl
            font-black
            text-white
            leading-tight
            break-words
          "
          
        >
          <CountUp
            target={target}
            suffix={suffix}
          />
        </div>

        <div
          className="
            mt-1
            text-[9px] sm:text-xs
            text-white/60
            uppercase
            tracking-wide sm:tracking-wider
            leading-4
            break-words
          "
        >
          {label}
        </div>

      </div>

    ))}

  </div>

</div>
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
   <section className="py-10 px-6 border-b border-[#E5E7EB]">

  <div className="max-w-5xl mx-auto">

    <h4
      className="
        text-lg sm:text-xl md:text-2xl lg:text-[30px]
        font-medium
        leading-[1.7]
        tracking-tight
        text-[#0D2040]
      "
    >

      LPS Livingstone provides specialist service charge accounting,
      independent examinations, audits, reports of factual findings,
      and financial reporting services for residential, mixed-use,
      and commercial developments across London and the UK.

      <br />
      <br />

      With sector experience dating back to 1995 and{" "}

      <span className="text-[#0D6E4F] font-semibold">
        over 100 years of combined team experience
      </span>

      , we support managing agents, RTMs, RMCs, freeholders,
      and self-managed developments across more than{" "}

      <span className="text-[#0D6E4F] font-semibold">
        1,000 properties
      </span>.

    </h4>

  </div>

</section>
      {/* ── WHY US ───────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Why Clients Work With Us</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {whyItems.map((item, i) => (
              <div key={i}
                className="flex items-start gap-3 p-4 bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl hover:bg-[#0D6E4F]/5 hover:border-[#0D6E4F] transition-all">
                <CheckCircle2 size={17} className="text-[#0D6E4F] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#374151] leading-6">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRACTICAL EXPERIENCE ─────────────────────────────────────────── */}
      <section className="py-14 px-6 border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Practical Industry Experience</SectionTitle>
          <p className="text-sm text-[#4B5563] leading-7 mb-5">
            Service charge accounting often involves more than preparing year-end accounts. We regularly assist with:
          </p>
          <div className="flex flex-wrap gap-2">
            {practicalItems.map((item, i) => <Tag key={i} label={item} />)}
          </div>
        </div>
      </section>

      {/* ── CLIENTS ──────────────────────────────────────────────────────── */}
 <section className="py-14 px-6 border-b border-[#E5E7EB]">

  <div className="max-w-6xl mx-auto">

    {/* DESKTOP — circle layout */}
    <div className="hidden md:flex justify-center">

      <div className="relative w-[700px] h-[700px]">

        {/* dashed ring */}
        <div
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2

            w-[540px] h-[540px]
            rounded-full

            border border-dashed
            border-[#0D6E4F]/25
          "
        />

        {/* center circle */}
        <div
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2

            w-[190px] h-[190px]
            rounded-full

            bg-[#0D6E4F]

            flex items-center justify-center
            text-center

            p-6
            z-10
          "
        >

          <p className="text-base font-semibold text-white leading-7 tracking-wide">
            Developments &amp; Clients We Support
          </p>

        </div>

        {/* outer cards */}
        {clientTypes.map((label, i) => {

          const angle =
            (i / clientTypes.length) * 2 * Math.PI - Math.PI / 2;

          const r = 270;

          const cx = 350;
          const cy = 350;

          const x = cx + r * Math.cos(angle);

          const y = cy + r * Math.sin(angle);

          return (

            <div
              key={i}

              className="
                absolute
                group

                flex items-center justify-center

                w-[170px]
                h-[54px]

                bg-[#0D2040]

                border border-[#1f3652]

                rounded-xl

                px-4

                text-center

                cursor-pointer

                hover:bg-[#0D6E4F]
                hover:border-[#0D6E4F]

                shadow-md
                hover:shadow-xl

                transition-all duration-300

                z-20
              "

              style={{
                left: x,
                top: y,
                transform: "translate(-50%, -50%)",
              }}
            >

              <span
                className="
                  text-[12px]
                  font-semibold
                  leading-tight

                  text-white

                  transition-colors
                "
              >
                {label}
              </span>

            </div>

          );

        })}

      </div>

    </div>

    {/* MOBILE VERSION */}
    <div className="md:hidden">

      <SectionTitle>
        Developments &amp; Clients We Support
      </SectionTitle>

      <div className="grid grid-cols-2 gap-3">

        {clientTypes.map((label, i) => (

          <div
            key={i}

            className="
              group

              flex items-center justify-center

              p-4

              bg-[#0D2040]

              border border-[#1f3652]

              rounded-xl

              hover:bg-[#0D6E4F]
              hover:border-[#0D6E4F]

              transition-all duration-300

              cursor-pointer

              text-center
            "
          >

            <span
              className="
                text-xs
                font-semibold

                text-white

                leading-tight
              "
            >
              {label}
            </span>

          </div>

        ))}

      </div>

    </div>

  </div>

</section>
      {/* ── REGULATORY ───────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-b border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Regulatory &amp; Professional Framework</SectionTitle>
          <ul className="divide-y divide-[#E5E7EB]">
            {regulatoryItems.map((item, i) => (
              <li key={i} className="flex items-center gap-3 py-3 text-sm text-[#374151]">
                <span className="text-[#0D6E4F] font-bold text-base w-4 flex-shrink-0">§</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WHO DO WE SUPPORT — CTA CARDS ────────────────────────────────── */}
    {/* ── WHO DO WE SUPPORT ───────────────────────────────────────────── */}
<section className="py-16 md:py-20 px-6 bg-gradient-to-b from-white to-[#f8fffe]">

  <div className="max-w-6xl mx-auto">

    {/* heading */}
    <div className="text-center mb-12">

      <div className="inline-flex items-center gap-2 mb-5">
        <div className="w-10 h-[2px] bg-[#0D6E4F]" />
        <span className="text-[11px] tracking-[0.25em] uppercase font-semibold text-[#0D6E4F]">
          Tailored Support
        </span>
        <div className="w-10 h-[2px] bg-[#0D6E4F]" />
      </div>

      <h2
        className="
          text-3xl md:text-5xl

          font-medium

          text-[#0D2040]

          leading-tight

          tracking-tight
        "
        style={{ fontFamily: 'Georgia, serif' }}
      >
        Explore Tailored Support
      </h2>

      <p
        className="
          mt-5

          max-w-3xl mx-auto

          text-[15px] md:text-lg

          leading-8

          text-[#0D2040]
        "
      >
        Specialist support tailored to managing agents,
        resident management companies, and self-managed
        developments across residential and mixed-use portfolios.
      </p>

    </div>

    {/* premium cards */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {[
        {
          title: "Managing Agents",

          desc:
            "Responsive and practical support for managing agents, portfolio operators, and property professionals.",

          path: "/managing-agents",

          gradient:
            "linear-gradient(135deg, #0D2040 0%, #17385d 100%)"

         
        },

        {
          title: "Self Managed",

          desc:
            "Clear and practical accounting support for RTMs, RMCs, and resident-led developments.",

          path: "/self-managed",

          gradient:
            "linear-gradient(135deg, #0D6E4F 0%, #0a5a3f 100%)"

         
        },

        {
          title: "FAQs",

          desc:
            "Answers to common questions around reporting requirements, accounting obligations, and service charge compliance.",

          path: "/faqs",

          gradient:
            "linear-gradient(135deg, #102d4d 0%, #0D2040 100%)"

        
        }

      ].map((card, i) => (

        <div
          key={i}

          onClick={() => navigate(card.path)}

          className="
            group

            relative

            overflow-hidden

            rounded-[30px]

            cursor-pointer

            transition-all duration-500

            hover:-translate-y-2
            hover:shadow-[0_30px_60px_-25px_rgba(13,32,64,0.25)]
          "
        >

          {/* background */}
          <div
            className="
              absolute inset-0
            "
            style={{
              background: card.gradient
            }}
          />

          {/* glow */}
          <div
            className="
              absolute
              -top-16
              -right-16

              w-48 h-48

              rounded-full

              bg-white/10

              blur-3xl

              opacity-0
              group-hover:opacity-100

              transition duration-700
            "
          />

          {/* content */}
          <div
            className="
              relative

              h-full

              p-8 md:p-10

              flex flex-col
            "
          >

           <div className="mb-2" />
           

            {/* title */}
            <h3
              className="
                text-3xl

                font-medium

                text-white

                leading-tight

                tracking-tight
              "
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {card.title}
            </h3>

            {/* description */}
            <p
              className="
                mt-5

                text-white/80

                text-[15px] md:text-base

                leading-8
              "
            >
              {card.desc}
            </p>

            {/* footer */}
            <div
              className="
                mt-10

                flex items-center justify-between
              "
            >

              <span
                className="
                  text-sm
                  font-semibold

                  tracking-wide

                  text-white
                "
              >
                Explore Section
              </span>

              <div
                className="
                  w-11 h-11

                  rounded-full

                  bg-white/10

                  border border-white/20

                  flex items-center justify-center

                  group-hover:bg-white
                  group-hover:text-[#0D2040]

                  transition-all duration-300
                "
              >
                <ChevronRight size={18} />
              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle>Our Services</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map(({ icon, title, items }, i) => (
              <div key={i}
                className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-2xl p-5 hover:border-[#0D6E4F] hover:bg-[#0D6E4F]/5 transition-all">
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#E5E7EB]">
                  <span className="text-lg">{icon}</span>
                 <h4
  className="
    text-lg md:text-xl
    font-bold
    leading-7
    text-[#0D2040]
  "
>{title}</h4>
                </div>
                <ul className="space-y-1">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm leading-7 leading-5">
                      <span className="text-[#0D6E4F] font-bold mt-px flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0D2040 0%, #0D6E4F 100%)' }} />
        <div className="relative max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Need Expert Service Charge Support?
          </h2>
          <p className="text-white/80 text-base leading-7 mb-8">
            Speak to our specialists for accurate, compliant and efficient reporting across your entire portfolio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 rounded-xl bg-white text-[#0D2040] font-bold text-sm hover:bg-gray-100 transition">
              Book Consultation
            </button>
            <button className="px-8 py-3 rounded-xl border-2 border-white/50 text-white font-bold text-sm hover:bg-white/10 transition">
              Enquire Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceChargeAccounting;