export function Footer() {
 return <footer className="lab-footer"><div><strong>VN<span>/</span></strong><span>Taahirah Denmark · @vectornomad</span></div><div><span>© 2026</span><span>Built with curiosity, React & Vite</span><a href="#top" onClick={(e)=>{e.preventDefault();window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"});}}>Back to top ↑</a></div></footer>;
}
