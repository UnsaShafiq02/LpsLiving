import React from "react";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


import heroVideo from "../assets/bgVideo.mp4";
import ServicechargeSec from "../assets/ServicechargeSec.png";
import {
  Building2,
  FileSearch,
  Calculator,
  UsersRound,
  FolderOpen,
  ArrowRight,
  Plus,
  Minus
} from "lucide-react";

// const buttonAnim = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//     scale: 0.9,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.5,
//       ease: "easeOut",
//     },
//   },
// };

const buttonAnim = {
  hidden: {
    opacity: 0,
    y: -200,
    scale: 0.6,
  },
 show: {
  opacity: 1,
  y: 0,
  scale: [1, 1.1, 0.95, 1],
  transition: {
    type: "spring",
    stiffness: 200,
    damping: 8,
  },
}
};


const stats = [
  { label: "UK Businesses Supported", value: "500+" },
  { label: "Years Combined Experience", value: "20+" },
  { label: "Compliance Accuracy", value: "100%" },
  { label: "Client Retention", value: "95%" },
];
const slides = [
  {
    title: "Service Charge Accounts",
    text: "Specialist accounting for property management companies with accurate service charge reporting, full compliance, and complete financial transparency tailored to UK regulations.",
    link: "/servicecharge",
    bg: "bg-[#0D2040]",
  },
  {
    title: "Business Services",
    text: "Comprehensive accounting and advisory solutions designed to support growing businesses, combining financial clarity, compliance, and scalable strategies for long-term success.",
    link: "/services",
    bg: "bg-[#224C26]",
  },
  {
    title: "Personal Tax",
    text: "Efficient personal tax planning and compliance support, helping individuals, landlords, and contractors manage obligations while maximising financial efficiency.",
    link: "/services/personal-tax",
    bg: "bg-[#071A2B]",
  },
];
const serviceAreas = [
  {
    title: "Service Charge Accounts",
     icon: Building2,
    link: "/servicecharge",
    items: [
      
      "Service Charge Audits & Reviews",
      "Section 21 Reports & Factual Findings",
      "Developer Handovers",
      "RTM, RMC & Freehold Companies",
    ],
  },
  {
    title: "Audit & Assurance",
     icon: FileSearch,
    link: "/audit-assurance",
    items: [
      "Statutory Audits",
      "Independent Examinations",
      "Internal Control Reviews",
      "Assurance & Agreed-Upon Procedures",
    ],
  },
  {
    title: "Accounts & Taxation",
     icon: Calculator,
    link: "/accounts-taxation",
    items: [
      "Year-End Accounts & Tax Returns",
      "Bookkeeping",
      "Payroll",
      "VAT",
      "Self Assessment",
    ],
  },
  {
    title: "Business Advisory & Support",
     icon: UsersRound,
    
    link: "/business-advisory",
    items: [
      "Business Advisory",
      "Business Start-Up",
      "Company Formation",
      "Contractors & Freelancers",
      "IR35 Reviews",
    ],
  },
  {
    title: "Other Services",
    icon: FolderOpen,
    link: "/other-services",
    items: [
      "HMRC Investigations & Enquiries",
      "Urgent Deadlines & Same-Day Services",
      "Registered Office & Mail Forwarding",
      "Company Secretarial Services",
    ],
  },
];
function FlipServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="group h-[400px] [perspective:1200px]">
      <div
        className="
          relative h-full w-full
          transition-all duration-700
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]
        "
      >
        {/* Front */}
        <div
          className="
            absolute inset-0
            rounded-[28px]
           border border-[#C8A15A]/60
bg-[#F7F7F4]
shadow-[0_10px_30px_rgba(200,161,90,0.08)]
group-hover:border-[#C8A15A]
group-hover:shadow-[0_20px_50px_rgba(200,161,90,0.18)]
            p-8
            flex flex-col items-center justify-between
            text-center
            [backface-visibility:hidden]
          "
        >
          <div className="w-24 h-24 rounded-full  bg-[#F7F7F4] border border-[#C8A15A]/50 flex items-center justify-center">
            <Icon size={48} className="text-[#0F6B4B]" />
          </div>

          <h3 className="text-[#0F6B4B] text-2xl font-bold leading-tight">
            {service.title}
          </h3>

          <div className="w-12 h-[2px] bg-[#C8A15A]" />

         <motion.div
  animate={{
    x: [0, 6, 0],
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="w-12 h-12 rounded-full bg-[#0F6B4B] flex items-center justify-center"
>
  <ArrowRight size={18} className="text-white" />
</motion.div>
        </div>

        {/* Back */}
        <div
          className="
            absolute inset-0
            rounded-[28px]
            bg-[#0F6B4B]
            text-white
            p-6
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
            flex flex-col
          "
        >
          <h3 className="text-xl font-bold mb-6">
            {service.title}
          </h3>

          <div className="space-y-5 flex-1">
            {service.items.map((item) => (
              <div key={item} className="flex gap-3">
                <div className="w-2 h-2 bg-[#C8A15A] rotate-45 mt-2 shrink-0" />
               <span className="text-base leading-7 font-medium">{item} </span>
              </div>
            ))}
          </div>

          <Link
            to={service.link}
            className="
              mt-6
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-[#C8A15A]
              text-white
              py-3
              font-medium
            "
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
function MobileServicesAccordion({
  openService,
  setOpenService,
})  {
  return (
    <div className="space-y-4">
      {serviceAreas.map((service, index) => {
        const Icon = service.icon;
        const isOpen = openService === index;

        return (
          <motion.div
            key={service.title}
            layout
            className={`
              overflow-hidden
              rounded-[22px]
              border
              transition-all
              duration-300
              ${
                isOpen
                  ? "border-[#C8A15A] shadow-[0_10px_30px_rgba(200,161,90,0.15)]"
                  : "border-[#C8A15A]/40"
              }
            `}
          >
            <button
              onClick={() =>
                setOpenService(
                  isOpen ? null : index
                )
              }
              className="
                w-full
                px-5
                py-5
                flex
                items-center
                justify-between
                bg-[#F7F7F4]
              "
            >
              <div className="flex items-center gap-4">

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    border
                    border-[#C8A15A]/40
                    bg-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    size={22}
                    className="text-[#0F6B4B]"
                  />
                </div>

                <h3
                  className="
                    text-left
                    text-[17px]
                    font-semibold
                    text-[#2F3437]
                  "
                >
                  {service.title}
                </h3>
              </div>

              <div
                className="
                  w-9
                  h-9
                  rounded-full
                  border
                  border-[#C8A15A]
                  flex
                  items-center
                  justify-center
                  text-[#B58B3C]
                "
              >
                {isOpen
                  ? <Minus size={16} />
                  : <Plus size={16} />}
              </div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <div className="px-5 pb-6">

                    <div className="h-px bg-[#D9DDDE] mb-5" />

                    <div className="space-y-4">

                      {service.items.map((item) => (
                        <div
                          key={item}
                          className="
                            flex
                            items-start
                            gap-4
                          "
                        >
                          <div
                            className="
                              h-2
                              w-2
                              rotate-45
                              bg-[#C8A15A]
                              mt-2
                              shrink-0
                            "
                          />

                          <span
                            className="
                              text-[#2F3437]
                              text-base
                              leading-7
                            "
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={service.link}
                      className="
                        mt-6
                        inline-flex
                        items-center
                        gap-2
                        px-5
                        py-3
                        rounded-full
                        bg-[#0F6B4B]
                        text-white
                        font-medium
                      "
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </Link>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
const HomeServices = () => {
  const [current, setCurrent] = useState(0);
  const [openService, setOpenService] = useState(null);
  

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);
  return (
    <section className="w-full bg-white overflow-hidden">

  {/* MOBILE HERO */}
<div className="lg:hidden relative w-full h-[65vh] sm:h-[75vh] overflow-hidden">

  <video
    src={heroVideo}
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-white/15" />

  <div className="relative z-10 text-center px-5 pt-25">

    <div className="w-10 h-[3px] rounded-full bg-[#C8A15A] mx-auto mb-5" />

    <h1
      className="
        text-[#0F6B4B]
        text-3xl
        sm:text-5xl
        font-black
        leading-tight
      "
    >
      Built on trusted relationships,
      responsive service and
      specialist expertise.
    </h1>

    <p
      className="
        mt-5
        text-[#2F3437]
        text-base
        leading-7
        max-w-xl
        mx-auto
      "
    >
      Supporting property professionals,
      businesses and individuals with a
      practical and modern approach to
      compliance, growth and day-to-day
      operations.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-3">

      <Link
        to="/services"
        className="
          px-6 py-3
          rounded-xl
          bg-[#0F6B4B]
          text-white
          font-semibold
        "
      >
        Discover Our Services
      </Link>

      <Link
        to="/contact"
        className="
          px-6 py-3
          rounded-xl
          bg-white
          text-[#2F3437]
          font-semibold
          border border-[#C8A15A]
        "
      >
        Get in Touch
      </Link>

    </div>

  </div>

</div>    {/* ================= HERO ================= */}
<div
 
  className="
    hidden lg:flex
    relative
    w-full
    min-h-[850px]
    overflow-hidden
    rounded-b-[36px]
  "

>
  {/* ── LEFT: white text panel ── */}
  <div className="
  relative
  z-10
  w-full
  lg:w-[52%]
  flex
  flex-col
  justify-center
  px-6
  sm:px-10
  lg:px-16
  pt-90
  sm:pt-40
  lg:pt-20
  pb-16
  bg-white
">
    <div className="max-w-[720px]">
    <div className="w-10 h-[3px] rounded-full bg-[#C8A15A] mb-5" />

    <motion.h1
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  className="
    text-[36px]
    sm:text-[48px]
    lg:text-[60px]
    xl:text-[72px]
    font-black
    text-[#2F3437]
    leading-[1.15]
    mb-5
  "
>
  Accounting, Tax &{" "}
  <span className="text-[#0F6B4B]">
    Advisory Services
  </span>

  <span
    className="
      block
      mt-2
      text-[24px]
      sm:text-[30px]
      lg:text-[38px]
      xl:text-[44px]
      font-bold
      text-[#2F3437]
    "
  >
    built around long-term relationships.
  </span>
</motion.h1>

   <motion.p
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
  className="
    text-[#5F6B6D]
    text-base
    sm:text-lg
    lg:text-[20px]
    leading-7
    lg:leading-8
    max-w-[700px]
    mb-8
  "
>
  Supporting property professionals, businesses and individuals
  <br />
  with accounting, taxation, audit and advisory services
  <br />
  delivered with practical expertise, responsive support and a commitment to
  long-term client relationships.
</motion.p>
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.22 }}
      className="flex flex-wrap gap-3"
    >
      <Link
        to="/services"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F6B4B] text-white text-sm font-semibold hover:bg-[#0A5A3E] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#0F6B4B]/20"
      >
        Discover Our Services →
      </Link>
      <Link
        to="/contact"
className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#2F3437] text-sm font-semibold border border-[#C8A15A] hover:bg-[#F7F7F4] hover:border-[#B58B3C] hover:-translate-y-0.5 transition-all duration-300"      >
        Get in Touch →
      </Link>
    </motion.div>
  </div>
</div>

  {/* ── RIGHT: video, full bleed ── */}
  <div className="absolute inset-0 lg:left-[38%] z-0">
    <video
      src={heroVideo}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    />

    {/* Blend: white fades into video from left */}
    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent lg:via-white/40" />

    {/* Subtle dark vignette on far right edge */}
    <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/20 to-transparent" />
  </div>

</div>
 
      {/* ================= SERVICES CARDS ================= */}
<section className="w-full bg-white px-2 sm:px-4 lg:px-6 py-5 sm:py-8">

   <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">

    {/* CARD 1 */}
    <Link
      to="/servicecharge"
      className="
        group relative overflow-hidden
        rounded-2xl
        bg-[#0E6E4F]
        min-h-[95px] sm:min-h-[110px] lg:min-h-[150px]
        px-6 py-5
        flex items-center justify-between
        shadow-lg hover:shadow-2xl
        hover:-translate-y-1
        transition-all duration-500
      "
    >
      <div className="absolute right-[-40px] top-[-40px] w-[140px] h-[140px] bg-white/10 blur-3xl rounded-full group-hover:scale-125 transition duration-700" />

      <div className="relative z-10">
        <h3 className="text-white text-xl sm:text-3xl font-semibold">
          Service Charge Accounts
        </h3>

        <p className="text-white text-sm sm:text-base mt-1 font-bold">
          Service charge accounts, audits & compliance
        </p>
      </div>

      <span className="text-[#C49A4A] text-3xl">→</span>
    </Link>

    {/* CARD 2 */}
    <Link
      to="/services"
      className="
        group relative overflow-hidden
        rounded-2xl
        bg-[#0E6E4F]
        min-h-[95px] sm:min-h-[110px] lg:min-h-[150px]
        px-6 py-5
        flex items-center justify-between
        shadow-lg hover:shadow-2xl
        hover:-translate-y-1
        transition-all duration-500
      "
    >
      <div className="absolute left-[-40px] bottom-[-40px] w-[140px] h-[140px] bg-white/10 blur-3xl rounded-full group-hover:scale-125 transition duration-700" />

      <div className="relative z-10">
        <h3 className="text-white text-xl sm:text-3xl font-semibold">
          Businesses
        </h3>

        <p className="text-white text-sm sm:text-base mt-1 font-bold">
          Accounting, taxation & business advisory
        </p>
      </div>

      <span className="text-[#C49A4A] text-3xl">→</span>
    </Link>

    {/* CARD 3 */}
    <Link
      to="/services/personal-tax"
      className="
        group relative overflow-hidden
        rounded-2xl
        bg-[#0E6E4F]
        min-h-[95px] sm:min-h-[110px] lg:min-h-[150px]
        px-6 py-5
        flex items-center justify-between
        shadow-lg hover:shadow-2xl
        hover:-translate-y-1
        transition-all duration-500
      "
    >
      <div className="absolute right-[-40px] bottom-[-40px] w-[140px] h-[140px] bg-white/10 blur-3xl rounded-full group-hover:scale-125 transition duration-700" />

      <div className="relative z-10">
        <h3 className="text-white text-xl sm:text-3xl font-semibold">
         Individuals 
        </h3>

        <p className="text-white text-sm sm:text-base mt-1 font-bold">
          Personal tax, property tax & compliance
        </p>
      </div>

      <span className="text-[#C49A4A] text-3xl">→</span>
    </Link>

  </div>

</section>

      {/* ================= STATS ================= */}
    {/* ================= BRAND STATEMENT ================= */}
<section className="relative w-full overflow-hidden bg-white py-0 min-h-[480px] lg:min-h-[560px]">

  {/* ── full-bleed image, anchored right ── */}
  <div className="absolute inset-0 lg:left-[40%] z-0">
    <img
      src={ServicechargeSec}
      alt="Specialist Service Charge Accountants"
      className="w-full h-full object-cover object-center"
    />
    {/* blend: image fades into white on the left */}
    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent" />
    {/* soft vignette on far right */}
    <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/10 to-transparent" />
  </div>

  {/* ── text panel, sits above image ── */}
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="relative z-10 w-full lg:w-[52%] flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-16 lg:py-24"
  >
    <div className="w-10 h-[3px] rounded-full bg-[#C8A15A] mb-5" />

    <h2 className="text-3xl lg:text-5xl font-black text-[#2F3437] leading-tight mb-4">
      Specialist Service Charge Accountants
    </h2>

    <h3 className="text-lg lg:text-2xl font-bold text-[#2F3437] leading-snug mb-5">
      Service charge accounting is at the heart of our practice.
    </h3>

    <p className="text-[#5F6B6D] text-base lg:text-lg leading-8 max-w-[520px] mb-8">
      We support managing agents, RTM companies, RMCs, freehold companies
      and self-managed developments across the UK, delivering specialist
      accounting, audit and compliance services for residential, commercial
      and mixed-use developments.
    </p>

    <Link
      to="/servicecharge"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F6B4B] text-white text-sm font-semibold w-fit hover:bg-[#0A5A3E] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#0F6B4B]/20"
    >
      Learn More About Our Services →
    </Link>
  </motion.div>

</section>
{/* <section className="bg-white px-4 sm:px-6 lg:px-10 py-10 sm:py-16">
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-10">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E6E4F]">
        How We Can Help
      </h2>

<div className="w-20 h-[3px] bg-[#C8A15A] mx-auto mt-4 rounded-full" />    </div>

    <div className="space-y-4">

      {serviceAreas.map((service, index) => {
        const isOpen = openService === index;
        const Icon = service.icon;


        return (
          <motion.div
            key={service.title}
            layout
            className={`
              overflow-hidden
              rounded-[24px]
              border
              transition-all
              duration-500
              ${
                isOpen
                  ? "border-[#C8A15A] shadow-[0_20px_50px_rgba(14,110,79,0.12)]"
                  : "border-[#EAEAEA] hover:border-[#C8A15A]"
              }
            `}
          >
            <button
              onClick={() =>
                setOpenService(isOpen ? null : index)
              }
              className="w-full flex items-center justify-between px-6 sm:px-8 py-6 text-left bg-white"
            >
              

<div className="flex items-center gap-4">
  <div
    className={`
      h-12
      w-12
      rounded-2xl
      flex
      items-center
      justify-center
      border
      transition-all
      duration-300
      ${
        isOpen
          ? "bg-[#0F6B4B] border-[#0F6B4B] text-white shadow-lg"
          : "bg-[#F7F7F4] border-[#D9DDDE] text-[#0F6B4B]"
      }
    `}
  >
    <Icon size={22} strokeWidth={1.8} />
  </div>

  <h3
    className={`
      text-lg sm:text-2xl font-semibold
      transition-colors duration-300
      ${
        isOpen
          ? "text-[#0F6B4B]"
          : "text-[#2F3437]"
      }
    `}
  >
    {service.title}
  </h3>
</div>

              <motion.div
                animate={{
                  rotate: isOpen ? 180 : 0,
                  y: [0, -4, 0],
                }}
                transition={{
                  rotate: {
                    duration: 0.3,
                  },
                  y: {
                    repeat: Infinity,
                    duration: 1.8,
                  },
                }}
                className="
                  h-10
                  w-10
                  rounded-full
                  border
                  border-[#C8A15A]
                  flex
                  items-center
                  justify-center
                  text-[#B58B3C]
                "
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  <div className="px-6 sm:px-8 pb-8">

                    <div className="h-px bg-[#EAEAEA] mb-6" />

                    <div className="grid sm:grid-cols-2 gap-4">

                      {service.items.map((item) => (
                        <div
                          key={item}
                          className="flex gap-3 items-start"
                        >
                          <div
                            className="
                              h-2
                              w-2
                              rotate-45
                              bg-[#C8A15A]
                              mt-2
                              shrink-0
                            "
                          />

                          <span className="text-[#2D3436]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={service.link}
                      className="
                        mt-8
                        inline-flex
                        items-center
                        gap-2
                        px-6
                        py-3
                        rounded-full
                        bg-[#0E6E4F]
                        text-white
                        font-medium
                        hover:scale-105
                        transition
                      "
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </Link>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  </div>
</section> */}
<section className="bg-white px-4 sm:px-6 lg:px-10 py-16">
  <div className="max-w-[1900px] mx-auto">

    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B4B]">
        How We Can Help
      </h2>

      <div className="w-20 h-[3px] bg-[#C8A15A] mx-auto mt-4 rounded-full" />

      <p
        className="
          mt-6
          max-w-3xl
          mx-auto
          text-[#5F6B6D]
          text-base
          sm:text-lg
          leading-8
        "
      >
        A full range of accounting, tax advisory and assurance services,
        delivered with expertise, clarity, and care.
      </p>
    </div>
{/* Mobile Accordion */}
  <div className="xl:hidden">
   <MobileServicesAccordion
  openService={openService}
  setOpenService={setOpenService}
/>
  </div>

    <div className="hidden xl:grid xl:grid-cols-5 gap-8">
      {serviceAreas.map((service) => (
        <FlipServiceCard
          key={service.title}
          service={service}
        />
      ))}
    </div>

  </div>
</section>
  

  </section>  

    
  );
};

export default HomeServices;