import { BrowserRouter, NavLink, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
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

function RobotSurprise({ vision, onVision, onClose }) {
  const [look, setLook] = useState({ x: 0, y: 0 });
  return <div className="robot-surprise-backdrop" role="presentation" onMouseDown={onClose} onPointerMove={event=>setLook({x:(event.clientX/window.innerWidth-.5)*12,y:(event.clientY/window.innerHeight-.5)*8})}>
    <section className="robot-surprise" role="dialog" aria-modal="true" aria-label="Secret robot companion" onMouseDown={event=>event.stopPropagation()} style={{"--look-x":`${look.x}px`,"--look-y":`${look.y}px`}}>
      <header><span>HIDDEN_SYSTEM / NR-01</span><button onClick={onClose} aria-label="Close robot companion">×</button></header>
      <div className="secret-bot-scene"><div className="secret-radar"><i/><i/><i/></div><div className="secret-bot"><div className="bot-antenna"><i/></div><div className="bot-head"><span/><span/><b/></div><div className="bot-body"><i>NR</i><span/><span/></div><div className="bot-tracks"><i/><i/></div></div><div className="bot-shadow"/><span className="secret-coordinate coordinate-a">X.084 / Y.113</span><span className="secret-coordinate coordinate-b">UNIT_DISCOVERED</span></div>
      <div className="secret-copy"><p>Achievement unlocked</p><h2>Robot companion<br />online.</h2><p>You found NR-01, the tiny observer living between the platform layers. It responds to your cursor and knows one more secret.</p><button onClick={onVision}>{vision?"Disable robot vision":"Enable robot vision"}<span>◎</span></button></div>
      <footer><span><i/> CONNECTION SECURE</span><b>TIP: ↑ ↑ ↓ ↓ ← → ← → B A</b></footer>
    </section>
  </div>;
}

function SiteShell() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [progress, setProgress] = useState(0);
  const [surpriseOpen, setSurpriseOpen] = useState(false);
  const [robotVision, setRobotVision] = useState(false);
  const brandTaps = useRef(0);
  const secretStep = useRef(0);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    const onScroll = () => setProgress(window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight));
    const onKey = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setPaletteOpen(true); }
      if (event.key === "Escape") { setPaletteOpen(false); setSurpriseOpen(false); }
      const secret = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      secretStep.current = key === secret[secretStep.current] ? secretStep.current + 1 : 0;
      if (secretStep.current === secret.length) { secretStep.current = 0; setRobotVision(value=>!value); setSurpriseOpen(true); }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); };
  }, []);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [location.pathname]);
  const toggleTheme = () => {
    const update = () => setDark(value=>!value);
    if (document.startViewTransition) document.startViewTransition(update); else update();
  };
  const tapBrand = () => { close(); brandTaps.current += 1; if (brandTaps.current >= 4) { brandTaps.current = 0; setSurpriseOpen(true); } };
  const close = () => setMenuOpen(false);
  return <div className={`site-shell ${robotVision?"robot-vision":""}`}>
    <div className="reading-progress" style={{ transform: `scaleX(${progress})` }} />
    <header className="site-header">
      <NavLink className="brand" to="/" onClick={tapBrand} aria-label="Nikhil Ramesh, home"><span className="brand-mark">NR<i className="brand-secret-dot"/></span><span>Nikhil Ramesh</span><i>ENGINEERING / SYSTEMS</i></NavLink>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? "Close" : "Menu"}</button>
      <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
        {primary.map(([label, href]) => <NavLink key={href} to={href} onClick={close}>{label}</NavLink>)}
        <div className="nav-more"><button>Explore <span>↓</span></button><div className="nav-popover">{more.map(([label, href]) => <NavLink key={href} to={href} onClick={close}>{label}</NavLink>)}</div></div>
        <button className="command-trigger" onClick={() => setPaletteOpen(true)} aria-label="Open command palette"><span>Search</span><kbd>⌘K</kbd></button>
        <a className="nav-icon" href="https://github.com/nikku1234" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
        <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${dark?"light":"dark"} theme`}><span>{dark ? "☀" : "☾"}</span><i>{dark?"LIGHT":"DARK"}</i></button>
      </nav>
    </header>
    <main className="page-frame"><Routes>
      <Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/experience" element={<Experience />} /><Route path="/blog" element={<Blog />} /><Route path="/blog/:id" element={<BlogPost />} /><Route path="/resume" element={<Resume />} /><Route path="/coding" element={<Coding />} /><Route path="/learning" element={<Learning />} /><Route path="/apps" element={<Apps />} /><Route path="/publications" element={<Publications />} /><Route path="/certifications" element={<Certifications />} />
    </Routes></main>
    <footer className="site-footer"><div><button className="footer-secret" onClick={()=>setSurpriseOpen(true)} aria-label="System status"><span className="availability-dot" /></button> Building dependable systems.</div><div className="footer-links"><a href="mailto:nikhilramesh1234@gmail.com">Email</a><a href="https://www.linkedin.com/in/nikhilramesh1234/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/nikku1234" target="_blank" rel="noreferrer">GitHub</a></div><span>© {new Date().getFullYear()} Nikhil Ramesh</span></footer>
    <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    <button className="hidden-scout" onClick={()=>setSurpriseOpen(true)} aria-label="A tiny hidden robot"><span/><i/><b/></button>
    {robotVision&&<div className="vision-overlay" aria-hidden="true"><span className="vision-corner tl">REC ●</span><span className="vision-corner tr">OBJECT_DETECTION / ACTIVE</span><span className="vision-corner bl">NR_VISION 2.4.1</span><span className="vision-corner br">CONFIDENCE 99.4%</span><i className="vision-box box-one"/><i className="vision-box box-two"/><i className="vision-scan"/></div>}
    {surpriseOpen&&<RobotSurprise vision={robotVision} onVision={()=>setRobotVision(value=>!value)} onClose={()=>setSurpriseOpen(false)}/>}
  </div>;
}
export default function App() { return <BrowserRouter><SiteShell /></BrowserRouter>; }
