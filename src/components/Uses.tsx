import { FlaskConical, Terminal } from "lucide-react";

const notes = [
  "Agent workflows that can plan, inspect, and revise code",
  "Local-first memory systems for private personal knowledge",
  "Interfaces that feel more like tools than dashboards",
];

export function Uses() {
  return (
    <section id="field-notes" className="py-12">
      <p className="inline-block border border-dashed border-zinc-500 px-3 py-1 text-xl text-zinc-300">
        Field Notes
      </p>

      <div className="mt-5 grid gap-6 border border-dashed border-zinc-700/70 p-6 md:grid-cols-[1fr_260px] md:p-8">
        <div>
          <div className="flex items-center gap-3 text-zinc-200">
            <FlaskConical size={20} className="text-violet-300" />
            <h2 className="text-2xl font-semibold">What I’m testing next.</h2>
          </div>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-500">
            I use this site as a snapshot of what I’m building, learning, and
            sharpening. The portfolio should feel like a live engineering log,
            not a static resume page.
          </p>
        </div>

        <div className="border-l border-dashed border-zinc-800 pl-5">
          <div className="flex items-center gap-2 font-mono text-xs uppercase text-zinc-500">
            <Terminal size={15} />
            Active experiments
          </div>

          <ul className="mt-4 space-y-3">
            {notes.map((note) => (
              <li key={note} className="text-sm leading-6 text-zinc-400">
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
