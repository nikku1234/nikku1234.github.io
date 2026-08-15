import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogPosts";

export default function Blog() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const tags = ["All", ...new Set(blogPosts.flatMap(post => post.tags))];
  const filtered = useMemo(() => blogPosts.filter(post => (tag === "All" || post.tags.includes(tag)) && `${post.title} ${post.summary}`.toLowerCase().includes(query.toLowerCase())), [query, tag]);
  return <div className="blog-page full-page">
    <section className="inner-page-hero"><p className="eyebrow"><span /> Notes / archive</p><h1>Thinking in<br /><em>public.</em></h1><p>An evolving archive of computer vision, machine learning, distributed computing, developer tools, and experiments.</p></section>
    <section className="journal-controls"><label><span>SEARCH_ARCHIVE</span><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Type a topic…" /></label><div>{tags.slice(0,10).map(item=><button className={tag===item?"is-active":""} key={item} onClick={()=>setTag(item)}>{item}</button>)}</div></section>
    <section className="journal-list">{filtered.map((post,index)=><Link to={`/blog/${post.id}`} className="journal-entry" key={post.id}><span>{String(index+1).padStart(2,"0")}</span><time>{new Date(post.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}</time><div><h2>{post.title}</h2><p>{post.summary}</p><small>{post.tags.join(" / ")}</small></div><b>↗</b></Link>)}{filtered.length===0&&<p className="empty-state">No notes match that query.</p>}</section>
  </div>;
}
