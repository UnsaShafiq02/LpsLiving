import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const handoverItems = [
  "Changes of managing agent",
  "Developer handovers",
  "Opening balance reviews",
  "Handover balance reconciliations",
  "Historic accounting issues",
  "Backlog accounts",
];

const systems = [
  "Qube",
  "Tramps",
  "Propman",
  "Blockman",
  "Dwellant",
  "TASBooks",
  "Sage",
  "Xero",
];

const additionalSupport = [
  "Freehold company matters",
  "Ground rent income",
  "Lease extension premiums",
  "Corporation tax matters",
  "Company secretarial obligations",
];

const navButtons = [
    {
        label: "Self Managed",
        path: "/self-managed",
    },
    {
      label: "Service Charges",
      path: "/Servicecharge",
    },
  
  {
    label: "Frequently Asked",
    path: "/faqs",
  },
];

const SectionTitle = ({ children }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-1 h-8 bg-[#C49A4A] rounded-full flex-shrink-0" />

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

      bg-white

      border border-[#D9DDDE]

      rounded-2xl

      hover:border-[#C49A4A]
      hover:bg-[#F8F8F5]

      transition-all duration-300
    "
  >
    <CheckCircle2
      size={18}
      className="text-[#C49A4A] mt-0.5 flex-shrink-0"
    />

    <span
      className="
        text-[15px] md:text-base
        leading-7
        text-[#2D3436]
      "
    >
      {text}
    </span>
  </div>
);

const Tag = ({ label }) => (
  <span
    className="
      px-4 py-2

      rounded-full

     bg-[#F8F8F5]
border-[#D9DDDE]
text-[#0E6E4F]

      text-xs
      font-semibold
    "
  >
    {label}
  </span>
);

const ManagingAgents = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white overflow-hidden text-[#2D3436]  font-['Neogrotesk']">

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
            <Building2 size={14} />
            Managing Agent Support
          </div>

          <h1
            className="
              text-4xl md:text-6xl

              font-black

              text-white

              leading-tight
            "
            style={{ fontFamily: "Georgia, serif" }}
          >
            Service Charge Support for Managing Agents
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
            Practical and responsive accounting support for
            residential, mixed-use, and commercial property
            portfolios across London and the UK.
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

              text-[#2D3436]
            "
          >

            We work closely with managing agents across
            residential, mixed-use, and commercial portfolios
            throughout London and the UK, providing practical
            and responsive support around the year-end reporting
            process.

            <br />
            <br />

            Our team understands the operational pressures involved
            in block management, including AGM deadlines, flat sale
            requirements, leaseholder reporting, handovers between
            agents, and ongoing client communication.

            <br />
            <br />

            With experience across more than{" "}

            <span className="text-[#0E6E4F] font-semibold">
              1,000 developments
            </span>

            , we support both independent managing agents and
            larger portfolio operators, acting as a dependable
            extension of their property management and finance teams.

          </h2>

        </div>

      </section>
      {/* PAGE NAVIGATION */}
<section className="py-10 px-6 border-b border-[#D9DDDE] bg-white">

  <div className="max-w-5xl mx-auto">

    <div
      className="
        flex flex-wrap justify-center

        gap-3
      "
    >

      {navButtons.map((btn, i) => (

        <button
          key={i}

          onClick={() => navigate(btn.path)}

          className={`
            group

            px-6 py-6

            rounded-full

            text-2xl
            font-semibold
           bg-[#C49A4A]

  text-white
 

  hover:bg-[#0A5A3E]
hover:border-[#C49A4A]

            border

            transition-all duration-300

         
          `}
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

      {/* HANDOVER */}
      <section className="py-14 px-6 border-b border-[#D9DDDE]">

        <div className="max-w-5xl mx-auto">

          <SectionTitle>
            Handover &amp; Transition Support
          </SectionTitle>

          <p
            className="
              text-[15px] md:text-base

              leading-8

             text-[#2D3436]

              mb-6
            "
          >
            We regularly assist with:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            {handoverItems.map((item, i) => (
              <InfoCard key={i} text={item} />
            ))}

          </div>

          <p
            className="
              mt-8

              text-[15px] md:text-base

              leading-8

              text-[#2D3436]
            "
          >
            If opening balance information is delayed or incomplete,
            we can liaise directly with previous accountants to help
            obtain the records and supporting information required
            for the year-end process.
          </p>

        </div>

      </section>

      {/* SYSTEMS */}
      <section className="py-14 px-6 border-b border-[#D9DDDE]">

        <div className="max-w-5xl mx-auto">

          <SectionTitle>
            Familiarity with Industry Systems
          </SectionTitle>

          <p
            className="
              text-[15px] md:text-base

              leading-8

text-[#2D3436]
              mb-6
            "
          >
            Our team is experienced in working with reporting
            structures and accounting data generated from
            commonly used property management systems.
          </p>

          <div className="flex flex-wrap gap-3">

            {systems.map((item, i) => (
              <Tag key={i} label={item} />
            ))}

          </div>

          <p
            className="
              mt-8

              text-[15px] md:text-base

              leading-8

              text-[#2D3436]
            "
          >
            This helps reduce disruption during year-end
            reporting periods and allows us to work efficiently
            alongside existing managing agent systems and procedures.
          </p>

        </div>

      </section>

      {/* REGULATORY */}
      <section className="py-14 px-6 border-b border-[#D9DDDE]">

        <div className="max-w-5xl mx-auto">

          <SectionTitle>
            Regulatory Body Compliance
          </SectionTitle>

          <p
            className="
              text-[15px] md:text-base

              leading-8

text-[#2D3436]            "
          >
            We support managing agents in maintaining compliance
            with the requirements of professional and regulatory
            body memberships, including TPI, by providing
            independent reporting, client money reviews, and
            assistance with ongoing compliance and accounting obligations.
          </p>

        </div>

      </section>

      {/* ADDITIONAL SUPPORT */}
      <section className="py-14 px-6 border-b border-[#D9DDDE]">

        <div className="max-w-5xl mx-auto">

          <SectionTitle>
            Additional Support
          </SectionTitle>

          <p
            className="
              text-[15px] md:text-base

              leading-8

text-[#2D3436]
              mb-6
            "
          >
            We can also liaise directly with directors and resident
            company officers regarding:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

            {additionalSupport.map((item, i) => (
              <InfoCard key={i} text={item} />
            ))}

          </div>

          <p
            className="
              mt-8

              text-[15px] md:text-base

              leading-8

text-[#2D3436]            "
          >
            helping to reduce the administrative burden
            on managing agents.
          </p>

        </div>

      </section>

      {/* RESPONSIVE SUPPORT */}
      <section className="py-14 px-6">

        <div className="max-w-5xl mx-auto">

          <SectionTitle>
            Responsive &amp; Practical Support
          </SectionTitle>

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

              <p
                className="
                  text-[15px] md:text-lg

                  leading-8

                  text-white/85
                "
              >
                We understand that managing agents often
                work to strict reporting deadlines and require
                quick responses around AGMs, leaseholder enquiries,
                and flat sales.

                <br />
                <br />

                Our aim is to provide practical support,
                responsive communication, and flexible turnaround
                times where urgent assistance is required.
              </p>

              <button
              onClick={() => navigate('/contact')}
                className="
                
                  mt-8

                  inline-flex items-center gap-2

                  bg-white

                  text-[#2D3436]

                  px-6 py-3

                  rounded-xl

                  font-semibold

                  hover:bg-[#F8F8F5]

                  transition-all duration-300
                "
              >
                Speak With Our Team

                <ChevronRight size={18} />
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default ManagingAgents;