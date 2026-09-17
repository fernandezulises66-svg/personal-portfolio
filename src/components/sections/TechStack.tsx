import SectionHeading from "@/components/ui/SectionHeading";
import { stackGroups } from "@/data/stack";

export default function TechStack() {
  return (
    <section
      id="stack"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading eyebrow="Stack" title="Technologies I work with" />
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {stackGroups.map((group) => (
          <div key={group.label}>
            <h3 className="font-mono text-xs uppercase tracking-wide text-muted">
              {group.label}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
