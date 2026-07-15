export function Footer() {
  return (
    <footer className="flex flex-col gap-2 border-t border-zinc-800 py-4 font-mono text-xs leading-5 text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-x-3 gap-y-1">
        <span>© 2026 Taahirah Denmark</span>
        <span>@vectornomad</span>
      </div>
      <span>Built with React, Vite, TypeScript, and Tailwind CSS</span>
    </footer>
  );
}
