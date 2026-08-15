import { useState } from "react";
import experience from "../data/experience";

const systemAreas = [
  { code: "ARQA", title: "Automated quality assurance", text: "Automation that helps exercise and validate robot behavior consistently across large-scale test scenarios.", tags: ["Automation", "Robotics", "Quality"] },
  { code: "PERF", title: "Performance platform", text: "Infrastructure for running, observing, and reasoning about high-throughput simulation workloads.", tags: ["Distributed systems", "AWS", "Telemetry"] },
  { code: "SIM", title: "Simulation infrastructure", text: "The systems underneath repeatable, production-grade testing for autonomous and manipulation robots.", tags: ["C++", "Kotlin", "TypeScript"] },
];

export default function Experience() {
  const [activeRole, setActiveRole] = useState(0);
  const current = experience[activeRole];
  return <div className="experience-page">
    <section className="page-hero technical-page-hero">
      <p className="eyebrow"><span /> Work / systems / impact</p>
      <div><h1>Engineering confidence<br />into robotic systems.</h1><p>I build the simulation, automation, and performance infrastructure teams use to understand complex robots before those systems reach the real world.</p></div>
      <div className="page-hero-index"><span>2022 — NOW</span><b>AMAZON<br />ROBOTICS</b></div>
    </section>
    <section className="role-overview"><div className="role-title"><span className="live-pill"><i /> CURRENT ROLE</span><h2>SDE II</h2><p>Performance Platform & ARQA Automation</p></div><div className="role-summary"><p>Designing systems that run large-scale simulations across Amazon’s fulfillment network—and the distributed infrastructure that makes those workloads reliable, observable, and useful.</p><div className="role-stack">{["C++", "Java", "Kotlin", "TypeScript", "AWS"].map(item => <span key={item}>{item}</span>)}</div></div></section>
    <section className="systems-grid-section"><div className="systems-grid-head"><p className="eyebrow">Current system surface</p><span>03 AREAS / ONE PLATFORM STORY</span></div><div className="systems-grid">{systemAreas.map((area, index) => <article key={area.code}><div><span>{String(index + 1).padStart(2, "0")}</span><b>{area.code}</b></div><h3>{area.title}</h3><p>{area.text}</p><ul>{area.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></article>)}</div></section>
    <section className="career-section"><div className="career-intro"><p className="eyebrow">The path here</p><h2>Experience,<br />in context.</h2><p>Production engineering, graduate research, and teaching—each layer shaped how I approach complex technical systems today.</p></div><div className="career-browser"><div className="career-tabs">{experience.map((item, index) => <button className={activeRole === index ? "is-active" : ""} key={`${item.company}-${item.role}`} onClick={() => setActiveRole(index)}><span>{String(index + 1).padStart(2, "0")}</span><div><b>{item.company}</b><small>{item.period}</small></div></button>)}</div><div className="career-detail"><span>{current.period}</span><h3>{current.role}</h3><h4>{current.company}</h4><p>{current.description}</p><div>{current.tags.map(tag => <i key={tag}>{tag}</i>)}</div></div></div></section>
  </div>;
}
