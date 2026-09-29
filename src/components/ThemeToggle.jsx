import { useEffect, useState } from "react";

export default function ThemeToggle() {
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
