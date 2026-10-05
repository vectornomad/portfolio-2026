const focus = [
  {
    number: "01",
    title: "SPITE",
    description:
      "Building a local-first sandbox runtime in Rust for AI agents — designed to use the compute you own and rent only what you need.",
  },
  {
    number: "02",
    title: "AI Systems",
    description:
      "Experimenting with agent runtimes, local models, orchestration, memory, and infrastructure for reliable AI-powered software.",
  },
  {
    number: "03",
    title: "Systems Engineering",
    description:
      "Going deeper into Rust, runtimes, graphics, benchmarking, debugging, and the systems underneath modern developer tools.",
  },
  {
    number: "04",
    title: "Shipping",
    description:
      "Turning experiments into usable open-source projects with documentation, architecture decisions, benchmarks, and real-world testing.",
  },
];

export function CurrentFocus() {
  return (
    <section id="now" className="py-10">
      <div className="grid gap-12 md:grid-cols-[260px_1fr]">
        <div>
          <p className="inline-block border border-dashed border-zinc-500 px-3 py-1 text-xl text-zinc-300">
            Now
          </p>

          <h2 className="mt-5 text-2xl font-semibold text-white">
            Current focus.
          </h2>

          <p className="mt-5 text-sm leading-6 text-zinc-500">
            A snapshot of what I’m building, exploring, and learning in October
            2026.
          </p>
        </div>

        <div className="divide-y divide-dashed divide-zinc-800 border-y border-dashed border-zinc-700/70">
          {focus.map((item) => (
            <div
              key={item.number}
              className="grid gap-4 py-6 sm:grid-cols-[45px_160px_1fr]"
            >
              <span className="font-mono text-xs text-zinc-500">
                {item.number}
              </span>

              <h3 className="font-semibold text-zinc-100">{item.title}</h3>

              <p className="leading-7 text-zinc-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
