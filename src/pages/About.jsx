const capabilityGroups = [
  { label: "Languages", items: ["Java", "Kotlin", "C++", "TypeScript", "JavaScript", "Python"] },
  { label: "Web & application", items: ["React", "Spring", "Dagger", "JUnit", "TestNG"] },
  { label: "Cloud & delivery", items: ["AWS Batch", "ECS", "EC2", "EKS", "Step Functions", "CI/CD"] },
  { label: "Simulation", items: ["Unity", "Drake", "Unreal Engine", "MuJoCo"] },
  { label: "Agentic systems", items: ["AgentCore", "Agent-to-Agent", "Memory", "Gateway", "Triage agents"] },
];

export default function About() {
  return <div className="about-page full-page">
    <section className="inner-page-hero"><p className="eyebrow"><span /> About / approach</p><h1>Platform thinking.<br /><em>Robotics impact.</em></h1><p>I’m a software engineer and technical leader working where distributed systems, simulation engines, cloud infrastructure, developer experience, and physical robotics meet.</p></section>
    <section className="about-story"><div className="story-index"><span>01</span><p>What I do</p></div><div className="story-copy"><p className="large-copy">At Amazon Robotics, I lead and build performance-platform solutions that help teams validate new robotic systems at fleet scale.</p><p>My work spans autonomous robotics simulations in Unity, manipulation robotics in Drake, end-to-end simulation and validation using Unreal Engine, and exposure to MuJoCo. Underneath those environments, I design CI/CD and workload infrastructure across AWS Batch, ECS, EC2, EKS, and Step Functions.</p><p>I care equally about the systems around the simulation: interfaces that make platforms understandable, automated triage that reduces operational friction, and technical direction that helps teams turn ambiguous robotics problems into dependable engineering solutions.</p></div></section>
    <section className="operating-principles"><p className="eyebrow">How I operate</p><div>{[["01","Design for scale","Treat the thousandth workload as a first-class requirement, not an afterthought."],["02","Validate end to end","Connect build, orchestration, simulation, telemetry, triage, and decision-making."],["03","Build for engineers","Powerful platforms need clear interfaces, useful abstractions, and fast feedback loops."],["04","Lead through systems","Create direction, align teams, and make complex technical choices legible."]].map(([n,title,text])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="capability-section"><div><p className="eyebrow">Technical range</p><h2>One engineer.<br />Multiple layers.</h2></div><div className="capability-matrix">{capabilityGroups.map(group=><div key={group.label}><h3>{group.label}</h3><p>{group.items.map(item=><span key={item}>{item}</span>)}</p></div>)}</div></section>
    <section className="contact-panel"><div><p className="eyebrow">Connect</p><h2>Let’s build the system behind the system.</h2></div><div><a href="mailto:nikhilramesh96@gmail.com">nikhilramesh96@gmail.com <span>↗</span></a><a href="https://linkedin.com/in/nikhil-ramesh" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a><a href="https://github.com/nikku1234" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div></section>
  </div>;
}
