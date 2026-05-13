import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  BriefcaseBusiness,
  Landmark,
  FileCheck2,
  ChevronRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import serviceImage from "../assets/serviceImage.png";

const serviceColumns = [
  {
    title: "Accounts & Taxation",
    icon: Landmark,
    route: "/services/accounts-taxation",
    items: [
      { name: "Accounts and Taxation", slug: "accounts-taxation" },
      { name: "Bookkeeping", slug: "bookkeeping" },
      { name: "Payroll", slug: "payroll" },
      { name: "VAT", slug: "vat" },
      { name: "Rental Income and Property Tax", slug: "rental-property-tax" },
      { name: "Contractors & Freelancers", slug: "contractors-freelancers" },
    ],
  },
  {
    title: "Business Advisory & Support",
    icon: BriefcaseBusiness,
    route: "/services/business-advisory",
    items: [
      { name: "Business Advisory", slug: "business-advisory" },
      { name: "Business Startup Advice", slug: "startup-advice" },
      { name: "HMRC Investigation / Enquiries", slug: "hmrc-investigation" },
      { name: "IR35 Review", slug: "ir35-review" },
      { name: "International Business", slug: "international-business" },
      { name: "Company Formation", slug: "company-formation" },
    ],
  },
  {
    title: "Other Services",
    icon: FileCheck2,
    route: "/services/other-services",
    items: [
      { name: "Urgent Deadlines / Same Day Services", slug: "urgent-services" },
      { name: "Registered Office & Mail Forwarding", slug: "mail-forwarding" },
      { name: "Tax Credits & Allowances", slug: "tax-credits" },
      { name: "VISA Application", slug: "visa-application" },
    ],
  },
];

const Services = () => {
  return (
    <div className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-28 overflow-hidden bg-white">

        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-[#F9FAFB]" />

        <div className="absolute -top-40 left-[-120px] w-[520px] h-[520px] bg-[#0D6E4F]/5 blur-3xl rounded-full" />
        <div className="absolute bottom-[-160px] right-[-120px] w-[520px] h-[520px] bg-[#0D2040]/5 blur-3xl rounded-full" />

        <div className="relative max-w-[1450px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-5 py-2 text-[#0D6E4F] text-xs uppercase tracking-[0.25em] shadow-sm">
              <Sparkles size={14} />
              Premium Financial Services
            </div>

            <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl font-black leading-[1.05] text-[#0D2040]">
              Smart Business
              <span className="block text-[#0D6E4F]">
                Financial Solutions
              </span>
            </h1>

            <p className="mt-8 text-[#6B7280] text-lg leading-8 max-w-2xl">
              We provide accounting, taxation, bookkeeping, advisory, and compliance services
              built for modern businesses and professionals.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#services-grid"
                className="rounded-2xl bg-[#0D6E4F] hover:bg-[#0b5c42] px-8 py-4 text-white font-bold uppercase tracking-[0.15em] transition"
              >
                Explore Services <ArrowRight className="inline ml-2" size={18} />
              </a>

              <Link
                to="/contact"
                className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-4 text-[#0D2040] hover:bg-[#F9FAFB] transition"
              >
                Contact Our Team
              </Link>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="rounded-[40px] overflow-hidden border border-[#E5E7EB] bg-white p-4 shadow-sm">
              <img
                src={serviceImage}
                alt="Services overview"
                className="w-full h-[400px] md:h-[520px] object-cover rounded-[30px]"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-24 bg-white">

        <div className="max-w-[1450px] mx-auto px-6 grid lg:grid-cols-2 gap-12">

          <div>

            <h2 className="text-4xl md:text-5xl font-black text-[#0D2040]">
              Tailored Accounting & Advisory Services
            </h2>

            <div className="mt-10 space-y-5">

              {[
                "Professional Financial Planning",
                "Business Growth Strategies",
                "Tax Efficient Structures",
                "Fast & Reliable Support",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-[#E5E7EB]"
                >
                  <CheckCircle2 className="text-[#0D6E4F]" />
                  <span className="text-[#0D2040] font-medium">{item}</span>
                </div>
              ))}

            </div>

          </div>

          <div className="relative bg-gradient-to-br from-[#0D2040] to-[#0D6E4F] p-10 rounded-[40px] text-white overflow-hidden">

            <ShieldCheck size={90} className="opacity-20 absolute top-6 right-6" />

            <h3 className="text-3xl md:text-4xl font-black">
              Trusted Across Industries
            </h3>

            <p className="mt-6 text-white/75 leading-7">
              We help businesses achieve compliance, stability, and long-term growth.
            </p>

            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 bg-white text-[#0D2040] px-6 py-3 rounded-xl font-bold"
            >
              Learn More <ArrowRight size={18} />
            </Link>

          </div>

        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section id="services-grid" className="py-24 bg-[#F9FAFB]">

        <div className="max-w-[1450px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#0D2040]">
            Professional Services
          </h2>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1450px] mx-auto px-6">

          {serviceColumns.map((column, index) => {
            const Icon = column.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-[30px] border border-[#E5E7EB] shadow-sm hover:shadow-md transition"
              >

                <div className="h-32 bg-gradient-to-r from-[#0D2040] to-[#0D6E4F] flex items-end p-6">
                  <Icon className="text-white" size={38} />
                </div>

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-[#0D2040]">
                    {column.title}
                  </h3>

                  <div className="mt-6 space-y-3">

                    {column.items.map((item, i) => (
                      <Link
                        key={i}
                        to={`/services/${item.slug}`}
                        className="flex justify-between items-center p-3 bg-[#F9FAFB] rounded-xl hover:bg-[#EAF6F1] transition"
                      >
                        <span className="text-[#0D2040]">
                          {item.name}
                        </span>
                        <ChevronRight size={16} className="text-[#0D6E4F]" />
                      </Link>
                    ))}

                  </div>

                  <Link
                    to={column.route}
                    className="mt-6 inline-flex items-center gap-2 font-bold text-[#0D6E4F]"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-white">

        <h2 className="text-4xl md:text-5xl font-black text-[#0D2040]">
          Let’s Build Your Financial Future
        </h2>

        <p className="mt-6 text-[#6B7280]">
          Get expert accounting and advisory support today.
        </p>

        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-2 bg-[#0D6E4F] px-8 py-4 rounded-xl font-bold text-white hover:bg-[#0b5c42]"
        >
          Book Free Consultation <ArrowRight />
        </Link>

      </section>

    </div>
  );
};

export default Services;