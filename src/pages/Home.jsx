import { Link } from "react-router-dom";
import heroGraphic from "../assets/hero.png";
const focusAreas = [
  { number: "01", title: "Robotics at scale", text: "Simulation platforms that pressure-test real-world robotic systems before they reach the floor." },
  { number: "02", title: "Distributed systems", text: "Reliable infrastructure for high-throughput workloads across complex, production environments." },
  { number: "03", title: "Applied intelligence", text: "Research-minded engineering across computer vision, federated learning, and medical imaging." },
];
const stack = ["C++", "Kotlin", "TypeScript", "Python", "AWS", "Docker", "PyTorch"];
export default function Home() { return <div className="home-page">
  <section className="hero-section">
    <div className="hero-copy"><p className="eyebrow"><span /> Software engineer · robotics systems</p><h1>I build systems for machines that <em>move.</em></h1><p className="hero-lede">I’m Nikhil, an SDE II at Amazon Robotics. I design simulation and infrastructure that helps large-scale robotic systems ship with confidence.</p><div className="hero-actions"><Link className="button button-primary" to="/experience">Explore my work <span>↗</span></Link><a className="text-link" href="mailto:nikhilramesh96@gmail.com">Let’s talk <span>→</span></a></div></div>
    <div className="hero-visual" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="visual-label label-top"><b>SIM / 01</b><span>Validate</span></div><img src={heroGraphic} alt="" /><div className="visual-label label-bottom"><b>SCALE / ∞</b><span>Deploy</span></div></div><p className="scroll-cue">Scroll to explore <span>↓</span></p>
  </section>
  <section className="signal-strip" aria-label="Current role and education"><div><span>Currently</span><strong>Amazon Robotics</strong></div><div><span>Based in</span><strong>Greater Boston</strong></div><div><span>Background</span><strong>MS, Computer Science</strong></div></section>
  <section className="focus-section"><div className="section-heading"><p className="eyebrow">What I care about</p><h2>Complex systems.<br />Clear outcomes.</h2><p>I like hard engineering problems where software meets the physical world—and where rigor makes a measurable difference.</p></div><div className="focus-list">{focusAreas.map(area => <article className="focus-card" key={area.number}><span>{area.number}</span><h3>{area.title}</h3><p>{area.text}</p><span className="card-arrow">↗</span></article>)}</div></section>
  <section className="stack-section"><p className="eyebrow">Tools I reach for</p><div className="stack-row">{stack.map(item => <span key={item}>{item}</span>)}</div></section>
  <section className="closing-section"><p>Ideas, notes & experiments</p><h2>Always learning.<br />Occasionally writing.</h2><Link className="button button-light" to="/blog">Read the journal <span>↗</span></Link></section>
</div>; }
