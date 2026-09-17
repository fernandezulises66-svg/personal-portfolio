import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceItem from "@/components/ui/ExperienceItem";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading eyebrow="Experience" title="Work" />
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {experience.map((item) => (
          <ExperienceItem key={item.company} experience={item} />
        ))}
      </div>
    </section>
  );
}
