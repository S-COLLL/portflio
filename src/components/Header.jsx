import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import ThemeToggle from "./ThemeToggle.jsx";

const LINKS = [["/", "Home"], ["/projects", "Projects"], ["/experience", "Experience"], ["/gallery", "Gallery"], ["/about", "About"], ["/contact", "Contact"]];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className="site-header">
      <nav className="wrap nav" aria-label="Main">
        <Link to="/" className="brand"><span className="brand-mark">S</span>Shreya Konduskar</Link>
        <ul className={"nav-links" + (open ? " open" : "")}>
          {/* NavLink sets aria-current="page" on the active link; "end" stops Home matching every page */}
          {LINKS.map(([to, label]) => (
            <li key={to}><NavLink to={to} end={to === "/"}>{label}</NavLink></li>
          ))}
        </ul>
        <ThemeToggle />
        <button className="icon-btn menu-btn" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
      </nav>
    </header>
  );
}
