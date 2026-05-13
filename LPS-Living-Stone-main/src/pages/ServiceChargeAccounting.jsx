import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

import img from '../assets/flat.png';

const services = [
  'Preparation & certification of service charge accounts',
  'Financial statements for RMCs & RTMCos',
  'Corporation tax services',
  'Statutory & company secretarial services',
  'Trust tax returns',
  'Registered office & mail forwarding',
  'Accounting system implementation',
  'Assistance in management handovers',
  'Training for in-house accountants/bookkeepers',
  'Lease-based service charge advisory',
];

const ServiceChargeAccounting = () => {
  return (
    <div className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-28 overflow-hidden bg-white">

        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#F9FAFB]" />

        {/* soft glow */}
        <div className="absolute -top-40 left-[-120px] w-[520px] h-[520px] bg-[#0D6E4F]/5 blur-3xl rounded-full" />
        <div className="absolute bottom-[-180px] right-[-120px] w-[520px] h-[520px] bg-[#0D2040]/5 blur-3xl rounded-full" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-6xl font-black leading-tight text-[#0D2040]">
            Service Charge Accounting
          </h1>

          <p className="mt-6 text-[#0D6E4F] text-lg md:text-xl leading-8 max-w-3xl mx-auto">
            Leading specialists in service charge accounting for residential and
            commercial properties across London and the UK.
          </p>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-14 bg-white">

        <div className="max-w-5xl mx-auto px-6 text-[#0D2040] text-base leading-8">

          <p>
            We are recognised specialists in service charge accounting, supporting
            residential and commercial property portfolios — from small self-managed
            blocks to large managing agents.
          </p>

          <p className="mt-5 text-[#0D6E4F] font-medium">
            We currently support over <b className="text-[#0D2040]">600+ service charge clients</b>
            nationwide with accuracy, compliance, and transparent reporting.
          </p>

        </div>
      </section>

      {/* ================= IMAGE + SERVICES ================= */}
      <section className="py-20 md:py-28 bg-white">

        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={img}
              alt="Service charge accounting illustration"
              className="rounded-3xl shadow-lg w-full object-cover h-[440px]"
            />
          </motion.div>

          {/* SERVICES */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <h2 className="text-3xl md:text-4xl font-black text-[#0D2040]">
              Complete Service Charge Solutions
            </h2>

            <p className="mt-4 text-[#0D6E4F] leading-7">
              End-to-end accounting solutions designed for landlords, managing agents,
              and property professionals.
            </p>

            <div className="mt-8 space-y-4">

              {services.map((item, i) => (
                <div
                  key={i}
                  className="
                    flex items-start gap-3
                    bg-white
                    border border-[#E5E7EB]
                    p-5 rounded-2xl
                    hover:bg-[#0D6E4F]/5
                    hover:border-[#0D6E4F]
                    hover:shadow-md
                    transition-all duration-300
                    cursor-pointer
                  "
                >
                  <CheckCircle2 className="text-[#0D6E4F] mt-1" size={18} />

                  <span className="text-[#0D2040] text-base leading-7 font-medium group-hover:text-[#0D6E4F]">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </motion.div>

        </div>
      </section>

      {/* ================= GUIDANCE ================= */}
      <section className="py-20 bg-white border-t border-[#E5E7EB]">

        <div className="max-w-5xl mx-auto px-6 space-y-12 text-[#0D2040] text-base leading-8">

          <div>
            <h3 className="text-2xl font-black text-[#0D2040] mb-3">
              Guidance & Standards
            </h3>
            <p className="text-[#0D6E4F]">
              Accounting and reporting is prepared in line with industry standards issued by
              ACCA, ICAEW, ICAS, ARMA, and RICS.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-black text-[#0D2040] mb-3">
              Legal Framework
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-[#0D2040]">
              <li className="hover:text-[#0D6E4F] transition">Landlord and Tenant Act 1985</li>
              <li className="hover:text-[#0D6E4F] transition">Landlord and Tenant Act 1987</li>
              <li className="hover:text-[#0D6E4F] transition">Commonhold and Leasehold Reform Act 2002</li>
              <li className="hover:text-[#0D6E4F] transition">Service Charge Management Code (2009)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-black text-[#0D2040] mb-3">
              Tribunal Support
            </h3>
            <p className="text-[#0D6E4F]">
              We assist landlords and managing agents in interpreting tribunal decisions
              and ensuring compliance with lease obligations.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 overflow-hidden bg-white">

        <div className="absolute inset-0 bg-gradient-to-r from-[#0D2040] to-[#0D6E4F]" />

        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl md:text-5xl font-black">
            Need Expert Service Charge Support?
          </h2>

          <p className="mt-6 text-white/80 text-lg leading-7">
            Speak to our specialists for accurate, compliant and efficient reporting.
          </p>

          <button
            className="
              mt-10
              px-10 py-4
              rounded-2xl
              bg-[#0D6E4F]
              hover:bg-[#0b5c42]
              font-bold
              shadow-md
              transition
            "
          >
            Book Consultation
          </button>

        </div>
      </section>

    </div>
  );
};

export default ServiceChargeAccounting;