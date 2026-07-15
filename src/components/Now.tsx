const currentActivity = [
  { label: "Building", value: "Recuris" },
  { label: "Learning", value: "Agent systems and distributed AI" },
  { label: "Improving", value: "Engineering fundamentals" },
  { label: "Looking for", value: "AI and software engineering roles" },
];

export function Now() {
  return (
    <section id="now" className="border-t border-zinc-800 py-7">
      <SectionLabel>Now</SectionLabel>

      <div className="mt-4 border border-[#303535] bg-[#0b0f0e] px-4 py-3">
        <dl className="divide-y divide-dashed divide-zinc-800">
          {currentActivity.map((item) => (
            <div
              key={item.label}
              className="grid gap-1 py-2.5 sm:grid-cols-[96px_1fr] sm:gap-4"
            >
              <dt className="font-mono text-xs uppercase tracking-wide text-zinc-400">
                {item.label}
              </dt>
              <dd className="text-sm leading-5 text-zinc-300">{item.value}</dd>
            </div>
          ))}
        </dl>

        <p className="border-t border-dashed border-zinc-800 pt-2.5 text-right font-mono text-xs tabular-nums text-zinc-400">
          Updated July 2026
        </p>
      </div>
    </section>
  );
}
import { SectionLabel } from "./SectionLabel";
