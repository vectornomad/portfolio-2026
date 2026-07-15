export function About() {
  return (
    <section id="about" className="py-10">
      <div className="grid gap-8 md:grid-cols-[180px_1fr]">
        <div>
          <p className="inline-block border border-dashed border-zinc-500 px-3 py-1 text-xl text-zinc-300">
            About
          </p>
        </div>

        <div>
          <h2 className="max-w-3xl text-2xl font-semibold leading-tight text-zinc-100 md:text-3xl">
            I’m Taahirah, a computer science student building AI systems,
            developer tools, and full-stack products.
          </h2>

          <div className="mt-8 grid gap-6 border-y border-dashed border-zinc-800 py-6 text-base leading-7 text-zinc-500 md:grid-cols-2">
            <p>
              My work focuses on local AI, autonomous agents, voice interfaces,
              knowledge systems, and practical software that solves real
              problems.
            </p>

            <p>
              I learn by building ambitious projects, debugging them until they
              work, and documenting what I discover along the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
