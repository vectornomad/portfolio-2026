import { useState } from "react";
import { ArrowUpRight, ChevronDown, GitBranch } from "lucide-react";
import type { Project } from "../data/projects";

const statusStyles: Record<Project["status"], string> = {
  Active: "text-emerald-400",
  "In development": "text-violet-300",
  Prototype: "text-sky-400",
  Completed: "text-zinc-500",
};

const dotStyles: Record<Project["status"], string> = {
  Active: "bg-emerald-400",
  "In development": "bg-violet-400",
  Prototype: "bg-sky-400",
  Completed: "bg-zinc-500",
};

export function ProjectItem({ project, index }: { project: Project; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const detailsId = `${project.id}-project-details`;

  return (
    <article className="group border-b border-dashed border-[#303535] transition-colors duration-150 last:border-b-0 hover:bg-white/[0.015]">
      <div className="grid grid-cols-[28px_minmax(0,1fr)_44px] gap-x-3 px-3 py-6 sm:grid-cols-[32px_minmax(0,1fr)_168px] sm:gap-x-4 sm:px-4">
        <span className="pt-0.5 font-mono text-xs tabular-nums text-zinc-500">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <h3 className="text-base font-semibold leading-5 text-zinc-100">{project.title}</h3>
            <span className="font-mono text-xs text-zinc-400">
              / {project.category}
            </span>
          </div>

          <div className="mt-2 flex items-center gap-1.5 sm:hidden">
            <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[project.status]}`} aria-hidden="true" />
            <span className={`font-mono text-xs ${statusStyles[project.status]}`}>
              {project.status}
            </span>
          </div>

          <p className="mt-2 max-w-[58ch] text-pretty text-sm leading-6 text-zinc-400">
            {project.description}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-1 font-mono text-xs">
            <span className="text-violet-300">stack:</span>
            {project.stack.map((technology, technologyIndex) => (
              <span key={technology} className="text-zinc-400">
                {technologyIndex > 0 ? <span className="mr-1.5 text-zinc-600">·</span> : null}
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-start justify-end sm:flex-col sm:items-end sm:justify-between">
          <div className="hidden min-w-0 pt-1 sm:block">
            <div className="flex items-center justify-end gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[project.status]}`} aria-hidden="true" />
              <span className={`whitespace-nowrap font-mono text-xs ${statusStyles[project.status]}`}>
                {project.status}
              </span>
            </div>
          </div>

          <div className="flex items-center">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} live site`}
                className="hidden h-10 w-10 place-items-center rounded text-zinc-500 transition-[color,background-color,transform] duration-150 hover:bg-zinc-800/60 hover:text-zinc-200 active:scale-[0.96] sm:grid"
              >
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ) : null}

            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} on GitHub`}
                className="hidden h-10 w-10 place-items-center rounded text-zinc-500 transition-[color,background-color,transform] duration-150 hover:bg-zinc-800/60 hover:text-zinc-200 active:scale-[0.96] sm:grid"
              >
                <GitBranch size={14} aria-hidden="true" />
              </a>
            ) : null}

            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={detailsId}
              aria-label={`${isOpen ? "Hide" : "Show"} details for ${project.title}`}
              onClick={() => setIsOpen((open) => !open)}
              className="grid h-11 w-11 place-items-center rounded text-zinc-500 transition-[color,background-color,transform] duration-150 hover:bg-zinc-800/60 hover:text-zinc-200 active:scale-[0.96] sm:h-10 sm:w-10"
            >
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>

      <div
        id={detailsId}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mb-6 ml-[44px] mr-3 border-l border-zinc-800 pl-4 sm:ml-[64px] sm:mr-[184px]">
            <p className="font-mono text-xs uppercase tracking-wide text-zinc-400">Highlights</p>
            <ul className="mt-2 grid gap-x-5 gap-y-1 sm:grid-cols-2">
              {project.details.map((detail) => (
                <li key={detail} className="flex gap-2 text-sm leading-6 text-zinc-400">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-700" aria-hidden="true" />
                  {detail}
                </li>
              ))}
            </ul>

            {project.href || project.github ? (
              <div className="mt-3 flex flex-wrap gap-3">
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1.5 font-mono text-xs text-zinc-300 transition-colors duration-150 hover:text-zinc-100 sm:min-h-10">
                    Live site <ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                ) : null}
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-1.5 font-mono text-xs text-zinc-300 transition-colors duration-150 hover:text-zinc-100 sm:min-h-10">
                    GitHub <GitBranch size={12} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
