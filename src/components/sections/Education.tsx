import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading eyebrow="Education" title="Studies" />
      <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {education.map((item) => (
          <li
            key={item.institution}
            className="border-l-2 border-border pl-4"
          >
            <p className="text-sm font-semibold text-foreground">
              {item.institution}
            </p>
            <p className="mt-1 text-sm text-muted">{item.program}</p>
            {item.faculty ? (
              <p className="text-sm text-muted">{item.faculty}</p>
            ) : null}
            {item.status ? (
              <p className="mt-1 font-mono text-xs text-accent">
                {item.status}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
