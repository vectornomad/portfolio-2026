import { Activity, ArrowUpRight, CircleDot } from "lucide-react";
const activity = [
  {number:"01", label:"Building", value:"SPITE, RustCraft & NeuroDeck", note:"Systems and visual computing"},
  {number:"02", label:"Exploring", value:"Local intelligence & agent systems", note:"Practical, local-first AI"},
  {number:"03", label:"Studying", value:"Computer Science at Lewis University", note:"Operating systems, security & CS foundations"},
  {number:"04", label:"Open to", value:"Remote AI and software engineering roles", note:"Backend, infrastructure & applied AI"},
];
export function Now() {
 return <section id="now" className="lab-section" aria-labelledby="now-heading">
   <div className="lab-section-head"><div><p className="signal-section-kicker">05 / LIVE SNAPSHOT</p><h2 id="now-heading">Currently <em>in motion.</em></h2></div><p>A small window into what I'm working on and thinking about right now.</p></div>
   <div className="lab-now-shell"><div className="lab-now-top"><span><Activity size={16}/> CURRENT STATUS</span><span><CircleDot size={13}/> UPDATED NOV 2026</span></div>
   <div className="lab-now-grid">{activity.map(item=><article className="lab-now-item" key={item.number}><span className="lab-now-id">{item.number} / {item.label}</span><h3>{item.value}</h3><p>{item.note}</p></article>)}</div></div>
   <a className="lab-now-link" href="/blog/">Read the longer field notes <ArrowUpRight size={15}/></a>
 </section>;
}
