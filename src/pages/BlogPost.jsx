import { Link, useParams } from "react-router-dom";
import blogPosts from "../data/blogPosts";

function renderLine(line,index){
  if(line.startsWith("## "))return <h2 key={index}>{line.slice(3)}</h2>;
  if(line.startsWith("### "))return <h3 key={index}>{line.slice(4)}</h3>;
  if(line.startsWith("- ")||line.match(/^\d+\./))return <li key={index}>{line.replace(/^(- |\d+\.\s*)/,"")}</li>;
  if(line.startsWith("> "))return <blockquote key={index}>{line.slice(2)}</blockquote>;
  if(!line.trim())return <br key={index}/>;
  return <p key={index}>{line}</p>;
}

export default function BlogPost(){
  const {id}=useParams();
  const post=blogPosts.find(item=>item.id===id);
  if(!post)return <div className="not-found-page"><p>404 / NOTE_NOT_FOUND</p><h1>This note moved.</h1><Link to="/blog">Return to the archive →</Link></div>;
  return <article className="article-page"><header><Link to="/blog">← All notes</Link><p className="eyebrow">Journal / {post.tags[0]}</p><h1>{post.title}</h1><div><time>{new Date(post.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}</time><span>{post.tags.join(" · ")}</span></div></header><div className="article-body">{post.content.split("\n").map(renderLine)}</div><footer><p>END_OF_NOTE_</p><Link to="/blog">Continue exploring the archive ↗</Link></footer></article>;
}
