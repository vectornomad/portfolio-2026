import { ArrowRight } from "lucide-react";
import { ProjectItem } from "./ProjectItem";
import { SectionLabel } from "./SectionLabel";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="work" className="border-t border-zinc-800 py-7">
      <SectionLabel>Selected Projects</SectionLabel>

      <div className="mt-4 border border-dashed border-[#303535] bg-[#0b0f0e]">
        <div className="hidden grid-cols-[32px_minmax(0,1fr)_168px] gap-x-4 border-b border-dashed border-[#303535] px-4 py-2.5 font-mono text-xs uppercase tracking-wide text-zinc-500 sm:grid">
          <span>ID</span>
          <span>Repository</span>
          <span className="text-right">State / Actions</span>
        </div>
        {projects.map((project, index) => (
          <ProjectItem project={project} index={index} key={project.id} />
        ))}
      </div>

      <div className="mt-4 flex justify-end">
        <a
          href="https://github.com/vectornomad"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 select-none items-center gap-2 border border-dashed border-zinc-700 px-3 text-sm text-zinc-300 transition-[border-color,color,transform] duration-150 hover:border-zinc-500 hover:text-zinc-100 active:scale-[0.96]"
        >
          More projects
          <ArrowRight size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
