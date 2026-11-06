import { ArrowDownRight, ArrowUpRight, Command, GitBranch, Mail, Download, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const cells = Array.from({ length: 21 }, (_, i) => ({
  x: 8 + ((i * 37 + 9) % 83),
  y: 12 + ((i * 29 + 17) % 75),
  size: i % 4 === 0 ? 5 : 3,
}));

const signalRoutes = [0, 3, 8, 12, 17];

function SignalField() {
  return (
    <div className="signal-field" aria-hidden="true">
      <div className="signal-grid" />
      <svg viewBox="0 0 420 270" className="signal-network" preserveAspectRatio="xMidYMid slice">
        <defs><linearGradient id="signal-stroke" x1="0" x2="1"><stop stopColor="#a49aff" stopOpacity=".04"/><stop offset=".5" stopColor="#a49aff" stopOpacity=".42"/><stop offset="1" stopColor="#69d9cb" stopOpacity=".08"/></linearGradient></defs>
        {cells.map((point,i) => {
          const next = cells[(i+5)%cells.length];
          return <line key={"edge-"+i} x1={point.x*4.2} y1={point.y*2.7} x2={next.x*4.2} y2={next.y*2.7} stroke="url(#signal-stroke)" strokeWidth=".8"/>;
        })}
        {signalRoutes.map((index, routeIndex) => {
          const point = cells[index];
          const next = cells[(index + 5) % cells.length];
          return <line
            key={"pulse-" + index}
            className="signal-route-pulse"
            style={{ animationDelay: `${routeIndex * -1.65}s`, animationDuration: `${7 + routeIndex * 0.8}s` }}
            x1={point.x * 4.2}
            y1={point.y * 2.7}
            x2={next.x * 4.2}
            y2={next.y * 2.7}
            pathLength={100}
            stroke={routeIndex % 2 ? "#7fe1d2" : "#b9aaff"}
            strokeWidth="1.7"
            strokeLinecap="round"
          />;
        })}
        {cells.map((point,i)=><circle className={i % 4 === 0 ? "signal-active-node" : "signal-idle-node"} style={{ animationDelay: `${-i * 0.38}s` }} key={i} cx={point.x*4.2} cy={point.y*2.7} r={point.size/2} fill={i%5===0?"#7fe1d2":"#b6a8ff"} opacity={i%3===0?".92":".45"}/>)}
      </svg>
      <span className="signal-field-label">FIG 01 — LOCAL INTELLIGENCE / NETWORK STUDY</span>
      <span className="signal-field-cross">✳</span>
    </div>
  );
}

export function Hero() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
      }
      if (e.key === "Escape") setPaletteOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="signal-hero" aria-labelledby="site-title">
      <nav aria-label="Site navigation" className="signal-nav">
        <a href="/" className="signal-wordmark">VN<span className="text-[#b4a6ff]">/</span> <span className="font-normal text-[#9da8b8]">vectornomad</span></a>
        <div className="flex items-center gap-3 sm:gap-5">
          <a className="signal-nav-link" href="#work">Work</a>
          <a className="signal-nav-link" href="/blog/">Field notes <ArrowUpRight size={12}/></a>
          <button type="button" className="signal-command" onClick={() => setPaletteOpen(true)} aria-label="Open quick navigation"><Command size={13}/> K</button>
        </div>
      </nav>

      <div className="signal-hero-layout">
        <div className="relative z-10 flex flex-col justify-center py-11 sm:py-16">
          <div className="signal-eyebrow"><span className="signal-live-dot"/> INDEPENDENT ENGINEERING LAB <span className="text-[#687889]">/ 001</span></div>
          <h1 id="site-title" className="signal-headline">I make systems<br/>that <span className="signal-headline-accent">think.</span><br/>And tools that <span className="signal-headline-outline">feel.</span></h1>
          <p className="mt-6 max-w-[52ch] text-[15px] leading-[1.8] text-[#a8b4c3]">I'm Taahirah Denmark — a software engineer working across local-first AI, backend systems, and expressive interfaces. I build experiments into things people can actually use.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="signal-primary-action" href="#work">Explore experiments <ArrowDownRight size={16}/></a>
            <a className="signal-secondary-action" href="/blog/">Read field notes <ArrowUpRight size={15}/></a>
          </div>
        </div>
        <SignalField/>
      </div>
      <div className="signal-meta">
        <span>TAahirah Denmark <span className="text-[#566577]">/</span> @vectornomad</span>
        <span className="hidden sm:inline">AI · SYSTEMS · INTERFACES</span>
        <span className="inline-flex items-center gap-2"><Sparkles size={13}/> BUILDING IN PUBLIC</span>
      </div>
      <div className="signal-access">
        <span className="signal-access-label">OPEN CHANNELS</span>
        <a href="https://github.com/vectornomad" target="_blank" rel="noreferrer"><GitBranch size={15}/> GitHub <ArrowUpRight size={13}/></a>
        <a href="mailto:taahirah.engineer@proton.me"><Mail size={15}/> Email <ArrowUpRight size={13}/></a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer"><Download size={15}/> Résumé <ArrowUpRight size={13}/></a>
      </div>
      {paletteOpen && (
        <div className="signal-palette-backdrop" role="presentation" onMouseDown={() => setPaletteOpen(false)}>
          <div className="signal-palette" role="dialog" aria-modal="true" aria-label="Quick navigation" onMouseDown={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-[#293443] px-5 py-4"><span className="font-mono text-xs tracking-[.14em] text-[#acb7ca]">QUICK NAVIGATION</span><button type="button" onClick={() => setPaletteOpen(false)} className="text-xs text-[#8997ab]">ESC ✕</button></div>
            {[["Projects","/#work"],["Toolkit","/#toolkit"],["Field notes","/blog/"],["Contact","/#contact"],["GitHub","https://github.com/vectornomad"]].map(([label,href],i)=><a key={href} href={href} className="signal-palette-option"><span className="font-mono text-xs text-[#7f8ca0]">0{i+1}</span><span>{label}</span><ArrowUpRight size={14}/></a>)}
          </div>
        </div>
      )}
    </section>
  );
}
