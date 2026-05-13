import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Database,
  FileText,
  TrendingUp,
} from "lucide-react";

import img from "../../assets/bookkeeping.jpg";

/* =========================
   Data
========================= */
const benefits = [
  "Better control of your business finances",
  "Future financial planning support",
  "Accurate tax calculation & compliance",
  "Avoid penalties and overpayment of tax",
  "Track expenses in real-time",
  "Know what you are owed and what you owe",
  "Easier access to loans and credit",
  "Reduce accounting time and cost",
];

/* =========================
   Animation
========================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const fadeSide = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0 },
};

const Bookkeeping = () => {
  return (
    <div className="bg-[#f5f8ff] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-24 md:py-32 text-white overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#04152d] via-[#0d2f68] to-[#0a3d91]" />

        {/* Glow */}
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-cyan-400/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-blue-500/20 blur-[140px] rounded-full" />

        <div className="relative max-w-5xl mx-auto px-5 text-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-xs md:text-sm">
              <Database size={14} />
              Professional Bookkeeping Services
            </div>

            <h1 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
              Accurate Bookkeeping
              <span className="block text-cyan-300">
                For Smarter Business Control
              </span>
            </h1>

            <p className="mt-5 text-white/70 text-sm md:text-lg leading-7 max-w-3xl mx-auto">
              Bookkeeping is a statutory requirement for every business. We ensure
              your financial records are accurate, up-to-date, and fully compliant.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* TEXT */}
          <motion.div
            variants={fadeSide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-black text-[#0b2b61]">
              Why Bookkeeping Matters
            </h2>

            <p className="mt-5 text-gray-600 leading-7 text-sm md:text-base">
              Bookkeeping is a legal requirement and the foundation of financial success.
              Without accurate records, business decisions become risky and unclear.
            </p>

            <p className="mt-3 text-gray-600 leading-7 text-sm md:text-base">
              We handle your bookkeeping so you can focus on growing your business.
            </p>

            {/* BENEFITS */}
            <div className="mt-8 space-y-3">
              {benefits.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm border border-slate-100"
                >
                  <CheckCircle2 className="text-cyan-500 mt-1" size={18} />
                  <span className="text-slate-700 text-sm md:text-base font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            variants={fadeSide}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={img}
                alt="Bookkeeping dashboard"
                className="w-full h-[300px] md:h-[500px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-6 left-6 bg-white/90 backdrop-blur-xl shadow-lg px-4 py-3 rounded-xl flex items-center gap-2 text-sm font-bold">
              <FileText className="text-cyan-500" size={18} />
              Certified Xero Advisors
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= XERO ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-5 text-center">
          <TrendingUp className="mx-auto text-cyan-500" size={40} />

          <h2 className="mt-4 text-2xl md:text-4xl font-black text-[#0b2b61]">
            Powered by Modern Accounting Technology
          </h2>

          <p className="mt-5 text-gray-600 text-sm md:text-base leading-7">
            We use cloud accounting tools like <b>Xero</b> to ensure accuracy,
            automation, and real-time financial visibility.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-20 md:py-28 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-[#04142d] to-[#0a3d91]" />

        <div className="relative max-w-3xl mx-auto px-5 text-center text-white">

          <h2 className="text-2xl md:text-4xl font-black">
            Let Us Handle Your Bookkeeping
          </h2>

          <p className="mt-5 text-white/70 text-sm md:text-base">
            Book a free consultation and simplify your financial management today.
          </p>

          <button className="mt-8 group relative overflow-hidden px-8 md:px-10 py-4 md:py-5 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold w-full sm:w-auto">

            <span className="absolute top-0 left-[-120%] w-[40%] h-full bg-white/30 rotate-12 blur-md group-hover:left-[140%] transition-all duration-1000" />

            <span className="relative flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base">
              Free Consultation
              <ArrowRight size={18} />
            </span>

          </button>

          <p className="mt-5 text-white/60 text-sm">
            Call: 020 7278 0007
          </p>

        </div>
      </section>

    </div>
  );
};

export default Bookkeeping;