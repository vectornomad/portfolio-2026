const months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

const cells = Array.from({ length: 162 }, (_, index) => {
  const wave = Math.sin(index * 0.45) + Math.cos(index * 0.17);
  const burst = index > 82 && index < 110 ? 2 : 0;
  return Math.max(0, Math.min(4, Math.round(wave + burst + 1.2)));
});

const shades = [
  "bg-zinc-800",
  "bg-zinc-700",
  "bg-zinc-600",
  "bg-zinc-400",
  "bg-zinc-100",
];

export function Contributions() {
  return (
    <section className="py-8">
      <div className="overflow-hidden border border-dashed border-zinc-700/70 p-6">
        <div className="mb-4 grid grid-cols-9 gap-2 text-sm text-zinc-400">
          {months.map((month) => (
            <span key={month}>{month}</span>
          ))}
        </div>

        <div className="grid grid-flow-col grid-rows-6 gap-1.5 overflow-hidden">
          {cells.map((level, index) => (
            <span
              key={index}
              className={`h-4 w-4 rounded-[3px] ${shades[level]}`}
              aria-hidden="true"
            />
          ))}
        </div>

        <div className="mt-5 flex flex-col justify-between gap-4 text-sm text-zinc-400 sm:flex-row">
          <p>This year, I shipped steady work across AI and full-stack projects.</p>

          <div className="flex items-center gap-2">
            <span>Less</span>
            {shades.map((shade) => (
              <span
                key={shade}
                className={`h-4 w-4 rounded-[3px] ${shade}`}
                aria-hidden="true"
              />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
