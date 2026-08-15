const projects = [
  { index: "01", title: "Predict Number", type: "Interactive ML", description: "Browser-based handwritten digit recognition using TensorFlow.js and a pre-trained MNIST model. Draw a digit and inspect real-time predictions.", tech: ["TensorFlow.js", "Canvas", "JavaScript"], link: "/predict_number/tfjs.html" },
  { index: "02", title: "Markdown Live Editor", type: "Developer tool", description: "A real-time writing environment with instant Markdown preview and syntax highlighting.", tech: ["JavaScript", "marked.js", "highlight.js"], link: "https://nikku1234.github.io/markdown-editor/" },
  { index: "03", title: "Covid-19 World Map", type: "Data visualization", description: "An interactive global map for exploring country-level statistics, trends, and time-series data.", tech: ["D3.js", "REST API", "Responsive UI"], link: "https://covid19-map.netlify.app" },
];

export default function Apps() {
  return <div className="projects-page full-page">
    <section className="inner-page-hero"><p className="eyebrow"><span /> Projects / experiments</p><h1>Things I’ve<br /><em>made tangible.</em></h1><p>Small applications, research experiments, and interfaces that turn technical ideas into something people can use.</p></section>
    <section className="project-list">{projects.map(project=><a href={project.link} target={project.link.startsWith("http") ? "_blank" : undefined} rel="noreferrer" key={project.title} className="project-row"><span>{project.index}</span><div className="project-title"><small>{project.type}</small><h2>{project.title}</h2></div><p>{project.description}</p><div className="project-tags">{project.tech.map(item=><i key={item}>{item}</i>)}</div><b>↗</b></a>)}</section>
    <section className="project-note"><span>BUILD LOG</span><p>I use side projects to explore interaction models, machine learning in the browser, and the craft of making technical systems approachable.</p><a href="https://github.com/nikku1234" target="_blank" rel="noreferrer">Explore GitHub ↗</a></section>
  </div>;
}
