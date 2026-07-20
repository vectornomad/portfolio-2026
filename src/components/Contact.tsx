import { FileText, GitBranch, Link2, Mail } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:taahirah.engineer@proton.me",
    icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    href: "https://github.com/vectornomad",
    icon: GitBranch,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/taahirah-denmark-4b1441196",
    icon: Link2,
    external: true,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: FileText,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-zinc-800 py-7">
      <SectionLabel>Contact</SectionLabel>

      <div className="mt-4 grid gap-5 border border-dashed border-[#303535] bg-[#0b0f0e] p-4 sm:grid-cols-[1fr_220px] sm:items-center sm:p-5">
        <div>
          <h3 className="text-balance text-lg font-semibold leading-tight text-zinc-100">
            Let&apos;s build something useful.
          </h3>
          <p className="mt-2 max-w-[48ch] text-pretty text-sm leading-6 text-zinc-400">
            Open to AI engineering, software engineering, internship, contract,
            and freelance opportunities.
          </p>
          <p className="mt-3 inline-flex items-center gap-2 font-mono text-xs text-emerald-400/90">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            Open to opportunities
          </p>
        </div>

        <nav aria-label="Contact links" className="grid grid-cols-2 gap-2">
          {contactLinks.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="inline-flex min-h-11 select-none items-center gap-2 rounded border border-zinc-800 px-3 text-sm text-zinc-300 transition-[border-color,color,transform] duration-150 hover:border-zinc-600 hover:text-zinc-100 active:scale-[0.96]"
            >
              <Icon size={14} strokeWidth={1.7} aria-hidden="true" />
              {label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
