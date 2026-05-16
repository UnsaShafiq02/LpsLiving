import React from "react";

import { Link } from "react-router-dom";
import { Building2, Award } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroVideo from "../assets/bgVideo.mp4";

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

const HomeServices = () => {
  const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);
  return (
    <section className="w-full bg-white overflow-hidden font-['Neogrotesk']">

      {/* ================= HERO ================= */}
{/* <div className="relative w-full min-h-[30vh] md:min-h-[20vh] lg:min-h-[75vh] flex items-start justify-center pt-2 md:pt-4 overflow-hidden"> */}
{/* <div className="relative w-full min-h-[75vh] md:min-h-[20vh] lg:min-h-[75vh] flex items-start justify-center pt-2 md:pt-4 overflow-hidden"> */}
<div className="relative w-full h-[45vh] sm:h-[70vh] lg:h-[70vh] flex items-start lg:items-center justify-center overflow-hidden rounded-b-none sm:rounded-b-[55px]">      <video
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
        {/* <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#0D6E4F]/25 blur-3xl rounded-full" /> */}
        {/* <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#0D6E4F]/30 blur-3xl rounded-full" /> */}
        <div className="hidden sm:block absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#0D6E4F]/25 blur-3xl rounded-full" />
        <div className="hidden sm:block absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#0D6E4F]/30 blur-3xl rounded-full" />
        {/* CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.12 }}
         className="relative z-10 text-center w-full max-w-none px-4 pt-28 sm:pt-16 lg:pt-20 pb-6"       >
          <motion.h1
           
          //  className="mt-2 sm:mt-8 text-[#0D2040] text-2xl sm:text-5xl lg:text-6xl font-bold leading-tight"
          className="mt-6 sm:mt-10 text-[#0D2040] text-2xl sm:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-[0_2px_6px_rgba(255,255,255,0.35)]"
          >
            Trusted Accounting & Tax Advisory
          </motion.h1>

          {/* <motion.div
           
            className="mt-4 inline-block px-5 py-2.5 bg-[#0D6E4F]/50 rounded-lg border border-[#0D6E4F]/70"
          >
            <h2 className="text-white text-xl sm:text-3xl font-semibold">
              for UK Businesses & Individuals
            </h2>
          </motion.div> */}

          <motion.p
           
className="mt-3 sm:mt-5 text-[#224C26]/85 text-sm sm:text-lg leading-6 sm:leading-8 max-w-2xl mx-auto px-4"          >
            We provide clear, compliant and commercially focused accounting
            services for businesses, landlords, contractors and professionals
            across the UK.
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
//   border border-transparent hover:border-[#0D6E4F]

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
  border border-transparent hover:border-[#0D6E4F]

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
//   border border-transparent hover:border-[#0D6E4F]

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
  border border-transparent hover:border-[#0D6E4F]

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
//   border border-transparent hover:border-[#0D6E4F]

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
  border border-transparent hover:border-[#0D6E4F]

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
<section className="w-full bg-white px-4 sm:px-6 lg:px-10 py-5 sm:py-8">

   <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">

    {/* CARD 1 */}
    <Link
      to="/servicecharge"
      className="
        group relative overflow-hidden
        rounded-2xl
        bg-[#11b67a]
        min-h-[95px] sm:min-h-[115px] lg:min-h-[150px]
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

        <p className="text-white/70 text-sm sm:text-base mt-1">
          Specialist reporting & compliance
        </p>
      </div>

      <span className="text-white/40 text-3xl">→</span>
    </Link>

    {/* CARD 2 */}
    <Link
      to="/services"
      className="
        group relative overflow-hidden
        rounded-2xl
        bg-[#11b67a]
        min-h-[95px] sm:min-h-[115px] lg:min-h-[150px]
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
          Business Services
        </h3>

        <p className="text-white/70 text-sm sm:text-base mt-1">
          Strategic accounting & advisory
        </p>
      </div>

      <span className="text-white/40 text-3xl">→</span>
    </Link>

    {/* CARD 3 */}
    <Link
      to="/services/personal-tax"
      className="
        group relative overflow-hidden
        rounded-2xl
        bg-[#11b67a]
        min-h-[95px] sm:min-h-[115px] lg:min-h-[150px]
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
          Personal Tax
        </h3>

        <p className="text-white/70 text-sm sm:text-base mt-1">
          Efficient personal tax planning
        </p>
      </div>

      <span className="text-white/40 text-3xl">→</span>
    </Link>

  </div>

</section>

      {/* ================= STATS ================= */}
    {/* ================= BRAND STATEMENT ================= */}
<section className="py-20 bg-white px-3 sm:px-6 lg:px-10">
  <div className="w-full lg:w-[80%] text-left">

    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-medium text-[#0D2040] leading-[1.5] tracking-tight">
      At <span className="text-[#224C26] font-semibold">
        LPS Livingstone,
      </span>{" "}
 we provide modern accounting and tax solutions designed for businesses and individuals, focused on clarity, compliance, sustainable financial growth, strategic planning, risk management, and long-term business success.    </h1>

  </div>
</section>
  <section className="relative w-full h-[520px] md:h-[620px] overflow-hidden">

  {/* BACKGROUND */}
  <AnimatePresence mode="wait">
    <motion.div
      key={current}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={`absolute inset-0 ${slides[current].bg}`}
    >
      <div className="absolute w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full top-10 left-10 animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full bottom-10 right-10 animate-pulse" />
    </motion.div>
  </AnimatePresence>

  {/* CLICKABLE */}
  <Link to={slides[current].link} className="absolute inset-0 z-10" />

  {/* CONTENT */}
  {/* CONTENT */}
<div className="relative z-20 w-full h-full px-3 sm:px-6 lg:px-10 flex flex-col justify-between">

  {/* TOP LEFT TITLE */}
  <div className="pt-16">
    <AnimatePresence mode="wait">
      <motion.h2
        key={current}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white max-w-2xl"
      >
        {slides[current].title}
      </motion.h2>
    </AnimatePresence>
  </div>

  {/* BOTTOM RIGHT TEXT + BUTTONS */}
  <div className="flex justify-end pb-14">
    <div className="max-w-lg text-right mt-[20%] sm:mt-0">

      {/* BIG TEXT */}
      <AnimatePresence mode="wait">
        <motion.p
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.6 }}
          className="text-white text-xl sm:text-2xl md:text-3xl leading-relaxed font-medium"
        >
          {slides[current].text}
        </motion.p>
      </AnimatePresence>

      {/* GLASS BUTTONS */}
      {/* BUTTON (DYNAMIC PER SLIDE) */}
<motion.div
  key={current}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.4 }}
  className="mt-6 flex justify-end"
>
  <Link
    to={slides[current].link}
    className="
      w-[220px]
      h-[46px]
      flex items-center justify-center
      text-center
      text-sm font-semibold
      whitespace-nowrap

      rounded-xl
      bg-white/10 backdrop-blur-md
      border border-white/40
      text-white

      hover:bg-white hover:text-[#0D6E4F]

      transition shadow-lg
    "
  >
    {slides[current].title}
  </Link>
</motion.div>
    </div>
  </div>

</div>

  {/* PROGRESS BAR */}
  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20">
    <motion.div
      key={current}
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{ duration: 5, ease: "linear" }}
      className="h-full bg-[#0D6E4F]"
    />
  </div>

  {/* ARROWS */}
  {/* <div className="absolute top-1/2 left-4 right-4 flex justify-between z-30">
    <button
      onClick={() =>
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
      }
      className="bg-white/20 hover:bg-white/40 text-white px-3 py-2 rounded-lg backdrop-blur"
    >
      ‹
    </button>

    <button
      onClick={() =>
        setCurrent((prev) => (prev + 1) % slides.length)
      }
      className="bg-white/20 hover:bg-white/40 text-white px-3 py-2 rounded-lg backdrop-blur"
    >
      ›
    </button>
  </div> */}

</section>   

    </section>
  );
};

export default HomeServices;