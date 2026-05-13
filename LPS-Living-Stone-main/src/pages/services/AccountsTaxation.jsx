import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, TrendingUp, Landmark } from 'lucide-react';

import img1 from '../../assets/accounts1.png';
import img2 from '../../assets/accounts2.png';

const features = [
  'Choosing a tax-efficient business structure',
  'VAT planning and advice',
  'Corporation tax advice',
  'Maximising tax relief on acquisitions',
  'Minimising tax on disposals',
  'Tax schemes & allowances optimisation',
  'HMRC compliance & investigations support',
];

const AccountsTaxation = () => {
  return (
    <div className="bg-white overflow-hidden font-['Neogrotesk']">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden py-20 md:py-32 text-white">

        <div className="absolute inset-0 bg-gradient-to-br from-[#0D6E4F] via-[#0b5c42] to-[#0D6E4F]" />

        <div className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] bg-white/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] bg-white/10 blur-[140px] rounded-full" />

        <div className="relative max-w-6xl mx-auto px-5 text-center">

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl text-base">
            <Landmark size={22} />
            Accounts & Taxation Services
          </div>

          <h1 className="mt-10 text-5xl md:text-7xl font-black leading-tight">
            Elite Financial
            <span className="block text-white">Control System</span>
          </h1>

          <p className="mt-6 text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-8">
            Strategic accounting and taxation services designed for clarity, compliance, and growth.
          </p>

        </div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="py-20 md:py-28 bg-white">

        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="flex items-center gap-3 text-[#0D6E4F] font-semibold text-lg">
              <TrendingUp size={20} />
              Year-End Strategic Accounting
            </div>

            <h2 className="mt-4 text-4xl md:text-6xl font-black text-[#0D6E4F] leading-tight">
              We Don’t Just Prepare Accounts
              <span className="block text-[#0D6E4F]">We Engineer Growth</span>
            </h2>

            <p className="mt-6 text-[#0D6E4F] text-lg leading-8">
              Accounting is not reporting — it’s decision power for your business.
            </p>

            <p className="mt-4 text-[#0D6E4F] text-lg leading-8">
              We actively guide your financial strategy throughout the year.
            </p>

            {/* FEATURES */}
            <div className="mt-10 grid gap-4">

              {features.map((item, i) => (
                <div
                  key={i}
                  className="
                    flex items-start gap-3 p-5 rounded-2xl
                    bg-[#0D6E4F]
                    text-white
                    border border-[#0D6E4F]
                    shadow-sm
                    hover:bg-[#0b5c42]
                    hover:scale-[1.02]
                    transition-all duration-300
                    cursor-pointer
                  "
                >
                  <CheckCircle2 className="text-white mt-1" size={20} />
                  <span className="text-white text-lg font-medium leading-7">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative space-y-6"
          >

            <div className="rounded-[28px] overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">
              <img src={img1} className="w-full h-[360px] object-cover" />
            </div>

            <div className="rounded-[28px] overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300">
              <img src={img2} className="w-full h-[360px] object-cover" />
            </div>

            <div className="absolute bottom-6 left-6 bg-[#0D6E4F] text-white px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 font-bold">
              <ShieldCheck className="text-white" size={18} />
              Trusted Experts
            </div>

          </motion.div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden">

        <div className="absolute inset-0 bg-[#0D6E4F]" />

        <div className="relative max-w-3xl mx-auto text-center text-white px-5">

          <h2 className="text-4xl md:text-6xl font-black">
            Build a Smarter Financial Future
          </h2>

          <p className="mt-6 text-white/90 text-lg">
            Book a free consultation with our expert accountants today.
          </p>

          <button className="
            mt-10 px-10 py-5
            bg-white text-[#0D6E4F]
            font-bold rounded-2xl
            hover:bg-[#f3f3f3]
            hover:scale-105
            transition
            flex items-center gap-3 mx-auto
          ">
            Free Consultation
            <ArrowRight size={18} />
          </button>

        </div>
      </section>

    </div>
  );
};

export default AccountsTaxation;