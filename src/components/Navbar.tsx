export function Navbar() {
  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Now", href: "#now" },
    { label: "Notes", href: "#notes" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f7f5]/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#" className="font-mono text-sm font-semibold tracking-tight">
          vectornomad/
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-neutral-500 transition hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
