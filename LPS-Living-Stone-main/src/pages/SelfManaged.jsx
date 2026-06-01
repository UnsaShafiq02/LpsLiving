import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const transitionItems = [
  "Newly formed as an RTM or RMC",
  "Moving away from a managing agent",
  "Taking over financial control of a development",
  "Dealing with historic accounting issues",
];

const supportItems = [
  "AGMs",
  "Flat sales",
  "Mortgage enquiries",
  "Year-end deadlines",
];

const complianceItems = [
  "Director changes",
  "Confirmation statements",
  "Share transfers following flat sales",
  "Ongoing Companies House obligations",
];

const navButtons = [
  {
    label: "Managing Agents",
    path: "/managing-agents",
  },
  {
    label: "Service Charges",
    path: "/servicecharge",
  },
  {
    label: "Frequently Asked",
    path: "/faqs",
  },
];

const SectionTitle = ({ children }) => (
  <div className="flex items-center gap-3 mb-6">

    <div className="w-1 h-8 bg-[#0E6E4F] rounded-full flex-shrink-0" />

    <h2
      className="
        text-2xl md:text-3xl
        font-black
        text-[#0E6E4F]
      "
    >
      {children}
    </h2>

  </div>
);

const InfoCard = ({ text }) => (
  <div
    className="
      flex items-start gap-3

      p-4

      bg-[#FAFAFA]

      border border-[#D9DDDE]

      rounded-2xl

      hover:border-[#0E6E4F]
      hover:bg-[#0E6E4F]/5

      transition-all duration-300
    "
  >

    <CheckCircle2
      size={18}
      className="text-[#0E6E4F] mt-0.5 flex-shrink-0"
    />

    <span
      className="
        text-[15px] md:text-base
        leading-7
        text-[#0D2040]
      "
    >
      {text}
    </span>

  </div>
);

const SelfManaged = () => {

  const navigate = useNavigate();

  return (

    <div
      className="
        bg-white
        overflow-hidden
        text-[#0D2040]

        font-['Neogrotesk']
      "
    >

      {/* HERO */}
      <section
        className="
          relative

          pt-32 pb-20
          md:pt-40 md:pb-28

          overflow-hidden
        "
        style={{
          background:
            "linear-gradient(135deg, #0D2040 0%, #0E6E4F 100%)",
        }}
      >

        {/* soft shapes */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/5" />

        <div className="absolute bottom-[-80px] right-[-60px] w-72 h-72 rounded-full bg-white/5" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">

          <div
            className="
              inline-flex items-center gap-2

              bg-white/10

              border border-white/20

              px-5 py-2

              rounded-full

              text-xs
              uppercase
              tracking-[0.2em]

              text-white

              mb-6
            "
          >

            <Home size={14} />

            Self Managed Developments

          </div>

          <h1
            className="
              text-4xl md:text-6xl

              font-black

              text-white

              leading-tight
            "
          >
            Practical Accounting Support for Resident-Led Developments
          </h1>

          <p
            className="
              mt-6

              max-w-3xl mx-auto

              text-white/80

              text-[15px] md:text-lg

              leading-8
            "
          >
            Clear and practical accounting support tailored
            for RTMs, RMCs, and self-managed residential developments.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="py-14 px-6 border-b border-[#D9DDDE]">

        <div className="max-w-5xl mx-auto">

          <h2
            className="
              text-lg sm:text-xl md:text-2xl lg:text-[30px]

              font-medium

              leading-[1.7]

              tracking-tight

              text-[#0D2040]
            "
          >

            Managing a block without a managing agent can
            give residents greater control, but it also brings
            accounting, statutory, tax, and leaseholder reporting responsibilities.

            <br />
            <br />

            LPS Livingstone supports self-managed blocks,
            RTMs, and RMCs with clear and practical service
            charge accounting support tailored to resident directors.

          </h2>

        </div>

      </section>

      {/* PAGE NAVIGATION */}
      <section className="py-10 px-6 border-b border-[#D9DDDE] bg-white">

        <div className="max-w-5xl mx-auto">

          <div className="flex flex-wrap justify-center gap-3">

            {navButtons.map((btn, i) => (

              <button
                key={i}

                onClick={() => navigate(btn.path)}

                className="
                  group

                  px-6 py-3

                  rounded-full

                  text-sm
                  font-semibold

                  border

                  bg-[#0D2040]
                  text-white
                  border-[#0D2040]

                  hover:bg-[#0E6E4F]
                  hover:border-[#0E6E4F]

                  transition-all duration-300
                "
              >

                <span className="flex items-center gap-2">

                  {btn.label}

                  <ChevronRight
                    size={15}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                  />

                </span>

              </button>

            ))}

          </div>

        </div>

      </section>

      {/* SUPPORT FOR DIRECTORS */}
      <section className="py-14 px-6 border-b border-[#D9DDDE]">

        <div className="max-w-5xl mx-auto">

          <SectionTitle>
            Support for Resident Directors
          </SectionTitle>

          <p
            className="
              text-[15px] md:text-base

              leading-8

              text-[#0D2040]
            "
          >
            We understand that many resident directors are
            volunteers managing developments alongside their
            own professional and personal commitments.

            <br />
            <br />

            Our aim is to make the accounting and compliance
            side of block management easier to understand,
            properly organised, and transparent for both directors and leaseholders.
          </p>

        </div>

      </section>

      {/* TRANSITION */}
      <section className="py-14 px-6 border-b border-[#D9DDDE]">

        <div className="max-w-5xl mx-auto">

          <SectionTitle>
            Transitioning to Self-Management
          </SectionTitle>

          <p
            className="
              text-[15px] md:text-base

              leading-8

              text-[#0D2040]

              mb-6
            "
          >
            Whether you are:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            {transitionItems.map((item, i) => (
              <InfoCard key={i} text={item} />
            ))}

          </div>

          <p
            className="
              mt-8

              text-[15px] md:text-base

              leading-8

              text-[#0D2040]
            "
          >
            we can assist with establishing proper accounting
            records, opening balances, reconciliations, and reporting procedures.

            <br />
            <br />

            We regularly assist developments transitioning from
            managing agent control to self-management, including
            support with handover balances and historic accounting issues.
          </p>

        </div>

      </section>

      {/* RESPONSIVE SUPPORT */}
      <section className="py-14 px-6 border-b border-[#D9DDDE]">

        <div className="max-w-5xl mx-auto">

          <SectionTitle>
            Responsive &amp; Practical Support
          </SectionTitle>

          <p
            className="
              text-[15px] md:text-base

              leading-8

              text-[#0D2040]

              mb-6
            "
          >
            We understand that resident directors often require
            urgent assistance ahead of:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            {supportItems.map((item, i) => (
              <InfoCard key={i} text={item} />
            ))}

          </div>

          <p
            className="
              mt-8

              text-[15px] md:text-base

              leading-8

              text-[#0D2040]
            "
          >
            We aim to provide responsive communication and
            flexible turnaround times where possible.
          </p>

        </div>

      </section>

      {/* COMPLIANCE */}
      <section className="py-14 px-6 border-b border-[#D9DDDE]">

        <div className="max-w-5xl mx-auto">

          <SectionTitle>
            Company &amp; Compliance Support
          </SectionTitle>

          <p
            className="
              text-[15px] md:text-base

              leading-8

              text-[#0D2040]

              mb-6
            "
          >
            We can also assist resident directors with company
            secretarial and statutory matters, including:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            {complianceItems.map((item, i) => (
              <InfoCard key={i} text={item} />
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-14 px-6">

        <div className="max-w-5xl mx-auto">

          <div
            className="
              relative

              overflow-hidden

              rounded-3xl

              p-8 md:p-10

              text-white
            "
            style={{
              background:
                "linear-gradient(135deg, #0D2040 0%, #0E6E4F 100%)",
            }}
          >

            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

            <div className="relative">

              <h3
                className="
                  text-2xl md:text-3xl

                  font-black

                  leading-tight
                "
              >
                Need Help Managing Your Development?
              </h3>

              <p
                className="
                  mt-5

                  text-[15px] md:text-lg

                  leading-8

                  text-white/85
                "
              >
                For a full list of our service charge accounting services,
                please visit our main Service Charge Services page.
              </p>

              <button
                onClick={() => navigate("/servicecharge")}

                className="
                  mt-8

                  inline-flex items-center gap-2

                  bg-white

                  text-[#0D2040]

                  px-6 py-3

                  rounded-xl

                  font-semibold

                  hover:bg-[#F3F4F6]

                  transition-all duration-300
                "
              >

                Explore Service Charge Services

                <ChevronRight size={18} />

              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default SelfManaged;