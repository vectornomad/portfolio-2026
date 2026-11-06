import { useState } from "react";
import type { CSSProperties } from "react";
import { ArrowUpRight, ChevronDown, GitBranch, Layers3 } from "lucide-react";
import { projects, type Project } from "../data/projects";

const accents = ["#b9aaff", "#83daca", "#a2b6fc", "#c1a7f4", "#86cdd1", "#b6b7e9"];

function CaseCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const notesId = `notes-${project.id}`;
  return (
    <article className="case-card" style={{ "--case-accent": accents[index % accents.length] } as CSSProperties}>
      <div className="case-visual" aria-hidden="true">
        <span className="case-visual-label">SYSTEM STUDY / {String(index + 1).padStart(2, "0")}</span>
        <svg viewBox="0 0 350 130" preserveAspectRatio="xMidYMid meet">
          <g fill="none" stroke="currentColor" strokeWidth=".8" opacity=".5">
            <circle cx="175" cy="65" r={26 + index * 3} strokeDasharray="4 7"/>
            <path d={`M 24 ${95-index*8} L 103 37 L 171 ${65+index*3} L 240 29 L 324 ${87-index*4}`}/>
            <path d={`M 24 34 L 112 ${100-index*3} L 240 78 L 324 26`} opacity=".4"/>
          </g>
          {[24,103,171,240,324].map((x,i)=><circle key={x} cx={x} cy={[95-index*8,37,65+index*3,29,87-index*4][i]} r={i===2?4:2.5} fill="currentColor"/>)}
        </svg>
        <span className="case-visual-corner">✳</span>
      </div>
      <div className="case-body">
        <div className="case-topline"><span>CASE {String(index+1).padStart(2,"0")} / {project.category}</span><span className="case-status">● {project.status}</span></div>
        <h3>{project.title}</h3>
        <p className="case-description">{project.description}</p>
        <div className="case-stack">{project.stack.map(x=><span key={x}>{x}</span>)}</div>
        <div className="case-actions">
          <button type="button" onClick={()=>setOpen(x=>!x)} aria-expanded={open} aria-controls={notesId}>
            {open ? "Close field notes" : "Inspect case file"} <ChevronDown className={open?"rotate-180":""} size={15}/>
          </button>
          {project.github
            ? <a href={project.github} target="_blank" rel="noreferrer"><GitBranch size={14}/> Source <ArrowUpRight size={13}/></a>
            : <span>Development workspace</span>}
        </div>
        {open && <div id={notesId} className="case-notes"><p>ENGINEERING NOTES</p><ul>{project.details.map(d=><li key={d}>{d}</li>)}</ul></div>}
      </div>
    </article>
  );
}
export function Projects() {
  return <section id="work" className="signal-projects" aria-labelledby="signal-project-heading">
    <div className="signal-section-heading">
      <div><p className="signal-section-kicker">02 / ARCHIVE OF EXPERIMENTS</p><h2 id="signal-project-heading">Selected <em>systems.</em></h2></div>
      <p>A working archive of the systems, AI tools, and visual experiments I'm building now.</p>
    </div>
    <div className="signal-archive-heading"><span><Layers3 size={14}/> CURRENT WORK / FIELD INDEX</span><span>{String(projects.length).padStart(2,"0")} CASE FILES</span></div>
    <div className="case-grid">{projects.map((project,index)=><CaseCard key={project.id} project={project} index={index}/>)}</div>
    <div className="case-footer"><span>SELECTED WORK / ITERATIVE BUILDS</span><a href="https://github.com/vectornomad" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={16}/></a></div>
  </section>;
}
