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

const labModes = {
  autonomous: { label: "Autonomous fleet", engine: "UNITY", robots: "1,024", rate: "60 Hz", signal: "98.7%" },
  manipulation: { label: "Manipulation cell", engine: "DRAKE", robots: "24", rate: "240 Hz", signal: "0.8 mm" },
  twin: { label: "Digital twin", engine: "UNREAL", robots: "128", rate: "120 Hz", signal: "SYNCED" },
};

function FleetVisual() {
  return <div className="fleet-visual" aria-hidden="true"><svg viewBox="0 0 800 430" preserveAspectRatio="none"><path className="route-path route-a" d="M-40 310 C120 90 260 380 430 185 S700 70 850 250"/><path className="route-path route-b" d="M-20 120 C180 320 330 50 530 300 S720 360 840 120"/></svg>{[0,1,2,3,4,5].map(index=><div className={`sim-rover rover-${index+1}`} key={index}><i/><span/><b>R-{String(index+1).padStart(2,"0")}</b></div>)}<div className="lidar-pulse pulse-one"/><div className="lidar-pulse pulse-two"/></div>;
}

function ArmVisual() {
  return <div className="arm-visual" aria-hidden="true"><div className="arm-floor"><span/><span/><span/></div><div className="robot-arm"><div className="arm-base"/><div className="arm-joint joint-one"><i/><div className="arm-link link-one"><div className="arm-joint joint-two"><i/><div className="arm-link link-two"><div className="gripper"><span/><span/></div></div></div></div></div></div><div className="pick-cube">OBJ_04</div><div className="arm-target"><i/>PICK_TARGET</div></div>;
}

function TwinVisual() {
  return <div className="twin-visual" aria-hidden="true"><div className="twin-half physical"><span>PHYSICAL</span><div className="twin-bot"><i/><b/><em/></div></div><div className="sync-line"><i/><i/><i/><span>LIVE SYNC</span></div><div className="twin-half virtual"><span>SIMULATION</span><div className="twin-bot"><i/><b/><em/></div></div></div>;
}

function SimulationLab() {
  const [mode, setMode] = useState("autonomous");
  const [running, setRunning] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [target, setTarget] = useState({ x: 68, y: 38 });
  const data = labModes[mode];
  return <section className="sim-lab-section">
    <div className="sim-lab-heading"><div><p className="eyebrow">Interactive simulation lab</p><h2>Don’t just read it.<br /><em>Run the system.</em></h2></div><p>Switch environments, change playback speed, pause the run, and move the target inside the viewport.</p></div>
    <div className="sim-lab-shell" style={{ "--sim-duration": `${7 / speed}s` }}>
      <header className="lab-toolbar"><div className="lab-window-dots"><i/><i/><i/></div><span>PERFORMANCE_PLATFORM / SIM_VIEWER</span><div className="lab-health"><i/> SYSTEM NOMINAL</div></header>
      <div className="lab-body">
        <aside className="lab-modes"><span>ENVIRONMENTS</span>{Object.entries(labModes).map(([key,value],index)=><button key={key} className={mode===key?"is-active":""} onClick={()=>setMode(key)}><i>0{index+1}</i><b>{value.label}</b><small>{value.engine}</small></button>)}</aside>
        <div className={`sim-viewport mode-${mode} ${running?"is-running":"is-paused"}`} onPointerMove={event=>{const rect=event.currentTarget.getBoundingClientRect();setTarget({x:Math.round((event.clientX-rect.left)/rect.width*100),y:Math.round((event.clientY-rect.top)/rect.height*100)})}}>
          <div className="viewport-grid"/><div className="viewport-hud top-hud"><span>CAM_04</span><span>FRAME {running?"RUNNING":"PAUSED"}</span><span>{data.engine}_RUNTIME</span></div>
          {mode==="autonomous"&&<FleetVisual/>}{mode==="manipulation"&&<ArmVisual/>}{mode==="twin"&&<TwinVisual/>}
          <div className="pointer-target" style={{left:`${target.x}%`,top:`${target.y}%`}}><i/><span>X{target.x} Y{target.y}</span></div>
          <div className="viewport-hud bottom-hud"><span>ΔT 0.0167</span><span>WORLD / ROBOTICS_LAB</span></div>
        </div>
        <aside className="lab-telemetry"><span>LIVE TELEMETRY</span><div><small>ENGINE</small><b>{data.engine}</b></div><div><small>AGENTS</small><b>{data.robots}</b></div><div><small>SIM RATE</small><b>{data.rate}</b></div><div><small>{mode==="manipulation"?"TOLERANCE":"CONFIDENCE"}</small><b>{data.signal}</b></div><div className="telemetry-wave"><i/><i/><i/><i/><i/><i/><i/><i/></div></aside>
      </div>
      <footer className="lab-controls"><button className="play-control" onClick={()=>setRunning(!running)}><span>{running?"Ⅱ":"▶"}</span>{running?"Pause simulation":"Run simulation"}</button><label><span>SIMULATION SPEED</span><input type="range" min="0.5" max="2" step="0.5" value={speed} onChange={event=>setSpeed(Number(event.target.value))}/><b>{speed.toFixed(1)}×</b></label><div><span>BUILD</span><b>VALIDATION_2048</b></div></footer>
    </div>
  </section>;
}

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
    <SimulationLab />
    <section className="focus-section"><div className="section-heading"><p className="eyebrow">Engineering principles</p><h2>Complex systems.<br />Clear outcomes.</h2><p>I like hard engineering problems where rigor is visible in reliability, performance, and the decisions teams can make.</p></div><div className="focus-list">{focusAreas.map(area => <Link className="focus-card" to={area.path} key={area.number}><span>{area.number}</span><h3>{area.title}</h3><p>{area.text}</p><span className="card-arrow">↗</span></Link>)}</div></section>
    <section className="stack-section"><p className="eyebrow">Production vocabulary</p><div className="stack-row">{stack.map((item, index) => <span key={item} style={{ "--delay": `${index * 40}ms` }}>{item}</span>)}</div></section>
    <section className="closing-section"><p>Research · systems · experiments</p><h2>Always learning.<br />Occasionally writing.</h2><div className="closing-actions"><Link className="button button-light" to="/blog">Read the journal <span>↗</span></Link><Link className="button button-outline" to="/publications">View research <span>↗</span></Link></div></section>
  </div>;
}
