import React from 'react';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    title: 'Service Charge Accounts',
    desc: 'Specialist accounting for managing agents & property portfolios.',
    path: '/servicecharge',
    items: [
      { name: 'Service Charge Accounting', path: '/services/service-charge' },
      { name: 'Property Management Accounts', path: '/services/property' },
      { name: 'Year-end Reporting', path: '/services/year-end' },
    ],
  },
  {
    title: 'Business Services',
    desc: 'Complete support for UK businesses & growth-focused companies.',
    path: '/services',
    items: [
      { name: 'Accounts & Taxation', path: '/services/accounts-taxation' },
      { name: 'Bookkeeping', path: '/services/bookkeeping' },
      { name: 'Payroll & VAT', path: '/services/payroll' },
      { name: 'Business Advisory', path: '/services/advisory' },
    ],
  },
  {
    title: 'Personal Tax',
    desc: 'Simple, compliant and stress-free personal tax solutions.',
    path: '/services/personal-tax',
    items: [
      { name: 'Self Assessment', path: '/services/self-assessment' },
      { name: 'Rental Income Tax', path: '/services/rental-property-tax' },
      { name: 'Capital Gains', path: '/services/capital-gains' },
    ],
  },
];

const ShortServices = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">

      {data.map((section, i) => (
        <div
          key={i}
          onClick={() => navigate(section.path)}
          className="
            group relative cursor-pointer
            rounded-3xl
            overflow-hidden
            border border-[#E5E7EB]
            bg-[#ECE5DD]
            shadow-sm
            transition-all duration-500
            hover:-translate-y-2
            hover:shadow-[0_25px_60px_-25px_rgba(13,110,79,0.25)]
          "
        >

          {/* TOP ACCENT BAR */}
          <div className="h-1 w-full bg-gradient-to-r from-[#224C26] to-[#0D2040]" />

          {/* soft glow accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#224C26]/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
            <div className="absolute bottom-[-40px] left-[-40px] w-36 h-36 bg-[#0D2040]/10 blur-2xl opacity-0 group-hover:opacity-100 transition" />
          </div>

          {/* CONTENT */}
          <div className="relative p-6">

            {/* TITLE */}
            <h3
              className="
                text-lg font-bold text-[#0D2040]
                group-hover:text-[#224C26]
                transition-all duration-300
              "
            >
              {section.title}
            </h3>

            {/* DESC */}
            <p className="mt-2 text-xs text-[#0D2040]/70 leading-5">
              {section.desc}
            </p>

            {/* ITEMS */}
            <div className="mt-5 space-y-2">

              {section.items.map((item, j) => (
                <div
                  key={j}
                  className="
                    flex items-center justify-between
                    px-3 py-2 rounded-xl
                    bg-white/60
                    hover:bg-[#224C26]/10
                    transition-all duration-300
                    group/item
                  "
                >
                  <span className="text-sm text-[#0D2040] group-hover/item:text-[#224C26] transition">
                    {item.name}
                  </span>

                  <span className="text-[#224C26] font-bold group-hover/item:translate-x-1 transition">
                    →
                  </span>
                </div>
              ))}

            </div>

            {/* FOOTER ACTION */}
            <div className="mt-6 flex items-center justify-between border-t border-[#E5E7EB] pt-4">

              <span className="text-xs font-semibold text-[#0D2040]">
                Explore Category
              </span>

              <div
                className="
                  w-9 h-9
                  rounded-full
                  bg-[#224C26]
                  text-white
                  flex items-center justify-center
                  shadow-md
                  group-hover:rotate-12 group-hover:scale-110
                  transition-all duration-300
                "
              >
                →
              </div>

            </div>

          </div>

        </div>
      ))}

    </div>
  );
};

export default ShortServices;