import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, PenLine } from "lucide-react";
import { Footer } from "./Footer";

export function Blog() {
  useEffect(() => {
    document.title = "Blog | Taahirah Denmark";
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      "content",
      "Notes on AI engineering, software projects, and the lessons learned while building them by Taahirah Denmark.",
    );
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", "https://vectornomad.xyz/blog/");
  }, []);

  return (
    <main className="min-h-screen bg-[#080c0b] text-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-[760px] flex-col px-4 pt-8 sm:px-6 sm:pt-12">
        <header className="flex items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <a href="/" className="font-mono text-sm font-semibold tracking-tight text-zinc-200 transition hover:text-white">
            vectornomad/
          </a>
          <a href="/" className="inline-flex min-h-11 items-center gap-2 font-mono text-sm text-zinc-400 transition hover:text-violet-300">
            <ArrowLeft size={16} aria-hidden="true" /> Back to portfolio
          </a>
        </header>

        <div className="flex-1">
          <section className="border-b border-zinc-800 py-12 sm:py-16">
            <div className="inline-flex items-center gap-2 border border-dashed border-zinc-700 px-2.5 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
              <PenLine size={14} aria-hidden="true" /> Writing / 001
            </div>
            <h1 className="mt-7 text-4xl font-semibold tracking-tight text-white sm:text-6xl">Blog<span className="text-violet-400">.</span></h1>
            <p className="mt-5 max-w-[56ch] text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Notes on AI engineering, the software I build, and what I learn along the way.
            </p>
          </section>

          <section aria-labelledby="posts-heading" className="py-8 sm:py-10">
            <div className="flex items-center justify-between gap-4">
              <h2 id="posts-heading" className="font-mono text-xs uppercase tracking-widest text-zinc-400">All posts</h2>
              <span className="font-mono text-xs tabular-nums text-zinc-500">00 entries</span>
            </div>
            <div className="mt-5 border border-dashed border-zinc-700 bg-[#0b0f0e] px-5 py-10 sm:px-8 sm:py-12">
              <span className="font-mono text-xs text-violet-300">// FIRST POST PENDING</span>
              <h3 className="mt-4 text-xl font-semibold text-white sm:text-2xl">Nothing published yet.</h3>
              <p className="mt-3 max-w-[50ch] text-base leading-7 text-zinc-400">
                This is where my writing will live. In the meantime, you can explore the projects I’m building.
              </p>
              <a href="/#work" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded border border-zinc-700 px-3 text-sm font-medium text-zinc-200 transition hover:border-violet-400 hover:text-white">
                Explore my work <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </main>
  );
}
