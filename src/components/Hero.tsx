import { Clock3, Download, GitBranch, Mail, MapPin, Rocket } from "lucide-react";
import heroGraphic from "../assets/hero.png";

export function Hero() {
  return (
    <section className="pb-7">
      <div className="grid gap-5 sm:grid-cols-[112px_1fr] sm:items-center">
        <div className="relative h-24 w-24 overflow-hidden rounded border border-zinc-800 bg-[#0d1110] ring-1 ring-inset ring-white/10 sm:h-28 sm:w-28">
          <img
            src={heroGraphic}
            alt=""
            className="absolute inset-0 h-full w-full object-contain p-4 opacity-80"
          />
          <div className="absolute inset-x-0 bottom-0 bg-black/70 px-2 py-1.5">
            <p className="font-mono text-xs text-zinc-300">vectornomad/</p>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-balance text-2xl font-semibold leading-[1.1] tracking-tight text-white sm:text-3xl">
              Taahirah Denmark
            </h1>
            <Rocket size={18} className="text-violet-400" aria-hidden="true" />
          </div>

          <p className="mt-1 font-mono text-xs text-zinc-400">@vectornomad</p>

          <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-zinc-200">
            Building local-first AI tools
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
          </p>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-zinc-400">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} aria-hidden="true" />
              Illinois, USA
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 size={15} aria-hidden="true" />
              Updated July 2026
            </span>
          </div>
        </div>
      </div>

      <p className="mt-7 max-w-[65ch] text-pretty text-base leading-7 text-zinc-400">
        I build local-first AI tools, autonomous agent systems, desktop
        assistants, developer tools, and full-stack products. My work combines{" "}
        <span className="text-zinc-100">practical AI engineering</span>,{" "}
        <span className="text-zinc-100">backend systems</span>, and interfaces
        with personality.
      </p>

      <div className="mt-7 grid gap-2 sm:grid-cols-2">
        <div className="flex min-h-16 items-center justify-between gap-3 border border-dashed border-zinc-800 bg-[#0b0f0e] px-3 py-2.5">
          <div>
            <p className="text-sm font-medium text-zinc-100">Recuris</p>
            <p className="mt-0.5 text-sm text-zinc-400">Autonomous AI software team</p>
          </div>
          <span className="font-mono text-xs text-violet-300">
            In development
          </span>
        </div>

        <a href="https://github.com/vectornomad" target="_blank" rel="noreferrer" className="flex min-h-16 items-center justify-between gap-3 border border-dashed border-zinc-800 bg-[#0b0f0e] px-3 py-2.5 transition-[border-color,background-color,transform] duration-150 hover:border-zinc-600 hover:bg-white/[0.015] active:scale-[0.96]">
          <div>
            <p className="text-sm font-medium text-zinc-100">GitHub</p>
            <p className="mt-0.5 break-all text-sm text-zinc-400">github.com/vectornomad</p>
          </div>
          <GitBranch size={15} className="text-zinc-500" aria-hidden="true" />
        </a>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <a
          href="#work"
          className="inline-flex min-h-11 select-none items-center gap-2 rounded border border-zinc-800 bg-[#0d1110] px-3 text-sm font-medium text-zinc-200 transition-[border-color,background-color,transform] duration-150 hover:border-zinc-600 hover:bg-white/[0.02] active:scale-[0.96]"
        >
          View work
        </a>

        <a
          href="https://github.com/vectornomad"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 select-none items-center gap-2 rounded border border-zinc-800 bg-[#0d1110] px-3 text-sm font-medium text-zinc-200 transition-[border-color,background-color,transform] duration-150 hover:border-zinc-600 hover:bg-white/[0.02] active:scale-[0.96]"
        >
          <GitBranch size={16} />
          GitHub
        </a>

        <a
          href="mailto:taahirah.engineer@proton.me"
          className="inline-flex min-h-11 select-none items-center gap-2 rounded border border-zinc-800 bg-[#0d1110] px-3 text-sm font-medium text-zinc-200 transition-[border-color,background-color,transform] duration-150 hover:border-zinc-600 hover:bg-white/[0.02] active:scale-[0.96]"
        >
          <Mail size={16} />
          Email
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 w-11 select-none items-center justify-center rounded border border-zinc-800 bg-[#0d1110] text-zinc-200 transition-[border-color,background-color,transform] duration-150 hover:border-zinc-600 hover:bg-white/[0.02] active:scale-[0.96]"
          aria-label="Open resume"
        >
          <Download size={16} />
        </a>
      </div>
    </section>
  );
}
