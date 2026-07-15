import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Experience } from "../data/experience";

const statusStyles: Record<Experience["status"], string> = {
  Active: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  Studying: "border-sky-500/20 bg-sky-500/10 text-sky-400",
  Building: "border-violet-500/20 bg-violet-500/10 text-violet-300",
};

const dotStyles: Record<Experience["status"], string> = {
  Active: "bg-emerald-400",
  Studying: "bg-sky-400",
  Building: "bg-violet-400",
};

export function ExperienceItem({ item }: { item: Experience }) {
  const [isOpen, setIsOpen] = useState(false);
  const detailsId = `${item.id}-details`;

  return (
    <article className="group relative border-b border-dashed border-[#303535] last:border-b-0">
      <span
        className={`absolute left-[24px] top-[37px] z-10 h-2.5 w-2.5 rounded-full ring-4 ring-[#0b0f0e] ${dotStyles[item.status]}`}
        aria-hidden="true"
      />

      <div className="grid grid-cols-[44px_minmax(0,1fr)_44px] gap-x-3 py-5 pl-[52px] pr-2 sm:grid-cols-[44px_minmax(0,1fr)_auto_40px] sm:items-start sm:gap-x-4 sm:pr-3">
        <div className="grid h-11 w-11 place-items-center rounded border border-zinc-700 bg-zinc-100 font-mono text-xs font-bold text-zinc-950 outline outline-1 outline-white/10">
          {item.logo}
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-semibold leading-5 text-zinc-100">
              {item.organization}
            </h3>
            <span
              className={`whitespace-nowrap rounded-[3px] border px-1.5 py-0.5 font-mono text-xs ${statusStyles[item.status]}`}
            >
              {item.status}
            </span>
          </div>
          <p className="mt-1 text-sm leading-5 text-zinc-400">{item.role}</p>
        </div>

        <p className="col-start-2 row-start-2 mt-2 font-mono text-xs tabular-nums text-zinc-400 sm:col-start-3 sm:row-start-1 sm:mt-1 sm:whitespace-nowrap sm:text-right">
          {item.period}
        </p>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={detailsId}
          aria-label={`${isOpen ? "Hide" : "Show"} details for ${item.organization}`}
          onClick={() => setIsOpen((open) => !open)}
          className="col-start-3 row-start-1 grid h-11 w-11 place-items-center rounded text-zinc-500 transition-[color,background-color,transform] duration-150 hover:bg-zinc-800/60 hover:text-zinc-200 active:scale-[0.96] sm:col-start-4 sm:h-10 sm:w-10"
        >
          <ChevronDown
            size={15}
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>

      <div
        id={detailsId}
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mb-5 ml-[52px] border-l border-zinc-800 pl-4 pr-4 sm:ml-[108px] sm:mr-14">
            <p className="max-w-[60ch] text-pretty text-sm leading-6 text-zinc-400">{item.description}</p>
            {item.contributions ? (
              <ul className="mt-2 space-y-1">
                {item.contributions.map((contribution) => (
                  <li
                    key={contribution}
                    className="flex gap-2 text-xs leading-5 text-zinc-500"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-700" aria-hidden="true" />
                    {contribution}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
