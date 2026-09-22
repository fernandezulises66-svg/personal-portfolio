import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <SectionHeading eyebrow="About" title="Background" />
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
        I&apos;m currently a Data & Systems Analyst at mooba, while studying
        Programming at ISTEA and Law at UNLP. My technical focus is on AI,
        data, and software — from LLM-based agents where deterministic code
        controls data, policies, and actions, to end-to-end data engineering
        and analytics pipelines. The projects in this portfolio reflect that
        range.
      </p>
    </section>
  );
}
