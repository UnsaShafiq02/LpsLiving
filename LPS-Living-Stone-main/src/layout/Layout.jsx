import React, { useState, useEffect } from 'react';
import ShortServices from './ShortServices';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// const Layout = ({ children }) => {
//   return (
//     <div className="bg-white min-h-screen w-full">

//       {/* soft premium background glow */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
//         <div className="absolute top-[-180px] left-[-120px] w-[320px] h-[320px] bg-[#224C26]/5 blur-3xl rounded-full" />
//         <div className="absolute bottom-[-180px] right-[-120px] w-[320px] h-[320px] bg-[#0D2040]/5 blur-3xl rounded-full" />
//       </div>

//       <div className="relative max-w-[1650px] mx-auto px-2 sm:px-3 lg:px-3">

//         {/* ================= DESKTOP ================= */}
//         {/* ================= MAIN FULL WIDTH ================= */}
// <div className="py-3">

//   <main className="w-full">
//     <div
//       className="
//         bg-[#ECE5DD]
//         border border-[#E5E7EB]
//         shadow-sm
//         rounded-2xl
//         overflow-hidden
//       "
//     >
//       {children}
//     </div>
//   </main>

// </div>

//         {/* ================= TABLET ================= */}
//         <div className="hidden md:block lg:hidden">

//           <div
//             className="
//               bg-[#ECE5DD]
//               rounded-2xl
//               shadow-sm
//               border border-[#E5E7EB]
//               overflow-hidden
//             "
//           >
//             {children}
//           </div>

//           <div className="grid grid-cols-2 gap-4 mt-4">
//             <ShortServices />
//           </div>

//         </div>

//         {/* ================= MOBILE ================= */}
//         <div className="block md:hidden">

//           <div
//             className="
//               bg-[#ECE5DD]
//               rounded-2xl
//               shadow-sm
//               border border-[#E5E7EB]
//               overflow-hidden
//             "
//           >
//             {children}
//           </div>

//           <div className="mt-4">
//             <ShortServices />
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };
const slides = [
  {
    title: "Service Charge Accounts",
    text: "Specialist Service Charge Accountants for Managing Agents",
    link: "/servicecharge",
    bg: "bg-[#0D2040]",
  },
  {
    title: "Business Services",
    text: "Audit, Tax & Advisory Services for Businesses and Individuals",
    link: "/services",
    bg: "bg-[#224C26]",
  },
  {
    title: "Personal Tax",
    text: "Residential, Mixed-Use & Commercial Developments",
    link: "/services/personal-tax",
    bg: "bg-[#071A2B]",
  },
];
const businessSlides = [
  {
    title: "BBC Business",
    text: "Latest UK economy, inflation, markets and financial updates from BBC Business.",
    link: "https://www.bbc.com/news/business",
    bg: "bg-[#0D2040]",
    button: "BBC Business",
  }
];
const Layout = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const [businessCurrent, setBusinessCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, 5000);
 
 

  return () => clearInterval(interval);
}, []);
useEffect(() => {
  const interval = setInterval(() => {
    setBusinessCurrent((prev) => (prev + 1) % businessSlides.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);
  return (
    <div className="bg-white min-h-screen w-full">

      {/* background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-180px] left-[-120px] w-[320px] h-[320px] bg-[#224C26]/5 blur-3xl rounded-full" />
        <div className="absolute bottom-[-180px] right-[-120px] w-[320px] h-[320px] bg-[#0D2040]/5 blur-3xl rounded-full" />
      </div>

      {/* <div className="relative max-w-[1650px] mx-auto px-2 sm:px-3 lg:px-3"> */}
      <div className="relative w-full">

        {/* MAIN CONTENT (ONLY ONCE) */}
        <main className="w-full py-3">
          <div className="bg-white overflow-hidden">
            {children}
          </div>
        </main>

        {/* SHORT SERVICES (responsive only) */}
       {/* ================= DESKTOP SPLIT ================= */}
<div className="grid grid-cols-1 lg:grid-cols-[47%_51%] gap-2 lg:gap-5 mt-4">

  {/* LEFT → SCROLLABLE CARDS */}
 <div
  className="
    group relative cursor-pointer
   rounded-tr-[40px]
    overflow-hidden
    border border-[#E5E7EB]
    bg-[#F1F3E9]
    shadow-sm
    transition-all duration-500
    hover:-translate-y-2
    hover:shadow-[0_25px_60px_-25px_rgba(13,110,79,0.25)]
    h-[58vh] lg:h-[62vh]
  "
>

  {/* TOP ACCENT BAR */}
  <div className="h-1 w-full bg-gradient-to-r from-[#224C26] to-[#0D2040]" />

  {/* GLOW */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#224C26]/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
    <div className="absolute bottom-[-40px] left-[-40px] w-36 h-36 bg-[#0D2040]/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
  </div>

  {/* CONTENT */}
  <div className="relative p-5 lg:p-6 h-full flex flex-col justify-start">

    <div>

      <h3 className="text-2xl xl:text-3xl font-bold text-[#0D2040] leading-tight">
        Service Charge Accounts
      </h3>

      <p className="mt-4 text-sm text-[#0D2040]/70 leading-6">
        Specialist accounting for managing agents & property portfolios.
      </p>

      <div className="mt-4 space-y-2">

        {[
          "Service Charge Accounting",
          "Property Management Accounts",
          "Year-end Reporting",
        ].map((item, i) => (
          <div
            key={i}
            className="
              flex items-center justify-between
              px-3 py-2 rounded-1xl
              bg-white/70
              hover:bg-[#224C26]/10
              transition-all duration-300
            "
          >
            <span className="text-sm text-[#0D2040]">
              {item}
            </span>

            <span className="text-[#224C26] font-bold text-xl">
              →
            </span>
          </div>
        ))}

      </div>

    </div>

    <div className="mt-auto flex items-center justify-between border-t border-[#E5E7EB] pt-4">

      <span className="text-sm font-semibold text-[#0D6E4F]">
        Explore Category
      </span>

      <div
        className="
          w-11 h-11
          rounded-full
          bg-[#0D6E4F]
          text-white
          flex items-center justify-center
          shadow-md
          group-hover:rotate-12 group-hover:scale-110
          transition-all duration-300
          text-xl
        "
      >
        →
      </div>

    </div>

  </div>

</div>
  {/* RIGHT → STICKY TEXT */}
  {/* <div className="sticky top-28 h-[80vh] flex items-center pointer-events-none">
  <div className="text-3xl xl:text-4xl font-light text-[#0D2040] leading-[1.7] font-serif">
    Strategic accounting and tax solutions built for modern businesses
    and individuals, combining technical expertise with a clear,
    commercially focused approach.Delivering clarity, control, and confident financial decisions for clients.

  </div>
</div> */}
<div className="hidden lg:block sticky top-24 h-[58vh] lg:h-[62vh] overflow-hidden rounded-tl-[40px]">
  
   <section className="relative w-full h-full overflow-hidden">
 
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
 <div className="relative z-20 w-full h-full px-2 sm:px-4 lg:px-4 flex flex-col justify-between">
 
   {/* TOP LEFT TITLE */}
   <div className="pt-10 lg:pt-12">
     <AnimatePresence mode="wait">
       <motion.h2
         key={current}
         initial={{ opacity: 0, y: -40 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: 40 }}
         transition={{ duration: 0.6 }}
         className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white max-w-2xl"
       >
         {slides[current].title}
       </motion.h2>
     </AnimatePresence>
   </div>
 
   {/* BOTTOM RIGHT TEXT + BUTTONS */}
   <div className="flex justify-end pb-8 lg:pb-10">
     <div className="max-w-lg text-right mt-[20%] sm:mt-0">
 
       {/* BIG TEXT */}
       <AnimatePresence mode="wait">
         <motion.p
           key={current}
           initial={{ opacity: 0, x: 40 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -40 }}
           transition={{ duration: 0.6 }}
           className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-medium"
         >
           {slides[current].text}
         </motion.p>
       </AnimatePresence>
 
      
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
 
  
 
 </section> 

</div>


</div>
{/* ================= SECOND ROW ================= */}
<div className="grid grid-cols-1 lg:grid-cols-[47%_51%] gap-2 lg:gap-5 mt-4">

  {/* LEFT CARD */}
  <div
    className="
      group relative cursor-pointer
      rounded-tr-[40px]
      overflow-hidden
      border border-[#E5E7EB]
      bg-[#F1F3E9]
      shadow-sm
      transition-all duration-500
      hover:-translate-y-2
      hover:shadow-[0_25px_60px_-25px_rgba(13,110,79,0.25)]
      h-[58vh] lg:h-[62vh]
    "
  >

    <div className="h-1 w-full bg-gradient-to-r from-[#224C26] to-[#0D2040]" />

<div className="relative p-5 lg:p-6 h-full flex flex-col justify-start">
      <div>

        <h3 className="text-2xl xl:text-3xl font-bold text-[#0D2040] leading-tight">
          Business Services
        </h3>

        <p className="mt-3 text-sm text-[#0D2040]/70 leading-6">
          Complete support for UK businesses & growth-focused companies.
        </p>

        <div className="mt-4 space-y-2">

          {[
            "Accounts & Taxation",
           
            "Payroll & VAT",
            "Business Advisory",
          ].map((item, i) => (
            <div
              key={i}
              className="
                flex items-center justify-between
                px-3 py-2 rounded-xl
                bg-white/70
              "
            >
              <span className="text-sm  text-[#0D2040]">
                {item}
              </span>

              <span className="text-[#224C26] font-bold text-xl">
                →
              </span>
            </div>
          ))}

        </div>

      </div>

<div className="mt-auto flex items-center justify-between border-t border-[#E5E7EB] pt-4">
        <span className="text-sm font-semibold text-[#0D6E4F]">
          Explore Category
        </span>

        <div
          className="
            w-11 h-11
            rounded-full
            bg-[#0D6E4F]
            text-white
            flex items-center justify-center
          "
        >
          →
        </div>

      </div>

    </div>

  </div>

  {/* HMRC / BBC SLIDER */}
<div className="hidden lg:block rounded-tl-[40px] overflow-hidden h-[58vh] lg:h-[62vh] relative">

  <AnimatePresence mode="wait">
    <motion.div
      key={businessCurrent}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={`absolute inset-0 ${businessSlides[businessCurrent].bg}`}
    >
      <div className="absolute w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full top-10 left-10 animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full bottom-10 right-10 animate-pulse" />
    </motion.div>
  </AnimatePresence>

  <a
    href={businessSlides[businessCurrent].link}
    target="_blank"
    rel="noreferrer"
    className="absolute inset-0 z-10"
  />

  <div className="relative z-20 w-full h-full px-4 lg:px-6 flex flex-col justify-between">

    <div className="pt-10 lg:pt-12">

      <p className="uppercase tracking-[0.3em] text-white/60 text-sm mb-5">
        LIVE BUSINESS UPDATES
      </p>

      <AnimatePresence mode="wait">
        <motion.h2
          key={businessCurrent}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white max-w-2xl"
        >
          {businessSlides[businessCurrent].title}
        </motion.h2>
      </AnimatePresence>

    </div>

    <div className="flex justify-end pb-8 lg:pb-10">

      <div className="max-w-lg text-right">

        <AnimatePresence mode="wait">
          <motion.p
            key={businessCurrent}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-medium"
          >
            {businessSlides[businessCurrent].text}
          </motion.p>
        </AnimatePresence>

        <motion.div
          key={businessCurrent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="mt-6 flex justify-end"
        >
          <a
            href={businessSlides[businessCurrent].link}
            target="_blank"
            rel="noreferrer"
            className="
              w-[220px]
              h-[46px]
              flex items-center justify-center
              text-center
              text-sm font-semibold
              rounded-xl
              bg-white/10 backdrop-blur-md
              border border-white/40
              text-white
              hover:bg-white hover:text-[#0D6E4F]
              transition shadow-lg
            "
          >
            {businessSlides[businessCurrent].button}
          </a>
        </motion.div>

      </div>

    </div>

  </div>

  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20">
    <motion.div
      key={businessCurrent}
      initial={{ width: "0%" }}
      animate={{ width: "100%" }}
      transition={{ duration: 5, ease: "linear" }}
      className="h-full bg-[#0D6E4F]"
    />
  </div>

</div>

</div>

{/* ================= THIRD ROW ================= */}
<div className="grid grid-cols-1 lg:grid-cols-[47%_51%] gap-2 lg:gap-5 mt-4">

  {/* LEFT CARD */}
  <div
    className="
      group relative cursor-pointer
      rounded-tr-[40px]
      overflow-hidden
      border border-[#E5E7EB]
      bg-[#F1F3E9]
      shadow-sm
      transition-all duration-500
      hover:-translate-y-2
      hover:shadow-[0_25px_60px_-25px_rgba(13,110,79,0.25)]
      h-[55vh] lg:h-[60vh]
    "
  >

    <div className="h-1 w-full bg-gradient-to-r from-[#224C26] to-[#0D2040]" />

    <div className="relative p-8 h-full flex flex-col justify-between">

      <div>

        <h3 className="text-2xl xl:text-3xl font-bold text-[#0D2040] leading-tight">
          Personal Tax
        </h3>

        <p className="mt-3 text-sm text-[#0D2040]/70 leading-6">
          Simple, compliant and stress-free personal tax solutions.
        </p>

        <div className="mt-4 space-y-2">

          {[
            "Self Assessment",
            "Rental Income Tax",
            "Capital Gains",
          ].map((item, i) => (
            <div
              key={i}
              className="
                flex items-center justify-between
                px-3 py-2 rounded-xl
                bg-white/70
              "
            >
              <span className="text-sm text-[#0D2040]">
                {item}
              </span>

              <span className="text-[#224C26] font-bold text-xl">
                →
              </span>
            </div>
          ))}

        </div>

      </div>

<div className="mt-auto flex items-center justify-between border-t border-[#E5E7EB] pt-4">
        <span className="text-sm font-semibold text-[#0D6E4F]">
          Explore Category
        </span>

        <div
          className="
            w-11 h-11
            rounded-full
            bg-[#0D6E4F]
            text-white
            flex items-center justify-center
          "
        >
          →
        </div>

      </div>

    </div>

  </div>

  {/* HMRC SLIDER */}
  <div className="hidden lg:block rounded-tl-[40px] overflow-hidden h-[55vh] lg:h-[60vh] relative bg-[#224C26]">

    <div className="absolute inset-0 bg-gradient-to-br from-[#224C26] to-[#0D2040]" />

    <a
      href="https://www.gov.uk/government/organisations/hm-revenue-customs"
      target="_blank"
      rel="noreferrer"
      className="absolute inset-0 z-10"
    />

    <div className="relative z-20 w-full h-full px-4 lg:px-6 flex flex-col justify-between text-white">

      <div className="pt-10 lg:pt-12">

        <p className="uppercase tracking-[0.3em] text-white/60 text-sm mb-5">
          HMRC UPDATES
        </p>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold max-w-2xl">
          HMRC Tax & Compliance
        </h2>

      </div>

      <div className="flex justify-end pb-8 lg:pb-10">

        <div className="max-w-lg text-right">

          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed font-medium">
            Recent HMRC tax guidance, compliance changes and UK business regulation updates.
          </p>

          <div className="mt-6 flex justify-end">
            <a
              href="https://www.gov.uk/government/organisations/hm-revenue-customs"
              target="_blank"
              rel="noreferrer"
              className="
                w-[220px]
                h-[46px]
                flex items-center justify-center
                text-center
                text-sm font-semibold
                rounded-xl
                bg-white/10 backdrop-blur-md
                border border-white/40
                text-white
                hover:bg-white hover:text-[#0D6E4F]
                transition shadow-lg
              "
            >
              HMRC
            </a>
          </div>

        </div>

      </div>

    </div>

  </div>

</div>



      </div>
    </div>
  );
};

export default Layout;