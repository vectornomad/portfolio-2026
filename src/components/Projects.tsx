import { ArrowUpRight, Layers3 } from "lucide-react";
import { ProjectItem } from "./ProjectItem";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="work" className="signal-projects" aria-labelledby="signal-project-heading">
      <div className="signal-section-heading">
        <div><p className="signal-section-kicker">02 / ARCHIVE OF EXPERIMENTS</p><h2 id="signal-project-heading">Selected <em>systems.</em></h2></div>
        <p>Investigations in intelligence, infrastructure, and the interfaces between them.</p>
      </div>
      <div className="signal-archive-heading"><span><Layers3 size={14}/> PROJECT ARCHIVE</span><span>{String(projects.length).padStart(2,"0")} ENTRIES / CLICK TO EXPAND</span></div>
      <div className="signal-project-list">
        {projects.map((project,index)=><ProjectItem key={project.id} project={project} index={index}/>)}
      </div>
      <a className="signal-archive-footer" href="https://github.com/vectornomad" target="_blank" rel="noreferrer">Full source archive <ArrowUpRight size={16}/></a>
    </section>
  );
}
