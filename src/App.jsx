import { BrowserRouter, NavLink, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "@cloudscape-design/global-styles/index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Resume from "./pages/Resume";
import Coding from "./pages/Coding";
import Learning from "./pages/Learning";
import Apps from "./pages/Apps";
import Publications from "./pages/Publications";
import Certifications from "./pages/Certifications";

const primary = [["Work", "/experience"], ["Writing", "/blog"], ["About", "/about"]];
const more = [["Publications", "/publications"], ["Projects & apps", "/apps"], ["Learning", "/learning"], ["Coding", "/coding"], ["Certifications", "/certifications"], ["Résumé", "/resume"]];
const commands = [["Home", "/", "H"], ...primary.map(([name, path]) => [name, path, name[0]]), ...more.map(([name, path]) => [name, path, "↗"])];

function CommandPalette({ open, onClose }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  useEffect(() => { if (!open) setQuery(""); }, [open]);
  if (!open) return null;
  const filtered = commands.filter(([name]) => name.toLowerCase().includes(query.toLowerCase()));
  const go = (path) => { navigate(path); onClose(); };
  return <div className="command-backdrop" role="presentation" onMouseDown={onClose}>
    <div className="command-palette" role="dialog" aria-modal="true" aria-label="Site command palette" onMouseDown={(event) => event.stopPropagation()}>
      <div className="command-input"><span>›_</span><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && filtered[0]) go(filtered[0][1]); }} placeholder="Where do you want to go?" aria-label="Search pages" /><kbd>ESC</kbd></div>
      <div className="command-results">{filtered.map(([name, path, key], index) => <button key={path} className={index === 0 ? "is-selected" : ""} onClick={() => go(path)}><span><b>{String(index + 1).padStart(2, "0")}</b>{name}</span><kbd>{key}</kbd></button>)}</div>
      <p>Type to filter · Select with ↵</p>
    </div>
  </div>;
}

function SiteShell() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    document.documentElement.classList.toggle("awsui-dark-mode", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    const onScroll = () => setProgress(window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight));
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setPaletteOpen(true); }
      if (event.key === "Escape") setPaletteOpen(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); };
  }, []);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [location.pathname]);
  const close = () => setMenuOpen(false);
  return <div className="site-shell">
    <div className="reading-progress" style={{ transform: `scaleX(${progress})` }} />
    <header className="site-header">
      <NavLink className="brand" to="/" onClick={close} aria-label="Nikhil Ramesh, home"><span className="brand-mark">NR</span><span>Nikhil Ramesh</span><i>ENGINEERING / SYSTEMS</i></NavLink>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? "Close" : "Menu"}</button>
      <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
        {primary.map(([label, href]) => <NavLink key={href} to={href} onClick={close}>{label}</NavLink>)}
        <div className="nav-more"><button>Explore <span>↓</span></button><div className="nav-popover">{more.map(([label, href]) => <NavLink key={href} to={href} onClick={close}>{label}</NavLink>)}</div></div>
        <button className="command-trigger" onClick={() => setPaletteOpen(true)} aria-label="Open command palette"><span>Search</span><kbd>⌘K</kbd></button>
        <a className="nav-icon" href="https://github.com/nikku1234" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
        <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? "☀" : "☾"}</button>
      </nav>
    </header>
    <main className="page-frame"><Routes>
      <Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/experience" element={<Experience />} /><Route path="/blog" element={<Blog />} /><Route path="/blog/:id" element={<BlogPost />} /><Route path="/resume" element={<Resume />} /><Route path="/coding" element={<Coding />} /><Route path="/learning" element={<Learning />} /><Route path="/apps" element={<Apps />} /><Route path="/publications" element={<Publications />} /><Route path="/certifications" element={<Certifications />} />
    </Routes></main>
    <footer className="site-footer"><div><span className="availability-dot" /> Building dependable systems.</div><div className="footer-links"><a href="mailto:nikhilramesh96@gmail.com">Email</a><a href="https://linkedin.com/in/nikhil-ramesh" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/nikku1234" target="_blank" rel="noreferrer">GitHub</a></div><span>© {new Date().getFullYear()} Nikhil Ramesh</span></footer>
    <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
  </div>;
}
export default function App() { return <BrowserRouter><SiteShell /></BrowserRouter>; }
