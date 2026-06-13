import React, { useState } from 'react';
import officePhoto from '../assets/AboutusHero.png';
import teamPhoto from '../assets/AboutUsTeam.png';
import {
  Handshake,
  PhoneCall,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

// ── COLOUR TOKENS ────────────────────────────────────────────────
const G = {
  primary: '#1A4A2E',   // deep forest green  (headings, accents)
  mid:     '#2E6B47',   // mid green           (hover, icons)
  light:   '#EAF3E6',   // pale mint           (chip, card bg)
  border:  '#C8DFC0',   // soft green border
  tick:    '#2E6B47',
};

// ── TINY SHARED COMPONENTS ───────────────────────────────────────

const Tick = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"
    style={{ flexShrink: 0, marginTop: 2 }}>
    <circle cx="10" cy="10" r="10" fill={G.light} />
    <path d="M5.5 10.3l3.2 3.2 5.8-6.5" stroke={G.tick} strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SectionLabel = ({ children }) => (
  <p style={{
    textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.15em',
    fontSize: 12, color: G.primary, fontWeight: 600, marginBottom: 8,
  }}>{children}</p>
);

const H2 = ({ children, style = {} }) => (
  <h2 style={{
    fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700,
    color: G.primary, margin: 0, lineHeight: 1.2, ...style,
  }}>{children}</h2>
);

// ── DATA ─────────────────────────────────────────────────────────

const approachCards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="13" stroke={G.primary} strokeWidth="1.5" />
        <path d="M9 14l4 4 6-7" stroke={G.primary} strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Straightforward & Impartial',
    desc: 'Clear advice based on the facts and circumstances of each client.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 8h18M5 14h18M5 20h12" stroke={G.primary} strokeWidth="1.8"
          strokeLinecap="round" />
      </svg>
    ),
    title: 'Clear & Concise',
    desc: 'Financial and tax matters explained in a practical and understandable way.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l3 7h7l-5.5 4 2 7L14 18l-6.5 4 2-7L4 11h7z"
          stroke={G.primary} strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Sophisticated, Not Complicated',
    desc: 'Technical expertise delivered in an accessible and commercially focused manner.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="11" cy="10" r="4.5" stroke={G.primary} strokeWidth="1.5" />
        <path d="M19 13a4 4 0 010 8" stroke={G.primary} strokeWidth="1.5"
          strokeLinecap="round" />
        <path d="M3 23c0-4 3.6-7 8-7s8 3 8 7" stroke={G.primary} strokeWidth="1.5"
          strokeLinecap="round" />
      </svg>
    ),
    title: 'Professional & Approachable',
    desc: 'High professional standards combined with responsive and personal service.',
  },
];
const whyCards = [
  { icon: Handshake, title: "Long-Term Relationships" },
  { icon: PhoneCall, title: "Responsive Support" },
  { icon: Lightbulb, title: "Practical Advice" },
  // { icon: ShieldCheck, title: "Trusted Expertise" },
  { icon: TrendingUp, title: "Business Growth" },
];

const whyPoints = [
  {
    title: 'Long-Term Relationships',
    desc: 'We believe effective professional relationships are built on trust, consistency and a genuine understanding of each client\'s circumstances.',
  },
  {
    title: 'Practical Advice',
    desc: 'Good advice should be relevant, realistic and capable of being applied in practice, not simply technically correct.',
  },
  {
    title: 'Commercial Understanding',
    desc: 'Technical expertise is important, but so is understanding the practical and commercial realities facing businesses and individuals.',
  },
  {
    title: 'Personal Service',
    desc: 'We take the time to understand each client\'s circumstances and provide clear explanations that help them make informed decisions.',
  },
  {
    title: 'Responsive Support',
    desc: 'Financial and tax matters do not always arise at convenient times. Clients value being able to speak to someone who understands their affairs and can provide timely support when needed.',
  },
];

const teamMembers = [
  {
    name: 'Shahbaz Ahmed ACA',
    role: 'Managing Director',
    bio: 'Chartered Accountant and Managing Director with almost 20 years of experience advising businesses, property professionals and private clients on accounting, taxation and compliance.',
  },
  {
    name: 'Mike Marcus FCA FCCA',
    role: 'Director',
    bio: 'Responsible Individual at LPS Livingstone Audit Ltd and Fellow of both ICAEW and ACCA with over 40 years of experience in audit, assurance, restructuring and advisory services.',
  },
  {
    name: 'Ronnie Jacob FCA',
    role: 'Director',
    bio: 'Over 40 years of experience, former Finance Director of an LSE-listed retail chain. Specialist in personal taxation, share valuations, and HMRC matters.',
  },
  {
    name: 'Philippa Aaronson BSc FFA',
    role: 'Director',
    bio: 'Pensions actuary with more than 38 years of experience advising trustees, companies and employees on all types of pension and retirement planning.',
  },
  {
    name: 'Sibtain Aslam ACCA',
    role: 'Accounts Manager',
    bio: 'Qualified in 2011 and joined LPS Livingstone in 2012. Works closely with owner-managed businesses and private clients across accounting, tax and compliance matters.',
  },
  {
    name: 'TD Thushari ICMA',
    role: 'Senior Accountant',
    bio: 'Over 30 years of experience supporting SMEs and individuals with year-end accounts, bookkeeping, VAT returns, management accounts and personal tax compliance.',
  },
  {
    name: 'Gail Higgins',
    role: 'Statutory Manager',
    bio: 'Manages the firm\'s statutory department with extensive experience in company secretarial matters, Companies House filings, confirmation statements and statutory records.',
  },
];

// ── AVATAR placeholder ──────────────────────────────────────────
const Avatar = ({ name }) => {
  const initials = name.split(' ').slice(0, 2).map(w => w[0]).join('');
  return (
    <div style={{
      width: 64, height: 64, borderRadius: '50%',
      background: G.light, border: `2px solid ${G.border}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 20, fontWeight: 700, color: G.primary,
      flexShrink: 0,
    }}>{initials}</div>
  );
};

// ── MAIN COMPONENT ────────────────────────────────────────────────
const AboutUs = () => {
  return (
    <div style={{ color: '#222', background: '#fff' }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
<section
  style={{
    background: '#fff',
    padding: '100px 0 90px 5%',
  }}
>
 <div
  style={{
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '53% 47%',
    gap: 56,
    alignItems: 'flex-start',
  }}
>

    {/* ── LEFT: TEXT ── */}
   <div
  style={{
   
    minHeight: 560,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }}
>
      <h1
        className="
          text-[42px]
            sm:text-[52px]
            lg:text-[62px]
            xl:text-[72px]

            font-black
           
            leading-[1.02]

            text-[#0B5D47]
        "
      >
        About LPS Livingstone
      </h1>

       <span
    className="
      block
      mt-2
      text-[24px]
      sm:text-[30px]
      lg:text-[35px]
      xl:text-[42px]
      font-bold
      text-[#222]
    "
  >
    Chartered Accountants, Auditors & Business Advisers
  </span>
<br /> 
      <p style={{ fontSize: 18, lineHeight: 1.8, color: '#444', margin: '0 0 14px' }}>
        LPS Livingstone is a Chartered Accountancy and Audit practice providing
        accounting, taxation, audit and advisory services to businesses and
        individuals throughout the UK.
      </p>

      <p style={{ fontSize: 18, lineHeight: 1.8, color: '#444', margin: '0 0 14px' }}>
        Through LPS Livingstone Ltd and LPS Livingstone Audit Ltd, we combine
        technical expertise with practical advice, responsive support and
        long-term client relationships to help our clients make informed
        financial decisions with confidence.
      </p>

      <p style={{ fontSize: 18, lineHeight: 1.8, color: '#444', margin: 0 }}>
        We work with a broad range of clients, including owner-managed
        businesses, entrepreneurs, property professionals, charities and
        private individuals, delivering a professional and personal service
        tailored to their specific needs.
      </p>
    </div>

    {/* ── RIGHT: OFFICE PHOTO ── */}
   <div
  style={{
    borderRadius: '12px 0 0 12px',
    overflow: 'hidden',
    lineHeight: 0,
    justifySelf: 'stretch',
  }}
>
      <img
        src={officePhoto}
        alt="LPS Livingstone office"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          minHeight: 560,
        }}
      />
    </div>

  </div>
</section>
      {/* ── OUR APPROACH ─────────────────────────────────────── */}
    <section className="relative py-16 overflow-hidden bg-[#F7F7F4] border-y border-[#D9DDDE]">

  {/* Ambient glows */}
  <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
    style={{ background: "radial-gradient(circle, rgba(200,161,90,0.07) 0%, transparent 70%)" }} />
  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
    style={{ background: "radial-gradient(circle, rgba(15,107,75,0.05) 0%, transparent 70%)" }} />

  <div className="relative max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-10">

    {/* ── Heading ── */}
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-3 mb-5">
        <div className="w-8 h-px bg-[#C8A15A]" />
        <span className="text-[13px] uppercase tracking-[0.25em] font-semibold text-[#B58B3C]">
          How We Work
        </span>
        <div className="w-8 h-px bg-[#C8A15A]" />
      </div>
      <h2 className="text-[30px] md:text-[40px] lg:text-[46px] font-medium tracking-[-0.02em] text-[#0F6B4B]">
        Our Approach
      </h2>
      <p className="mt-4 text-[#222] text-[20px] max-w-2xl mx-auto">
        Building lasting relationships is at the heart of what we do.
      </p>
    </div>

    {/* ── Card Grid ── */}
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch">

      {/* CARD 1 */}
      <div
        className="group relative rounded-[20px] p-7 flex flex-col h-full transition-all duration-500 hover:-translate-y-1"
        style={{ background: "#FFFFFF", border: "1px solid #C8A15A", boxShadow: "0 2px 16px rgba(15,107,75,0.05)" }}
      >
        <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-[#0F6B4B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shrink-0"
          style={{ background: "#EBF3EF", border: "1px solid rgba(15,107,75,0.15)" }}>
          <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="3.5" stroke="#0F6B4B" strokeWidth="1.7" />
            <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" stroke="#0F6B4B" strokeWidth="1.7" strokeLinecap="round" />
            <path d="M4 9h2M4 12h3" stroke="#0F6B4B" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M20 9h-2M20 12h-3" stroke="#0F6B4B" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <h3 className="text-[25px] font-semibold text-[#2F3437] text-center mb-1">
          Straightforward & Impartial
        </h3>
       

        <div className="flex-grow">
          <p className="text-[18px] text-[#5F6B6D] leading-7">
            Clear advice based on the facts and circumstances of each client,
            free from bias and delivered with complete transparency.
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div
        className="group relative rounded-[20px] p-7 flex flex-col h-full transition-all duration-500 hover:-translate-y-1"
        style={{ background: "#FFFFFF", border: "1px solid #C8A15A", boxShadow: "0 2px 16px rgba(15,107,75,0.05)" }}
      >
        <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-[#0F6B4B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shrink-0"
          style={{ background: "#EBF3EF", border: "1px solid rgba(15,107,75,0.15)" }}>
          <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="#0F6B4B" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M8 10h8M8 13h5" stroke="#0F6B4B" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <h3 className="text-[25px] font-semibold text-[#2F3437] text-center mb-1">
          Clear & Concise
        </h3>
       

        <div className="flex-grow">
          <p className="text-[18px] text-[#5F6B6D] leading-7">
            Financial and tax matters explained in a practical and understandable
            way — no unnecessary jargon, just meaningful guidance.
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div
        className="group relative rounded-[20px] p-7 flex flex-col h-full transition-all duration-500 hover:-translate-y-1"
        style={{ background: "#FFFFFF", border: "1px solid #C8A15A", boxShadow: "0 2px 16px rgba(15,107,75,0.05)" }}
      >
        <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-[#0F6B4B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shrink-0"
          style={{ background: "#EBF3EF", border: "1px solid rgba(15,107,75,0.15)" }}>
          <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
            <path d="M12 2l2.5 5.5H21l-5 4 2 6L12 14l-6 3.5 2-6-5-4h6.5z"
              stroke="#0F6B4B" strokeWidth="1.7" strokeLinejoin="round" />
          </svg>
        </div>

        <h3 className="text-[25px] font-semibold text-[#2F3437] text-center mb-1">
          Sophisticated, Not Complicated
        </h3>
       

        <div className="flex-grow">
          <p className="text-[18px] text-[#5F6B6D] leading-7">
            Technical expertise delivered in an accessible and commercially
            focused manner, tailored to each client's situation.
          </p>
        </div>
      </div>

      {/* CARD 4 */}
      <div
        className="group relative rounded-[20px] p-7 flex flex-col h-full transition-all duration-500 hover:-translate-y-1"
        style={{ background: "#FFFFFF", border: "1px solid #C8A15A", boxShadow: "0 2px 16px rgba(15,107,75,0.05)" }}
      >
        <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-[#0F6B4B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shrink-0"
          style={{ background: "#EBF3EF", border: "1px solid rgba(15,107,75,0.15)" }}>
          <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
            <path
              d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z"
              stroke="#0F6B4B" strokeWidth="1.7" strokeLinejoin="round"
            />
            <path d="M9 12l2 2 4-4" stroke="#0F6B4B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h3 className="text-[25px] font-semibold text-[#2F3437] text-center mb-1">
          Professional & Approachable
        </h3>
       


        <div className="flex-grow">
          <p className="text-[18px] text-[#5F6B6D] leading-7">
            High professional standards combined with responsive and personal
            service — we are always accessible when clients need us.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* ── WHY CLIENTS WORK WITH US ─────────────────────────── */}
    <section style={{ padding: '80px 0' }}>
  <div style={{
    display: 'grid',
    gridTemplateColumns: '43% 57%',
    alignItems: 'start',
  }}>

    {/* LEFT — full bleed image, no margin/padding */}
    <div style={{
      overflow: 'hidden',
      lineHeight: 0,
    }}>
      <img
        src={teamPhoto}
        alt="Team meeting"
        style={{
          width: '100%',
          height: '100%',
          minHeight: 700,
          objectFit: 'contain',

          display: 'block',
        }}
      />
    </div>

    {/* RIGHT — content with inner padding */}
    <div style={{ padding: '20px 5% 20px 72px' }}>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F6B4B]">
        Why Clients Work With Us
      </h2> <br />
<p
        className="
  mt-6
  text-[#222]
  text-base
  sm:text-lg
  leading-8
"
>     
       Choosing an accountant or adviser is rarely about finding someone to complete forms
        or meet filing deadlines.
      </p>
<p
        className="
  mt-6
  text-[#222]
  text-base
  sm:text-lg
  leading-8
"
>   
      Most clients are looking for a trusted professional who can provide clear advice,
        respond when needed and help them navigate important financial decisions with confidence.
      </p>
<p
        className="
  mt-6
  text-[#222]
  text-base
  sm:text-lg
  leading-8
"
>   
     Many of our client relationships have developed over a number of years. What often
        begins as a specific engagement evolves into a broader advisory relationship built
        on trust, consistency and a genuine understanding of the client's circumstances.
      </p>
<br />
      {/* <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {whyPoints.map((pt, i) => (
          <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <Tick />
            <div>
<p
  className="
    text-[18px]
    font-semibold
    text-[#0F6B4B]
    mb-1
  "
>                {pt.title}
              </p>
<p
  className="
    text-[18px]
    font-semibold
    text-[#222]
    mb-1
  "
>                {pt.desc}
              </p>
            </div>
          </div>
        ))}
      </div> */}
      <div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: 18,
    marginTop: 40,
  }}
>
  {whyCards.map((item, i) => {
    const Icon = item.icon;

    return (
      <div
        key={i}
        style={{
          background: '#F8F8F5',
          border: '1px solid #E7E2D8',
          borderRadius: 20,
          padding: '24px 18px',
          textAlign: 'center',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            margin: '0 auto 16px',
            borderRadius: 18,
            background: '#EBF3EF',
            border: '1px solid rgba(15,107,75,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon
            size={30}
            color="#0F6B4B"
            strokeWidth={2}
          />
        </div>

        <h4
          style={{
            fontSize: 17,
            fontWeight: 700,
            color: '#0F6B4B',
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          {item.title}
        </h4>
      </div>
    );
  })}
</div>
    </div>

  </div>
</section>

      {/* ── MEET THE TEAM ────────────────────────────────────── */}
      <section style={{ background: '#FAFAFA', padding: '80px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <H2 style={{ textAlign: 'center', marginBottom: 8 }}>Meet the Team</H2>
          <p style={{
            textAlign: 'center', fontSize: 15.5, color: '#555', lineHeight: 1.7,
            maxWidth: 600, margin: '0 auto 52px',
          }}>
            Our directors, managers and support staff are committed to providing knowledgeable,
            proactive and dependable support to every client.
          </p>

          {/* Top row — 4 directors */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: 16,
            marginBottom: 16,
          }}>
            {teamMembers.slice(0, 4).map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>

          {/* Bottom row — 3 managers */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: 16,
            maxWidth: 780,
          }}>
            {teamMembers.slice(4).map((m, i) => (
              <TeamCard key={i} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────────── */}
    <section className="relative overflow-hidden bg-[#F7F7F4] border-t border-[#D9DDDE]">

  {/* Ambient glows */}
  <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
    style={{ background: "radial-gradient(circle, rgba(200,161,90,0.07) 0%, transparent 70%)" }} />
  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
    style={{ background: "radial-gradient(circle, rgba(15,107,75,0.05) 0%, transparent 70%)" }} />

  <div className="relative w-full px-4 sm:px-6 lg:px-10 py-16">
    <div className="flex items-center justify-between gap-10 flex-wrap">

      {/* Icon + Text */}
      <div className="flex items-start gap-6 flex-1 min-w-[320px]">

        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
          style={{ background: "#EBF3EF", border: "1px solid rgba(15,107,75,0.15)" }}
        >
          <svg width="30" height="30" fill="none" viewBox="0 0 24 24">
            <circle cx="9" cy="8" r="3" stroke="#0F6B4B" strokeWidth="1.7" />
            <circle cx="16" cy="8" r="3" stroke="#0F6B4B" strokeWidth="1.7" />
            <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" stroke="#0F6B4B" strokeWidth="1.7" strokeLinecap="round" />
            <path d="M17 15c1.5 0 3.5 1 3.8 5" stroke="#0F6B4B" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        </div>

        <div>
          <h3 className="text-[25px] font-semibold text-[#2F3437] mb-2">
            Built Around Long-Term Relationships
          </h3>
          <p className="text-[18px] text-[#222] leading-7 max-w-4xl">
            At LPS Livingstone, we believe successful professional relationships are built over time.
            Whether we are supporting a business owner, advising an entrepreneur, assisting a property
            investor or helping a client navigate a complex financial matter, our objective remains the
            same: to provide practical advice, responsive support and dependable expertise that clients
            can rely on for the long term.
          </p>
        </div>

      </div>

      {/* CTA Button */}
      
<a
  href="/contact"
  className="
    shrink-0
    inline-flex items-center justify-center gap-3
    px-14 py-5
    rounded-2xl
    text-[18px] font-semibold
    text-white
    transition-all duration-300
    hover:-translate-y-0.5
  "
  style={{
    background: "#0F6B4B",
    boxShadow: "0 2px 16px rgba(15,107,75,0.2)",
    minWidth: "240px",
  }}
  onMouseEnter={e => e.currentTarget.style.background = "#0a5238"}
  onMouseLeave={e => e.currentTarget.style.background = "#0F6B4B"}
>
  Contact Us
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</a>

    </div>
  </div>
</section>

    </div>
  );
};

// ── TEAM CARD ─────────────────────────────────────────────────────
const TeamCard = ({ member }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: `1px solid ${hovered ? G.primary : G.border}`,
        borderRadius: 14,
        padding: '24px 20px',
        transition: 'border-color 0.2s',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
        <Avatar name={member.name} />
        <div>
          <p style={{ fontSize: 15, fontWeight: 700, color: G.primary, margin: '0 0 2px' }}>
            {member.name}
          </p>
          <p style={{ fontSize: 13, color: '#777', margin: 0 }}>{member.role}</p>
        </div>
      </div>
      <p style={{ fontSize: 14, color: '#555', lineHeight: 1.65, margin: '0 0 14px' }}>
        {member.bio}
      </p>
      <a href="#" style={{
        fontSize: 13.5, color: G.primary, fontWeight: 600,
        textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4,
      }}>
        View Profile →
      </a>
    </div>
  );
};

export default AboutUs;