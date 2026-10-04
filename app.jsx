const { useState, useEffect, useRef, createContext, useContext } = React;

/* ============================================================
   IMAGES — keep these files in an "images" folder next to index.html
   ============================================================ */
const IMG = {
  miloPitch: "images/miloPitch.jpg",
  teamPitch: "images/teamPitch.jpg",
  eureka: "images/eureka.jpg",
  techfest: "images/techfest.jpg",
  inamigos: "images/inamigos.jpg",
  genai: "images/genai.jpg",
};
/* ============================================================
   CONTENT
   ============================================================ */
const PROFILE = {
  name: "Shreya Konduskar",
  location: "Mumbai, Maharashtra, India",
  email: "konduskarshreya5@gmail.com",
  linkedin: "https://www.linkedin.com/in/shreya-konduskar-a296403a9",
  github: "https://github.com/S-COLLL",
};

const PROJECTS = [
  {
    id: "milo",
    name: "Milo",
    role: "Co-creator · Eureka Pitching Competition",
    image: IMG.teamPitch,
    summary: "A verified, safe and fully auditable corporate carpooling platform for companies.",
    points: [
      "Co-developed Milo, a B2B SaaS platform built to make corporate commuting more sustainable.",
      "Designed around verification and auditability, so companies can trust who shares each ride.",
      "Pitched the business model with my team to a panel of judges at the Eureka Pitching Competition, organised by E-Cell DMCE in August 2026.",
    ],
    stack: ["B2B SaaS", "Product design", "Business model", "Pitching"],
    proof: [IMG.miloPitch, IMG.eureka],
  },
  {
    id: "notebot",
    name: "NoteBot",
    role: "Creator & developer · Independent project",
    glyph: "📚",
    accentBg: "linear-gradient(135deg, #4F46E5, #D9467F)",
    summary: "An AI assistant that reads your PDF notes and answers questions about them in context.",
    points: [
      "Built an AI assistant that makes working with long documents feel like a conversation.",
      "Processed PDFs into searchable chunks and used semantic search over vector embeddings (FAISS) to find the right context for each question.",
      "Worked through debugging hurdles and API limits to get reliable, context-aware answers.",
      "Grew out of my Generative AI for Beginners: Build AI Chatbot course (June 2026).",
    ],
    stack: ["Python", "Streamlit", "LangChain", "OpenAI API", "FAISS", "PyPDF2"],
    proof: [IMG.genai],
  },
  {
    id: "ecell-web",
    name: "E-Cell DMCE web",
    role: "Web developer · Entrepreneurship Cell, DMCE",
    glyph: "🧩",
    accentBg: "linear-gradient(135deg, #FF8B5C, #F4B43E)",
    summary: "Responsive event pages and components for the official E-Cell DMCE website.",
    link: "https://www.ecelldmce.in/events/6c8f93a8-59d9-4275-8e9b-a934e9dfc9b9",
    points: [
      "Developing responsive web page components and layout designs for the live E-Cell DMCE website (ecelldmce.in).",
      "Building reusable, mobile-friendly UI for the cell's events pages, so students can browse and register for events.",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS"],
    proof: [],
  },
];

const EXPERIENCE = [
  {
    when: "Sep 2026 – present", title: "Web Developer", org: "The Entrepreneurship Cell (E-Cell), DMCE",
    text: "Developing responsive web page components and layout designs that support the E-Cell's digital initiatives.",
    link: "https://www.ecelldmce.in/events/6c8f93a8-59d9-4275-8e9b-a934e9dfc9b9",
  },
  {
    when: "Aug 2026", title: "Co-creator & presenter, Milo", org: "Eureka Pitching Competition · E-Cell DMCE",
    text: "Pitched Milo, a corporate carpooling B2B SaaS idea, with my team to a panel of judges.",
    proof: { src: IMG.eureka, caption: "Certificate of participation, Eureka Pitching Competition" },
  },
  {
    when: "Jul 2026 – Techfest 2026-27", title: "College Ambassador", org: "Techfest, IIT Bombay",
    text: "Selected as the face of Techfest for the DMCE campus: driving engagement and leading peers into tech initiatives.",
    proof: { src: IMG.techfest, caption: "Techfest, IIT Bombay offer letter" },
  },
  {
    when: "9 – 22 Jun 2026", title: "AI Data Analytics Intern", org: "InAmigos Foundation (IAF) · Hybrid",
    text: "Completed hands-on AI and data analytics tasks for a non-profit focused on grassroots development and community empowerment.",
    proof: { src: IMG.inamigos, caption: "Certificate of internship, InAmigos Foundation" },
  },
];

const GALLERY = [
  { src: IMG.miloPitch, title: "Pitching Milo", note: "Eureka Pitching Competition, Aug 2026" },
  { src: IMG.teamPitch, title: "Team Milo on stage", note: "Presenting our competitive advantage" },
  { src: IMG.techfest, title: "Techfest College Ambassador", note: "IIT Bombay, 2026–27" },
  { src: IMG.inamigos, title: "AI Data Internship", note: "InAmigos Foundation, June 2026" },
  { src: IMG.genai, title: "Generative AI: Build AI Chatbot", note: "Jenny's Lectures, June 2026" },
  { src: IMG.eureka, title: "Eureka participation", note: "E-Cell DMCE, Aug 2026" },
];

const SKILLS = [
  { group: "Languages & frameworks", items: ["Python", "Java", "C", "React", "TypeScript", "Tailwind CSS", "OOP"] },
  { group: "Generative AI & data", items: ["LangChain", "OpenAI API", "FAISS", "PyPDF2", "Streamlit", "Semantic search", "Vectorization"] },
  { group: "Strengths", items: ["Problem-solving", "API integration", "B2B SaaS logic", "Team leadership"] },
];

const WINS = [
  { ico: "🏆", title: "1st place, Bid2Pitch", text: "Led team Code Xperts to win the Tech Auctions by GITS, DMCE." },
  { ico: "🎤", title: "Techfest College Ambassador", text: "Representing IIT Bombay's Techfest 2026–27 at DMCE." },
  { ico: "🤖", title: "Generative AI certified", text: "Generative AI for Beginners: Build AI Chatbot, June 2026." },
];

/* ============================================================
   HELPERS: router, scroll reveal, lightbox
   ============================================================ */
function useHashRoute() {
  const read = () => window.location.hash.replace(/^#/, "") || "/";
  const [path, setPath] = useState(read);
  useEffect(() => {
    const onChange = () => { setPath(read()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return path;
}

// Fades children in when they scroll into view
function Reveal({ children, delay = 0, as: Tag = "div", className = "" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!("IntersectionObserver" in window)) { setShown(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${shown ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

const LightboxCtx = createContext(() => {});
function LightboxProvider({ children }) {
  const [item, setItem] = useState(null);
  useEffect(() => {
    if (!item) return;
    const onKey = e => e.key === "Escape" && setItem(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [item]);
  return (
    <LightboxCtx.Provider value={setItem}>
      {children}
      {item && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.caption} onClick={() => setItem(null)}>
          <button className="lb-close" aria-label="Close image" onClick={() => setItem(null)}>✕</button>
          <figure onClick={e => e.stopPropagation()}>
            <img src={item.src} alt={item.caption} />
            <figcaption>{item.caption}</figcaption>
          </figure>
        </div>
      )}
    </LightboxCtx.Provider>
  );
}
const useLightbox = () => useContext(LightboxCtx);

/* ============================================================
   LAYOUT
   ============================================================ */
function ThemeToggle() {
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem("theme") || ""; } catch { return ""; } });
  useEffect(() => {
    theme ? document.documentElement.setAttribute("data-theme", theme) : document.documentElement.removeAttribute("data-theme");
    try { theme ? localStorage.setItem("theme", theme) : localStorage.removeItem("theme"); } catch {}
  }, [theme]);
  const isDark = theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
  return (
    <button className="icon-btn" onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>{isDark ? "☀" : "☾"}</button>
  );
}

function Header({ path }) {
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  const links = [["/", "Home"], ["/projects", "Projects"], ["/experience", "Experience"], ["/gallery", "Gallery"], ["/about", "About"], ["/contact", "Contact"]];
  const isActive = to => path === to || (to !== "/" && path.startsWith(to + "/"));
  return (
    <header className="site-header">
      <nav className="wrap nav" aria-label="Main">
        <a href="#/" className="brand"><span className="brand-mark">S</span>Shreya Konduskar</a>
        <ul className={"nav-links" + (open ? " open" : "")}>
          {links.map(([to, label]) => (
            <li key={to}><a href={"#" + to} aria-current={isActive(to) ? "page" : undefined}>{label}</a></li>
          ))}
        </ul>
        <ThemeToggle />
        <button className="icon-btn menu-btn" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
      </nav>
    </header>
  );
}

/* ============================================================
   PAGES
   ============================================================ */
function TypedHeadline({ lines }) {
  const full = lines.join(" ");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [n, setN] = useState(reduce ? full.length : 0);
  useEffect(() => {
    if (n >= full.length) return;
    const t = setTimeout(() => setN(n + 1), 42);
    return () => clearTimeout(t);
  }, [n]);
  const first = lines[0];
  const typedFirst = full.slice(0, Math.min(n, first.length));
  const typedSecond = n > first.length + 1 ? full.slice(first.length + 1, n) : "";
  return (
    <h1 aria-label={full}>
      <span aria-hidden="true">{typedFirst}{typedSecond === "" && <span className="caret"></span>}<br />
        <span className="grad-text">{typedSecond}</span>{typedSecond !== "" && <span className="caret"></span>}</span>
    </h1>
  );
}

function ProjectCard({ p, delay }) {
  return (
    <Reveal delay={delay}>
      <a className="project" href={"#/projects/" + p.id}>
        <div className="project-media" style={{ "--accent-bg": p.accentBg || "var(--line)" }}>
          {p.link && <span className="live-badge">Live site</span>}
          {p.image ? <img src={p.image} alt="" loading="lazy" /> : <div className="glyph" aria-hidden="true">{p.glyph}</div>}
        </div>
        <div className="project-body">
          <h3>{p.name}</h3>
          <div className="role">{p.role}</div>
          <p>{p.summary}</p>
          <ul className="tags">{p.stack.map(s => <li key={s}>{s}</li>)}</ul>
        </div>
      </a>
    </Reveal>
  );
}

function Home() {
  const ticker = SKILLS.flatMap(g => g.items);
  return (
    <div>
      <div className="wrap">
        <section className="hero">
          <div className="blob b1"></div><div className="blob b2"></div><div className="blob b3"></div>
          <div>
            <div className="status"><span className="pulse"></span>Open to internships & collaborations</div>
            <TypedHeadline lines={["Code is my language", "for creation."]} />
            <p className="lead">I'm <strong>Shreya Konduskar</strong>, an IT engineering student at DMCE, Navi Mumbai.
              I build AI tools with Python and web apps with React, and I pitch the ideas behind them.</p>
            <div className="cta-row">
              <a className="btn primary" href="#/projects">View my work</a>
              <a className="btn ghost" href="#/contact">Let's connect</a>
            </div>
          </div>
          <div className="portrait">
            <div className="portrait-frame"><img src={IMG.miloPitch} alt="Shreya presenting Milo at the Eureka Pitching Competition" /></div>
            <div className="chip c1"><span className="dot" style={{ background: "color-mix(in srgb, var(--gold) 25%, transparent)" }}>🏆</span>
              <span>Bid2Pitch winner<small>Team Code Xperts</small></span></div>
            <div className="chip c2"><span className="dot" style={{ background: "color-mix(in srgb, var(--accent) 20%, transparent)" }}>🚀</span>
              <span>Techfest Ambassador<small>IIT Bombay 2026–27</small></span></div>
          </div>
        </section>

        <div className="stats">
          {[["1st", "place at Bid2Pitch"], ["3", "projects built & pitched"], ["2", "certified programmes"], ["6+", "AI & data tools used"]]
            .map(([n, l], i) => <Reveal key={l} delay={i * 90} className="stat"><strong className="grad-text">{n}</strong><span>{l}</span></Reveal>)}
        </div>
      </div>

      <div className="ticker" aria-label="Skills">
        <div className="ticker-track">{[...ticker, ...ticker].map((s, i) => <span key={i}>{s}</span>)}</div>
      </div>

      <div className="wrap">
        <section className="section">
          <Reveal className="section-head">
            <h2>Featured work</h2>
            <a className="more-link" href="#/projects">All projects</a>
          </Reveal>
          <div className="projects">{PROJECTS.slice(0, 3).map((p, i) => <ProjectCard key={p.id} p={p} delay={i * 120} />)}</div>
        </section>

        <section className="section">
          <Reveal className="section-head">
            <h2>Moments & milestones</h2>
            <a className="more-link" href="#/gallery">Open gallery</a>
          </Reveal>
          <GalleryGrid items={GALLERY.slice(0, 3)} />
        </section>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="wrap">
      <Reveal><h1 className="page-title">Projects</h1>
        <p className="page-intro">Things I've built, pitched and shipped. Open one to see how it works.</p></Reveal>
      <div className="projects">{PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} delay={i * 120} />)}</div>
    </div>
  );
}

function ProjectDetail({ id }) {
  const open = useLightbox();
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return <NotFound />;
  return (
    <div className="wrap">
      <a className="back" href="#/projects">← All projects</a>
      <h1 className="page-title">{p.name}</h1>
      <p className="page-intro">{p.summary}</p>
      {p.link && <div className="cta-row" style={{ margin: "-1.2rem 0 2.5rem" }}>
        <a className="btn primary" href={p.link} target="_blank" rel="noopener">Visit live site ↗</a></div>}
      {p.image && <Reveal className="detail-hero"><img src={p.image} alt={p.name + " team presenting"} /></Reveal>}
      <div className="detail">
        <Reveal>
          <h2>What I did</h2>
          <ul className="points">{p.points.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </Reveal>
        <Reveal delay={120} as="dl" className="aside">
          <dt>Role</dt><dd>{p.role}</dd>
          <dt>Built with</dt>
          <dd><ul className="tags">{p.stack.map(s => <li key={s}>{s}</li>)}</ul></dd>
          {p.proof.length > 0 && <>
            <dt>Evidence</dt>
            <dd style={{ display: "flex", gap: ".6rem", flexWrap: "wrap", marginTop: ".4rem" }}>
              {p.proof.map(src => <button key={src} className="proof" style={{ width: "110px" }}
                onClick={() => open({ src, caption: p.name })} aria-label={"View " + p.name + " image"}><img src={src} alt="" /></button>)}
            </dd>
          </>}
        </Reveal>
      </div>
    </div>
  );
}

function Experience() {
  const open = useLightbox();
  return (
    <div className="wrap">
      <Reveal><h1 className="page-title">Experience</h1>
        <p className="page-intro">Roles where I've learned by doing, most recent first. Tap a certificate to view it.</p></Reveal>
      <ol className="timeline">
        {EXPERIENCE.map((e, i) => (
          <Reveal as="li" key={i} delay={i * 80}>
            <div className="tl-card">
              <div>
                <span className="when">{e.when}</span>
                <h3>{e.title}</h3>
                <div className="org">{e.org}</div>
                <p>{e.text}</p>
                {e.link && <a className="more-link" href={e.link} target="_blank" rel="noopener"
                  style={{ display: "inline-block", marginTop: ".7rem" }}>See the live site ↗</a>}
              </div>
              {e.proof && <button className="proof" onClick={() => open(e.proof)} aria-label={"View " + e.proof.caption}>
                <img src={e.proof.src} alt="" loading="lazy" /></button>}
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

function GalleryGrid({ items }) {
  const open = useLightbox();
  return (
    <div className="gallery">
      {items.map((g, i) => (
        <Reveal key={g.src} delay={(i % 3) * 100}>
          <button className="g-item" style={{ width: "100%" }} onClick={() => open({ src: g.src, caption: g.title + " · " + g.note })}>
            <img src={g.src} alt={g.title} loading="lazy" />
            <div className="g-cap"><strong>{g.title}</strong><span>{g.note}</span></div>
          </button>
        </Reveal>
      ))}
    </div>
  );
}

function Gallery() {
  return (
    <div className="wrap">
      <Reveal><h1 className="page-title">Gallery</h1>
        <p className="page-intro">Pitches, certificates and milestones. Select any image to see it full size.</p></Reveal>
      <GalleryGrid items={GALLERY} />
    </div>
  );
}

function About() {
  return (
    <div className="wrap">
      <Reveal><h1 className="page-title">About me</h1></Reveal>
      <div className="about-grid">
        <Reveal>
          <p>I'm an IT engineering student who sees code as a language for creation. I'm steadily mastering the
            fundamentals (Python, Java and C) alongside modern web tools like React, TypeScript and Tailwind CSS.</p>
          <p>What pulls me in is the "why" behind the logic. Every lab and personal project is a chance to turn a blank
            screen into a working solution. I'm looking to connect with mentors and peers who love clean code, smart design
            and big ideas.</p>
          <h2 style={{ fontSize: "1.6rem", margin: "2.4rem 0 1.3rem" }}>Skills</h2>
          {SKILLS.map(g => (
            <div className="skill-group" key={g.group}>
              <h3>{g.group}</h3>
              <ul className="tags">{g.items.map(s => <li key={s}>{s}</li>)}</ul>
            </div>
          ))}
        </Reveal>
        <div>
          <Reveal className="card" delay={100}>
            <h2>Highlights</h2>
            <ul className="wins">{WINS.map(w => <li key={w.title}><span className="ico" aria-hidden="true">{w.ico}</span>
              <div><strong>{w.title}</strong><span>{w.text}</span></div></li>)}</ul>
          </Reveal>
          <Reveal className="card" delay={200}>
            <h2>Education</h2>
            <dl className="edu">
              <dt>B.E. Information Technology</dt>
              <dd>Datta Meghe College of Engineering, Navi Mumbai · Direct second-year admission</dd>
              <dt>Higher Secondary (Science) · 85.25%</dt>
              <dd style={{ marginBottom: 0 }}>Seventh Day Adventist Higher Secondary School</dd>
            </dl>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [ready, setReady] = useState(false);
  const update = key => e => { setForm({ ...form, [key]: e.target.value }); setReady(false); };

  const submit = e => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter an email address like name@example.com.";
    if (form.message.trim().length < 10) next.message = "Write at least 10 characters.";
    setErrors(next);
    setReady(Object.keys(next).length === 0);
  };
  const mailto = `mailto:${PROFILE.email}?subject=${encodeURIComponent("Hello from " + form.name)}&body=${encodeURIComponent(form.message + "\n\n" + form.name + " (" + form.email + ")")}`;

  return (
    <div className="wrap">
      <Reveal><h1 className="page-title">Let's build something</h1></Reveal>
      <div className="contact">
        <Reveal className="contact-panel">
          <h2>Say hello</h2>
          <p>Mentoring, collaborations, hackathon teams or internships: I'd love to hear from you.</p>
          <ul className="links">
            <li>✉ <a href={"mailto:" + PROFILE.email}>{PROFILE.email}</a></li>
            <li>in <a href={PROFILE.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
            <li>⌘ <a href={PROFILE.github} target="_blank" rel="noopener">GitHub</a></li>
            <li>📍 {PROFILE.location}</li>
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <form onSubmit={submit} noValidate>
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" value={form.name} onChange={update("name")} aria-invalid={!!errors.name} />
              {errors.name && <div className="err">{errors.name}</div>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={form.email} onChange={update("email")} aria-invalid={!!errors.email} />
              {errors.email && <div className="err">{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" value={form.message} onChange={update("message")} aria-invalid={!!errors.message}></textarea>
              {errors.message && <div className="err">{errors.message}</div>}
            </div>
            {ready
              ? <div className="notice" role="status">Your message is ready. <a href={mailto}>Open it in your email app</a> to send.</div>
              : <div><button className="btn primary" type="submit">Prepare message</button></div>}
          </form>
        </Reveal>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="wrap">
      <h1 className="page-title">This page doesn't exist</h1>
      <p className="page-intro">The link may be mistyped. Head back home to keep exploring.</p>
      <a className="btn primary" href="#/">Go to home</a>
    </div>
  );
}

/* ============================================================
   APP
   ============================================================ */
function App() {
  const path = useHashRoute();
  let page;
  if (path === "/") page = <Home />;
  else if (path === "/projects") page = <Projects />;
  else if (path.startsWith("/projects/")) page = <ProjectDetail id={path.split("/")[2]} />;
  else if (path === "/experience") page = <Experience />;
  else if (path === "/gallery") page = <Gallery />;
  else if (path === "/about") page = <About />;
  else if (path === "/contact") page = <Contact />;
  else page = <NotFound />;

  return (
    <LightboxProvider>
      <Header path={path} />
      <main key={path}>{page}</main>
      <footer><div className="wrap"><span>© {new Date().getFullYear()} {PROFILE.name}</span><span>Built with React</span></div></footer>
    </LightboxProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
