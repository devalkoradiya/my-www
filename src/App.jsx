import profileDesk from "../photos/photo-2.jpeg";
import profileOutdoor from "../photos/photo-1.jpeg";
import logo from "../photos/logo.png";
import { useEffect } from "react";

const metrics = [
  { value: "3", label: "companies actively led" },
  { value: "10+", label: "core capability areas" },
  { value: "360°", label: "ops to software coverage" },
];

const detailedSkills = [
  {
    title: "Backend and Databases",
    points: [
      "PHP and Node.js backend development",
      "API planning and business workflow logic",
      "Admin panels, dashboards, and reporting flows",
      "DynamoDB practical query handling",
      "PostgreSQL, MySQL, and SQLite comfort",
      "Reporting and timestamp-based filtering logic",
      "Choosing SQL vs NoSQL by business use case",
    ],
  },
  {
    title: "Frontend and UI",
    points: [
      "React-based website and interface development",
      "Responsive layout building for desktop and mobile",
      "UI structure, section flow, and landing page presentation",
      "Frontend aligned with business clarity and conversion needs",
    ],
  },
  {
    title: "Infrastructure",
    points: [
      "Docker and Compose based deployment setup",
      "Linux server management and troubleshooting",
      "PM2, environment management, and startup flows",
      "VPS deployment and real-world infra debugging",
    ],
  },
  {
    title: "Network",
    points: [
      "pfSense, WireGuard, VLANs, routing, and firewall rules",
      "Remote access and multi-network connectivity",
      "Secure connectivity for distributed operations",
      "Practical troubleshooting for hybrid network setups",
    ],
  },
  {
    title: "Automation",
    points: [
      "Telephony, AI voice, and process automation",
      "IoT-linked system thinking and integration",
      "Workflow automation across systems and operations",
      "Execution-focused integration thinking",
    ],
  },
];

const operatingModes = [
  "Requirement to deployment",
  "Practical founder mindset",
  "Fast troubleshooting",
  "Useful business systems",
];

const projectFits = [
  "Custom backend systems",
  "Dashboards and admin panels",
  "Deployment-heavy products",
  "VPN and multi-site networking",
  "Automation-led workflows",
  "Founder-driven MVP builds",
];

const ventures = [
  {
    name: "GreetBuzz Graphics Private Limited",
    tag: "Brand and design venture",
    url: "https://greet.buzz",
    summary:
      "A creative company focused on visual identity, marketing assets, and brand presentation.",
  },
  {
    name: "GreetCodes Infosoft Private Limited",
    tag: "Software and systems venture",
    url: "https://greet.codes",
    summary:
      "A software company delivering websites, applications, UI/UX, and business systems.",
  },
  {
    name: "Limberspace Private Limited",
    tag: "Coworking space venture",
    url: "https://limber.space",
    summary:
      "A coworking space company focused on flexible workspace access, location convenience, and practical shared-office usage.",
  },
];

const serviceTracks = [
  {
    title: "Backend Systems",
    text: "APIs, workflow logic, admin panels, reporting tools.",
  },
  {
    title: "Frontend Interfaces",
    text: "React websites, responsive UI, landing pages, user-facing flows.",
  },
  {
    title: "Deployment and Infra",
    text: "Docker, Linux, PM2, VPS setup, troubleshooting.",
  },
  {
    title: "Networking",
    text: "pfSense, WireGuard, VLANs, firewall rules, remote access.",
  },
  {
    title: "Automation",
    text: "Telephony, AI voice, IoT ideas, integrated operations.",
  },
];

const proofPoints = [
  "Practical depth in production-useful backend systems",
  "Strong bridge between implementation and business workflows",
  "Useful on mixed software, infra, and network problems",
  "Good fit for messy real-world execution contexts",
];

const aiPoints = [
  "AI agents and MCP-connected workflows for faster execution",
  "Practical use of AI to simplify repetitive technical tasks",
  "Security-conscious implementation with controlled workflow design",
  "Better speed in research, development support, and structured delivery",
];

const personalTraits = [
  "Calm and grounded nature in practical work environments",
  "Able to connect with people easily and build smooth collaboration",
  "Comfortable communicating in English, Hindi, and Gujarati",
  "Can both speak and write clearly across these languages",
];

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <div className="grain" />
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="topbar reveal-on-scroll is-visible">
        <a className="brand" href="#home">
          <span className="brand-mark">
            <img src={logo} alt="Deval logo" />
          </span>
          <span className="brand-text">
            <strong>Deval Koradiya</strong>
            <small>Founder • Builder • Systems Engineer</small>
          </span>
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#ventures">Ventures</a>
          <a href="#expertise">Expertise</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-shell reveal-on-scroll is-visible" id="home">
          <div className="hero-main section">
            <div className="hero-ribbon">Backend • Infrastructure • Networking • Automation</div>
            <h1>Software, systems, and execution for real business operations.</h1>
            <p className="lead">
              I build across backend, infrastructure, networking, automation,
              and business workflows with a practical founder-minded approach.
            </p>

            <div className="hero-metrics">
              {metrics.map((item) => (
                <article className="metric-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-side">
            <article className="section photo-stage">
              <div className="portrait-stack">
                <img
                  className="portrait portrait-main"
                  src={profileDesk}
                  alt="Deval Koradiya working on a laptop"
                />
              </div>
            </article>

            <div className="hero-lower">
              <article className="section hero-note">
                <span>Current lens</span>
                <p>
                  Turning technical depth into usable business infrastructure
                  and founder-ready execution.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section about-band reveal-on-scroll" id="about">
          <article className="about-copy">
            <p className="eyebrow">About me</p>
            <h2>Builder mindset. Technical depth. Business clarity.</h2>
            <div className="point-list">
              <p>• India-based developer with practical execution mindset</p>
              <p>• Backend-first execution</p>
              <p>• Strong infra and deployment comfort</p>
              <p>• Practical networking and VPN problem solving</p>
              <p>• Good fit for CRM, ERP, and operations software</p>
            </div>
          </article>

          <article className="about-photo">
            <img
              className="outdoor-shot"
              src={profileOutdoor}
              alt="Deval Koradiya outdoors"
            />
          </article>
        </section>

        <section className="section grid-feature reveal-on-scroll" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Skill Depth</p>
            <h2>Core skill areas.</h2>
          </div>
          <div className="skill-grid">
            {detailedSkills.map((skill) => (
              <article className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>
                <ul className="skill-points">
                  {skill.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="split-boards reveal-on-scroll">
          <article className="section board-panel">
            <p className="eyebrow">How I Work</p>
            <h3>Execution style</h3>
            <ul>
              {operatingModes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="section board-panel">
            <p className="eyebrow">Best Fit</p>
            <h3>Best-fit projects</h3>
            <ul>
              {projectFits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="section ai-section reveal-on-scroll">
          <div className="section-heading">
            <p className="eyebrow">AI Workflow</p>
            <h2>Using AI, MCP, and agent-based workflows to build faster and smarter.</h2>
          </div>
          <div className="ai-layout">
            <div className="ai-copy">
              <p className="lead">
                I use AI in a practical way to simplify execution, speed up
                structured work, and reduce unnecessary manual effort. My focus
                is not hype. It is useful implementation with controlled,
                secure, and business-relevant outcomes.
              </p>
            </div>
            <div className="ai-points">
              {aiPoints.map((point) => (
                <article className="ai-point-card" key={point}>
                  <span className="ai-point-dot" aria-hidden="true" />
                  <p>{point}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section human-section reveal-on-scroll">
          <div className="section-heading">
            <p className="eyebrow">Working Style</p>
            <h2>Technical depth with an easy and people-friendly nature.</h2>
          </div>
          <div className="human-grid">
            {personalTraits.map((trait) => (
              <article className="human-card" key={trait}>
                <p>{trait}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section ventures-section reveal-on-scroll" id="ventures">
          <div className="section-heading">
            <p className="eyebrow">Ventures</p>
            <h2>Three active ventures.</h2>
          </div>
          <div className="venture-grid">
            {ventures.map((venture) => (
              <article className="venture-card" key={venture.name}>
                <p className="venture-tag">{venture.tag}</p>
                <h3>{venture.name}</h3>
                <p>{venture.summary}</p>
                <a href={venture.url} target="_blank" rel="noreferrer">
                  Visit website
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="expertise-cluster reveal-on-scroll" id="expertise">
          <div className="section stack-panel">
            <div className="section-heading">
              <p className="eyebrow">Expertise</p>
              <h2>What I work on.</h2>
            </div>
            <div className="service-grid">
              {serviceTracks.map((track) => (
                <article className="service-card" key={track.title}>
                  <h3>{track.title}</h3>
                  <p>{track.text}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="section vertical-panel">
            <p className="eyebrow">Positioning</p>
            <h3>Why teams work with me.</h3>
            <div className="proof-stack">
              {proofPoints.map((point) => (
                <article className="proof-card" key={point}>
                  <p>{point}</p>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="section founder-strip reveal-on-scroll">
          <div className="founder-copy">
            <p className="eyebrow">Founder Lens</p>
            <h2>I connect code, operations, and execution.</h2>
            <div className="point-list compact">
              <p>• India-based delivery with founder-level ownership</p>
              <p>• I understand business need and technical implementation</p>
              <p>• I can move from idea to working system</p>
              <p>• I am useful where many moving parts must work together</p>
              <p>• I take work with accountability, and I stand behind delivery quality</p>
            </div>
          </div>
          <div className="founder-badge">
            <span>DK</span>
          </div>
        </section>

        <section className="section trust-strip reveal-on-scroll">
          <div className="section-heading">
            <p className="eyebrow">Work Ethic</p>
            <h2>I take responsibility for the work I commit to.</h2>
          </div>
          <div className="point-list compact">
            <p>• I do not treat client work casually once I take it on</p>
            <p>• I work with strong ownership until the committed scope is properly delivered</p>
            <p>• I prefer clear expectations, practical execution, and accountable outcomes</p>
            <p>• I stand behind my work quality and take delivery responsibility seriously</p>
          </div>
        </section>

        <section className="section contact-block reveal-on-scroll" id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build something useful.</h2>
            <div className="point-list compact">
              <p>• Open for custom software and systems work</p>
              <p>• Available for founder-led execution projects</p>
              <p>• Email: patel@devalkoradiya.in</p>
              <p>• Phone: +91 88 6666 8535</p>
            </div>
          </div>

          <div className="contact-actions">
            <a className="button icon-button primary" href="mailto:patel@devalkoradiya.in" aria-label="Email Deval Koradiya">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 6.8A1.8 1.8 0 0 1 4.8 5h14.4A1.8 1.8 0 0 1 21 6.8v10.4a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 17.2V6.8Zm2 .4v.3l7 4.8 7-4.8v-.3H5Zm14 2.7-6.4 4.4a1 1 0 0 1-1.2 0L5 9.9v7.3h14V9.9Z" />
              </svg>
            </a>
            <a className="button icon-button secondary" href="tel:+918866668535" aria-label="Call Deval Koradiya">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 4h3a1 1 0 0 1 1 .8l.7 3.1a1 1 0 0 1-.3.9l-1.6 1.4a13 13 0 0 0 4.9 4.9l1.4-1.6a1 1 0 0 1 .9-.3l3.1.7a1 1 0 0 1 .8 1v3a1 1 0 0 1-.9 1A15.5 15.5 0 0 1 5.5 4.9 1 1 0 0 1 6.5 4Z" />
              </svg>
            </a>
          </div>
        </section>

        <section className="section experience-strip reveal-on-scroll">
          <div className="footer-highlight">
            <div className="footer-highlight-icon" aria-hidden="true">
              <span>20+</span>
            </div>
            <div className="footer-highlight-copy">
              <p className="footer-highlight-label">Project Exposure</p>
              <h2>Corporate delivery experience with hands-on execution.</h2>
              <p className="footer-highlight-text">
                Worked across 20+ large project environments with practical
                involvement from implementation to delivery.
              </p>
            </div>
          </div>
        </section>

        <footer className="section social-footer reveal-on-scroll">
          <p className="eyebrow">Social</p>
          <div className="social-links">
            <a href="https://www.instagram.com/devalkoradiya" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.5 1.6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Z" />
              </svg>
              <span>Instagram</span>
            </a>
            <a href="https://www.facebook.com/DevalKoradiya11/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H17V4.8c-.4-.1-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3h2.8v8h3.2Z" />
              </svg>
              <span>Facebook</span>
            </a>
            <a href="https://www.linkedin.com/in/devalkoradiya/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.4 8.8A1.9 1.9 0 1 1 6.4 5a1.9 1.9 0 0 1 0 3.8ZM4.8 10.4H8V20H4.8v-9.6Zm5.2 0H13v1.3h.1c.4-.8 1.5-1.7 3-1.7 3.2 0 3.9 2.1 3.9 4.8V20h-3.2v-4.7c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V20H10v-9.6Z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="http://github.com/devalkoradiya" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.5 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.1-4.7-5A3.9 3.9 0 0 1 7.4 8c-.1-.3-.5-1.3.1-2.8 0 0 .9-.3 2.9 1.1a9.9 9.9 0 0 1 5.2 0c2-1.4 2.9-1.1 2.9-1.1.6 1.5.2 2.5.1 2.8a4 4 0 0 1 1 2.7c0 3.9-2.4 4.7-4.8 5 .4.3.8 1 .8 2.1V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
