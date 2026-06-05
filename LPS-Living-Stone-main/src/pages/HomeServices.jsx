import React from "react";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroVideo from "../assets/bgVideo.mp4";
import {
  Building2,
  FileSearch,
  Calculator,
  UsersRound,
  FolderOpen,
  ArrowRight,
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
      "Service Charge Accounts",
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
            border border-[#D9DDDE]
            bg-[#F7F7F4]
            p-8
            flex flex-col items-center justify-between
            text-center
            [backface-visibility:hidden]
          "
        >
          <div className="w-24 h-24 rounded-full bg-[#EAF1EC] flex items-center justify-center">
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
const HomeServices = () => {
  const [current, setCurrent] = useState(0);
  

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);
  return (
    <section className="w-full bg-white overflow-hidden">

      {/* ================= HERO ================= */}
{/* <div className="relative w-full min-h-[30vh] md:min-h-[20vh] lg:min-h-[75vh] flex items-start justify-center pt-2 md:pt-4 overflow-hidden"> */}
{/* <div className="relative w-full min-h-[75vh] md:min-h-[20vh] lg:min-h-[75vh] flex items-start justify-center pt-2 md:pt-4 overflow-hidden"> */}
<div className="relative w-full h-[45vh] sm:h-[70vh] lg:h-[70vh] flex items-start lg:items-center justify-center overflow-hidden rounded-b-none sm:rounded-b-[30px]">      <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10 sm:hidden" />

        {/* <div className="absolute inset-0 bg-[#071A2B]/40" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#071A2B]/30 via-[#071A2B]/10 to-transparent" /> */}
        {/* <div className="absolute inset-0 bg-[#071A2B]/20" /> */}

        {/* Glow */}
        {/* <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#0E6E4F]/25 blur-3xl rounded-full" /> */}
        {/* <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#0E6E4F]/30 blur-3xl rounded-full" /> */}
        <div className="hidden sm:block absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#0E6E4F]/25 blur-3xl rounded-full" />
        <div className="hidden sm:block absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#0E6E4F]/30 blur-3xl rounded-full" />
        {/* CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
         className="relative z-10 text-center w-full max-w-none px-4 pt-28 sm:pt-16 lg:pt-20 pb-6"       >
          <motion.h1
           
          //  className="mt-2 sm:mt-8 text-[#0D2040] text-2xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          // className="mt-6 sm:mt-10 text-[#0E6E4F] text-2xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-[0_2px_6px_rgba(255,255,255,0.35)]"
           className="mt-6 sm:mt-10 text-[#0E6E4F] text-2xl sm:text-5xl lg:text-6xl font-black leading-tight"
          >
          Built on trusted relationships, responsive service, and specialist expertise.          </motion.h1>

          {/* <motion.div
           
            className="mt-4 inline-block px-5 py-2.5 bg-[#0E6E4F]/50 rounded-lg border border-[#0E6E4F]/70"
          >
            <h2 className="text-white text-xl sm:text-3xl font-semibold">
              for UK Businesses & Individuals
            </h2>
          </motion.div> */}

         <motion.p className="mt-3 sm:mt-5 text-[#2D3436] text-sm sm:text-lg font-normal leading-6 sm:leading-8 max-w-2xl mx-auto px-4">
  Supporting property professionals, businesses, and individuals with a practical and modern approach to compliance, growth and day-to-day operations.
</motion.p>

          {/* BUTTONS */}
{/* <motion.div
  initial="hidden"
  animate="show"
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
 className="mt-14 sm:mt-16 flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-5"
>

  <motion.div variants={buttonAnim}>
    <Link
      to="/servicecharge"
// className="
//   w-[85%] sm:w-[260px]
//   h-[42px] sm:min-h-[60px]
//   flex items-center justify-center
//   text-center

//   px-4 sm:px-8
//   text-xs sm:text-lg font-semibold
//   whitespace-nowrap

//   rounded-xl
//   bg-[#224C26] text-white

//   hover:bg-white hover:text-[#224C26]
//   border border-transparent hover:border-[#0E6E4F]

//   transition shadow-lg
// "
className="
  w-[75px] h-[75px] sm:w-[150px] sm:h-[150px]
  flex items-center justify-center
  text-center

  text-[10px] sm:text-base lg:text-lg
  font-semibold leading-tight
  px-3

  rounded-full

  bg-[#224C26] text-white

  hover:bg-white hover:text-[#224C26]
  border border-transparent hover:border-[#0E6E4F]

  transition shadow-xl
"
    >
      Service Charge Accounts
    </Link>
  </motion.div>

  <motion.div variants={buttonAnim}>
    <Link
      to="/services"
// className="
//   w-[85%] sm:w-[260px]
//   h-[42px] sm:min-h-[60px]
//   flex items-center justify-center
//   text-center

//   px-4 sm:px-8
//   text-xs sm:text-lg font-semibold
//   whitespace-nowrap

//   rounded-xl
//   bg-[#224C26] text-white

//   hover:bg-white hover:text-[#224C26]
//   border border-transparent hover:border-[#0E6E4F]

//   transition shadow-lg
// "
className="
  w-[75px] h-[75px] sm:w-[150px] sm:h-[150px]
  flex items-center justify-center
  text-center

  text-[10px] sm:text-base lg:text-lg
  font-semibold leading-tight
  px-3

  rounded-full

  bg-[#224C26] text-white

  hover:bg-white hover:text-[#224C26]
  border border-transparent hover:border-[#0E6E4F]

  transition shadow-xl
"
    >
      Business Services
    </Link>
  </motion.div>

  <motion.div variants={buttonAnim}>
    <Link
      to="/services/personal-tax"
// className="
//   w-[85%] sm:w-[260px]
//   h-[42px] sm:min-h-[60px]
//   flex items-center justify-center
//   text-center

//   px-4 sm:px-8
//   text-xs sm:text-lg font-semibold
//   whitespace-nowrap

//   rounded-xl
//   bg-[#224C26] text-white

//   hover:bg-white hover:text-[#224C26]
//   border border-transparent hover:border-[#0E6E4F]

//   transition shadow-lg
// "
className="
  w-[75px] h-[75px] sm:w-[150px] sm:h-[150px]
  flex items-center justify-center
  text-center

  text-[10px] sm:text-base lg:text-lg
  font-semibold leading-tight
  px-3

  rounded-full

  bg-[#224C26] text-white

  hover:bg-white hover:text-[#224C26]
  border border-transparent hover:border-[#0E6E4F]

  transition shadow-xl
"
    >
      Personal Tax
    </Link>
  </motion.div>

</motion.div> */}


        </motion.div>
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

        <p className="text-[#D9C08A] text-sm sm:text-base mt-1 font-bold">
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

        <p className="text-[#D9C08A] text-sm sm:text-base mt-1 font-bold">
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

        <p className="text-[#D9C08A] text-sm sm:text-base mt-1 font-bold">
          Personal tax, property tax & compliance
        </p>
      </div>

      <span className="text-[#C49A4A] text-3xl">→</span>
    </Link>

  </div>

</section>

      {/* ================= STATS ================= */}
    {/* ================= BRAND STATEMENT ================= */}
<section className="py-8 sm:py-14 bg-white px-3 sm:px-6 lg:px-10">
  <div className="w-full max-w-none text-left">

<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2D3436] leading-[1.5] tracking-tight">  <span className="text-[#0E6E4F] font-bold">
        
      </span>{" "}
  We deliver modern accounting, taxation, advisory and assurance services to businesses, property investors, managing agents, residential and commercial developments, and individuals.    </h1>

  </div>
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
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-8">
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