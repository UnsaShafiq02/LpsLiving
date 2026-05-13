import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

import img1 from '../../assets/LPS-Buying-Property.jpg';
import img2 from '../../assets/LPS_-For-Rent.jpg';
import img3 from '../../assets/LPS_Sell-Property.jpg';

const items = [
  {
    title: 'When You Buy',
    img: img1,
    content:
      'If you’re buying land or property, you’ll need to pay Stamp Duty Land Tax (SDLT). The amount is calculated as a percentage of the property’s value.',
  },
  {
    title: 'When You Let Out',
    img: img2,
    content: `
Income Tax

If you’re a landlord receiving rent from one or more properties, you must submit a tax return to HMRC annually and pay tax on rental income.

Allowable expenses include:
• Mortgage interest  
• Insurance  
• Council tax  
• Travel costs  
• Maintenance  
• Advertising  
• Agent fees  
• Accountancy fees
    `,
  },
  {
    title: 'When You Sell Property',
    img: img3,
    content:
      'On selling property, you may be liable for Capital Gains Tax on profit. There is an annual tax-free allowance which varies yearly.',
  },
];

const RentalIncomePropertyTax = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="bg-[#f6f9ff] overflow-hidden">

      {/* HERO */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#04152d] via-[#0d2f68] to-[#0a3d91]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-black">
            Rental Income & Property Tax
          </h1>

          <p className="mt-5 text-white/70 text-sm md:text-lg leading-7 max-w-3xl mx-auto">
            Helping landlords and property investors structure, optimize, and reduce tax liability across every stage of ownership.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-gray-700 text-sm md:text-base leading-7">
          <p>
            <b>Rental Income & Property Tax:</b> If you are an experienced landlord or planning to become one,
            we help minimise tax liability at every stage of property ownership.
          </p>
        </div>
      </section>

      {/* ACCORDION */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto px-5 space-y-5">

          {items.map((item, i) => {
            const isOpen = active === i;

            return (
              <motion.div
                key={i}
                layout
                className="rounded-3xl border bg-white shadow-lg overflow-hidden"
              >

                {/* HEADER */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-6 md:p-7 text-left"
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
                    className={`transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* BODY */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 md:px-7 md:pb-7 grid md:grid-cols-3 gap-6">

                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full h-[150px] md:h-[170px] object-cover rounded-2xl"
                        />

                        <div className="md:col-span-2 text-sm md:text-base text-slate-700 leading-7 whitespace-pre-line">
                          {item.content}
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>
      </section>

      {/* LEGAL SECTION */}
      <section className="py-14 md:py-20 bg-white border-t">
        <div className="max-w-5xl mx-auto px-6 space-y-8 text-gray-700 text-sm md:text-base leading-7">

          <div>
            <h3 className="font-bold text-[#0b2b61] text-lg mb-2">
              Tax Planning for Property Owners
            </h3>
            <p>
              We help landlords optimize tax through proper planning of expenses, structure, and reliefs.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#0b2b61] text-lg mb-2">
              Key Areas We Cover
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Stamp Duty Planning</li>
              <li>Rental Income Optimization</li>
              <li>Capital Gains Tax Advice</li>
              <li>Mortgage Interest Relief</li>
            </ul>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border">
            <p>
              Call <b>020 7278 0007</b> or book a FREE consultation with our property tax experts.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#04142d] to-[#0a3d91]" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">

          <h2 className="text-2xl md:text-4xl font-black">
            Need Property Tax Advice?
          </h2>

          <p className="mt-5 text-white/70">
            Speak with experts to reduce your tax burden legally.
          </p>

          <button className="mt-8 px-9 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-600 font-bold inline-flex items-center gap-2">
            Free Consultation
            <ArrowRight size={18} />
          </button>

        </div>
      </section>

    </div>
  );
};

export default RentalIncomePropertyTax;