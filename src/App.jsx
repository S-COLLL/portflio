import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import Header from "./components/Header.jsx";
import { LightboxProvider } from "./components/Lightbox.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import Experience from "./pages/Experience.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import { PROFILE } from "./data.js";

export default function App() {
  const { pathname } = useLocation();
  // Start each new page at the top, like a normal website
  useEffect(() => window.scrollTo(0, 0), [pathname]);

  return (
    <LightboxProvider>
      <Header />
      {/* key={pathname} replays the page-in animation on every route change */}
      <main key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer><div className="wrap"><span>© {new Date().getFullYear()} {PROFILE.name}</span><span>Built with React</span></div></footer>
    </LightboxProvider>
  );
}
