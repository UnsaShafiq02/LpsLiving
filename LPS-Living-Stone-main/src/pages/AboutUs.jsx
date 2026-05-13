import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building2,
  Users2,
} from 'lucide-react';

import logo from '../assets/logo.png';

const industries = [
  'Press & Television Media',
  'Fashion & Design',
  'Medical Professionals',
  'IT Consultants',
  'Games & Recreation Stores',
  'NGOs',
  'Security & Man-Guarding',
  'Educational Establishments',
  'Import & Export',
  'E-Commerce',
  'Retail & General',
  'Restaurant Franchises',
  'Construction',
  'Service Charge Accounting',
];

const team = [
  {
    name: 'Shahbaz Ahmed',
    role: 'ACA',
    icon: ShieldCheck,
    desc: 'Managing Director with extensive expertise in SME accounting, tax planning, service charge accounting, and HMRC compliance.',
  },
  {
    name: 'Ronnie Jacob',
    role: 'FCA',
    icon: Building2,
    desc: 'Over 40 years of experience specialising in taxation, family businesses, valuations, and financial strategy.',
  },
  {
    name: 'Philippa Aaronson',
    role: 'BSc FFA',
    icon: Sparkles,
    desc: 'Experienced pensions actuary with expertise in retirement planning and investment advisory.',
  },
  {
    name: 'Sibtain Aslam',
    role: 'ACCA',
    icon: Users2,
    desc: 'Practice Manager focused on payroll, pensions, HMRC compliance, and operational excellence.',
  },
];

const AboutUs = () => {
  return (
    <div className="bg-[#224C26] text-white overflow-hidden font-['Neogrotesk']">

      {/* ================= HERO ================= */}
      <section className="relative pt-44 pb-36 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#224C26] via-[#0B5C42] to-[#06402E]" />

        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full" />

        <div className="relative max-w-[1450px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* TEXT */}
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}>

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-[0.25em]">
              <Sparkles size={14} />
              Elite Accounting Solutions
            </div>

            <h1 className="mt-10 text-6xl md:text-7xl font-black leading-[1.05]">
              Accounting
              <span className="block text-white/80">
                Reimagined
              </span>
            </h1>

            <p className="mt-10 text-white/80 text-lg md:text-xl leading-9 max-w-2xl">
              LPS Livingstone combines modern technology with decades of financial expertise
              to deliver precision-driven accounting and advisory services.
            </p>

            <div className="mt-14 flex flex-wrap gap-5">

              <button className="bg-white text-[#224C26] px-10 py-5 rounded-2xl font-bold hover:bg-white/90 transition flex items-center gap-3">
                Explore Services <ArrowRight size={18} />
              </button>

              <button className="border border-white/30 px-10 py-5 rounded-2xl hover:bg-white/10 transition">
                Contact Our Team
              </button>

            </div>

          </motion.div>

          {/* LOGO */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}>

            <div className="rounded-[45px] bg-white/10 border border-white/20 backdrop-blur-xl p-12">

              <img
                src={logo}
                alt="LPS"
                className="w-[360px] md:w-[520px] mx-auto hover:scale-105 transition"
              />

            </div>

          </motion.div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-28">

        <div className="max-w-[1450px] mx-auto px-6 grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {[
            { title: 'Trusted Experts', desc: 'Decades of professional accounting experience.' },
            { title: 'Modern Technology', desc: 'Advanced systems for efficient business solutions.' },
            { title: 'Client Focused', desc: 'Tailored services designed around your goals.' },
            { title: 'Business Growth', desc: 'Helping businesses scale confidently.' },
          ].map((item, i) => (
            <div key={i} className="bg-white/10 border border-white/20 rounded-3xl p-9 hover:bg-white/15 transition">

              <div className="w-14 h-14 rounded-2xl bg-white text-[#224C26] flex items-center justify-center">
                <CheckCircle2 size={26} />
              </div>

              <h3 className="mt-7 text-2xl font-bold">{item.title}</h3>
              <p className="mt-4 text-white/80">{item.desc}</p>

            </div>
          ))}

        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="py-32 bg-[#0B5C42]">

        <h2 className="text-center text-5xl md:text-6xl font-black">
          Industries We Serve
        </h2>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {industries.map((industry, i) => (
            <div key={i} className="bg-white/10 border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition">

              <div className="flex items-center gap-4">

                <div className="w-11 h-11 bg-white text-[#224C26] flex items-center justify-center rounded-xl">
                  <CheckCircle2 size={18} />
                </div>

                <span className="font-semibold">{industry}</span>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-32 bg-[#06402E]">

        <h2 className="text-center text-5xl md:text-6xl font-black">
          Meet Our Professionals
        </h2>

        <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {team.map((member, i) => {
            const Icon = member.icon;

            return (
              <div key={i} className="bg-white/10 border border-white/20 rounded-3xl overflow-hidden hover:bg-white/15 transition">

                <div className="h-32 flex items-center justify-center bg-white/5">
                  <Icon size={30} />
                </div>

                <div className="p-7">

                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <span className="text-white/80 text-sm">{member.role}</span>
                  <p className="mt-4 text-white/80">{member.desc}</p>

                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 text-center">

        <h2 className="text-5xl md:text-6xl font-black">
          Ready To Work With Elite Accountants?
        </h2>

        <button className="mt-12 bg-white text-[#224C26] px-12 py-6 rounded-2xl font-bold hover:bg-white/90 transition">
          Contact Us Today
        </button>

      </section>

    </div>
  );
};

export default AboutUs;