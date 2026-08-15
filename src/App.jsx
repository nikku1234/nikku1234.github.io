import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
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

function SiteShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    document.documentElement.classList.toggle("awsui-dark-mode", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  const close = () => setMenuOpen(false);
  return <div className="site-shell">
    <header className="site-header">
      <NavLink className="brand" to="/" onClick={close} aria-label="Nikhil Ramesh, home"><span className="brand-mark">NR</span><span>Nikhil Ramesh</span></NavLink>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? "Close" : "Menu"}</button>
      <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
        {primary.map(([label, href]) => <NavLink key={href} to={href} onClick={close}>{label}</NavLink>)}
        <div className="nav-more"><button>Explore <span>↓</span></button><div className="nav-popover">{more.map(([label, href]) => <NavLink key={href} to={href} onClick={close}>{label}</NavLink>)}</div></div>
        <a className="nav-icon" href="https://github.com/nikku1234" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
        <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? "☀" : "☾"}</button>
      </nav>
    </header>
    <main className="page-frame"><Routes>
      <Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/experience" element={<Experience />} /><Route path="/blog" element={<Blog />} /><Route path="/blog/:id" element={<BlogPost />} /><Route path="/resume" element={<Resume />} /><Route path="/coding" element={<Coding />} /><Route path="/learning" element={<Learning />} /><Route path="/apps" element={<Apps />} /><Route path="/publications" element={<Publications />} /><Route path="/certifications" element={<Certifications />} />
    </Routes></main>
    <footer className="site-footer"><div><span className="availability-dot" /> Open to building things that matter.</div><div className="footer-links"><a href="mailto:nikhilramesh96@gmail.com">Email</a><a href="https://linkedin.com/in/nikhil-ramesh" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/nikku1234" target="_blank" rel="noreferrer">GitHub</a></div><span>© {new Date().getFullYear()} Nikhil Ramesh</span></footer>
  </div>;
}
export default function App() { return <BrowserRouter><SiteShell /></BrowserRouter>; }
