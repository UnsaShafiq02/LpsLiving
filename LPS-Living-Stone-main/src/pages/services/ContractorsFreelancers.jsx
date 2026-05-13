import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const items = [
  {
    title: 'Intermediaries Legislation (IR35)',
    content: `
Although you are working as a freelancer/contractor, in HMRC’s opinion you may still be an employee of the company you work for. Therefore, you may end up paying significantly more tax and National Insurance than expected.

To determine your IR35 status, it is best to seek expert advice and have your contract and working arrangements reviewed.

Does IR35 affect all contractors?
All contractors must consider IR35, but not all fall inside it. Determination depends on multiple factors.

IR35 applies if you work through an intermediary (limited company or partnership) and do not meet HMRC’s definition of self-employment.

IR35 Review Services:
• Detailed analysis of contractor status  
• Contract review service  
• Advice on IR35 implications and HMRC enquiry support
    `,
  },
  {
    title: 'Construction Industry Scheme (CIS)',
    content: `
In addition to IR35, construction subcontractors must also comply with CIS rules.

CIS applies where:
1. Contractors
2. Construction operations (s74 Finance Act 2004)
3. Subcontractors (self-employed, company or partnership)

All three conditions must be met to fall under CIS.

Tax Deduction Rates:
• Gross: 0%  
• Net: 20%  
• No registration: 30%

The purpose of CIS is to reduce tax evasion in the construction industry and ensure proper tax collection.
    `,
  },
];

const ContractorsFreelancers = () => {
  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="bg-[#f6f9ff] overflow-hidden">

      {/* HERO */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#04152d] via-[#0d2f68] to-[#0a3d91]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-black">
            Contractors & Freelancers
          </h1>

          <p className="mt-5 text-white/70 text-sm md:text-lg leading-7 max-w-3xl mx-auto">
            Expert tax and compliance support for contractors, freelancers, and self-employed professionals.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-gray-700 text-sm md:text-base leading-7">
          <p>
            Whether you are an experienced contractor or freelancer or thinking to become one,
            it is important to select the appropriate business structure to maximise tax efficiency.
          </p>
        </div>
      </section>

      {/* ACCORDION */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-5 space-y-5">

          {items.map((item, i) => {
            const isOpen = active === i;

            return (
              <div
                key={i}
                className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden"
              >

                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-6 md:p-7 text-left hover:bg-slate-50 transition"
                >
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#0b2b61]">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 mt-1">
                      Click to expand details
                    </p>
                  </div>

                  <ChevronDown
                    className={`transition-transform duration-300 text-slate-500 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-7 md:pb-7 text-sm md:text-base text-slate-700 leading-7 whitespace-pre-line">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}

        </div>
      </section>

      {/* INFO SECTION */}
      <section className="py-14 md:py-20 bg-white border-t">
        <div className="max-w-5xl mx-auto px-6 space-y-10 text-gray-700 text-sm md:text-base leading-7">

          <div>
            <h3 className="font-bold text-[#0b2b61] text-lg mb-2">
              Business Structure Guidance
            </h3>

            <ul className="list-disc pl-5 space-y-1">
              <li>Self Employed</li>
              <li>Partnership</li>
              <li>Umbrella Company</li>
              <li>Limited Company</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#0b2b61] text-lg mb-2">
              Our Clients Include
            </h3>

            <ul className="list-disc pl-5 space-y-1">
              <li>Makeup Artists / Beauticians</li>
              <li>Teachers and Trainers</li>
              <li>IT Specialists</li>
              <li>Locum Doctors</li>
              <li>Management Consultants</li>
              <li>Builders</li>
              <li>Uber Drivers</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border">
            <p>
              Call <b>020 7278 0007</b> or book a FREE consultation with our accountants.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#04142d] to-[#0a3d91]" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">

          <h2 className="text-2xl md:text-4xl font-black">
            Need Contractor Tax Advice?
          </h2>

          <p className="mt-5 text-white/70">
            Get expert IR35 and CIS guidance tailored to your situation.
          </p>

          <button className="mt-8 group relative overflow-hidden px-9 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold">

            <span className="absolute top-0 left-[-120%] w-[40%] h-full bg-white/30 rotate-12 blur-md group-hover:left-[140%] transition-all duration-1000" />

            <span className="relative flex items-center justify-center gap-2">
              Free Consultation
              <ArrowRight size={18} />
            </span>

          </button>

        </div>
      </section>

    </div>
  );
};

export default ContractorsFreelancers;