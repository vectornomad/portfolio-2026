import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Markdown from "react-markdown";
import { Footer } from "./Footer";
import { posts, type Post } from "../data/posts";

function Article({ post }: { post: Post }) {
  return <article className="lab-article">
    <a className="lab-article-back" href="/blog/"><ArrowLeft size={16}/> All field notes</a>
    <div className="mt-10 flex items-center gap-3 font-mono text-xs text-[#b9aaff]"><time dateTime={post.date}>{post.date}</time>{!post.published&&<span>DRAFT PREVIEW</span>}</div>
    <h1>{post.title}</h1>
    <p className="lab-article-lead">{post.excerpt}</p>
    <div className="lab-prose pt-8"><Markdown>{post.body}</Markdown></div>
  </article>;
}

export function Blog() {
  const slug = window.location.pathname.split("/").filter(Boolean)[1];
  const post = slug ? posts.find((item) => item.slug === slug) : undefined;
  useEffect(() => {
    document.title = post ? `${post.title} | Taahirah Denmark` : "Field notes | Taahirah Denmark";
    document.querySelector('meta[name="description"]')?.setAttribute("content",post?.excerpt ?? "Field notes on software engineering, local-first AI and experiments by Taahirah Denmark.");
    document.querySelector('link[rel="canonical"]')?.setAttribute("href",`https://vectornomad.xyz/blog/${post ? `${post.slug}/` : ""}`);
  },[post]);
  return <main className="lab-blog"><div className="lab-blog-inner">
    <header className="lab-blog-nav"><a href="/">VN<span className="text-[#b9aaff]">/</span> <span className="font-normal text-[#a9b5c5]">vectornomad</span></a><a href="/"><ArrowLeft size={14}/> Return to the lab</a></header>
    <div className="flex-1">{slug ? (post ? <Article post={post}/> : <section className="lab-blog-heading"><p className="signal-section-kicker">FIELD NOTES / 404</p><h1>Note <em>not found.</em></h1><p>This entry isn't in the archive. <a className="text-[#b9aaff] underline" href="/blog/">Browse all notes</a>.</p></section>) : <>
      <section className="lab-blog-heading"><p className="signal-section-kicker">07 / FIELD NOTES</p><h1>Ideas worth <em>writing down.</em></h1><p>Working notes from the intersection of code, intelligence, systems thinking, and things I couldn't resist building.</p></section>
      <section className="lab-blog-index" aria-labelledby="notes-heading">
        <div className="lab-blog-index-head"><h2 id="notes-heading">INDEX / ALL ENTRIES</h2><span>{String(posts.length).padStart(2,"0")} NOTES</span></div>
        {posts.length ? posts.map(item => <article className="lab-blog-entry" key={item.slug}>
          <time dateTime={item.date}>{item.date}{!item.published ? " · DRAFT" : ""}</time>
          <div><h3><a href={`/blog/${item.slug}/`}>{item.title}</a></h3><p>{item.excerpt}</p></div>
          <a href={`/blog/${item.slug}/`} aria-label={`Read ${item.title}`}><ArrowUpRight size={17}/></a>
        </article>) : <div className="border border-[#364154] bg-[#121a27] p-7"><p className="signal-section-kicker">ENTRY 001 / PENDING</p><h3 className="mt-4 text-xl">The notebook is open.</h3><p className="mt-3 text-sm text-[#a6b3c5]">The first published field note is on its way. In the meantime, explore the systems I'm building.</p><a className="mt-5 inline-flex gap-2 text-sm text-[#b9aaff]" href="/#work">Explore selected systems <ArrowUpRight size={14}/></a></div>}
      </section>
    </>}</div>
    <Footer/>
  </div></main>;
}
