import { ExperienceItem } from "./ExperienceItem";
import { experience } from "../data/experience";
export function ExperienceTimeline() {
  return <section id="experience" className="lab-section" aria-labelledby="experience-heading">
    <div className="lab-section-head"><div><p className="signal-section-kicker">04 / THE JOURNEY</p><h2 id="experience-heading">System <em>history.</em></h2></div><p>A record of the work, learning, and experiments shaping how I engineer software.</p></div>
    <div className="lab-timeline" role="list">{experience.map(item=><div role="listitem" key={item.id}><ExperienceItem item={item}/></div>)}</div>
  </section>;
}
