import React, { useState } from 'react';
import officePhoto from '../assets/AboutusHero.png';
import teamPhoto from '../assets/AboutusTeam.png';

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
      <section style={{ background: '#FAFAFA', padding: '80px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionLabel>Our Approach</SectionLabel>
          <H2 style={{ textAlign: 'center', marginBottom: 10 }}>Our Approach</H2>
          <p style={{
            textAlign: 'center', fontSize: 15.5, color: '#555', lineHeight: 1.7,
            maxWidth: 680, margin: '0 auto 52px',
          }}>
            Building lasting relationships is at the heart of what we do. We take the time to
            understand our clients, their objectives and the challenges they face, enabling us to
            provide practical advice and dependable support tailored to their circumstances.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 20,
          }}>
            {approachCards.map((card, i) => (
              <div key={i} style={{
                background: '#fff',
                border: `1px solid ${G.border}`,
                borderRadius: 14,
                padding: '32px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: G.light,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{card.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: G.primary, margin: 0 }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: 14.5, color: '#555', lineHeight: 1.65, margin: 0 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CLIENTS WORK WITH US ─────────────────────────── */}
    <section style={{ padding: '80px 0' }}>
  <div style={{
    display: 'grid',
    gridTemplateColumns: '45% 55%',
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
          minHeight: 640,
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </div>

    {/* RIGHT — content with inner padding */}
    <div style={{ padding: '20px 5% 20px 72px' }}>
      <H2 style={{ marginBottom: 16 }}>Why Clients Work With Us</H2>

      <p style={{ fontSize: 15.5, color: '#555', lineHeight: 1.75, marginBottom: 12 }}>
        Choosing an accountant or adviser is rarely about finding someone to complete forms
        or meet filing deadlines.
      </p>
      <p style={{ fontSize: 15.5, color: '#555', lineHeight: 1.75, marginBottom: 12 }}>
        Most clients are looking for a trusted professional who can provide clear advice,
        respond when needed and help them navigate important financial decisions with confidence.
      </p>
      <p style={{ fontSize: 15.5, color: '#555', lineHeight: 1.75, marginBottom: 36 }}>
        Many of our client relationships have developed over a number of years. What often
        begins as a specific engagement evolves into a broader advisory relationship built
        on trust, consistency and a genuine understanding of the client's circumstances.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {whyPoints.map((pt, i) => (
          <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <Tick />
            <div>
              <p style={{ fontSize: 15, fontWeight: 700, color: G.primary, margin: '0 0 4px' }}>
                {pt.title}
              </p>
              <p style={{ fontSize: 14.5, color: '#555', lineHeight: 1.65, margin: 0 }}>
                {pt.desc}
              </p>
            </div>
          </div>
        ))}
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
      <section style={{
        padding: '64px 5%',
        background: '#fff',
        borderTop: `1px solid ${G.border}`,
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 40,
          flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, flex: '1 1 480px' }}>
            {/* icon */}
            <div style={{
              width: 52, height: 52, borderRadius: '50%',
              background: G.light, display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                <circle cx="10" cy="9" r="4" stroke={G.primary} strokeWidth="1.5" />
                <circle cx="18" cy="9" r="4" stroke={G.primary} strokeWidth="1.5" />
                <path d="M2 22c0-4 3.6-7 8-7s8 3 8 7" stroke={G.primary} strokeWidth="1.5" strokeLinecap="round" />
                <path d="M18 15c2.5 0 6 1.8 6 7" stroke={G.primary} strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: G.primary, margin: '0 0 8px' }}>
                Built Around Long-Term Relationships
              </h3>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.75, margin: 0 }}>
                At LPS Livingstone, we believe successful professional relationships are built over time.
                Whether we are supporting a business owner, advising an entrepreneur, assisting a property
                investor or helping a client navigate a complex financial matter, our objective remains the
                same: to provide practical advice, responsive support and dependable expertise that clients
                can rely on for the long term.
              </p>
            </div>
          </div>

          <a href="/contact" style={{
            display: 'inline-block',
            background: G.primary,
            color: '#fff',
            padding: '14px 32px',
            borderRadius: 8,
            textDecoration: 'none',
            fontSize: 15,
            fontWeight: 600,
            flexShrink: 0,
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = G.mid}
            onMouseLeave={e => e.currentTarget.style.background = G.primary}
          >
            Contact Us →
          </a>
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