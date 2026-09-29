/* ============================================================
   IMAGES — files live in src/assets/images
   ============================================================ */
import miloPitch from "./assets/images/miloPitch.jpg";
import teamPitch from "./assets/images/teamPitch.jpg";
import eureka from "./assets/images/eureka.jpg";
import techfest from "./assets/images/techfest.jpg";
import inamigos from "./assets/images/inamigos.jpg";
import genai from "./assets/images/genai.jpg";

export const IMG = { miloPitch, teamPitch, eureka, techfest, inamigos, genai };

/* ============================================================
   CONTENT
   ============================================================ */
export const PROFILE = {
  name: "Shreya Konduskar",
  location: "Mumbai, Maharashtra, India",
  email: "konduskarshreya5@gmail.com",
  linkedin: "https://www.linkedin.com/in/shreya-konduskar-a296403a9",
  github: "https://github.com/S-COLLL",
};

export const PROJECTS = [
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

export const EXPERIENCE = [
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

export const GALLERY = [
  { src: IMG.miloPitch, title: "Pitching Milo", note: "Eureka Pitching Competition, Aug 2026" },
  { src: IMG.teamPitch, title: "Team Milo on stage", note: "Presenting our competitive advantage" },
  { src: IMG.techfest, title: "Techfest College Ambassador", note: "IIT Bombay, 2026–27" },
  { src: IMG.inamigos, title: "AI Data Internship", note: "InAmigos Foundation, June 2026" },
  { src: IMG.genai, title: "Generative AI: Build AI Chatbot", note: "Jenny's Lectures, June 2026" },
  { src: IMG.eureka, title: "Eureka participation", note: "E-Cell DMCE, Aug 2026" },
];

export const SKILLS = [
  { group: "Languages & frameworks", items: ["Python", "Java", "C", "React", "TypeScript", "Tailwind CSS", "OOP"] },
  { group: "Generative AI & data", items: ["LangChain", "OpenAI API", "FAISS", "PyPDF2", "Streamlit", "Semantic search", "Vectorization"] },
  { group: "Strengths", items: ["Problem-solving", "API integration", "B2B SaaS logic", "Team leadership"] },
];

export const WINS = [
  { ico: "🏆", title: "1st place, Bid2Pitch", text: "Led team Code Xperts to win the Tech Auctions by GITS, DMCE." },
  { ico: "🎤", title: "Techfest College Ambassador", text: "Representing IIT Bombay's Techfest 2026–27 at DMCE." },
  { ico: "🤖", title: "Generative AI certified", text: "Generative AI for Beginners: Build AI Chatbot, June 2026." },
];
