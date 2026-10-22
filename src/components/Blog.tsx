import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, PenLine } from "lucide-react";
import Markdown from "react-markdown";
import { Footer } from "./Footer";
import { posts, type Post } from "../data/posts";

function Article({ post }: { post: Post }) {
  return (
    <article className="py-10 sm:py-14">
      <a
        href="/blog/"
        className="inline-flex min-h-11 items-center gap-2 font-mono text-sm text-zinc-400 hover:text-violet-300"
      >
        <ArrowLeft size={16} aria-hidden="true" /> All posts
      </a>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <time
          dateTime={post.date}
          className="font-mono text-sm text-violet-300"
        >
          {post.date}
        </time>
        {!post.published ? (
          <span className="border border-amber-500/30 bg-amber-500/10 px-2 py-1 font-mono text-xs text-amber-300">
            Draft preview
          </span>
        ) : null}
      </div>
      <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
        {post.title}
      </h1>
      <p className="mt-5 max-w-[65ch] border-b border-zinc-800 pb-8 text-lg leading-8 text-zinc-400">
        {post.excerpt}
      </p>
      <div className="max-w-[68ch] pt-4 text-base leading-8 text-zinc-300">
        <Markdown
          components={{
            h2: ({ children }) => (
              <h2 className="mb-4 mt-10 text-2xl font-semibold text-white">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="mb-3 mt-8 text-xl font-semibold text-white">
                {children}
              </h3>
            ),
            p: ({ children }) => <p className="my-5">{children}</p>,
            a: ({ children, href }) => (
              <a
                className="text-violet-300 underline decoration-violet-400/40 underline-offset-4 hover:text-violet-200"
                href={href}
              >
                {children}
              </a>
            ),
            ul: ({ children }) => (
              <ul className="my-5 list-disc space-y-2 pl-6 marker:text-violet-400">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="my-5 list-decimal space-y-2 pl-6 marker:text-violet-400">
                {children}
              </ol>
            ),
            blockquote: ({ children }) => (
              <blockquote className="my-6 border-l-2 border-violet-400 pl-4 text-zinc-400">
                {children}
              </blockquote>
            ),
            code: ({ children }) => (
              <code className="rounded-[3px] bg-zinc-900 px-1.5 py-1 font-mono text-sm text-zinc-200">
                {children}
              </code>
            ),
            pre: ({ children }) => (
              <pre className="my-6 overflow-x-auto border border-zinc-800 bg-[#0b0f0e] p-4 text-sm leading-6">
                {children}
              </pre>
            ),
          }}
        >
          {post.body}
        </Markdown>
      </div>
    </article>
  );
}

export function Blog() {
  const slug = window.location.pathname.split("/").filter(Boolean)[1];
  const post = slug ? posts.find((item) => item.slug === slug) : undefined;

  useEffect(() => {
    document.title = post
      ? `${post.title} | Taahirah Denmark`
      : "Blog | Taahirah Denmark";
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute(
      "content",
      post?.excerpt ??
        "Notes on AI engineering, software projects, and the lessons learned while building them by Taahirah Denmark.",
    );
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute(
        "href",
        `https://vectornomad.xyz/blog/${post ? `${post.slug}/` : ""}`,
      );
  }, [post]);

  return (
    <main className="min-h-screen bg-[#080c0b] text-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-190 flex-col px-4 pt-8 sm:px-6 sm:pt-12">
        <header className="flex items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <a
            href="/"
            className="font-mono text-sm font-semibold tracking-tight text-zinc-200 transition hover:text-white"
          >
            vectornomad/
          </a>
          <a
            href="/"
            className="inline-flex min-h-11 items-center gap-2 font-mono text-sm text-zinc-400 transition hover:text-violet-300"
          >
            <ArrowLeft size={16} aria-hidden="true" /> Back to portfolio
          </a>
        </header>

        <div className="flex-1">
          {slug ? (
            post ? (
              <Article post={post} />
            ) : (
              <section className="py-16">
                <h1 className="text-3xl font-semibold text-white">
                  Post not found.
                </h1>
                <a
                  href="/blog/"
                  className="mt-5 inline-flex min-h-11 items-center text-violet-300 hover:text-violet-200"
                >
                  View all posts
                </a>
              </section>
            )
          ) : (
            <>
              <section className="border-b border-zinc-800 py-12 sm:py-16">
                <div className="inline-flex items-center gap-2 border border-dashed border-zinc-700 px-2.5 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400">
                  <PenLine size={14} aria-hidden="true" /> Writing
                </div>
                <h1 className="mt-7 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                  Blog<span className="text-violet-400">.</span>
                </h1>
                <p className="mt-5 max-w-[56ch] text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                  Notes on AI engineering, the software I build, and what I
                  learn along the way.
                </p>
              </section>

              <section
                aria-labelledby="posts-heading"
                className="py-8 sm:py-10"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2
                    id="posts-heading"
                    className="font-mono text-xs uppercase tracking-widest text-zinc-400"
                  >
                    All posts
                  </h2>
                  <span className="font-mono text-xs tabular-nums text-zinc-500">
                    {String(posts.length).padStart(2, "0")}{" "}
                    {posts.length === 1 ? "entry" : "entries"}
                  </span>
                </div>
                {posts.length ? (
                  <div className="mt-5 divide-y divide-zinc-800 border-y border-zinc-800">
                    {posts.map((item) => (
                      <article key={item.slug} className="py-6">
                        <div className="flex flex-wrap items-center gap-3">
                          <time
                            dateTime={item.date}
                            className="font-mono text-sm text-zinc-500"
                          >
                            {item.date}
                          </time>
                          {!item.published ? (
                            <span className="font-mono text-xs text-amber-300">
                              Draft
                            </span>
                          ) : null}
                        </div>
                        <h3 className="mt-2 text-xl font-semibold text-white">
                          <a
                            href={`/blog/${item.slug}/`}
                            className="hover:text-violet-300"
                          >
                            {item.title}
                          </a>
                        </h3>
                        <p className="mt-2 text-base leading-7 text-zinc-400">
                          {item.excerpt}
                        </p>
                        <a
                          href={`/blog/${item.slug}/`}
                          className="mt-3 inline-flex min-h-11 items-center gap-1 text-sm text-violet-300 hover:text-violet-200"
                        >
                          Read post{" "}
                          <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="mt-5 border border-dashed border-zinc-700 bg-[#0b0f0e] px-5 py-10 sm:px-8 sm:py-12">
                    <span className="font-mono text-xs text-violet-300">
                      // FIRST POST PENDING
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-white sm:text-2xl">
                      Nothing published yet.
                    </h3>
                    <p className="mt-3 max-w-[50ch] text-base leading-7 text-zinc-400">
                      This is where my writing will live. In the meantime, you
                      can explore the projects I’m building.
                    </p>
                    <a
                      href="/#work"
                      className="mt-6 inline-flex min-h-11 items-center gap-2 rounded border border-zinc-700 px-3 text-sm font-medium text-zinc-200 transition hover:border-violet-400 hover:text-white"
                    >
                      Explore my work{" "}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                )}
              </section>
            </>
          )}
        </div>

        <Footer />
      </div>
    </main>
  );
}
