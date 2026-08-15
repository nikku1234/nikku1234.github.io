import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroGraphic from "../assets/hero.png";

const focusAreas = [
  { number: "01", title: "Robotics at scale", text: "Simulation platforms that pressure-test autonomous and manipulation robots before they reach the floor.", path: "/experience" },
  { number: "02", title: "Distributed systems", text: "Reliable AWS infrastructure for high-throughput workloads across complex production environments.", path: "/experience" },
  { number: "03", title: "Applied intelligence", text: "Research across federated learning, computer vision, and privacy-aware medical imaging.", path: "/publications" },
];
const stack = ["Unity", "Drake", "Unreal", "C++", "Kotlin", "TypeScript", "AWS", "AgentCore"];
const pipeline = [
  { id: "01", title: "Model", label: "Robot behavior", detail: "Model the real-world behavior and constraints that matter." },
  { id: "02", title: "Simulate", label: "At high throughput", detail: "Run distributed simulation workloads across scalable infrastructure." },
  { id: "03", title: "Measure", label: "Performance signals", detail: "Capture quality, reliability, and performance signals at scale." },
  { id: "04", title: "Decide", label: "Ship with confidence", detail: "Turn test evidence into confident engineering decisions." },
];
const consoleLines = [["$", "deploy robot-simulation --fleet=1000"], ["✓", "scenario graph compiled"], ["✓", "workers provisioned across region"], ["→", "streaming performance telemetry"], ["●", "validation gate: READY"]];

export default function Home() {
  const heroRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [lineCount, setLineCount] = useState(1);
  useEffect(() => {
    const timer = window.setInterval(() => setLineCount((count) => count >= consoleLines.length ? 1 : count + 1), 900);
    return () => window.clearInterval(timer);
  }, []);
  const moveHero = (event) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    heroRef.current.style.setProperty("--pointer-x", `${(event.clientX - rect.left) / rect.width - .5}`);
    heroRef.current.style.setProperty("--pointer-y", `${(event.clientY - rect.top) / rect.height - .5}`);
  };
  return <div className="home-page">
    <section className="hero-section" ref={heroRef} onPointerMove={moveHero}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy"><p className="eyebrow"><span /> SDE II · Performance Platform Engineering</p><h1>I build systems for machines that <em>move.</em></h1><p className="hero-lede">I’m Nikhil, an SDE II at Amazon Robotics. I lead fleet-scale simulation platforms, cloud infrastructure, developer UIs, and intelligent triage systems that help new robotic solutions ship with confidence.</p><div className="hero-actions"><Link className="button button-primary magnetic-button" to="/experience">Explore my work <span>↗</span></Link><a className="text-link" href="mailto:nikhilramesh96@gmail.com">Start a conversation <span>→</span></a></div><div className="hero-meta"><span>PERFORMANCE PLATFORM</span><span>1000+ ROBOT SCALE</span><span>AMAZON ROBOTICS</span></div></div>
      <div className="hero-visual" aria-hidden="true"><div className="coordinate top-left">X.42 / Y.18</div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="visual-label label-top"><b>SIM / 01</b><span>Validate</span></div><img src={heroGraphic} alt="" /><div className="visual-label label-bottom"><b>SCALE / ∞</b><span>Deploy</span></div><div className="coordinate bottom-right">SYS.READY_</div></div><p className="scroll-cue">Scroll to inspect <span>↓</span></p>
    </section>
    <section className="signal-strip" aria-label="Current role and education"><div><span>Currently</span><strong>Amazon Robotics</strong></div><div><span>Focus</span><strong>Simulation infrastructure</strong></div><div><span>Background</span><strong>MS, Computer Science</strong></div></section>
    <section className="workbench-section"><div className="workbench-heading"><p className="eyebrow">Inside the work</p><h2>From simulated world<br />to real confidence.</h2><p>My work connects autonomous simulation in Unity, manipulation workflows in Drake, end-to-end validation in Unreal Engine, and the distributed AWS infrastructure underneath them.</p></div><div className="system-console" aria-label="Animated example deployment console"><div className="console-bar"><span><i /><i /><i /></span><b>robotics / performance-platform</b><span>LIVE</span></div><div className="console-body">{consoleLines.map(([symbol, text], index) => <p key={text} className={index < lineCount ? "is-visible" : ""}><span>{symbol}</span>{text}{index === lineCount - 1 && <i />}</p>)}</div><div className="console-stats"><div><span>WORKLOAD</span><b>FLEET-SCALE</b></div><div><span>MODE</span><b>SIMULATION</b></div><div><span>STATE</span><b className="status-ready">NOMINAL</b></div></div></div></section>
    <section className="pipeline-section"><div className="pipeline-head"><p className="eyebrow">A validation run</p><p>Select a stage to inspect the system.</p></div><div className="pipeline-shell"><div className="pipeline-track">{pipeline.map((step, index) => <button key={step.id} className={activeStep === index ? "is-active" : ""} onMouseEnter={() => setActiveStep(index)} onFocus={() => setActiveStep(index)} onClick={() => setActiveStep(index)}><span>{step.id}</span><i /><b>{step.title}</b><small>{step.label}</small></button>)}</div><div className="pipeline-detail"><span>0{activeStep + 1} / 04</span><p>{pipeline[activeStep].detail}</p><b>{pipeline[activeStep].title.toUpperCase()}_</b></div></div></section>
    <section className="focus-section"><div className="section-heading"><p className="eyebrow">Engineering principles</p><h2>Complex systems.<br />Clear outcomes.</h2><p>I like hard engineering problems where rigor is visible in reliability, performance, and the decisions teams can make.</p></div><div className="focus-list">{focusAreas.map(area => <Link className="focus-card" to={area.path} key={area.number}><span>{area.number}</span><h3>{area.title}</h3><p>{area.text}</p><span className="card-arrow">↗</span></Link>)}</div></section>
    <section className="stack-section"><p className="eyebrow">Production vocabulary</p><div className="stack-row">{stack.map((item, index) => <span key={item} style={{ "--delay": `${index * 40}ms` }}>{item}</span>)}</div></section>
    <section className="closing-section"><p>Research · systems · experiments</p><h2>Always learning.<br />Occasionally writing.</h2><div className="closing-actions"><Link className="button button-light" to="/blog">Read the journal <span>↗</span></Link><Link className="button button-outline" to="/publications">View research <span>↗</span></Link></div></section>
  </div>;
}
