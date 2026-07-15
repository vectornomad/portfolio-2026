import { ExperienceItem } from "./ExperienceItem";
import { SectionLabel } from "./SectionLabel";
import { experience } from "../data/experience";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="border-t border-zinc-800 py-7">
      <SectionLabel>Work Experience</SectionLabel>

      <div className="relative mt-4 border border-dashed border-[#303535] bg-[#0b0f0e]">
        <div
          className="absolute bottom-5 left-[29px] top-5 border-l border-dashed border-[#303535]"
          aria-hidden="true"
        />
        {experience.map((item) => (
          <ExperienceItem item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
