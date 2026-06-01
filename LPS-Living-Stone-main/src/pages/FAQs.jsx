import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  FileText,
  Landmark,
  Building2,
  ShieldCheck,
} from "lucide-react";

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
    label: "Self Managed",
    path: "/self-managed",
  },
];

const faqSections = [
  {
    title: "Service Charge Accounts & Reporting",
    icon: <FileText size={18} />,
    gradient: "linear-gradient(135deg, #0D2040 0%, #0a5a3e 100%)",

    faqs: [
      {
        q: "What are service charge accounts?",

        a: [
          "Service charge accounts are annual financial statements prepared for a development to show how service charge funds have been collected and spent during the accounting period.",

          "They normally include:",
        ],

        bullets: [
          "Income and expenditure",
          "Service charge balances",
          "Reserve or sinking funds",
          "Leaseholder contributions",
          "Bank balances and liabilities",
        ],

        end:
          "The format and level of reporting will usually depend on the lease provisions and the type of development.",
      },

      {
        q: "Do all developments require service charge accounts?",

        a: [
          "Most leases require annual service charge accounts or financial statements to be prepared for leaseholders or tenants.",

          "The exact reporting requirements can vary depending on:",
        ],

        bullets: [
          "The wording of the lease",
          "Residential or commercial use",
          "Whether reserve funds exist",
          "Whether an accountant’s report or audit is required",
        ],
      },

      {
        q: "What types of accountant’s reports are commonly issued for residential service charge accounts?",

        a: [
          "The type of reporting required will normally depend on the wording of the lease.",

          "The most common forms of reporting include:",
        ],

        bullets: [
          "Report of Factual Findings",
          "Independent Examination",
          "Audit",
          "Lease driven",
        ],

        end:
          "In practice, reports of factual findings are commonly used for many residential developments where an independent accountant’s report is required but a statutory audit is not specifically requested by the lease.",
      },

      {
        q: "How quickly should service charge accounts be prepared?",

        a: [
          "Service charge accounts are generally expected to be prepared within a reasonable period after the year end.",

          "In practice, timing can be affected by:",
        ],

        bullets: [
          "Delays in receiving records",
          "Managing agent changes",
          "Developer handovers",
          "Historic accounting issues",
          "Missing supplier information",
          "Complex balancing matters",
        ],

        end:
          "We understand that many developments and managing agents require prompt reporting ahead of AGMs, flat sales, and leaseholder deadlines.",
      },

      {
        q: "Are reserve funds included within service charge accounts?",

        a: [
          "Yes, where applicable.",

          "Reserve funds, sinking funds, or major works funds are commonly included within service charge reporting depending on the lease structure and accounting arrangements for the development.",
        ],
      },

      {
        q: "What information is normally required to prepare service charge accounts?",

        a: [
          "The information required will vary depending on the development and reporting requirements, but commonly includes:",
        ],

        bullets: [
          "Trial balance or accounting reports",
          "Bank statements",
          "Supplier invoices",
          "Service charge budgets",
          "Reserve fund information",
          "Lease schedules",
          "Prior year accounts",
          "Supporting reconciliations",
        ],

        end:
          "Additional information may be required for developments with multiple schedules, commercial units, or VAT reporting obligations.",
      },
    ],
  },

  {
    title: "Industry Guidance & Compliance",
    icon: <ShieldCheck size={18} />,
    gradient: "linear-gradient(135deg, #0E6E4F 0%, #0a5a3f 100%)",

    faqs: [
      {
        q: "What is ICAEW TECH 03/11?",

        a: [
          "TECH 03/11 is recognised industry guidance relating to residential service charge accounts.",

          "It provides guidance on:",
        ],

        bullets: [
          "Preparation of service charge accounts",
          "Presentation and disclosures",
          "Reserve funds",
          "Accruals accounting",
          "Independent accountant reporting",
          "Leaseholder reporting practices",
        ],

        end:
          "The guidance is widely used across the residential service charge sector.",
      },

      {
        q: "What is TECH 09/14?",

        a: [
          "TECH 09/14 relates mainly to commercial property service charge reporting and is commonly referred to for commercial and mixed-use developments.",

          "It provides guidance on reporting standards, disclosures, and accounting considerations for commercial service charge arrangements.",
        ],
      },

      {
        q: "What changes are affecting service charge accounting?",

        a: [
          "The service charge sector continues to evolve due to:",
        ],

        bullets: [
          "Leasehold reform legislation",
          "Updated RICS guidance",
          "Building safety requirements",
          "Increased leaseholder transparency",
          "Client money handling standards",
          "Evolving reporting expectations",
        ],

        end:
          "These developments are increasing the focus on clearer reporting, supporting documentation, and timely year-end financial information.",
      },

      {
        q: "Are service charge monies held on trust?",

        a: [
          "In residential developments, service charge monies are generally treated as trust monies for leaseholders under the Landlord and Tenant Act 1987.",

          "This means service charge funds should normally be separately identifiable and accounted for independently from the landlord’s or managing agent’s own funds.",
        ],
      },

      {
        q: "What is the difference between an independent examination and an audit?",

        a: [
          "An audit is a formal assurance engagement carried out under auditing standards and is generally more extensive in scope.",

          "An independent examination or report of factual findings usually involves specific agreed procedures and reporting by an independent accountant.",

          "The type of reporting required should always be reviewed against the lease provisions.",
        ],
      },
    ],
  },

  {
    title: "Legal & Leaseholder Matters",
    icon: <Landmark size={18} />,
    gradient: "linear-gradient(135deg, #0a5a3e 0%, #0D2040 100%)",

    faqs: [
      {
        q: "What is the 18-month rule for service charges?",

        a: [
          "Section 20B of the Landlord and Tenant Act 1985 places restrictions on recovering certain service charge costs if demands are issued more than 18 months after the costs were incurred, unless appropriate notices have been provided.",

          "The application of this rule can depend on the specific circumstances and lease provisions.",
        ],
      },

      {
        q: "What are Section 20 major works and long-term agreements?",

        a: [
          "Section 20 refers to consultation requirements under the Landlord and Tenant Act 1985 for certain major works and long-term agreements where leaseholders are required to contribute towards the costs through the service charge.",

          "The consultation process is generally required where:",
        ],

        bullets: [
          "Major works will result in an individual leaseholder contributing more than £250, or",
          "A long-term agreement exceeds 12 months and an individual leaseholder’s annual contribution exceeds £100.",
        ],

        extra: [
          "Examples can include:",
        ],

        extraBullets: [
          "Roof replacement works",
          "External decorations",
          "Lift replacement projects",
          "Major building repairs",
          "Cleaning, maintenance, or managing agent contracts extending beyond 12 months",
        ],

        end:
          "Failure to follow the correct consultation process may limit the amount recoverable from leaseholders unless dispensation is granted by the Tribunal.",

        final:
          "Section 20 costs and related reserve fund movements are commonly reflected within service charge accounts and supporting leaseholder reporting.",
      },

      {
        q: "What is a Section 21 service charge summary?",

        a: [
          "Section 21 of the Landlord and Tenant Act 1985 gives leaseholders the right to request a written summary of relevant service charge costs from the landlord or managing agent.",

          "The summary will generally include:",
        ],

        bullets: [
          "Service charge expenditure for the accounting period",
          "Amounts collected from leaseholders",
          "Balances carried forward",
          "Information relating to reserve or sinking funds where applicable",
        ],

        end:
          "There are statutory time limits for providing the summary once a valid request has been made.",

        final:
          "Section 21 requests are separate from the annual service charge accounts, although the information is often closely connected to the year-end reporting process.",
      },

      {
        q: "Can leaseholders inspect service charge records?",

        a: [
          "Leaseholders may have statutory rights to request summaries or inspect supporting records relating to service charge expenditure, subject to legal requirements and lease provisions.",

          "This can include invoices, receipts, and supporting accounting information.",
        ],
      },
    ],
  },

  {
    title: "Managing Agents, RTMs & Self-Managed Blocks",
    icon: <Building2 size={18} />,
    gradient: "linear-gradient(135deg, #0E6E4F 0%, #103b2d 100%)",

    faqs: [
      {
        q: "Can you help with backlog service charge accounts?",

        a: [
          "Yes.",

          "We regularly assist developments and managing agents with:",
        ],

        bullets: [
          "Outstanding historic accounts",
          "Incomplete accounting records",
          "Balancing differences",
          "Opening balance issues",
          "Reconstruction of historic financial information",
        ],

        end:
          "This is particularly common following changes of managing agent or accountant.",
      },

      {
        q: "Can you assist during a managing agent handover?",

        a: [
          "Yes.",

          "We regularly assist with:",
        ],

        bullets: [
          "Handover balance reconciliations",
          "Opening balance reviews",
          "Historic accounting issues",
          "Establishing new reporting procedures",
          "Obtaining records from previous accountants",
        ],

        end:
          "If accounting records are delayed or incomplete, we can liaise directly with previous accountants to help obtain the information required for the year-end reporting process.",
      },

      {
        q: "Can you assist RTMs, RMCs, and self-managed blocks?",

        a: [
          "Yes.",

          "We support:",
        ],

        bullets: [
          "RTM companies",
          "Resident Management Companies (RMCs)",
          "Freehold companies",
          "Self-managed developments",
        ],

        end:
          "Many resident directors are volunteers and require practical support with accounting, tax, statutory, and reporting responsibilities.",
      },

      {
        q: "Do RTMs and RMCs need corporation tax returns?",

        a: [
          "In many cases, yes.",

          "Even where service charge funds themselves are not taxable, filing obligations may still arise depending on:",
        ],

        bullets: [
          "Ground rent income",
          "Bank interest",
          "Lease extension premiums",
          "Other company transactions",
        ],

        end:
          "Each company should be considered individually.",
      },

      {
        q: "Do mixed-use developments require different accounting treatment?",

        a: [
          "Mixed-use developments often involve additional complexity due to:",
        ],

        bullets: [
          "Residential and commercial apportionments",
          "VAT considerations",
          "Multiple schedules",
          "Shared communal costs",
          "Different lease obligations",
        ],

        end:
          "Commercial and residential reporting requirements may differ depending on the structure of the development.",
      },

      {
        q: "Can you assist with AGM deadlines and urgent flat sales?",

        a: [
          "Yes.",

          "We understand that managing agents, RTMs, and resident directors often require urgent assistance ahead of:",
        ],

        bullets: [
          "AGMs",
          "Flat sales",
          "Mortgage enquiries",
          "Refinancing deadlines",
          "Leaseholder requests",
        ],

        end:
          "We aim to provide responsive communication and flexible turnaround times where urgent reporting assistance is required.",
      },

      {
        q: "Can you assist with newly completed developments?",

        a: [
          "Yes.",

          "We regularly assist with:",
        ],

        bullets: [
          "First-year accounting setup",
          "Opening balance reviews",
          "Developer handovers",
          "Apportionment reviews",
          "Initial reserve fund setup",
          "Establishing year-end reporting procedures",
        ],

        end:
          "This is particularly important where developments transition from developer control to managing agent or resident management structures.",
      },

      {
        q: "Do you only act for large managing agents?",

        a: [
          "No.",

          "We act for:",
        ],

        bullets: [
          "Self-managed blocks",
          "RTMs and RMCs",
          "Small resident-managed developments",
          "Independent managing agents",
          "National managing agents",
          "Residential, mixed-use, and commercial developments",
        ],

        end:
          "Our portfolio ranges from small converted buildings to large multi-schedule developments with several hundred units.",
      },
    ],
  },
];

const FAQs = () => {

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
            Service Charge Knowledge Centre
          </div>

          <h1
            className="
              text-4xl md:text-6xl

              font-black

              text-white

              leading-tight
            "
          >
            Frequently Asked Questions
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
            Guidance and practical information relating to
            service charge accounting, reporting standards,
            leaseholder obligations, RTMs, RMCs, and managing agents.
          </p>

        </div>

      </section>

      {/* NAVIGATION */}
      <section className="py-10 px-6 border-b border-[#D9DDDE] bg-[#FAFAFA]">

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

      {/* CONTENT */}
      <section className="py-16 px-6">

        <div className="max-w-7xl mx-auto space-y-14">

          {faqSections.map((section, i) => (

            <div
              key={i}

              className="
                overflow-hidden

                rounded-[34px]

                border border-[#D9DDDE]

                bg-white

                shadow-[0_25px_60px_-35px_rgba(13,32,64,0.14)]
              "
            >

              {/* SECTION HEADER */}
              <div
                className="
                  px-8 py-7

                  text-white
                "
                style={{
                  background: section.gradient,
                }}
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-12 h-12

                      rounded-2xl

                      bg-white/10

                      border border-white/10

                      flex items-center justify-center
                    "
                  >
                    {section.icon}
                  </div>

                  <h2
                    className="
                      text-2xl md:text-3xl

                      font-black
                    "
                  >
                    {section.title}
                  </h2>

                </div>

              </div>

              {/* FAQ ITEMS */}
              <div className="divide-y divide-[#D9DDDE]">

                {section.faqs.map((faq, idx) => (

                  <div
                    key={idx}

                    className="
                      relative

                      px-8 py-10

                      hover:bg-[#FAFAFA]

                      transition-all duration-300
                    "
                  >

                    <div
                      className="
                        absolute left-0 top-0

                        w-[4px] h-full

                        bg-transparent

                        hover:bg-[#0E6E4F]

                        transition-all duration-300
                      "
                    />

                    <div className="max-w-4xl">

                      {/* QUESTION */}
                      <h3
                        className="
                          text-2xl

                          font-black

                          leading-snug

                          text-[#0D2040]
                        "
                      >
                        {faq.q}
                      </h3>

                      {/* MAIN PARAGRAPHS */}
                      <div className="mt-6 space-y-5">

                        {faq.a.map((para, pIndex) => (

                          <p
                            key={pIndex}

                            className="
                              text-[15px] md:text-base

                              leading-8

                              text-[#0D2040]
                            "
                          >
                            {para}
                          </p>

                        ))}

                      </div>

                      {/* BULLETS */}
                      {faq.bullets && (

                        <div
                          className="
                            mt-7

                            grid grid-cols-1 md:grid-cols-2

                            gap-3
                          "
                        >

                          {faq.bullets.map((bullet, bIndex) => (

                            <div
                              key={bIndex}

                              className="
                                flex items-start gap-3

                                p-4

                                rounded-2xl

                                border border-[#D9DDDE]

                                bg-[#FAFAFA]
                              "
                            >

                              <div
                                className="
                                  w-2 h-2

                                  rounded-full

                                  bg-[#0E6E4F]

                                  mt-2
                                "
                              />

                              <span
                                className="
                                  text-[15px]

                                  leading-7

                                  text-[#0D2040]
                                "
                              >
                                {bullet}
                              </span>

                            </div>

                          ))}

                        </div>

                      )}

                      {/* EXTRA INTRO */}
                      {faq.extra && (

                        <div className="mt-7 space-y-5">

                          {faq.extra.map((para, xIndex) => (

                            <p
                              key={xIndex}

                              className="
                                text-[15px] md:text-base

                                leading-8

                                text-[#0D2040]
                              "
                            >
                              {para}
                            </p>

                          ))}

                        </div>

                      )}

                      {/* EXTRA BULLETS */}
                      {faq.extraBullets && (

                        <div
                          className="
                            mt-7

                            grid grid-cols-1 md:grid-cols-2

                            gap-3
                          "
                        >

                          {faq.extraBullets.map((bullet, ebIndex) => (

                            <div
                              key={ebIndex}

                              className="
                                flex items-start gap-3

                                p-4

                                rounded-2xl

                                border border-[#D9DDDE]

                                bg-[#FAFAFA]
                              "
                            >

                              <div
                                className="
                                  w-2 h-2

                                  rounded-full

                                  bg-[#0E6E4F]

                                  mt-2
                                "
                              />

                              <span
                                className="
                                  text-[15px]

                                  leading-7

                                  text-[#0D2040]
                                "
                              >
                                {bullet}
                              </span>

                            </div>

                          ))}

                        </div>

                      )}

                      {/* END */}
                      {faq.end && (

                        <div
                          className="
                            mt-8

                            p-5

                            rounded-2xl

                            border border-[#0E6E4F]/15

                            bg-[#0E6E4F]/5
                          "
                        >

                          <p
                            className="
                              text-[15px] md:text-base

                              leading-8

                              text-[#0D2040]
                            "
                          >
                            {faq.end}
                          </p>

                        </div>

                      )}

                      {/* FINAL */}
                      {faq.final && (

                        <div className="mt-6">

                          <p
                            className="
                              text-[15px] md:text-base

                              leading-8

                              text-[#0D2040]
                            "
                          >
                            {faq.final}
                          </p>

                        </div>

                      )}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default FAQs;