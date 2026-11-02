import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
  GraduationCap,
  Sparkles,
  Database,
  Code2,
  ArrowUp,
  ExternalLink,
} from "lucide-react";
import {
  person,
  projects,
  skills,
  leadership,
  leadershipPhotos,
} from "./content";

const nav = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Leadership", "#leadership"],
  ["Contact", "#contact"],
];
const SectionHeading = ({ index, kicker, title, description }) => (
  <div className="section-heading">
    <div className="section-marker">
      <span>{index}</span>
      <span className="marker-line" />
      {kicker}
    </div>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
);
const Reveal = ({ children, className = "", delay = 0 }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
const Anchor = ({ href, children, className = "", ...rest }) => (
  <a href={href} className={className} {...rest}>
    {children}
  </a>
);
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const sections = nav
      .map(([, href]) => document.querySelector(href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner container">
        <a href="#home" className="nav-wordmark" onClick={() => setOpen(false)}>
          Jove.
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className={activeSection === href.slice(1) ? "active" : ""}
              aria-current={
                activeSection === href.slice(1) ? "location" : undefined
              }
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href={person.resume} download>
          <Download size={15} /> Resume
        </a>
        <button
          className="menu-button"
          onClick={() => setOpen((x) => !x)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={activeSection === href.slice(1) ? "active" : ""}
                aria-current={
                  activeSection === href.slice(1) ? "location" : undefined
                }
                onClick={() => setOpen(false)}
              >
                {label}
              
              </a>
            ))}
            <a href={person.resume} download onClick={() => setOpen(false)}>
              Download Resume
              <Download size={17} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
function Home() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal>
            <div className="eyebrow-container">
              <div className="eyebrow">{person.eyebrow}</div>
              <div className="eyebrow-role">{person.eyebrowrole}</div>
            </div>
            <h1>
              Let’s make
              <br />
              <em>something good.</em>
            </h1>
            <p className="hero-description">{person.introduction}</p>
            <p className="hero-connect-description">
              I’m always happy to connect, learn from others, and explore
              opportunities in web development, databases, and technology.
            </p>
            <ContactActions className="hero-actions" />
            <div className="hero-social">
              <span>FIND ME ON</span>
              <a
                href={person.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={19} />
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={19} />
              </a>
              <span className="vertical-rule" />
              <span className="place">
                <MapPin size={14} /> {person.location}
              </span>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.12} className="hero-visual">
          <div className="image-main">
            <img
              src={person.portrait}
              alt={person.name}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeading
          index="01"
          kicker="BEHIND THE SCREEN"
          title={
            <>
              A little about <em>me.</em>
            </>
          }
        />
        <div className="about-grid">
          <Reveal className="about-picture">
            <img
              src={person.aboutImage}
              alt="Editable placeholder for an about-me or candid photo"
            />
          </Reveal>
          <div className="about-text">
            <Reveal>
              <h3>
                I’m an IT student who enjoys turning complex ideas into things
                people can actually use.
              </h3>
              <p>
                Currently studying{" "}
                <strong>
                  BS Information Technology, major in Database Systems
                </strong>{" "}
                at Mindanao State University – Iligan Institute of Technology,
                I’ve worked on full-stack applications, database-driven
                platforms, and machine learning projects.
              </p>
              <p>
                I’m especially interested in{" "}
                <strong>
                  backend development, data systems, and AI-assisted
                  applications
                </strong>
                . I like understanding how the different pieces of a system fit
                together—and making them work well for the people who use them.
              </p>
            </Reveal>
            <Reveal delay={0.12} className="about-facts">
              <div>
               
                <span>
                  <small>UNIVERSITY</small>
                  <b>MSU – Iligan Institute of Technology</b>
                </span>
              </div>
              <div>
             
                <span>
                  <small>SPECIALIZATION</small>
                  <b>Database Systems</b>
                </span>
              </div>
              <div>
                
                <span>
                  <small>EXPECTED GRADUATION</small>
                  <b>{person.gradYear}</b>
                </span>
              </div>
            </Reveal>
            <Reveal>
              <div className="honors-strip">
                <span>ACADEMIC RECOGNITION</span>
                <strong>{person.honors}</strong>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeading
          index="02"
          kicker="WHAT I WORK WITH"
          title={
            <>
              My digital <em>toolkit.</em>
            </>
          }
          description="Technologies and concepts I’ve used in class projects, personal work, and system development."
        />
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <Reveal
              key={skill.title}
              delay={Math.min(i * 0.06, 0.24)}
              className="skill-card"
            >
              <span className="skill-number">0{i + 1}</span>
              <div className="skill-icon">
                {i === 2 ? (
                  <Database size={25} />
                ) : (
                  <Code2 size={25} />
                )}
              </div>
              <h3>{skill.title}</h3>
              <div className="skill-tags">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-intro">
          <SectionHeading
            index="03"
            kicker="SELECTED WORK"
            title={
              <>
                Projects with <em>purpose.</em>
              </>
            }
            description="A selection of systems and data projects I’ve built or contributed to."
          />
        </div>
        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {projects.map((p, i) => (
              <motion.article
                layout
                key={p.no}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
                className={`project-card project-${i % 2 === 0 ? "left" : "right"}`}
              >
                <div className="project-image">
                  <img
                    src={p.image}
                    alt={`Screenshot placeholder for ${p.title}`}
                  />
                  <span className="project-number">{p.no} / 04</span>
                  <span className="project-type">{p.tag}</span>
                </div>
                <div className="project-info">
                  <div className="project-heading">
                    <h3>{p.title}</h3>
                  </div>
                  <h4>{p.subtitle}</h4>
                  <p>{p.description}</p>
                  <div className="stack">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        <div className="projects-bottom">
          <span>MORE WORK IN PROGRESS</span>
          <a href={person.github} target="_blank" rel="noreferrer">
            Explore my GitHub <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
function LeadershipCards() {
  const [active, setActive] = useState(0);
  const [shuffle, setShuffle] = useState(null);
  const busy = useRef(false);
  const timer = useRef(null);
  const stack = useRef(null);
  const pendingFocus = useRef(null);
  const reduceMotion = useReducedMotion();
  const count = leadershipPhotos.length;

  useEffect(() => () => window.clearTimeout(timer.current), []);

  useEffect(() => {
    if (pendingFocus.current) {
      stack.current
        ?.querySelector(
          `[data-card="${active}"] [data-action="${pendingFocus.current}"]`,
        )
        ?.focus({ preventScroll: true });
      pendingFocus.current = null;
    }
  }, [active]);

  const navigate = (direction) => {
    if (busy.current || count < 2) return;
    const focusedAction = stack.current.contains(document.activeElement)
      ? document.activeElement.dataset.action
      : null;
    const next = (active + direction + count) % count;
    pendingFocus.current = focusedAction;
    busy.current = true;
    setShuffle({ from: active, direction });
    setActive(next);
    timer.current = window.setTimeout(
      () => {
        setShuffle(null);
        busy.current = false;
      },
      reduceMotion ? 0 : 650,
    );
  };

  if (!count) return null;

  return (
    <div
      className="leadership-stack"
      ref={stack}
      role="region"
      aria-roledescription="carousel"
      aria-label="Beyond the Classroom photos"
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          navigate(event.key === "ArrowRight" ? 1 : -1);
        }
      }}
    >
      {leadershipPhotos.map((photo, index) => {
        const position = (index - active + count) % count;
        const isActive = position === 0;
        const outgoing = shuffle?.from === index;
        const animation = shuffle
          ? shuffle.direction === 1 && outgoing
            ? "shuffle-out"
            : shuffle.direction === -1 && isActive
              ? "shuffle-in"
              : ""
          : "";

        return (
          <article
            key={photo.src}
            data-card={index}
            data-layer={Math.min(position, 3)}
            className={`leadership-feature leadership-stack-card ${animation}`}
            style={{
              "--depth": Math.min(position, 2),
              "--card-angle": `${isActive ? 0 : -Math.min(position + 1, 3)}deg`,
              "--back-depth": Math.min(count - 1, 2),
              "--back-angle": `${count < 2 ? 0 : -Math.min(count, 3)}deg`,
              zIndex: count - position,
            }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}`}
            aria-hidden={!isActive}
            inert={!isActive ? "" : undefined}
          >
            <div className="leadership-card-controls">
              <button
                type="button"
                data-action="previous"
                aria-label="Previous leadership card"
                aria-disabled={!!shuffle || count < 2}
                onClick={() => navigate(-1)}
                tabIndex={isActive ? 0 : -1}
              >
                <ArrowLeft size={18} />
              </button>
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(count).padStart(2, "0")}
              </span>
              <button
                type="button"
                data-action="next"
                aria-label="Next leadership card"
                aria-disabled={!!shuffle || count < 2}
                onClick={() => navigate(1)}
                tabIndex={isActive ? 0 : -1}
              >
                <ArrowRight size={18} />
              </button>
            </div>
            <img src={photo.src} alt={photo.alt} />
            <div className="leadership-card-content">
              <span className="label-small">BEYOND THE CLASSROOM</span>
              <h3>To learn, to lead, and to serve.</h3>
              <p>
                Beyond academics and technology, I believe in using what I learn
                to make a difference in the lives of others. As an Iskolar ng
                Bayan, I see service as both a privilege and a
                responsibility—not only to my fellow students, but also to the
                communities we can reach. Through student leadership and
                community involvement, I hope to contribute to addressing
                real-world challenges by combining my knowledge in STEM with
                compassion, social responsibility, and a genuine willingness to
                serve.
              </p>
            </div>
          </article>
        );
      })}
      <span
        className="leadership-stack-status"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        Card {active + 1} of {count}: {leadershipPhotos[active].alt}
      </span>
    </div>
  );
}

function Leadership() {
  return (
    <section id="leadership" className="section leadership-section">
      <div className="container">
        <SectionHeading
          index="04"
          kicker="BEYOND THE CODE"
          title={
            <>
              Showing up. <em>Stepping up.</em>
            </>
          }
          description="Leadership and student involvement have taught me just as much as technical projects have."
        />
        <div className="leadership-layout">
          <LeadershipCards />
          <div className="leadership-list">
            {leadership.map((l, i) => (
              <Reveal
                key={l.role + i}
                className="leadership-item"
                delay={i * 0.065}
              >
                <div className="leadership-year">{l.year}</div>
                <div>
                  <h3>{l.role}</h3>
                  <span className="leader-org">{l.org}</span>
                  <p>{l.description}</p>
                </div>
               
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function ContactActions({ className = "contact-actions" }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${person.email}`;
    }
  };
  return (
    <div className={className}>
      <a className="btn btn-light" href={`mailto:${person.email}`}>
        Say hello <Mail size={19} />
      </a>
      <button type="button" className="btn btn-ghost-light" onClick={copy}>
        <span role="status" aria-live="polite">
          {copied ? "Email copied!" : "Copy email"}
        </span>
        <ArrowUpRight size={17} />
      </button>
    </div>
  );
}
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-top">
          <span>05 / LET’S CONNECT</span>
          <span>OPEN TO OPPORTUNITIES</span>
        </div>
        <Reveal>
          <h2>
           Have something in <br />
            <em>mind?</em>
          </h2>
          <p>
            I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out!
          </p>
          <ContactActions />
        </Reveal>
        <div className="contact-links">
          <div>
            <span>EMAIL</span>
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </div>
          <div>
            <span>FIND ME ONLINE</span>
            <a href={person.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={16} />
            </a>
            <a href={person.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={16} />
            </a>
          </div>
          <div>
            <span>MY RESUME</span>
            <a href={person.resume} download>
              Download PDF <Download size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="nav-wordmark" href="#home">
          Jove.
        </a>
        <span>
         © {new Date().getFullYear()}
        </span>
        <a href="#home">
          Back to top <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
