const notes = [
  {
    title: "Building an autonomous AI software team",
    category: "AI agents",
    status: "Coming soon",
  },
  {
    title: "What local-first AI gets right",
    category: "Local AI",
    status: "Coming soon",
  },
  {
    title: "Designing software with personality",
    category: "Product design",
    status: "Coming soon",
  },
];

export function Notes() {
  return (
    <section id="notes" className="py-10">
      <div className="mb-5">
        <p className="inline-block border border-dashed border-zinc-500 px-3 py-1 text-xl text-zinc-300">
          Notes
        </p>

        <h2 className="mt-5 max-w-3xl text-2xl font-semibold text-white">
          Things I’m learning and writing about.
        </h2>
      </div>

      <div className="divide-y divide-dashed divide-zinc-800 border-y border-dashed border-zinc-700/70">
        {notes.map((note, index) => (
          <article
            key={note.title}
            className="group grid gap-4 py-6 sm:grid-cols-[48px_1fr_140px]"
          >
            <span className="font-mono text-xs text-zinc-500">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3 className="font-medium text-zinc-100 transition group-hover:translate-x-1">
                {note.title}
              </h3>

              <p className="mt-1 text-sm text-zinc-500">{note.category}</p>
            </div>

            <p className="text-sm text-zinc-500 sm:text-right">
              {note.status}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
