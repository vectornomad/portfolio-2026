import { ArrowUpRight, GitBranch, Linkedin, Mail, FileText } from "lucide-react";
const links=[{name:"Email",href:"mailto:taahirah.engineer@proton.me",icon:Mail},{name:"GitHub",href:"https://github.com/vectornomad",icon:GitBranch},{name:"LinkedIn",href:"https://www.linkedin.com/in/taahirah-denmark-4b1441196",icon:Linkedin},{name:"Résumé",href:"/resume.pdf",icon:FileText}];
export function Contact() {
 return <section id="contact" className="lab-contact" aria-labelledby="contact-heading">
   <div className="lab-contact-kicker"><span className="signal-section-kicker">06 / OPEN CONNECTION</span><span className="lab-contact-status"><span/> AVAILABLE FOR CONVERSATION</span></div>
   <h2 id="contact-heading">Have a strange, ambitious <em>idea?</em></h2>
   <p>I'm interested in meaningful engineering problems, AI systems, and products worth building. Let's talk about what you're working on.</p>
   <a className="lab-contact-primary" href="mailto:taahirah.engineer@proton.me">Start a conversation <ArrowUpRight size={19}/></a>
   <nav aria-label="Contact destinations" className="lab-contact-links">{links.map(({name,href,icon:Icon})=><a key={name} href={href} target={href.startsWith("mailto:")?undefined:"_blank"} rel={href.startsWith("mailto:")?undefined:"noreferrer"}><Icon size={16}/>{name}<ArrowUpRight size={13}/></a>)}</nav>
 </section>;
}
