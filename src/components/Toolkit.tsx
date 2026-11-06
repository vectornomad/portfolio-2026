import { Cpu, Braces, Network, Database, Terminal, Layers3 } from "lucide-react";
const groups = [
  { icon:Braces, title:"Languages & applications", tag:"BUILD / 01", items:["Python","TypeScript","JavaScript","Rust","Swift","Java","React","Vite","Next.js","Tailwind CSS"] },
  { icon:Network, title:"AI & intelligence", tag:"BUILD / 02", items:["Ollama","RAG","Embeddings","Local LLMs","Whisper","AI Agents","ChromaDB","OpenCV"] },
  { icon:Cpu, title:"Systems & infrastructure", tag:"BUILD / 03", items:["Linux","Docker","FastAPI","PostgreSQL","Git","Node.js","macOS","CLI tooling"] },
];
export function Toolkit() {
  return <section id="toolkit" className="lab-section" aria-labelledby="toolkit-heading">
    <div className="lab-section-head"><div><p className="signal-section-kicker">03 / TOOLS OF THE TRADE</p><h2 id="toolkit-heading">Inside the <em>toolbox.</em></h2></div><p>The technologies I reach for when an idea needs to become a working system.</p></div>
    <div className="lab-tool-grid">{groups.map(({icon:Icon,title,tag,items})=><article className="lab-tool-panel" key={title}>
      <div className="lab-tool-title"><span><Icon size={19}/>{title}</span><small>{tag}</small></div>
      <div className="lab-tool-tags">{items.map(item=><span key={item}>{item}</span>)}</div>
    </article>)}</div>
    <div className="lab-tool-bottom"><Layers3 size={15}/> Curiosity is the constant. The stack changes with the problem.</div>
  </section>;
}
